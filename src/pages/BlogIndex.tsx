import { motion } from 'framer-motion'
import { ArrowUpRight, Calendar, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import { StackCard, StackGroup } from '../components/StackCards'
import { BLOG_POSTS } from '../data/blogPosts'
import { SITE_URL } from '../data/content'

export default function BlogIndex() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'DflexPro Studios Blog',
    url: `${SITE_URL}/blog`,
    blogPost: BLOG_POSTS.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      datePublished: post.date,
      url: `${SITE_URL}/blog/${post.slug}`,
    })),
  }

  return (
    <div className="pt-28">
      <Seo
        title="Blog | Software Development, SaaS & Project Rescue Insights | DflexPro Studios"
        description="Practical, no-fluff writing on software development, SaaS MVPs, project rescue, and choosing a development company — from DflexPro Studios."
        path="/blog"
        jsonLd={jsonLd}
      />

      <section className="relative bg-ink py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <span className="eyebrow">Insights</span>
          <h1 className="heading mt-5">
            Things we've learned{' '}
            <span className="text-pop">shipping.</span>
          </h1>
          <p className="mt-5 max-w-xl text-white/60">
            No-fluff writing on building software, choosing who to build it with, and fixing it
            when it goes sideways.
          </p>

          <StackGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post, i) => (
              <StackCard key={post.slug} index={i}>
              <motion.div
                className="flex flex-col"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="group flex flex-1 flex-col justify-between card p-7"
                >
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wide text-pop">
                      {post.category}
                    </span>
                    <h2 className="mt-3 font-display text-xl font-semibold leading-snug">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-white/60">{post.excerpt}</p>
                  </div>

                  <div className="mt-6 flex items-center justify-between font-mono text-xs text-white/40">
                    <span className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {post.readTime}
                      </span>
                    </span>
                    <ArrowUpRight
                      size={14}
                      className="text-white/40 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-pop"
                    />
                  </div>
                </Link>
              </motion.div>
              </StackCard>
            ))}
          </StackGroup>
        </div>
      </section>
    </div>
  )
}
