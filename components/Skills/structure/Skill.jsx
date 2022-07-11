import React from 'react'
import Image from 'next/image'


const Skill = ({nameSkill,url}) => {
    return (
        <div className='p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105'>
            <div className='grid items-center justify-center grid-cols-2 gap-4'>
                <div className='m-auto'>
                    <Image src={`/assets/skills/${url}`} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3> {nameSkill} </h3>
                </div>
            </div>
        </div>
    )
}

export default Skill