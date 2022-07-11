import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { BsPersonLinesFill } from 'react-icons/bs'
import MainLink from './structure/MainLink'
const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center '>
            <div>
                <p className='text-sm tracking-widest text-gray-600 uppercase '>
                    Let s build something together
                </p>
                <h1 className='py-4 text-gray-700'>
                    Hi I am <span className='text-[#5651e5] '>Hector Wong</span>
                </h1>
                <h1 className='py-2 text-gray-700'>A Front-End Web Developer</h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto '>
                    I am a front-end web developer specializing in building 
                    and designing exceptional experience.Currently, 
                    I am focused on building responsive front-end web aplications while 
                    learning back-end technologies.
                </p>
                <div className='flex justify-between items-center max-w-[330px] m-auto py-4 '>
                    <MainLink icon={<FaLinkedinIn/>} url='https://www.linkedin.com/in/wongduranhector/' />
                    <MainLink icon={<FaGithub/>} url='https://github.com/HectorWD' />
                    <MainLink icon={<BsPersonLinesFill/>} url='/#contact' />
                    <MainLink icon={<AiOutlineMail/>} url='mailto:hectorwong2110@gmail.com' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main