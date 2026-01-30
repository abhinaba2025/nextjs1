import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.77, 0, 0.175, 1] }}
      >
        {/* Page Loader */}
        <motion.div
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1], delay: 0.2 }}
          style={{ transformOrigin: 'top' }}
          className="fixed inset-0 z-[100] bg-charcoal"
        />
        <motion.div
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1], delay: 0.3 }}
          style={{ transformOrigin: 'top' }}
          className="fixed inset-0 z-[99] bg-gold"
        />
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
