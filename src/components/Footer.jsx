import React from 'react'
import {FaGithubSquare, FaInstagram} from 'react-icons/fa'


const Footer = () => {
  return (
    <div className='mt-12 w-max-[800px] border-t border-gray-500 text-center'>
        <p className='my-5 text-gray-500 '>Smaiki Youssef <br /> © Copyright</p>
        <div className='inline-flex text-gray-500 gap-4 text-3xl'>
                <a href='https://github.com/smaikiyoussef' target='_blank' rel='noreferrer'><FaGithubSquare/></a>
                <a href='https://www.instagram.com/youssef_smaiki/' target='_blank' rel='noreferrer'><FaInstagram/></a>
        </div>
    </div>
  )
}

export default Footer
