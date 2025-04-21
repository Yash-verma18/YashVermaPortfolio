'use client';
import Image from 'next/image';
import { HiOutlineUpload } from 'react-icons/hi';

export default function SolidityCard({
  imageSrc,
  category,
  title,
  actionLabel,
  onAction,
  gradient,
  _id,
}) {
  const { from, to } = gradient;

  return (
    // Outer gradient border container
    <div
      className='p-1 rounded-xl shadow-md overflow-hidden p-3 '
      style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
    >
      {/* Inner card background */}
      <div className='bg-[#1F2937]  rounded-lg overflow-hidden flex flex-col'>
        {/* Image & Share Icon */}
        <div className='relative w-full h-52'>
          <Image
            src={
              _id < 18
                ? imageSrc
                : 'https://res.cloudinary.com/coin-nft/image/fetch/q_90,w_375,fl_sanitize/f_auto/https%3A%2F%2Fctf-images-01.coinbasecdn.net%2Fvoaboiz0ig30%2F1r5w5gXewhgflApAOriX1U%2F0b57124dd066e38b60292b0f6f62ca2e%2Fezgif.com-animated-gif-maker.gif'
            }
            alt={title}
            layout='fill'
            objectFit='cover'
          />
          <button className='absolute top-3 right-3 bg-black bg-opacity-60 p-2 rounded-full text-white'>
            <HiOutlineUpload size={16} />
          </button>
        </div>
      </div>

      {/* Text Section */}
      <div className='px-4 py-3'>
        <p className='text-xs uppercase font-semibold text-white'>{category}</p>
        <h3 className='mt-1 text-lg font-bold text-white truncate'>{title}</h3>
      </div>

      {/* Action Button */}
      <div className='p-4'>
        <button
          onClick={onAction}
          className='w-full py-2 bg-white rounded-full text-sm font-semibold text-gray-900 hover:bg-gray-100 transition'
        >
          {actionLabel}
        </button>
      </div>
    </div>
  );
}
