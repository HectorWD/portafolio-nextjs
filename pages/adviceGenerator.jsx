import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SkillProyect from '../components/Projects/Structure/SkillProyect'
import Advice from '../public/assets/projects/advice.PNG'

const adviceGenerator = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[40vh] lg:h-[50vh] relative '>
        <div className='absolute top-0 left-0 w-full bg-black/40 h-[40vh] lg:h-[50vh] z-10' />
        <Image src={Advice} className='absolute z-1' layout='fill' objectFit='cover' alt='/' />
      </div>
      <div>
        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 '>
          <div className='col-span-4'>
            <p className='text-xl font-bold text-[#3F3047] pb-2'>Advice Generator</p>
            <p>This app was built using Next JS and is hosted on Vercel.
              Users are able to find all type of advice this is generate by Advice API.
            </p>
            <a href='https://advice-generator-ashen-nine.vercel.app' target={'_new'}>
              <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
            </a>
            <a href='https://github.com/HectorWD/Advice-generator' target={'_new'}>
            <button className='px-8 py-2 mt-4'>Code</button>
            </a>
          </div>
          <div className='col-span-4 p-4 shadow-xl md:col-span-1 shadow-gray-400 rounded-xl'>
            <div className='p-2'>
              <p className='pb-2 font-bold text-center'>Technologies</p>
              <div className='grid grid-cols-3 md:grid-cols-1'>
                <SkillProyect title='React' />
                <SkillProyect title='Tailwind' />
                <SkillProyect title='Next JS' />
                <SkillProyect title='Advice API' />
              </div>
            </div>
          </div>
          <Link href={'/#projects'}>
            <p className='underline cursor-pointer '>Back</p>
          </Link>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default adviceGenerator