import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Camera, Heart, Plane, User, Check, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Heart,
    title: 'Wedding Photography',
    description: 'Capturing your most precious moments with a cinematic approach. From intimate elopements to grand celebrations.',
    features: ['Full day coverage', 'Second photographer', 'Engagement session', 'Online gallery', 'High-res files'],
  },
  {
    icon: Camera,
    title: 'Fashion & Editorial',
    description: 'High-end fashion photography for magazines, lookbooks, and brand campaigns with a refined aesthetic.',
    features: ['Creative direction', 'Studio or location', 'Retouching included', 'Commercial rights', 'Rush delivery available'],
  },
  {
    icon: Plane,
    title: 'Travel & Adventure',
    description: 'Documenting your adventures around the world. Perfect for travel brands, tourism boards, and personal projects.',
    features: ['Location scouting', 'Drone coverage', 'Video available', 'Social media package', 'Worldwide availability'],
  },
  {
    icon: User,
    title: 'Portrait Sessions',
    description: 'Personal branding, headshots, and creative portraits that capture your authentic essence.',
    features: ['Studio or outdoor', 'Styling consultation', 'Multiple outfits', 'Quick turnaround', 'Print-ready files'],
  },
];

const packages = [
  {
    name: 'Essential',
    price: '$1,500',
    description: 'Perfect for intimate sessions',
    features: ['4 hours coverage', '100+ edited images', 'Online gallery', 'High-resolution files', 'Print release'],
    popular: false,
  },
  {
    name: 'Signature',
    price: '$3,500',
    description: 'Most popular choice',
    features: ['8 hours coverage', '300+ edited images', 'Second photographer', 'Engagement session', 'Online gallery', 'High-resolution files', 'Premium album'],
    popular: true,
  },
  {
    name: 'Luxury',
    price: '$6,500',
    description: 'The complete experience',
    features: ['Full day coverage', '500+ edited images', 'Second photographer', 'Engagement session', 'Bridal session', 'Online gallery', 'High-resolution files', 'Premium album', 'Video highlights'],
    popular: false,
  },
];

export function Services() {
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
            What I Offer
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 font-display text-5xl font-light text-warm-white md:text-7xl"
          >
            Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-white/60"
          >
            From weddings to fashion, travel to portraits — I bring the same passion and 
            artistry to every project.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-warm-white py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group border border-charcoal/10 p-8 transition-all duration-500 hover:border-gold hover:bg-charcoal lg:p-12"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-charcoal text-gold transition-colors group-hover:bg-gold group-hover:text-charcoal">
                  <service.icon size={28} />
                </div>
                <h3 className="font-display text-2xl text-charcoal transition-colors group-hover:text-warm-white lg:text-3xl">
                  {service.title}
                </h3>
                <p className="mt-4 text-dark-gray/70 transition-colors group-hover:text-white/70">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm text-dark-gray/70 transition-colors group-hover:text-white/70"
                    >
                      <Check size={16} className="text-gold" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-off-white py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-gold">Investment</p>
            <h2 className="mt-4 font-display text-4xl font-light text-charcoal md:text-5xl">
              Pricing Packages
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-dark-gray/70">
              Transparent pricing for exceptional photography. Custom packages available upon request.
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-3">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative p-8 lg:p-10 ${
                  pkg.popular
                    ? 'bg-charcoal text-warm-white'
                    : 'border border-charcoal/10 bg-warm-white'
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold px-4 py-1 text-xs uppercase tracking-wider text-charcoal">
                    Most Popular
                  </span>
                )}
                <h3 className="font-display text-2xl">{pkg.name}</h3>
                <p className={`mt-2 text-sm ${pkg.popular ? 'text-white/60' : 'text-dark-gray/60'}`}>
                  {pkg.description}
                </p>
                <p className="mt-6">
                  <span className="font-display text-5xl">{pkg.price}</span>
                </p>
                <ul className="mt-8 space-y-4">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-center gap-3 text-sm ${
                        pkg.popular ? 'text-white/80' : 'text-dark-gray/70'
                      }`}
                    >
                      <Check size={16} className="text-gold" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`mt-8 flex w-full items-center justify-center gap-2 py-4 text-sm uppercase tracking-wider transition-all ${
                    pkg.popular
                      ? 'bg-gold text-charcoal hover:bg-beige'
                      : 'bg-charcoal text-warm-white hover:bg-dark-gray'
                  }`}
                >
                  Get Started
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-24">
        <div className="container mx-auto px-6 text-center lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl font-light text-warm-white md:text-5xl"
          >
            Have a custom project in mind?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl text-white/60"
          >
            Let's discuss your vision and create a tailored package that fits your needs perfectly.
          </motion.p>
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
              Contact Me
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
