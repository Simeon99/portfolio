"use client"

import { useNavbar } from '@/context/NavbarContext';
import Link from 'next/link';
import React, { useState } from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";



const Footer = () => {

    const [hovered, setHobered] = useState<number>();

    const { scrollTo } = useNavbar()

    const handleScroll = (section: string) => {
        scrollTo(section)
    }

    return (
        <div id='contact' className=' w-full h-full '>
            {/* <div className='absolute w-1/2 right-0 h-full bg-dark-blue -z-10'></div>
            <div className='absolute w-1/2 left-0 h-full bg-grey -z-10'></div> */}
            <div className='mx-auto max-w-screen-sw h-full w-full my-auto bg-dark-blue z-10 rounded-tl-[100px]'>
                <div className='flex flex-col gap-8 px-8 py-[150px] max-ssw:pt-[94px]'>
                    <h1 className='text-[60px]  max-ssw:text-[45px] text-green'>Contact</h1>
                    <div className='grid max-ssw:grid-cols-1 max-ssw:gap-8 grid-cols-2'>
                    <div className='flex flex-col gap-4'>
                            <div className='flex flex-row gap-4 items-center'>
                                <FaLinkedin size={32} color='#b0ff92' />
                                <div className='flex flex-col items-center relative justify-center'>
                                    <Link href={'https://www.linkedin.com/in/simeon-ilic/'} target='_blank' className='text-white hover:text-green'>Simeon Ilic</Link>
                                    <div className={`${hovered === 0 ? 'opacity-100' : 'opacity-0 '}   absolute transition-opacity top-6 duration-300 mx-auto bottom-0 rounded-full w-2 h-2 bg-green`}></div>
                                </div>

                            </div>
                            <div className='flex flex-row gap-4 items-center'>
                                <FaGithub size={32} color='#b0ff92' />
                                <Link href={'https://github.com/Simeon99'} target='_blank' className='text-white hover:text-green'>Simeon99</Link>
                            </div>
                            <div className='flex flex-row gap-4 items-center'>
                                <SiGmail size={32} color='#b0ff92' />
                                <Link href={'mailto:simeonilic9@gmail.com'}  passHref  className='text-white hover:text-green'>simeonilic9@gmail.com</Link>
                            </div>
                        </div>
                        <div className='w-full h-[2px] bg-green rounded-full hidden max-ssw:flex'></div>
                        <div className='flex flex-col gap-4'>
                            <div className='flex flex-row gap-4 items-center'>
                                <div className='w-4 h-[2px] bg-green'></div>
                                <span className='text-white hover:cursor-pointer hover:text-green' onClick={() => handleScroll('about')}>About me</span>

                            </div>
                            <div className='flex flex-row gap-4 items-center'>
                                <div className='w-4 h-[2px] bg-green'></div>
                                <span className='text-white hover:cursor-pointer hover:text-green'  onClick={() => handleScroll('experience')}>Experience</span>
                            </div>
                            <div className='flex flex-row gap-4 items-center'>
                                <div className='w-4 h-[2px] bg-green'></div>
                                <span className='text-white hover:cursor-pointer hover:text-green' onClick={() => handleScroll('tools')}>Tools and languages</span>
                            </div>
                        </div>
                        
                        

                    </div>
                </div>
            </div>

        </div >
    )
}

export default Footer