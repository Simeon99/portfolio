'use client'

import React, { useState } from 'react'
import Link from 'next/link';

import { BsArrowRightCircleFill } from "react-icons/bs";

interface IProjectCard {
    title: string;
    text: string;
    link?: string | '';
}

const ProjectCard = ({ item }: { item: IProjectCard }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        item.link  ?
            <Link href={item.link} target='_blank' className=' bg-grey rounded-3xl p-8 max-ssw:p-4 flex flex-col justify-between cursor-pointer'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className='flex flex-col gap-4'>
                    <h2 className={`text-dark-green text-[35px]  max-ssw:text-[25px] font-bold max-ssw:text-center ${isHovered ? 'translate-y-[-10px] transition duration-300 ease-out' : 'ease-out duration-300'}`}>{item.title}</h2>
                    <p className='text-dark-green text-[25px] max-ssw:text-[18px] '>{item.text}</p>
                </div>
                <div className='w-full h-[1px] my-4 bg-dark-green'>

                </div>
                <div className='flex flex-row justify-between'>
                    <p className='text-dark-green text-[25px] max-ssw:text-[18px]  max-ssw:text-center'>Check here</p>
                    <BsArrowRightCircleFill color='#006633' size={32} className={`${isHovered ? '-rotate-45 transition' : ''} duration-300 ease-out`} />
                </div>
            </Link>
            : 
            <div className=' bg-grey col-span-1 rounded-3xl p-8 max-ssw:p-4  flex flex-col justify-between cursor-pointer'
            >
                <div className='flex flex-col gap-4'>
                    <h2 className={`text-dark-green text-[35px]  max-ssw:text-[25px] font-bold max-ssw:text-center ${isHovered ? 'translate-y-[-10px] transition duration-300 ease-out' : 'ease-out duration-300'}`}>{item.title}</h2>
                    <p className='text-dark-green text-[25px] max-ssw:text-[18px] '>{item.text}</p>
                </div>
            </div>


    )
}

export default ProjectCard