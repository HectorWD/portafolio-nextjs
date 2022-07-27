import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import rickAndMortyImage from '../public/assets/projects/RickMorty.png'
import SkillProyect from '../components/Projects/Structure/SkillProyect'

const rickAndMorty = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative '>
        <div className='absolute top-0 left-0 w-full bg-black/40 h-[30vh] lg:h-[40vh] z-10' />
        <Image src={rickAndMortyImage} className='absolute z-1' layout='fill' objectFit='cover' alt='/' />

      </div>
      <div>
        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 '>
          <div className='col-span-4'>
            <p className='text-xl font-bold text-[#72abec] pb-2 '>Rick and Morty App</p>
            <p>This app was built using Next JS and is hosted on Vercel.
              Users are able to find all the information about of characters of the serie Rick and Morty thanks a RickAndMorty API
            </p>
            <a href='https://rick-and-morty-nu-fawn.vercel.app' target={'_new'}>
              <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
            </a>
            <a href='https://github.com/HectorWD/Rick-and-Morty' target={'_new'}>
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
                <SkillProyect title='RickAndMorty API' />
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

export default rickAndMorty