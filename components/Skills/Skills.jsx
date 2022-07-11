import React from 'react'
import Image from 'next/image'
import Skill from './structure/Skill'

const Skills = () => {
  return (
    <div id='skills' className='w-full p-2 lg:h-screen'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full '>
            <p className='text-xl tracking-widest uppercase text-[#5651e5] '>Skills</p>
            <h2 className='py-4'>What Can I Do</h2>
            <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
                <Skill nameSkill='JAVASCRIPT' url='javascript.svg'/>
                <Skill nameSkill='HTML' url='html.svg'/>
                <Skill nameSkill='CSS3' url='css.svg'/>
                <Skill nameSkill='TAILWIND' url='tailwindcss.svg'/>
                <Skill nameSkill='STYLED COMPONENTS' url='styled-components.svg'/>
                <Skill nameSkill='REACT' url='react.svg'/>
                <Skill nameSkill='Next js' url='next-js.svg'/>
                <Skill nameSkill='GIT HUB' url='github.svg'/>
            </div>
        </div>
    </div>
  )
}

export default Skills