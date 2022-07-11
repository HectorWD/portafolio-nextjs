import React from 'react'
import Link from 'next/link'

export const NavLink = ({ title,url }) => {
    return (
        <Link href={`${url}`}>
            <li className='ml-10 text-sm uppercase hover:border-b'>{title} </li>
        </Link>
    )
}
