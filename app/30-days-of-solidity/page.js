/**
 * The function `ThirtyDaysGrid` generates a grid layout displaying 30 days of Solidity challenges with
 * dynamic gradients based on the day index.
 * @returns The `ThirtyDaysGrid` component is being returned. It generates an array of 30 days with
 * dynamic gradients based on the day index and then maps over each day to render a `SolidityCard`
 * component for each day in a grid layout. The component displays information such as the day number,
 * image source, category, title, action label, and gradient colors.
 */
// pages/ThirtyDaysGrid.jsx
'use client';
import { motion } from 'framer-motion';
import SolidityCard from '@/components/SolidityCard';
import AnimatedTypography from '@/components/AnimatedTypography';

// Generate 30 days with dynamic gradients based on day index
const days = Array.from({ length: 30 }, (_, i) => {
  const id = i + 1;
  const hue = Math.floor((id * 137) % 360);
  return {
    id,
    imageSrc: `https://azure-large-catfish-449.mypinata.cloud/ipfs/bafybeigpaoxc4q6zqnfzukqj33te7ly66lbbg7e47se53t57go3ytqlbwy/${id}.jpg`,
    category: `Day ${id}`,
    title: `Solidity Challenge ${id}`,
    actionLabel: 'View',
    gradient: {
      from: `hsl(${hue}, 70%, 60%)`,
      to: `hsl(${(hue + 60) % 360}, 70%, 50%)`,
    },
  };
});

export default function ThirtyDaysGrid() {
  return (
    <motion.div className='min-h-screen p-8 bg-black dark:bg-white'>
      {/* <AnimatedTypography /> */}
      <h1 className='text-3xl font-bold text-white text-center mb-6 dark:text-black'>
        #30DaysOfSolidity
      </h1>

      <motion.div
        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'
        initial='hidden'
        animate='visible'
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.08 } },
        }}
      >
        {days.map((day) => (
          <motion.div
            key={day.id}
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.04 }}
          >
            <SolidityCard
              imageSrc={day.imageSrc}
              category={day.category}
              title={day.title}
              actionLabel={day.actionLabel}
              gradient={day.gradient}
              onAction={() => console.log(`Clicked ${day.title}`)}
              _id={day.id}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
