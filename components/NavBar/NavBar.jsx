import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { BsPersonLinesFill } from 'react-icons/bs'
import { NavLink } from './structure/NavLink'
import IconLink from './structure/IconLink'

const NavBar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false)
    const [navbg, setNavbg] = useState('#ecf0f3')
    const [linkColor, setLinkColor] = useState('#1f2937')
    const router= useRouter()
    useEffect(() => {
        if(router.asPath==='/rickAndMorty'){
            setNavbg('transparent')
            setLinkColor('#ecf0f3')
        }else{
            setNavbg('#ecf0f3')
            setLinkColor('#1f2937')
        }
    }, [router])


    const handleNav = () => {
        setNav((nav) => !nav)
    }

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY > 90) {
                setShadow(true)
            } else {
                setShadow(false)
            }
        }
        window.addEventListener('scroll', handleShadow);
    }, [])

    return (
        <div
            style={{backgroundColor:`${navbg}`}}
            className={shadow ? ' fixed w-full h-20 shadow-xl z-[100]' : ' fixed w-full h-20 z-[100]'} >
            <div
                className='flex items-center justify-between w-full h-full px-2 2xl:px-16 '>
                <Link href='/'>
                    <Image
                        src='/assets/img/logo.png' alt='/'
                        width='100' height='100'
                    />
                </Link>
                <div>
                    <ul 
                    style={{color:`${linkColor}`}}
                    className='hidden md:flex'>
                        <NavLink url='/' title={'home'} />
                        <NavLink url='/#about' title={'about'} />
                        <NavLink url='/#skills' title={'skills'} />
                        <NavLink url='/#projects' title={'projects'} />
                        <NavLink url='/#contact' title={'Contact'} />
                    </ul>
                    <div 
                    style={{color:`${linkColor}`}}
                    className='md:hidden' onClick={handleNav}>
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>
            <div 
            className={nav ? 'md:hidden fixed top-0 left-0 w-full h-screen bg-black/70' : ''}>
                <div className=
                    {nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500 '
                        : 'fixed left-[-100%] top-0 w-[75%] p-10 ease-in duration-500 '}>
                    <div>
                        <div className='flex items-center justify-between w-full'>
                            <Link href='/'>
                                <Image src='/assets/img/logo.png' alt='/' width='100' height='100' />
                            </Link>
                            <div
                                className='p-3 rounded-full shadow-lg cursor-pointer shadow-gray-400'
                                onClick={handleNav}
                            > <AiOutlineClose />
                            </div>
                        </div>
                        <div className='my-4 border-b border-gray-300'>
                            <p className='w-[85%] md:w-[90%] py-4'>
                                Let s build something legendary together
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col py-4'>
                        <ul className='uppercase'>
                            <Link href='/'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>Home</li>
                            </Link>
                            <Link href='/#about'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>About</li>
                            </Link>
                            <Link href='/#skills'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>Skills</li>
                            </Link>
                            <Link href='/#projects'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>Projects</li>
                            </Link>
                            <Link href='/#contact'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>Contact</li>
                            </Link>
                        </ul>
                        <div className='pt-40'>
                            <p className='uppercase tracking-widest text-[#5651e5] '>Let s Connect</p>
                            <div className='flex items-center justify-between my-4 sm:w-[80%] '>
                                <IconLink icon={<FaLinkedinIn/>} iconUrl='https://www.linkedin.com/in/wongduranhector/'/>
                                <IconLink icon={<FaGithub/>} iconUrl='https://github.com/HectorWD'/>
                                <IconLink icon={<AiOutlineMail/>} iconUrl='mailto:hectorwong2110@gmail.com'/>
                                <IconLink icon={<BsPersonLinesFill/>} iconUrl='/#contact'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar