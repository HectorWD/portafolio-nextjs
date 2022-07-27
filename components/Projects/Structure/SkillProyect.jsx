import React from 'react'
import { RiRadioButtonFill } from 'react-icons/ri'


const SkillProyect = ({title}) => {
    return (
        <p className='flex items-center py-2 text-gray-600'>
            <RiRadioButtonFill className='p-1' />
            {title}
        </p>
    )
}

export default SkillProyect