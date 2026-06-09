"use client";

import React from 'react';

const PricingToggleBtn = ({btnActive, setBtnActive}) => {
    return (
        <div className='p-1 rounded-full bg-gray-500/30 border border-white/50 my-10 w-fit mx-auto text-sm '>
           <button 
             className={`py-1.5 px-4 cursor-pointer  ${btnActive === 'monthly' && 'bg-white text-black rounded-full' }`}
             onClick={() => setBtnActive('monthly')}
           >
             Monthly
           </button>
           <button 
             className={`py-1.5 px-4 cursor-pointer  ${btnActive === 'yearly' && 'bg-white text-black rounded-full' } ml-2`}
             onClick={() => setBtnActive('yearly')}
           >
             Yearly <span className='text-xs px-2 py-0.5 bg-purple-500 text-white rounded-full'> 25%</span>
           </button>
        </div>
    );
};

export default PricingToggleBtn;