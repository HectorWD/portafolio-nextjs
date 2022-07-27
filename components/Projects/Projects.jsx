import React from 'react'
import RickMorty from '../../public/assets/projects/RickMorty.png'
import Netflix from '../../public/assets/projects/netflixClone.png'
import Advice from '../../public/assets/projects/advice.PNG'
import WeatherApp from '../../public/assets/projects/weatherApp.png'
import ProjectItem from './Structure/ProjectItem'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16 '>
            <p className='text-xl tracking-widest uppercase text-[#5651e5] ' >Projects</p>
            <h2 className='py-4'>What I have Built</h2>
            <div className='grid gap-8 md:grid-cols-2'>
                <ProjectItem urlImage={Netflix} title='Netflix Clone'tecnoligies='Next js | Tailwind | Firebase' url='/netflixClone' />
                <ProjectItem urlImage={WeatherApp} title='Weahter App'tecnoligies='Next js | Tailwind' url='/weatherApp' />
                <ProjectItem urlImage={RickMorty} title='Wiky of Rick and Morty'tecnoligies='Next js | Tailwind' url='/rickAndMorty' />
                <ProjectItem urlImage={Advice} title='Advice Generator'tecnoligies='Next js | Tailwind' url='/adviceGenerator' />
            </div>
        </div>
    </div>
  )
}

export default Projects