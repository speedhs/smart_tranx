import { Luxurious_Roman } from 'next/font/google';
import React from 'react'



const roman = Luxurious_Roman({ subsets: ["latin"],weight:"400" });
const Instructorpage = () => {


  return (
    <div className='w-full h-auto pt-5 pb-5 mt-10 '>
        <div className='flex items-center justify-center mb-10'><h1 className='font-medium text-3xl'>Our Instructors</h1></div>
        <div className='bg-orange-100 w-full h-[300px] flex items-center justify-center gap-12'>

          <div className='flex items-center justify-center flex-col '>
            <div className='w-32 h-32 bg-neutral-400 rounded-full'></div>
            <span className={roman.className}><h1 className='font-normal text-xl mt-3'>Alen</h1></span>
            <h1 className='font-normal text-lg'>project manager expert</h1>
          </div>

          <div className='flex items-center justify-center flex-col '>
            <div className='w-32 h-32 bg-neutral-400 rounded-full'></div>
            <span className={roman.className}><h1 className='font-normal text-xl mt-3'>Alen</h1></span>
            <h1 className='font-normal text-lg'>project manager expert</h1>
          </div>

          <div className='flex items-center justify-center flex-col '>
            <div className='w-32 h-32 bg-neutral-400 rounded-full'></div>
            <span className={roman.className}><h1 className='font-normal text-xl mt-3'>Alen</h1></span>
            <h1 className='font-normal text-lg'>project manager expert</h1>
          </div>

          <div className='flex items-center justify-center flex-col '>
            <div className='w-32 h-32 bg-neutral-400 rounded-full'></div>
            <span className={roman.className}><h1 className='font-normal text-xl mt-3'>Alen</h1></span>
            <h1 className='font-normal text-lg'>project manager expert</h1>
          </div>

          
        </div>
    </div>
  )
}

export default Instructorpage