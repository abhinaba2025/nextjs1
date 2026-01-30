import { motion } from 'framer-motion';
import { Award, Camera, Users, Globe } from 'lucide-react';

const timeline = [
  { year: '2008', title: 'First Camera', description: 'Received my first DSLR and fell in love with photography' },
  { year: '2012', title: 'Photography Degree', description: 'Graduated from NYC School of Visual Arts' },
  { year: '2015', title: 'First Exhibition', description: 'Solo exhibition at Manhattan Contemporary Gallery' },
  { year: '2018', title: 'International Recognition', description: 'Featured in Vogue Italia and Harper\'s Bazaar' },
  { year: '2020', title: 'Studio Launch', description: 'Opened LUMINEX Studio in New York City' },
  { year: '2023', title: 'Global Expansion', description: 'Expanded to work with clients across 40+ countries' },
];

const achievements = [
  { icon: Camera, value: '2,500+', label: 'Projects Completed' },
  { icon: Users, value: '500+', label: 'Happy Clients' },
  { icon: Award, value: '45+', label: 'Awards Won' },
  { icon: Globe, value: '40+', label: 'Countries Covered' },
];

const clients = [
  'Vogue', 'Harper\'s Bazaar', 'Elle', 'GQ', 'Vanity Fair', 'Marie Claire'
];

export function About() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="bg-charcoal py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-sm uppercase tracking-[0.3em] text-gold">About Me</p>
              <h1 className="mt-4 font-display text-5xl font-light leading-tight text-warm-white md:text-6xl lg:text-7xl">
                Alexandra <br />
                <span className="italic">Reinheart</span>
              </h1>
              <p className="mt-8 text-lg leading-relaxed text-white/70">
                I'm a visual storyteller based in New York City, specializing in cinematic wedding 
                photography, high-fashion editorials, and breathtaking travel imagery. My work is 
                driven by a passion for capturing authentic emotions and transforming fleeting 
                moments into timeless art.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-white/70">
                With a background in fine arts and over 15 years behind the lens, I approach each 
                project with an artistic vision that blends classical elegance with contemporary 
                storytelling. My clients range from luxury brands to intimate couples seeking to 
                preserve their most precious memories.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=1067&fit=crop"
                  alt="Alexandra Reinheart"
                  className="h-full w-full object-cover"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -bottom-8 -right-4 bg-gold p-6 text-charcoal lg:-right-8 lg:p-8"
              >
                <p className="font-display text-lg italic">"Photography is poetry frozen in time"</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="bg-warm-white py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {achievements.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-charcoal text-gold">
                  <item.icon size={28} />
                </div>
                <p className="mt-4 font-display text-4xl font-light text-charcoal">{item.value}</p>
                <p className="mt-2 text-sm uppercase tracking-wider text-dark-gray/60">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-off-white py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-gold">My Journey</p>
            <h2 className="mt-4 font-display text-4xl font-light text-charcoal md:text-5xl">
              The Road So Far
            </h2>
          </motion.div>

          <div className="relative mx-auto max-w-4xl">
            {/* Timeline Line */}
            <div className="absolute left-0 top-0 h-full w-px bg-charcoal/20 md:left-1/2 md:-translate-x-1/2" />

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative mb-12 pl-8 md:w-1/2 md:pl-0 ${
                  index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:ml-auto md:pl-12'
                }`}
              >
                {/* Dot */}
                <div
                  className={`absolute left-0 top-0 h-4 w-4 rounded-full border-4 border-warm-white bg-gold md:left-auto ${
                    index % 2 === 0 ? 'md:-right-2' : 'md:-left-2'
                  }`}
                />
                <span className="font-display text-3xl font-light text-gold">{item.year}</span>
                <h3 className="mt-2 font-display text-xl text-charcoal">{item.title}</h3>
                <p className="mt-2 text-dark-gray/70">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="relative bg-charcoal py-32">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1920&h=800&fit=crop"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center lg:px-12">
          <motion.blockquote
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl"
          >
            <p className="font-display text-3xl font-light italic leading-relaxed text-warm-white md:text-5xl">
              "I don't just take photographs. I capture emotions, freeze time, and create visual 
              stories that will be treasured for generations."
            </p>
            <footer className="mt-8">
              <cite className="text-lg not-italic text-gold">— Alexandra Reinheart</cite>
            </footer>
          </motion.blockquote>
        </div>
      </section>

      {/* Clients */}
      <section className="bg-warm-white py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-gold">Trusted By</p>
            <h2 className="mt-4 font-display text-3xl font-light text-charcoal">Featured In</h2>
          </motion.div>

          <div className="flex flex-wrap items-center justify-center gap-12">
            {clients.map((client, index) => (
              <motion.div
                key={client}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="font-display text-2xl font-light text-charcoal/40 transition-colors hover:text-charcoal md:text-3xl"
              >
                {client}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
