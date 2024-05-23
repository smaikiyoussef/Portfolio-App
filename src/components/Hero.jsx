import React from 'react'
import Me from '../assets/Me.png'
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai'
import {TypeAnimation} from 'react-type-animation'

const Hero = () => {
  return (
    <div id='Home'>
      <div className='my-7 sm:my-0 max-w-[1200px] h-auto mx-auto flex flex-col-reverse sm:flex-row justify-center align-center sm:px-8'>
        <div className=' flex-col my-auto mx-auto md:mx-0 text-center sm:text-start'>
            <p className='md:text-5xl sm:text-4xl text-xl font-bold text-gray-200 '>Hi i'am Youssef Smaiki</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'><TypeAnimation
                sequence={[
                    "Frontend Dev",
                    3000,
                    "Backend Dev",
                    3000,
                ]}
                wrapper='span'
                speed={50}
                repeat={Infinity}
            />
            </h1>
            <div className='text-5xl flex justify-start gap-16 my-7 text-purple-600'>
                <a href='https://www.linkedin.com/in/youssef-smaiki-bb1b6730a/' target='_blank' rel='noreferrer'><AiFillLinkedin/></a>
                <a href='https://github.com/smaikiyoussef' target='_blank' rel='noreferrer'><AiFillGithub/></a>
                <a href='https://www.instagram.com/youssef_smaiki/' target='_blank' rel='noreferrer'><AiFillInstagram/></a>
            </div>
            <div className="relative inline-flex group my-3">
                <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r
                from-[#44BCFF] via-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200">

                </div>
                <a href="https://drive.google.com/file/d/1SvUBU9PlVGJ13voWeNof--_yzpue13wM/view?usp=drive_link" target='_blank' rel='noreferrer' title='Download CV' role='button'
                    className="w-[190px] h-[60px] relative inline-flex items-center justify-center px-8 py-4 text-lg
                    font-bold text-white transition-all duration-200 bg-primary-color font-pj rounded-xl
                    focus:outline-none focus:ring-2 focus:ring-offse-2 focus:ring-gray-900">Download CV</a>
            </div>
        </div>
        <div className='my-auto'>
            <img className='w-[300px] sm:w-[500px] mx-auto h-auto' src={Me} alt='profile pic' />
        </div>
      </div>
    </div>
  )
}

export default Hero
