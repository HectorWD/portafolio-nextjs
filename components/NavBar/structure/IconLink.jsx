import React from 'react'

const IconLink = ({iconUrl,icon}) => {
    return (
        <a href={`${iconUrl}`} target='_blank'>
        <div className='p-2 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105'>
            {icon}
        </div>
        </a>
        
    )
}

export default IconLink