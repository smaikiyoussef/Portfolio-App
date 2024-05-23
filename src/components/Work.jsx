import React from 'react'
import Cap from '../assets/Capture.PNG'
import Cap1 from '../assets/Capture1.PNG'
import AboutImg from '../assets/about4.jpeg'

const Work = () => {
  return (
    <div className='py-6 max-w-[1200px] mx-auto' id='Work'>
        <div className='mx-auto px-4 md:px-8'>
            <div className='mb-4 flex items-center justify-between'>
                <div className='flex flex-col gap-4'>
                    <h2 className='text-2xl lg:text-3xl text-white'>
                        My <span>Projects</span>
                    </h2>
                    <p className='text-gray-500'>
                        These are my latest projects
                    </p>
                </div>
            </div>


            <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8'>

                <a href="https://smaikiyoussef.github.io/investment-calculate-react/" target='_blank' rel='noreferrer' className='group h-48 overflow-hidden rounded-lg shadow-lg md:h-80'>
                    <img src={Cap} alt='' className='h-full w-full object-cover object-center transition duration-200 group-hover:scale-110' />
                </a>

                <a href="https://smaikiyoussef.github.io/Weather-App/" target='_blank' rel='noreferrer' className='group h-48 overflow-hidden rounded-lg shadow-lg md:col-span-2 md:h-80'>
                    <img src={Cap1} alt='' className='h-full w-full object-cover object-center transition duration-200 group-hover:scale-110' />
                </a>

                <a href="/" className='group h-48 overflow-hidden rounded-lg shadow-lg md:col-span-2 md:h-80'>
                    <img src={AboutImg} alt='' className='h-full w-full object-cover object-center transition duration-200 group-hover:scale-110' />
                </a>

                <a href="/" className='group h-48 overflow-hidden rounded-lg shadow-lg md:h-80'>
                    <img src={AboutImg} alt='' className='h-full w-full object-cover object-center transition duration-200 group-hover:scale-110' />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Work
