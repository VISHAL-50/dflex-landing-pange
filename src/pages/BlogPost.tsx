import { Link, useParams } from 'react-router-dom'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import Seo from '../components/Seo'
import NotFound from './NotFound'
import { BLOG_POSTS, type ContentBlock } from '../data/blogPosts'
import { SITE_URL } from '../data/content'

function Block({ block }: { block: ContentBlock }) {
  if (block.type === 'h2') {
    return (
      <h2 className="mt-10 font-display text-2xl font-bold tracking-tight sm:text-3xl">
        {block.text}
      </h2>
    )
  }
  if (block.type === 'ul') {
    return (
      <ul className="mt-5 space-y-3">
        {block.items?.map((item) => (
          <li key={item} className="flex items-start gap-3 text-white/75">
            <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-pop" />
            {item}
          </li>
        ))}
      </ul>
    )
  }
  return <p className="mt-5 leading-relaxed text-white/70">{block.text}</p>
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = BLOG_POSTS.find((p) => p.slug === slug)

  if (!post) return <NotFound />

  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2)

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.metaDescription,
      datePublished: post.date,
      author: { '@type': 'Organization', name: 'DflexPro Studios', url: SITE_URL },
      publisher: { '@type': 'Organization', name: 'DflexPro Studios', url: SITE_URL },
      mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
      image: `${SITE_URL}/og-image.png`,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
        { '@type': 'ListItem', position: 3, name: post.title, item: `${SITE_URL}/blog/${post.slug}` },
      ],
    },
  ]

  return (
    <div className="pt-28">
      <Seo
        title={`${post.title} | DflexPro Studios Blog`}
        description={post.metaDescription}
        path={`/blog/${post.slug}`}
        type="article"
        jsonLd={jsonLd}
      />

      <article className="bg-ink py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <nav className="mb-8 flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-white/40">
            <Link to="/" className="hover:text-white/70">
              Home
            </Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-white/70">
              Blog
            </Link>
          </nav>

          <span className="font-mono text-xs uppercase tracking-wide text-accent-light">
            {post.category}
          </span>
          <h1 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>

          <div className="mt-5 flex items-center gap-4 font-mono text-xs text-white/40">
            <span className="flex items-center gap-1.5">
              <Calendar size={13} />
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={13} />
              {post.readTime}
            </span>
          </div>

          <div className="mt-10 border-t border-white/10 pt-2">
            {post.content.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center">
            <h3 className="font-display text-xl font-semibold">
              Got a project on your mind — or one that's stuck?
            </h3>
            <p className="mt-2 text-sm text-white/60">
              Tell us what you're building. We'll tell you honestly what it'll take.
            </p>
            <Link
              to="/#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-105"
            >
              Start the conversation
              <ArrowRight size={17} />
            </Link>
          </div>

          {otherPosts.length > 0 && (
            <div className="mt-14 border-t border-white/10 pt-10">
              <h3 className="font-mono text-sm uppercase tracking-widest text-accent-light">
                More from the blog
              </h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {otherPosts.map((p) => (
                  <Link
                    key={p.slug}
                    to={`/blog/${p.slug}`}
                    className="group rounded-xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-accent-light/40 hover:bg-white/[0.06]"
                  >
                    <span className="font-mono text-xs uppercase tracking-wide text-white/40">
                      {p.category}
                    </span>
                    <p className="mt-2 font-display font-semibold leading-snug">{p.title}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </div>
  )
}
