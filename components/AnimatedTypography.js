import { motion, useScroll, useTransform } from 'framer-motion';

export default function AnimatedTypography() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 10]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.1, 0]);

  return (
    <div className='relative h-[200vh] overflow-hidden'>
      <motion.h1
        style={{ scale, opacity }}
        className='fixed -translate-x-1/2 -translate-y-1/2 
                   text-[25vw] font-extrabold text-red-900 dark:text-zinc-50 pointer-events-none'
      >
        YASH VERMA
      </motion.h1>
    </div>
  );
}
