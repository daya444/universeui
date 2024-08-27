import React from 'react';
import { CiGlobe } from "react-icons/ci";
import { TbLocation } from "react-icons/tb";

export const Ecosystem = () => {
  return (
    <div>
      <div className='bg-[#005585] p-4'>
        <div className='text-base font-bold text-white'>
          GenAI in Life Insurance Fraud Detection: Revolutionizing Industry Standards
        </div>
        <div className='text-sm text-white'>
          Employing advanced algorithms and data analysis, life insurance firms are leveraging GenAI to detect fraud more effectively, improve claim accuracy, and ensure policyholder trust, thereby setting new benchmarks in industry practices.
        </div>
      </div>

      <div className='mx-3 my-9 shadow-custom rounded-md px-3 py-4'>
        <div className='font-bold'>
          Lorem ipsum dolor 
        </div>

        <div className='flex items-center justify-between mt-2'>
          <div className='text-xxl'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div className=' relative -mt-7 flex justify-center'>
            <img src='/kissflow.png' alt='placeholder' />
          </div>
        </div>

        <div className='flex justify-between mt-3'>
        <button className='inline-flex items-center text-[#0081CA] py-1 px-2 rounded border border-[#0081CA]'>
                    Explore <CiGlobe className="ml-2" /> </button>

          <button className=' bg-[#0081CA] text-white py-1 px-2 rounded inline-flex items-center'>Connect <TbLocation className='ml-2' /> </button>
        </div>
      </div>
    </div>
  );
}
