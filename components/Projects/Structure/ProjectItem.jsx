import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ProjectItem = ({urlImage,title,tecnoligies,url}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] p-4 rounded-xl'>
    <Image className='rounded-xl group-hover:opacity-10' src={urlImage} alt='/' />
    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] '>
        <h3 className='text-2xl tracking-wide text-center text-white'>{title} </h3>
        <p className='pt-2 pb-4 text-center text-white'>{tecnoligies} </p>
        <Link href={url}>
            <p className='py-3 text-lg font-bold text-center text-gray-700 bg-white rounded-lg cursor-pointer'>More Info</p>
        </Link>
    </div>
    </div>
  )
}

export default ProjectItem