import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Instagram } from 'lucide-react';
import { useRef } from 'react';

const featuredWorks = [
  {
    id: 1,
    title: 'Eternal Bonds',
    category: 'Wedding',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=1000&fit=crop',
  },
  {
    id: 2,
    title: 'Urban Elegance',
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=600&fit=crop',
  },
  {
    id: 3,
    title: 'Nordic Dreams',
    category: 'Travel',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=1200&fit=crop',
  },
  {
    id: 4,
    title: 'Golden Hour',
    category: 'Portrait',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&h=800&fit=crop',
  },
];

const instagramPosts = [
  'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1496440737103-cd596325d314?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=400&fit=crop',
];

export function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <main>
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen overflow-hidden bg-charcoal">
        <motion.div style={{ y }} className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1920&h=1080&fit=crop"
            alt="Hero"
            className="h-full w-full object-cover opacity-60"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-transparent to-charcoal" />
        
        <motion.div
          style={{ opacity }}
          className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-4 text-sm uppercase tracking-[0.3em] text-gold"
          >
            Creative Photography Studio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="font-display text-5xl font-light leading-tight text-warm-white md:text-7xl lg:text-8xl"
          >
            Capturing <span className="italic">moments</span>
            <br />
            that last forever
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-12 flex flex-col items-center gap-6 sm:flex-row"
          >
            <Link
              to="/portfolio"
              className="magnetic-btn group flex items-center gap-3 bg-gold px-8 py-4 text-sm uppercase tracking-wider text-charcoal transition-all hover:bg-beige"
            >
              View Portfolio
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <button className="group flex items-center gap-3 text-sm uppercase tracking-wider text-warm-white transition-colors hover:text-gold">
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 transition-all group-hover:border-gold group-hover:bg-gold group-hover:text-charcoal">
                <Play size={20} />
              </span>
              Watch Showreel
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-warm-white/60">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="h-12 w-px bg-gradient-to-b from-warm-white/60 to-transparent"
            />
          </div>
        </motion.div>
      </section>

      {/* About Teaser */}
      <section className="bg-warm-white py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-sm uppercase tracking-[0.3em] text-gold">About Me</p>
              <h2 className="mt-4 font-display text-4xl font-light leading-tight text-charcoal md:text-5xl">
                Every photograph tells a <span className="italic">unique story</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-dark-gray/70">
                With over 15 years of experience capturing life's most precious moments, I bring a 
                cinematic approach to every frame. My work has been featured in Vogue, Harper's Bazaar, 
                and countless international exhibitions.
              </p>
              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-charcoal transition-colors hover:text-gold"
              >
                Learn More
                <ArrowRight size={16} />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=1000&fit=crop"
                  alt="Photographer"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-charcoal p-8 text-warm-white">
                <p className="font-display text-4xl font-light">15+</p>
                <p className="mt-1 text-sm uppercase tracking-wider text-white/60">Years Experience</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Works */}
      <section className="bg-off-white py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-sm uppercase tracking-[0.3em] text-gold"
              >
                Portfolio
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mt-4 font-display text-4xl font-light text-charcoal md:text-5xl"
              >
                Featured Works
              </motion.h2>
            </div>
            <Link
              to="/portfolio"
              className="group flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-charcoal transition-colors hover:text-gold"
            >
              View All
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredWorks.map((work, index) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group relative overflow-hidden ${
                  index === 0 ? 'sm:col-span-2 sm:row-span-2' : ''
                }`}
              >
                <Link to={`/portfolio/${work.id}`}>
                  <div className={`aspect-square overflow-hidden ${index === 0 ? 'sm:aspect-auto sm:h-full' : ''}`}>
                    <img
                      src={work.image}
                      alt={work.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-charcoal/80 via-transparent to-transparent p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <p className="text-xs uppercase tracking-widest text-gold">{work.category}</p>
                    <h3 className="mt-2 font-display text-2xl text-warm-white">{work.title}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-charcoal py-32">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1920&h=800&fit=crop"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center lg:px-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-[0.3em] text-gold"
          >
            Let's Create Together
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-6 max-w-3xl font-display text-4xl font-light leading-tight text-warm-white md:text-6xl"
          >
            Ready to capture your <span className="italic">story</span>?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              to="/contact"
              className="magnetic-btn mt-10 inline-flex items-center gap-3 bg-gold px-10 py-5 text-sm uppercase tracking-wider text-charcoal transition-all hover:bg-beige"
            >
              Start a Project
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="bg-warm-white py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mb-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 text-charcoal"
            >
              <Instagram size={24} />
              <span className="font-display text-xl">@luminex.studio</span>
            </motion.div>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
            {instagramPosts.map((post, index) => (
              <motion.a
                key={index}
                href="#"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative aspect-square overflow-hidden"
              >
                <img
                  src={post}
                  alt={`Instagram post ${index + 1}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-charcoal/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Instagram size={32} className="text-warm-white" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
