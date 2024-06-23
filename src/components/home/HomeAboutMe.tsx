'use client'

import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import HomeWherWork from './HomeWherWork'
import { useIsVisible } from '@/hooks/VIsibility';
import HomeTools from './HomeTools';

const HomeAboutMe = () => {
  const ref1 = useRef(null);
  const isVisible = useIsVisible(ref1);

  return (
    <div className="bg-grey h-full relative rounded-tr-[100px] rounded-br-[100px] px-8 pb-[100px]">
      <div className='flex absolute right-8 top-0'></div>
      <div id='about' className='flex flex-row items-end gap-8 max-lg:flex-col max-lg:items-center py-[153px]'>
        <div  className={`flex right-0 relative flex-none `}>
          <Image src={'/Slika za cv.png'} alt='Me' width={300} height={350} className='flex-1  z-10 max-ssw:hidden' />
          <Image src={'/Slika za cv.png'} alt='Me' width={250} height={300} className='flex-1  z-10 hidden max-ssw:flex' />
          <div ref={ref1} className={`absolute shadow-lg  shadow-gray-600  bg-dark-green right-0 bottom-0 max-ssw:w-[200px] max-ssw:h-[290px] w-[250px] h-[350px] transition-opacity  ease-in duration-700  ${isVisible ? "opacity-100" : "opacity-0"}`}></div>
          <div className={`absolute shadow-lg shadow-gray-600 bg-dark-blue right-0 bottom-0 max-ssw:w-[250px] max-ssw:h-[250px] w-[300px] h-[300px] transition-opacity ease-in duration-1000 ${isVisible ? "opacity-100 " : "opacity-0"}`}></div>
        </div>
        <div className='flex flex-col text-justify '>
          <div className='w-full text-right'>
            <h1 className="text-[75px] text-dark-blue  max-ssw:text-[45px]" >About me</h1>
          </div>
          <p className='text-[25px] max-ssw:text-[18px]'>
            As a dedicated and ambitious
            Software Engineer with a passion
            for acquiring new experiences and
            expanding my knowledge of
            cutting-edge technologies, I
            believe your company stands out
            to me as the perfect match for my
            skills and aspirations. <br /> <br />
            Alongside my substantial
            experience, I can state that I am a
            fast learner, person with a strong
            work ethic and I can offer a lot of
            energy and will to adapt quickly.
            With a strong desire for continual
            improvement, my primary
            objective is to develop innovative
            software solutions that drive your
            company&apos;s growth and success.
          </p>
        </div>
      </div>

      
          <HomeWherWork />
          <HomeTools />


    </div>
  )
}

export default HomeAboutMe