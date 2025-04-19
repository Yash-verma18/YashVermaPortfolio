// pages/ThirtyDaysGrid.jsx
'use client';

import SolidityCard from '@/components/SolidityCard';

// Generate 30 days with dynamic gradients based on day index
const days = Array.from({ length: 30 }, (_, i) => {
  const id = i + 1;
  const hue = Math.floor((id * 137) % 360);
  return {
    id,
    imageSrc: `https://res.cloudinary.com/coin-nft/image/fetch/q_90,w_375,fl_sanitize/f_auto/https%3A%2F%2Fctf-images-01.coinbasecdn.net%2Fvoaboiz0ig30%2F90d709264e81fba7d193a2253c37a63d610dfd33ef246ecbf846188a622963dd%2F295d21520cd0da1d28e0f6bc1265b3a6%2F90d709264e81fba7d193a2253c37a63d610dfd33ef246ecbf846188a622963dd.webp`, // your snapshots
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
    <div className='min-h-screen bg-[#000] p-8'>
      <h1 className='text-3xl font-bold text-white text-center mb-6'>
        #30DaysOfSolidity
      </h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {days.map((day) => (
          <SolidityCard
            key={day.id}
            imageSrc={day.imageSrc}
            category={day.category}
            title={day.title}
            actionLabel={day.actionLabel}
            gradient={day.gradient}
            onAction={() => alert(`Clicked ${day.title}`)}
          />
        ))}
      </div>
    </div>
  );
}
