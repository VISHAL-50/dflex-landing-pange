// Build-time prerender: writes a static HTML file per route + a fresh sitemap.xml.
// Runs after `vite build` (client) and `vite build --ssr` (server entry).
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const ssrEntry = pathToFileURL(path.join(root, 'dist-ssr', 'entry-server.js')).href

const { render, SERVICES, BLOG_POSTS, SITE_URL } = await import(ssrEntry)
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf-8')

const today = new Date().toISOString().slice(0, 10)
const routes = [
  { url: '/', priority: '1.0', changefreq: 'weekly', lastmod: today },
  ...SERVICES.map((s) => ({ url: `/services/${s.slug}`, priority: '0.8', changefreq: 'monthly', lastmod: today })),
  { url: '/blog', priority: '0.7', changefreq: 'weekly', lastmod: today },
  ...BLOG_POSTS.map((p) => ({ url: `/blog/${p.slug}`, priority: '0.6', changefreq: 'monthly', lastmod: p.date })),
]

function toHtml(url) {
  const { html, head } = render(url)
  return template
    .replace('<!--app-head-->', head)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
}

for (const route of routes) {
  const file = route.url === '/' ? path.join(dist, 'index.html') : path.join(dist, route.url, 'index.html')
  fs.mkdirSync(path.dirname(file), { recursive: true })
  fs.writeFileSync(file, toHtml(route.url))
  console.log(`prerendered ${route.url}`)
}

// Real 404 page (Vercel serves dist/404.html with a 404 status for unknown URLs).
fs.writeFileSync(path.join(dist, '404.html'), toHtml('/__not-found__'))
console.log('prerendered 404.html')

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (r) => `  <url>
    <loc>${SITE_URL}${r.url === '/' ? '/' : r.url}</loc>
    <lastmod>${r.lastmod}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`
fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap)
console.log(`sitemap.xml written with ${routes.length} URLs`)
