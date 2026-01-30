import { motion, useScroll } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, Share2, Twitter, Facebook, Linkedin } from 'lucide-react';

const article = {
  title: "The Art of Natural Light: A Photographer's Guide",
  excerpt: 'Mastering natural light is the foundation of stunning photography.',
  image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1600&h=900&fit=crop',
  category: 'Tutorials',
  readTime: '8 min read',
  date: 'December 15, 2023',
  author: {
    name: 'Alexandra Reinheart',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop',
    bio: 'Award-winning photographer based in NYC',
  },
  content: `
    <p class="drop-cap">Light is the essence of photography. Without understanding light, capturing compelling images becomes nearly impossible. Natural light, in particular, offers a unique quality that artificial sources often struggle to replicate.</p>
    
    <p>In my 15 years of professional photography, I've learned that mastering natural light isn't about chasing perfect conditions—it's about understanding how to work with whatever light you're given and transforming it into something magical.</p>
    
    <h2>Understanding the Quality of Light</h2>
    
    <p>The quality of natural light changes dramatically throughout the day. Early morning and late afternoon—often called the "golden hours"—provide soft, warm light that's universally flattering. Midday sun, while often avoided, can create dramatic shadows and high-contrast images when used intentionally.</p>
    
    <blockquote>
      <p>"Photography is the story I fail to put into words."</p>
      <cite>— Destin Sparks</cite>
    </blockquote>
    
    <p>The direction of light matters just as much as its quality. Front lighting flattens features, side lighting adds dimension and drama, and backlighting can create ethereal silhouettes or rim-lit portraits.</p>
    
    <h2>Working with Available Light</h2>
    
    <p>One of the biggest mistakes I see photographers make is fighting against the available light rather than embracing it. Every lighting situation offers creative possibilities:</p>
    
    <ul>
      <li><strong>Overcast days</strong> provide soft, even lighting perfect for portraits</li>
      <li><strong>Harsh midday sun</strong> creates bold shadows for graphic compositions</li>
      <li><strong>Window light</strong> offers beautiful, directional illumination indoors</li>
      <li><strong>Blue hour</strong> adds a magical, serene quality to landscapes</li>
    </ul>
    
    <h2>Modifying Natural Light</h2>
    
    <p>While we can't control the sun, we can modify how natural light falls on our subjects. Reflectors bounce light into shadows, diffusers soften harsh sunlight, and simply repositioning your subject can dramatically change the look of an image.</p>
    
    <p>I always carry a collapsible reflector in my bag—it's one of the most versatile and affordable tools for any photographer. A simple white or silver reflector can fill shadows and add catchlights to eyes, transforming an ordinary portrait into something special.</p>
    
    <h2>Conclusion</h2>
    
    <p>Mastering natural light is a lifelong journey. The more you observe, experiment, and practice, the more intuitive it becomes. Start by simply paying attention to light throughout your day—notice how it changes, how it falls on faces and objects, how it creates mood and atmosphere.</p>
    
    <p>Remember, there's no such thing as bad light—only light that requires a different approach. Embrace every lighting situation as an opportunity to create something unique.</p>
  `,
};

export function BlogSingle() {
  const { scrollYProgress } = useScroll();

  return (
    <main className="pt-24">
      {/* Reading Progress */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="reading-progress origin-left"
      />

      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden bg-charcoal">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
          src={article.image}
          alt={article.title}
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center gap-4">
                <span className="bg-gold px-3 py-1 text-xs uppercase tracking-wider text-charcoal">
                  {article.category}
                </span>
                <span className="flex items-center gap-2 text-sm text-white/60">
                  <Clock size={14} />
                  {article.readTime}
                </span>
              </div>
              <h1 className="mt-6 font-display text-4xl font-light text-warm-white md:text-5xl lg:text-6xl">
                {article.title}
              </h1>
              <div className="mt-8 flex items-center gap-4">
                <img
                  src={article.author.image}
                  alt={article.author.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-warm-white">{article.author.name}</p>
                  <p className="flex items-center gap-2 text-sm text-white/60">
                    <Calendar size={14} />
                    {article.date}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-warm-white py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="relative mx-auto max-w-3xl">
            {/* Sticky Share */}
            <div className="absolute -left-20 top-0 hidden lg:block">
              <div className="sticky top-32 flex flex-col gap-4">
                <span className="text-xs uppercase tracking-wider text-dark-gray/60">
                  <Share2 size={16} />
                </span>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/20 text-charcoal transition-all hover:border-gold hover:bg-gold"
                >
                  <Twitter size={18} />
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/20 text-charcoal transition-all hover:border-gold hover:bg-gold"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/20 text-charcoal transition-all hover:border-gold hover:bg-gold"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>

            {/* Article Content */}
            <motion.article
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="prose prose-lg prose-charcoal max-w-none"
            >
              <style>{`
                .prose p { 
                  font-size: 1.125rem; 
                  line-height: 1.8; 
                  color: #2d2d2d; 
                  margin-bottom: 1.5rem;
                }
                .prose h2 { 
                  font-family: 'Playfair Display', serif; 
                  font-size: 2rem; 
                  font-weight: 400; 
                  margin-top: 3rem; 
                  margin-bottom: 1.5rem;
                  color: #1a1a1a;
                }
                .prose blockquote { 
                  border-left: 3px solid #c9a96e; 
                  padding-left: 2rem; 
                  margin: 2.5rem 0;
                  font-style: italic;
                }
                .prose blockquote p { 
                  font-family: 'Playfair Display', serif;
                  font-size: 1.5rem; 
                  color: #1a1a1a;
                }
                .prose blockquote cite { 
                  font-size: 1rem; 
                  color: #c9a96e;
                  font-style: normal;
                }
                .prose ul { 
                  margin: 1.5rem 0;
                }
                .prose li { 
                  margin-bottom: 0.75rem;
                  color: #2d2d2d;
                }
                .prose .drop-cap::first-letter {
                  float: left;
                  font-family: 'Playfair Display', serif;
                  font-size: 5rem;
                  line-height: 1;
                  padding-right: 1rem;
                  color: #c9a96e;
                }
              `}</style>
              <div dangerouslySetInnerHTML={{ __html: article.content }} />
            </motion.article>

            {/* Mobile Share */}
            <div className="mt-12 flex items-center justify-center gap-4 border-t border-charcoal/10 pt-8 lg:hidden">
              <span className="text-sm uppercase tracking-wider text-dark-gray/60">Share:</span>
              <a href="#" className="text-charcoal hover:text-gold"><Twitter size={20} /></a>
              <a href="#" className="text-charcoal hover:text-gold"><Facebook size={20} /></a>
              <a href="#" className="text-charcoal hover:text-gold"><Linkedin size={20} /></a>
            </div>

            {/* Author Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 flex flex-col items-center gap-6 border-t border-charcoal/10 pt-12 text-center sm:flex-row sm:text-left"
            >
              <img
                src={article.author.image}
                alt={article.author.name}
                className="h-24 w-24 rounded-full object-cover"
              />
              <div>
                <p className="text-sm uppercase tracking-wider text-gold">Written by</p>
                <h3 className="mt-2 font-display text-2xl text-charcoal">{article.author.name}</h3>
                <p className="mt-2 text-dark-gray/70">{article.author.bio}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Back Link */}
      <section className="bg-warm-white pb-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mx-auto max-w-3xl">
            <Link
              to="/blog"
              className="group inline-flex items-center gap-3 text-sm uppercase tracking-wider text-charcoal transition-colors hover:text-gold"
            >
              <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-2" />
              Back to Journal
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
