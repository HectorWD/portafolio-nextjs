import React from 'react'
import RickMorty from '../../public/assets/projects/RickMorty.png'
import ProjectItem from './Structure/ProjectItem'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16 '>
            <p className='text-xl tracking-widest uppercase text-[#5651e5] ' >Projects</p>
            <h2 className='py-4'>What I have Built</h2>
            <div className='grid gap-8 md:grid-cols-2'>
                <ProjectItem urlImage={RickMorty} title='Browser of characters of Rick and Morty'tecnoligies='Next js' url='/rickAndMorty' />
                <ProjectItem urlImage={RickMorty} title='Browser of characters of Rick and Morty'tecnoligies='Next js' url='/rickAndMorty' />
                <ProjectItem urlImage={RickMorty} title='Browser of characters of Rick and Morty'tecnoligies='Next js' url='/rickAndMorty' />
                <ProjectItem urlImage={RickMorty} title='Browser of characters of Rick and Morty'tecnoligies='Next js' url='/rickAndMorty' />
            </div>
        </div>
    </div>
  )
}

export default Projects