import React from 'react'

const About = () => {
  return (
    <div id='about' className='flex items-center w-full p-2 py-16 md:h-screen'>
        <div className=' max-w-[1240px] m-auto md:grid grid-cols-3 gap-8  '>
            <div className='col-span-2 '>
                <p className='text-2xl tracking-widest uppercase text-[#5651e5] '>About me</p>
                <h2 className='py-4'>Who I Am?</h2>
                <p className='py-2 text-gray-600'>I am not you normal developer</p>
                <p className='py-2 text-gray-600'>
                    I have spent the last 4 years studying in my university in the career of Software Enginering.
                    I have always had knack for technology and working computers.
                </p>
                <p className='py-2 text-gray-600'>
                   Fascinated with how intricate programming can be I was quick drawn to learn more.
                   I started learning Javascript, css and html and was even more enthused with making websites interactive and responsive for any divices.
                   I am now spending my time building projects with React JS, Firebase, and learning new technologies and applying increasingly better development practices. 
                </p>
                <p className='py-2 text-gray-500 underline cursor-pointer'>Check put some of my latest proyects.</p>
            </div>
            <div className='flex items-center justify-center w-full h-auto p-4 m-auto duration-300 ease-in shadow-xl shadow-gray-400 rounded-xl hover:scale-105'>
                <img className='rounded-xl' src={`https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80`} alt='/' />
            </div>
        </div>
    </div>
  )
}

export default About