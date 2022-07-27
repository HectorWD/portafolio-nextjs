import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SkillProyect from '../components/Projects/Structure/SkillProyect'
import WeatherApp from '../public/assets/projects/weatherApp.png'

const weatherApp = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[50vh] relative '>
        <Image src={WeatherApp} className='absolute z-1' layout='fill' objectFit='cover' alt='/' />
      </div>
      <div>
        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 '>
          <div className='col-span-4'>
            <p className='text-[#19535F] text-xl font-bold pb-2'>Weather App</p>
            <p>
              This app was built using Next JS and is hosted on Vercel.
              Users are able to search the weather information of any city, all generated thanks by the Weather Api

            </p>
            <a href='https://weather-app-nextjs-857a4n5ok-hectorwd.vercel.app' target='_blank'>
              <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
            </a>
            <a href='https://github.com/HectorWD/weather-app' target='_blank'>
              <button className='px-8 py-2 mt-4'>Code</button>
            </a>

          </div>
          <div className='col-span-4 p-4 shadow-xl md:col-span-1 shadow-gray-400 rounded-xl'>
            <div className='p-2'>
              <p className='pb-2 font-bold text-center'>Technologies</p>
              <div className='grid grid-cols-3 md:grid-cols-1'>
                <SkillProyect title='Next js' />
                <SkillProyect title='React' />
                <SkillProyect title='Tailwind' />
                <SkillProyect title='Weather API' />
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

export default weatherApp