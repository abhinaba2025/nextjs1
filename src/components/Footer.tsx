import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Linkedin, ArrowUp, Send } from 'lucide-react';
import { useState } from 'react';

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export function Footer() {
  const [email, setEmail] = useState('');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal text-warm-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-6 py-16 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-3xl font-light md:text-4xl"
              >
                Subscribe to my newsletter
              </motion.h3>
              <p className="mt-4 text-white/60">
                Get exclusive behind-the-scenes content, photography tips, and updates on my latest work.
              </p>
            </div>
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex gap-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="relative flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full border-b border-white/30 bg-transparent py-4 text-warm-white placeholder:text-white/40 focus:border-gold focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="magnetic-btn flex items-center gap-2 bg-gold px-6 py-4 text-charcoal transition-all hover:bg-beige"
              >
                <Send size={18} />
                <span className="hidden sm:inline">Subscribe</span>
              </button>
            </motion.form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-display text-3xl font-bold tracking-wider">
              LUMINEX
            </Link>
            <p className="mt-6 max-w-md text-white/60">
              Capturing life's most precious moments through the lens. Every frame tells a story,
              every image preserves an emotion forever.
            </p>
            <div className="mt-8 flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition-all duration-300 hover:border-gold hover:bg-gold hover:text-charcoal"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-medium">Quick Links</h4>
            <ul className="mt-6 space-y-4">
              {['About', 'Portfolio', 'Services', 'Contact'].map((link) => (
                <li key={link}>
                  <Link
                    to={`/${link.toLowerCase()}`}
                    className="text-white/60 transition-colors hover:text-gold"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-medium">Contact</h4>
            <ul className="mt-6 space-y-4 text-white/60">
              <li>hello@luminex.studio</li>
              <li>+1 (555) 123-4567</li>
              <li>
                123 Creative Avenue
                <br />
                New York, NY 10001
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} LUMINEX. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-gold"
          >
            Back to top
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-all group-hover:-translate-y-1 group-hover:border-gold">
              <ArrowUp size={18} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
