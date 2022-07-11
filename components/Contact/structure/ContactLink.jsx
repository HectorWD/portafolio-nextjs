import React from 'react'
import Link from 'next/link'

const ContactLink = ({ icon, url }) => {
    return (
        <Link href={url}>
            <div className='p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110'>
                {icon}
            </div>
        </Link>
    )
}

export default ContactLink