import React from 'react'

const Contact = () => {
  return (
    <div className='flex justify-center my-5 h-full sm:h-[70vh] items-center' id='Contact'>
        <div className='max-w-[1200px] mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2'>

                <div className='p-6 mr-2 bg-gray-800 rounded-xl flex flex-col justify-around'>
                    <h1 className='text-4xl sm:text-5xl text-white'>
                        Contact <span>Me</span>
                    </h1>
                    <p className='text-normal text-lg font-medium text-gray-400 mt-2'>
                        Let's connect on Linkedin <br/> or send me an Email
                    </p>

                    <div className='flex items-center mt-2 text-gray-400'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"className='w-10' id="email"><path fill="#222" d="M53.42 53.32H10.58a8.51 8.51 0 0 1-8.5-8.5V19.18a8.51 8.51 0 0 1 8.5-8.5h42.84a8.51 8.51 0 0 1 8.5 8.5v25.64a8.51 8.51 0 0 1-8.5 8.5ZM10.58 13.68a5.5 5.5 0 0 0-5.5 5.5v25.64a5.5 5.5 0 0 0 5.5 5.5h42.84a5.5 5.5 0 0 0 5.5-5.5V19.18a5.5 5.5 0 0 0-5.5-5.5Z"></path><path fill="#222" d="M32 38.08a8.51 8.51 0 0 1-5.13-1.71L3.52 18.71a1.5 1.5 0 1 1 1.81-2.39L28.68 34a5.55 5.55 0 0 0 6.64 0l23.35-17.68a1.5 1.5 0 1 1 1.81 2.39L37.13 36.37A8.51 8.51 0 0 1 32 38.08Z"></path><path fill="#222" d="M4.17 49.14a1.5 1.5 0 0 1-1-2.62l18.4-16.41a1.5 1.5 0 0 1 2 2.24L5.17 48.76a1.46 1.46 0 0 1-1 .38zm55.66 0a1.46 1.46 0 0 1-1-.38l-18.4-16.41a1.5 1.5 0 1 1 2-2.24l18.39 16.41a1.5 1.5 0 0 1-1 2.62z"></path></svg>
                        <div className='ml-4 text-md tracking-wide w-40'>
                            <p>Smaiki Youssef</p>
                        </div>
                    </div>
                </div>

                <form action='https://getform.io/f/jawxelrb' method='post' className='p-6 flex flex-col justify-center max-w-[700px]'>
                    <div className='flex flex-col'>
                        <input type='name' name='name' id='name' placeholder='Full Name' className='w-100 mt-2 py-3 px-3 rounded-lg bg-gray-800 border border-gray-700 text-white' />
                    </div>

                    <div className='flex flex-col'>
                        <input type='email' name='email' id='email' placeholder='Email' className='w-100 mt-2 py-3 px-3 rounded-lg bg-gray-800 border border-gray-700 text-white' />
                    </div>

                    <div className='flex flex-col'>
                        <textarea name='message' id='message' placeholder='Your Message' className='w-100 mt-2 py-3 px-3 rounded-lg bg-gray-800 border border-gray-700 text-white'></textarea>
                    </div>

                    <button type='submit' className='bg-primary-color text-white py-3 px-6 rounded-lg mt-3'>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact
