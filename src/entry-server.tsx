import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { HelmetProvider, type HelmetServerState } from 'react-helmet-async'
import App from './App'

export { SERVICES, SITE_URL } from './data/content'
export { BLOG_POSTS } from './data/blogPosts'

// Used at build time by scripts/prerender.mjs to turn every route into a static HTML file,
// so Google (and link previews) get real content + the correct per-page <head>.
export function render(url: string) {
  const helmetContext: { helmet?: HelmetServerState | null } = {}
  const html = renderToString(
    <StrictMode>
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </HelmetProvider>
    </StrictMode>,
  )
  const h = helmetContext.helmet
  const head = h
    ? [h.title, h.meta, h.link, h.script].map((part) => part.toString()).join('\n')
    : ''
  return { html, head }
}
