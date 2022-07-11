import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { BsPersonLinesFill } from 'react-icons/bs'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import Link from 'next/link'
import ContactLink from './structure/ContactLink'

const Contact = () => {
    return (
        <div id='contact' className='w-full lg:h-screen'>
            <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
                <p className='text-xl tracking-widest uppercase text-[#5651e5] '>Contact</p>
                <h2 className='py-4' >Get In touch</h2>
                <div className='grid gap-8 lg:grid-cols-5'>
                    {/* Left */}
                    <div className='w-full h-full col-span-3 p-4 shadow-xl lg:col-span-2 shadow-gray-400 rounded-xl'>
                        <div className='h-full lg:p-4'>
                            <img className='duration-300 ease-in rounded-xl hover:scale-105' src='https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80' />

                            <div>
                                <h2 className='py-2'>Hector Wong</h2>
                                <p>Front-End Developer</p>
                                <p className='py-4'>I am available for freelance or full-time positions. Contact me and let's talk.</p>
                            </div>
                            <div className='py-4 '>
                                <p className='pt-8 uppercase'>Contact With Me</p>
                                <div className='flex flex-row items-center justify-between py-4'>
                                    <ContactLink icon={<FaLinkedinIn/>} url='https://www.linkedin.com/in/wongduranhector/'/>
                                    <ContactLink icon={<FaGithub />} url='https://github.com/HectorWD'/>
                                    <ContactLink icon={<BsPersonLinesFill />} url='/#contact'/>
                                    <ContactLink icon={<AiOutlineMail />} url='mailto:hectorwong2110@gmail.com'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Right */}
                    <div className='w-full h-auto col-span-3 shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                        <div className='p-4'>
                            <form>
                                <div className='grid w-full gap-4 py-2 md:grid-cols-2'>
                                    <div className='flex flex-col'>
                                        <label className='py-2 text-sm uppercase'>Name</label>
                                        <input
                                            className='p-3 border-2 border-gray-300 rounded-lg'
                                            type={'text'}
                                        />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='py-2 text-sm uppercase'>Phone Number</label>
                                        <input
                                            className='p-3 border-2 border-gray-300 rounded-lg'
                                            type={'text'}
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='py-2 text-sm uppercase'>Email</label>
                                    <input
                                        className='p-3 border-2 border-gray-300 rounded-lg'
                                        type={'email'}
                                    />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='py-2 text-sm uppercase'>Subject</label>
                                    <input
                                        className='p-3 border-2 border-gray-300 rounded-lg'
                                        type={'text'}
                                    />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='py-2 text-sm uppercase'>Message</label>
                                    <textarea
                                        className='p-3 border-2 border-gray-300 rounded-lg' rows={10}
                                    ></textarea>
                                </div>
                                <button className='w-full p-4 mt-4 text-gray-100'>Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
                {/*Icon to up */}
                <div className='flex justify-center py-12'>
                    <Link href={'/'}>
                        <div className='p-4 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110'>
                            <HiOutlineChevronDoubleUp className='text-[#5651e5]' size={30} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Contact