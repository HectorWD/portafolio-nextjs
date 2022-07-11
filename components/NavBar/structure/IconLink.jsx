import React from 'react'
import Link from 'next/link'

const IconLink = ({iconUrl,icon}) => {
    return (
        <Link href={`${iconUrl}`} target='_blank'>
        <div className='p-2 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105'>
            {icon}
        </div>
        </Link>
        
    )
}

export default IconLink