import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const categories = ['All', 'Wedding', 'Fashion', 'Travel', 'Portrait'];

const portfolioItems = [
  { id: 1, title: 'Eternal Bonds', category: 'Wedding', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=800&fit=crop', size: 'tall' },
  { id: 2, title: 'Urban Elegance', category: 'Fashion', image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=400&fit=crop', size: 'normal' },
  { id: 3, title: 'Nordic Dreams', category: 'Travel', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop', size: 'normal' },
  { id: 4, title: 'Golden Hour', category: 'Portrait', image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=750&fit=crop', size: 'tall' },
  { id: 5, title: 'Sunset Vows', category: 'Wedding', image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=400&fit=crop', size: 'normal' },
  { id: 6, title: 'Couture Dreams', category: 'Fashion', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop', size: 'tall' },
  { id: 7, title: 'Santorini Blue', category: 'Travel', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&h=400&fit=crop', size: 'normal' },
  { id: 8, title: 'Natural Beauty', category: 'Portrait', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&h=600&fit=crop', size: 'normal' },
  { id: 9, title: 'First Dance', category: 'Wedding', image: 'https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=600&h=700&fit=crop', size: 'tall' },
  { id: 10, title: 'Runway Ready', category: 'Fashion', image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=400&fit=crop', size: 'normal' },
  { id: 11, title: 'Mountain Majesty', category: 'Travel', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&h=800&fit=crop', size: 'tall' },
  { id: 12, title: 'Studio Session', category: 'Portrait', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop', size: 'normal' },
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

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
            My Work
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 font-display text-5xl font-light text-warm-white md:text-7xl"
          >
            Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-white/60"
          >
            A curated collection of my finest work, spanning weddings, fashion editorials, 
            travel adventures, and intimate portraits.
          </motion.p>
        </div>
      </section>

      {/* Filter */}
      <section className="bg-warm-white py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 text-sm uppercase tracking-wider transition-all ${
                  activeCategory === category
                    ? 'bg-charcoal text-warm-white'
                    : 'bg-transparent text-charcoal hover:bg-charcoal/10'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-warm-white pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div layout className="masonry-grid">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.05 }}
                  className="masonry-item group"
                >
                  <Link to={`/portfolio/${item.id}`} className="block relative overflow-hidden">
                    <div className="overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-charcoal/80 via-transparent to-transparent p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <p className="text-xs uppercase tracking-widest text-gold">{item.category}</p>
                      <h3 className="mt-2 font-display text-2xl text-warm-white">{item.title}</h3>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
