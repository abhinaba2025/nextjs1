import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';

const featuredPost = {
  id: 1,
  title: 'The Art of Natural Light: A Photographer\'s Guide',
  excerpt: 'Mastering natural light is the foundation of stunning photography. In this comprehensive guide, I share my techniques for finding, manipulating, and capturing the perfect light in any situation.',
  image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200&h=600&fit=crop',
  category: 'Tutorials',
  readTime: '8 min read',
  date: 'December 15, 2023',
};

const posts = [
  {
    id: 2,
    title: 'Behind the Scenes: Tuscany Wedding',
    excerpt: 'A look into the magical wedding of Sarah and Michael at Villa di Corsano.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop',
    category: 'Behind the Scenes',
    readTime: '5 min read',
    date: 'December 10, 2023',
  },
  {
    id: 3,
    title: '10 Tips for Better Portrait Photography',
    excerpt: 'Simple techniques that will immediately improve your portrait work.',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=400&fit=crop',
    category: 'Tutorials',
    readTime: '6 min read',
    date: 'December 5, 2023',
  },
  {
    id: 4,
    title: 'Iceland: A Visual Journey',
    excerpt: 'Exploring the dramatic landscapes of Iceland through my lens.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
    category: 'Travel',
    readTime: '7 min read',
    date: 'November 28, 2023',
  },
  {
    id: 5,
    title: 'Fashion Week Diary: Milan 2023',
    excerpt: 'My experience shooting backstage at Milan Fashion Week.',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=400&fit=crop',
    category: 'Fashion',
    readTime: '4 min read',
    date: 'November 20, 2023',
  },
  {
    id: 6,
    title: 'Editing Workflow: From RAW to Final',
    excerpt: 'A detailed look at my complete editing process and favorite tools.',
    image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=600&h=400&fit=crop',
    category: 'Tutorials',
    readTime: '10 min read',
    date: 'November 15, 2023',
  },
  {
    id: 7,
    title: 'The Perfect Camera Bag for Travel',
    excerpt: 'My essential gear for traveling light without compromising quality.',
    image: 'https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?w=600&h=400&fit=crop',
    category: 'Gear',
    readTime: '5 min read',
    date: 'November 10, 2023',
  },
];

export function Blog() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="bg-charcoal py-24 lg:py-32">
        <div className="container mx-auto px-6 text-center lg:px-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm uppercase tracking-[0.3em] text-gold"
          >
            Stories & Insights
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 font-display text-5xl font-light text-warm-white md:text-7xl"
          >
            Journal
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-white/60"
          >
            Behind-the-scenes stories, photography tips, and creative inspiration from my journey.
          </motion.p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="bg-warm-white py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group"
          >
            <Link to={`/blog/${featuredPost.id}`} className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div className="overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div>
                <div className="flex items-center gap-4">
                  <span className="bg-gold px-3 py-1 text-xs uppercase tracking-wider text-charcoal">
                    {featuredPost.category}
                  </span>
                  <span className="flex items-center gap-2 text-sm text-dark-gray/60">
                    <Clock size={14} />
                    {featuredPost.readTime}
                  </span>
                </div>
                <h2 className="mt-6 font-display text-3xl font-light text-charcoal transition-colors group-hover:text-gold md:text-4xl lg:text-5xl">
                  {featuredPost.title}
                </h2>
                <p className="mt-4 text-lg text-dark-gray/70">{featuredPost.excerpt}</p>
                <div className="mt-6 flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-charcoal transition-colors group-hover:text-gold">
                  Read Article
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </motion.article>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="bg-off-white py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-warm-white"
              >
                <Link to={`/blog/${post.id}`}>
                  <div className="overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="aspect-[3/2] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4">
                      <span className="text-xs uppercase tracking-wider text-gold">
                        {post.category}
                      </span>
                      <span className="text-xs text-dark-gray/60">{post.readTime}</span>
                    </div>
                    <h3 className="mt-4 font-display text-xl text-charcoal transition-colors group-hover:text-gold">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-sm text-dark-gray/70">{post.excerpt}</p>
                    <p className="mt-4 text-xs text-dark-gray/50">{post.date}</p>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-12 text-center">
            <button className="magnetic-btn inline-flex items-center gap-3 border border-charcoal px-10 py-4 text-sm uppercase tracking-wider text-charcoal transition-all hover:bg-charcoal hover:text-warm-white">
              Load More Articles
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
