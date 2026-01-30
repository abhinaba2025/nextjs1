import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar, MapPin, User, X } from 'lucide-react';
import { useState } from 'react';

const projectData = {
  id: 1,
  title: 'Eternal Bonds',
  category: 'Wedding',
  client: 'Sarah & Michael',
  date: 'September 2023',
  location: 'Tuscany, Italy',
  description: 'A magical destination wedding set against the rolling hills of Tuscany. Sarah and Michael chose the historic Villa di Corsano as the backdrop for their celebration of love. The day was filled with golden light, heartfelt moments, and the kind of joy that photographs itself.',
  images: [
    'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=1200&h=1600&fit=crop',
    'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1529636798458-92182e662485?w=1200&h=1600&fit=crop',
  ],
};

export function PortfolioSingle() {
  const { id: _id } = useParams();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  const openLightbox = (index: number) => {
    setActiveImage(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % projectData.images.length);
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + projectData.images.length) % projectData.images.length);
  };

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="relative h-[70vh] overflow-hidden bg-charcoal">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
          src={projectData.images[0]}
          alt={projectData.title}
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-sm uppercase tracking-[0.3em] text-gold">{projectData.category}</p>
              <h1 className="mt-4 font-display text-5xl font-light text-warm-white md:text-7xl">
                {projectData.title}
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Info */}
      <section className="bg-warm-white py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <p className="text-lg leading-relaxed text-dark-gray/80">{projectData.description}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-charcoal text-gold">
                  <User size={20} />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wider text-dark-gray/60">Client</p>
                  <p className="font-display text-lg text-charcoal">{projectData.client}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-charcoal text-gold">
                  <Calendar size={20} />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wider text-dark-gray/60">Date</p>
                  <p className="font-display text-lg text-charcoal">{projectData.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-charcoal text-gold">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wider text-dark-gray/60">Location</p>
                  <p className="font-display text-lg text-charcoal">{projectData.location}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-off-white py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid gap-6 md:grid-cols-2">
            {projectData.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group cursor-pointer overflow-hidden ${
                  index % 3 === 0 ? 'md:col-span-2' : ''
                }`}
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image}
                  alt={`${projectData.title} - Image ${index + 1}`}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="bg-warm-white py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between">
            <Link
              to="/portfolio"
              className="group flex items-center gap-3 text-sm uppercase tracking-wider text-charcoal transition-colors hover:text-gold"
            >
              <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-2" />
              Back to Portfolio
            </Link>
            <div className="flex gap-4">
              <button className="flex h-14 w-14 items-center justify-center rounded-full border border-charcoal/20 text-charcoal transition-all hover:border-gold hover:bg-gold">
                <ArrowLeft size={20} />
              </button>
              <button className="flex h-14 w-14 items-center justify-center rounded-full border border-charcoal/20 text-charcoal transition-all hover:border-gold hover:bg-gold">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/95 p-4"
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 text-warm-white hover:text-gold"
          >
            <X size={32} />
          </button>
          <button
            onClick={prevImage}
            className="absolute left-6 flex h-14 w-14 items-center justify-center rounded-full border border-white/20 text-warm-white transition-all hover:border-gold hover:text-gold"
          >
            <ArrowLeft size={24} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-6 flex h-14 w-14 items-center justify-center rounded-full border border-white/20 text-warm-white transition-all hover:border-gold hover:text-gold"
          >
            <ArrowRight size={24} />
          </button>
          <img
            src={projectData.images[activeImage]}
            alt=""
            className="max-h-[85vh] max-w-full object-contain"
          />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-warm-white">
            {activeImage + 1} / {projectData.images.length}
          </div>
        </motion.div>
      )}
    </main>
  );
}
