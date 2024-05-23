import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handelClick =() => {
      setNav(false)
    }

    const handleNav = () => {
        setNav(!nav)

  
    }
  return (
    <div className=' z-10 text-gray-500 flex justify-between items-center max-w-[1240px] mx-auto h-24 px-4 text-1'>

      <h1 className='text-3xl font-bold primary-color ml-4'>SMAIKI YSF</h1>
        <ul className='hidden md:flex'>
          <li className='p-5'><a href='#Home'>Home</a></li>
          <li className='p-5'><a href='#About'>About</a></li>
          <li className='p-5'><a href='#Work'>Work</a></li>
          <li className='p-5'><a href='#Experience'>Experience</a></li>
          <li className='p-5'><a href='#Contact'>Contact</a></li>
        </ul>
      <div onClick={handleNav} className='block md:hidden'>
        
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
      </div>

      <div className={nav ? ' text-gray-300 md:hidden fixed h-full left-0 z-10 top-0 w-[60%] border-r border-r-gray-900 bg-[#202121] ease-in-out duration-500' 
              : 'fixed md:hidden left-[-100%]'}>
        <h1 className='text-3xl font-bold primary-color m-4'>SMAIKI YSF</h1>
          <ul className='p-8 text-2xl'>
            <li className='p-5'><a href='#Home' onClick={handelClick}>Home</a></li>
            <li className='p-5'><a href='#About' onClick={handelClick}>About</a></li>
            <li className='p-5'><a href='#Work' onClick={handelClick}>Work</a></li>
            <li className='p-5'><a href='#Experience' onClick={handelClick}>Experience</a></li>
            <li className='p-5'><a href='#Contact' onClick={handelClick}>Contact</a></li>
          </ul>
      </div>
    </div>
  )
}

export default Navbar
