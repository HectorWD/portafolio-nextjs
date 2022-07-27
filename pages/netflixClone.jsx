import React from 'react'
import Netflix from '../public/assets/projects/netflixClone.png'
import Image from 'next/image'
import Link from 'next/link'
import SkillProyect from '../components/Projects/Structure/SkillProyect'


const netflixClone = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[50vh] relative '>
        <Image src={Netflix} className='absolute z-1' layout='fill' objectFit='cover' alt='/' />
      </div>
      <div>
        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 '>
          <div className='col-span-4'>
            <p className='text-[#cf3535] text-xl font-bold pb-2'>Netflix App Clone</p>
            <p>
              This app was built using Next JS and is hosted on Vercel.
              Users are able to create your own account and add your favorite movies.
              You will be able to see all types of movies thanks a theMovieDB API and
              create your own account section with your favorites movies, all this saved in firestore.

            </p>
            <a href='https://netflix-clone-psi-seven.vercel.app' target='_new'>
              <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
            </a>
            <a href='https://github.com/HectorWD/Netflix-clone' target='_new'>
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
                <SkillProyect title='Firebase' />
                <SkillProyect title='TheMovieDB API' />
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

export default netflixClone