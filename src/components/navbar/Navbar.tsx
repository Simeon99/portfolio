"use client"

import { useNavbar } from '@/context/NavbarContext';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

export interface INavbarProps {
    items: INavbarItem[];
}

export interface INavbarItem {
    text: string;
    href: string;
}


const Navbar: React.FC<INavbarProps> = (props) => {
    const { items } = props;
    // const { setIsOpenOurWork, scrollTo } = useNavbar()
    const [isOpen, setIsOpen] = useState(false);
    const [hovered, setHobered] = useState<number>();
    const { scrollTo } = useNavbar()

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleScroll = (section: string) => {
        scrollTo(section)
        setIsOpen(false);
    }

    // const handleScroll = (section: string) => {
    //     scrollTo(section)

    // }
    useEffect(() => {
        const body = document.body;
        const originalStyle = body.style.overflow;

        if (isOpen) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = originalStyle;
        }

        return () => {
            body.style.overflow = originalStyle;
        };
    }, [isOpen]);

    return (

        <nav className='overflow-hidden select-none z-50'>
            <div className="absolute flex h-[140px] w-full  ">
                <div className="mx-auto max-w-screen-sw  w-full my-auto">
                    {/*Desktop*/}
                    <div className="max-ssw:hidden flex sw:px-32 lsw:px-14 px-8  justify-center w-full flex-row items-center ">
                        <div className='flex flex-row items-center gap-8'>
                            {items.map((i, index) =>
                                <div key={index} className='flex flex-col items-center relative justify-center h-11'>
                                    <div className='hover:cursor-pointer'
                                        onMouseEnter={() => setHobered(index)}
                                        onMouseLeave={() => setHobered(-1)}
                                        onClick={() => {
                                            handleScroll(i.href)
                                        }}
                                    >
                                        <span className='block w-full text-[15px] text-green'>{i.text}</span>
                                    </div>
                                    <div className={`${hovered === index ? 'opacity-100' : 'opacity-0 '} absolute transition-opacity duration-300 mx-auto bottom-0 rounded-full w-2 h-2 bg-green`}></div>
                                </div>
                            )}

                        </div>
                    </div>
                    {/*Mobile*/}
                    <div className="ssw:hidden flex sw:px-32 lsw:px-14 px-8  justify-between w-full flex-row items-center ">
                        <div className={"items-center w-full justify-between "}>
                            <div className='flex flex-row justify-end w-full'>

                                <button
                                    className="focus:outline-none hidden max-ssw:block z-50"
                                    onClick={toggleMenu}
                                >
                                    <div className={`w-6 h-0.5 bg-green mb-1 rounded-full transition-transform ${isOpen ? 'transform rotate-45 translate-y-1' : ''}`}></div>
                                    <div className={`w-6 h-0.5 bg-green mb-1 rounded-full transition-opacity ${isOpen ? 'opacity-0' : 'opacity-100'}`}></div>
                                    <div className={`w-6 h-0.5 bg-green rounded-full transition-transform ${isOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></div>
                                </button>
                            </div>
                            <div className={`overflow-y-auto fixed top-0 right-0 w-full h-full text-white bg-dark-blue shadow-xl z-40 transform transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>

                                <div className='flex flex-col text-[26px] pt-[76px] m-[57px] gap-8'>
                                    {items.map((i, index) =>
                                        <div key={index}
                                            onClick={() => {
                                                handleScroll(i.href)
                                            }}
                                            className="hover:text-[#505050] hover:cursor-pointer">{i.text}</div>
                                    )}
                                </div>
                                <div className='flex flex-col gap-[42px] mx-[57px] my-[68px]'>
                                    <div className='flex flex-row   gap-8'>
                                        <Link href={`https://www.linkedin.com/in/simeon-ilic/`} target='_blank'>
                                            <FaLinkedin size={32} color='#b0ff92' />
                                        </Link>
                                        <Link href={`https://github.com/Simeon99`} target='_blank'>
                                            <FaGithub size={32} color='#b0ff92' />
                                        </Link>
                                        <Link href={`mailto:simeonilic9@gmail.com`}>
                                            <SiGmail size={32} color='#b0ff92' />
                                        </Link>
                                    </div>
                                    <div>
                                        <p className='text-green'>All Rights reserved Simeon Ilić 2024</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default Navbar