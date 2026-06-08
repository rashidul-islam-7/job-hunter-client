import React from 'react';
import FeatureCard from './FeaturesCard';

const Features = () => {
    return (
        <div className="bg-[#0d0e14] px-5 sm:px-8 md:px-16 py-16 ">
            
        <div className='mb-10'>
           <div className='flex justify-center items-center gap-3'>
            <span className='h-2 w-2 bg-blue-500'></span>
            <span className='uppercase text-md  text-gray-300'>Features Jobs</span>
            <span className='h-2 w-2 bg-blue-500'></span>
           </div>
              <h2 className='text-3xl font-bold text-center text-white max-w-md mx-auto mt-4'>Everything you need to succeed</h2>
        </div>

            <FeatureCard />
        </div>
    );
};

export default Features;