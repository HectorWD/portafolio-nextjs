import React from 'react'

const ContactLink = ({ icon, url }) => {
    return (
        <a href={url} target={'_blank'}>
            <div className='p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110'>
                {icon}
            </div>
        </a>
    )
}

export default ContactLink