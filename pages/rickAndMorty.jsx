import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import rickAndMortyImage from '../public/assets/projects/RickMorty.png'
import {RiRadioButtonFill} from 'react-icons/ri'

const rickAndMorty = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative '>
        <div className='absolute top-0 left-0 w-full bg-black/80 h-[30vh] lg:h-[40vh] z-10' />
        <Image src={rickAndMortyImage} className='absolute z-1' layout='fill' objectFit='cover' alt='/' />
        <div className='absolute top-[70%] left-[50%] right-[50%] w-full max-w-[1240px] translate-x-[-50%] translate-y-[-50%] z-10 text-white p-2 '>
          <h2 className='py-2'>Rick and Morty Api</h2>
          <h3> React JS/ Tailwind </h3>
        </div>
      </div>
      <div>
        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 '>
          <div className='col-span-4'>
            <p>Project</p>
            <h2>OverView</h2>
            <p>Descripcion general del proyecto..</p>
            <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
            <button className='px-8 py-2 mt-4'>Code</button>
          </div>
          <div className='col-span-4 p-4 shadow-xl md:col-span-1 shadow-gray-400 rounded-xl'>
            <div className='p-2'>
              <p className='pb-2 font-bold text-center'>Technologies</p>
              <div className='grid grid-cols-3 md:grid-cols-1'>
                <p className='flex items-center py-2 text-gray-600'>
                  <RiRadioButtonFill className='p-1'/>
                  React
                </p>
                <p className='flex items-center py-2 text-gray-600'>
                  <RiRadioButtonFill className='p-1'/>
                  Tailwind
                </p>
                <p className='flex items-center py-2 text-gray-600'>
                  <RiRadioButtonFill className='p-1'/>
                  Next js
                </p>
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