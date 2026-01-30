import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Camera } from 'lucide-react';

export function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-charcoal px-6">
      <div className="text-center">
        {/* Animated Camera Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-8"
        >
          <motion.div
            animate={{ 
              rotateY: [0, 360],
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
            className="inline-flex h-32 w-32 items-center justify-center rounded-full border-2 border-gold/30 text-gold"
          >
            <Camera size={64} />
          </motion.div>
        </motion.div>

        {/* 404 Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="font-display text-[8rem] font-light leading-none text-warm-white md:text-[12rem]">
            4
            <motion.span
              animate={{ 
                opacity: [1, 0.5, 1],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="inline-block text-gold"
            >
              0
            </motion.span>
            4
          </h1>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="mt-4 font-display text-2xl font-light text-warm-white md:text-3xl">
            Page Not <span className="italic">Found</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-white/60">
            Looks like this frame is out of focus. The page you're looking for doesn't exist 
            or has been moved.
          </p>
        </motion.div>

        {/* Animated Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mx-auto my-10 h-px w-32 bg-gold"
        />

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Link
            to="/"
            className="magnetic-btn inline-flex items-center gap-3 bg-gold px-10 py-5 text-sm uppercase tracking-wider text-charcoal transition-all hover:bg-beige"
          >
            Back to Home
            <ArrowRight size={18} />
          </Link>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          animate={{ 
            y: [-10, 10, -10],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-20 h-2 w-2 rounded-full bg-gold"
        />
        <motion.div
          animate={{ 
            y: [10, -10, 10],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-32 right-32 h-3 w-3 rounded-full bg-gold"
        />
        <motion.div
          animate={{ 
            y: [-15, 15, -15],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-40 right-20 h-4 w-4 rounded-full bg-beige"
        />
      </div>
    </main>
  );
}
