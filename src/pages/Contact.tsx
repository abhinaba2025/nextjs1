import { motion } from 'framer-motion';
import { useState } from 'react';
import { MapPin, Mail, Phone, Send, Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
            Get in Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 font-display text-5xl font-light text-warm-white md:text-7xl"
          >
            Contact
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-white/60"
          >
            Have a project in mind? Let's discuss how we can create something beautiful together.
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="bg-warm-white py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl font-light text-charcoal md:text-4xl">
                Let's create <span className="italic">magic</span> together
              </h2>
              <p className="mt-6 text-dark-gray/70">
                Whether you're planning a wedding, need editorial photography, or have a creative 
                project in mind, I'd love to hear from you. Fill out the form and I'll get back 
                to you within 24 hours.
              </p>

              <div className="mt-12 space-y-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-charcoal text-gold">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-charcoal">Studio Location</h3>
                    <p className="mt-1 text-dark-gray/70">
                      123 Creative Avenue<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-charcoal text-gold">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-charcoal">Email</h3>
                    <a
                      href="mailto:hello@luminex.studio"
                      className="mt-1 text-dark-gray/70 transition-colors hover:text-gold"
                    >
                      hello@luminex.studio
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-charcoal text-gold">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-charcoal">Phone</h3>
                    <a
                      href="tel:+15551234567"
                      className="mt-1 text-dark-gray/70 transition-colors hover:text-gold"
                    >
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <p className="text-sm uppercase tracking-wider text-dark-gray/60">Follow Me</p>
                <div className="mt-4 flex gap-4">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-charcoal/20 text-charcoal transition-all hover:border-gold hover:bg-gold"
                    >
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.form
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm uppercase tracking-wider text-charcoal">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border-b-2 border-charcoal/20 bg-transparent py-4 text-charcoal placeholder:text-dark-gray/40 focus:border-gold focus:outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm uppercase tracking-wider text-charcoal">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border-b-2 border-charcoal/20 bg-transparent py-4 text-charcoal placeholder:text-dark-gray/40 focus:border-gold focus:outline-none"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="mb-2 block text-sm uppercase tracking-wider text-charcoal">
                  Service Interested In
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full border-b-2 border-charcoal/20 bg-transparent py-4 text-charcoal focus:border-gold focus:outline-none"
                >
                  <option value="">Select a service</option>
                  <option value="wedding">Wedding Photography</option>
                  <option value="fashion">Fashion & Editorial</option>
                  <option value="travel">Travel & Adventure</option>
                  <option value="portrait">Portrait Session</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm uppercase tracking-wider text-charcoal">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full resize-none border-b-2 border-charcoal/20 bg-transparent py-4 text-charcoal placeholder:text-dark-gray/40 focus:border-gold focus:outline-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="magnetic-btn flex items-center gap-3 bg-charcoal px-10 py-5 text-sm uppercase tracking-wider text-warm-white transition-all hover:bg-gold hover:text-charcoal"
              >
                <Send size={18} />
                Send Message
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative h-[50vh] bg-charcoal">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1920&h=600&fit=crop"
            alt="New York City"
            className="h-full w-full object-cover opacity-40"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-warm-white p-8 text-center lg:p-12"
          >
            <MapPin size={32} className="mx-auto text-gold" />
            <h3 className="mt-4 font-display text-2xl text-charcoal">Visit the Studio</h3>
            <p className="mt-2 text-dark-gray/70">
              123 Creative Avenue<br />
              New York, NY 10001
            </p>
            <p className="mt-4 text-sm text-dark-gray/60">
              By appointment only
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gold py-16">
        <div className="container mx-auto px-6 text-center lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl font-light text-charcoal md:text-4xl"
          >
            Ready to start your project?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-4 max-w-xl text-charcoal/70"
          >
            Book a free consultation call and let's discuss your vision.
          </motion.p>
        </div>
      </section>
    </main>
  );
}
