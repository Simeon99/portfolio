'use cleint'

import { useIsVisible } from '@/hooks/VIsibility'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'

const HomeTools = () => {

  const ref1 = useRef(null);
    const isVisible1 = useIsVisible(ref1);
    const ref2 = useRef(null);
    const isVisible2 = useIsVisible(ref2);
    const ref3 = useRef(null);
    const isVisible3 = useIsVisible(ref3);
    const ref4 = useRef(null);
    const isVisible4 = useIsVisible(ref4);

  return (
    <div className='py-[153px] '>
      <h1 id='tools' className='text-[60px] max-ssw:text-[45px] text-dark-green max-ssw:text-center'>Tools and languages I use</h1>
      <div className='grid grid-cols-2 max-lg:grid-cols-1 gap-4 pt-8'>
        <div  className={`w-full flex flex-col  bg-green rounded-3xl p-8 shadow-xl shadow-gray-600  `}>
          <h1 className=' text-[35px]  max-ssw:text-[25px] font-bold max-ssw:text-center text-dark-green'>Programming Languages</h1>
          <div ref={ref1} className={`grid grid-cols-6 max-ssw:grid-cols-4 w-full h-full  gap-4 place-items-center pt-4 ${isVisible1 ? "animate-pop-left-right" : ""}`}>
            <div className='col-span-2  hover:translate-y-[-10px] transition duration-300 ease-out'>
              <Link href={'https://www.java.com/'} target='_blank'>
                <Image src={'/java-logo.png'} alt='' width={80} height={80} className='max-sm:hidden flex' />
                <Image src={'/java-logo.png'} alt='' width={60} height={80} className='hidden max-sm:flex' />
              </Link>
            </div>
            <div className='col-span-2 hover:translate-y-[-10px] transition duration-300 ease-out'>
              <Link href={'https://learn.microsoft.com/en-us/dotnet/csharp/'} target='_blank'>
                <Image src={'/c.png'} alt='' width={80} height={80} className='max-sm:hidden flex' />
                <Image src={'/c.png'} alt='' width={60} height={80} className='hidden max-sm:flex'/>
              </Link>
            </div>
            <div className='col-span-2  hover:translate-y-[-10px] transition duration-300 ease-out'>
              <Link href={'https://www.typescriptlang.org/'} target='_blank'>
                <Image src={'/type-scrypt.png'} alt='' width={80} height={80} className='max-sm:hidden flex'/>
                <Image src={'/type-scrypt.png'} alt='' width={60} height={80} className='hidden max-sm:flex' />
              </Link>
            </div>
            <div className='col-span-3 max-ssw:col-span-2 hover:translate-y-[-10px] transition duration-300 ease-out'>
              <Link href={'https://www.python.org/'} target='_blank'>
                <Image src={'/Python-Symbol.png'} alt='' width={80} height={80} className='max-sm:hidden flex'/>
                <Image src={'/Python-Symbol.png'} alt='' width={60} height={80} className='hidden max-sm:flex'/>
              </Link>
            </div>
            <div className='col-span-3 max-ssw:col-span-4 hover:translate-y-[-10px] transition duration-300 ease-out'>
              <Link href={'https://www.javascript.com/'} target='_blank'>
                <Image src={'/JavaScript-logo.png'} alt='' width={80} height={80}  className='max-sm:hidden flex'/>
                <Image src={'/JavaScript-logo.png'} alt='' width={60} height={80} className='hidden max-sm:flex'/>
              </Link>
            </div>
          </div>


        </div>
        <div className='w-full h-full bg-dark-blue rounded-3xl p-8 shadow-xl shadow-gray-600'>
          <h1 className=' text-[35px]  max-ssw:text-[25px] font-bold max-ssw:text-center text-green'>Frontend</h1>
          <div ref={ref2} className={`grid grid-cols-3 max-ssw:grid-cols-4 gap-4 place-items-center ${isVisible2 ? "animate-pop-right-left" : ""}`}>
            <div className='max-ssw:col-span-2 hover:translate-y-[-10px] transition duration-300 ease-out'>
              <Link href={'https://react.dev/'} target='_blank'>
                <Image src={'/react.png'} alt='' width={80} height={80} className='max-sm:hidden flex'/>
                <Image src={'/react.png'} alt='' width={60} height={60} className='hidden max-sm:flex'/>
              </Link>
            </div>
            <div className='max-ssw:col-span-2'>
              <Link href={'https://nextjs.org/'} target='_blank'>
                <div className='hover:translate-y-[-10px] transition duration-300 ease-out rounded-xl p-4 bg-white'>
                  <Image src={'/nextjs-13.svg'} alt='' width={120} height={80} className='max-sm:hidden flex'/>
                  <Image src={'/nextjs-13.svg'} alt='' width={80} height={80} className='hidden max-sm:flex'/>
                </div>
              </Link>

            </div>
            <div className=' max-ssw:col-span-2 hover:translate-y-[-10px] transition duration-300 ease-out'>
              <Link href={'https://angular.dev/'} target='_blank'>
                <Image src={'/pngegg.png'} alt='' width={80} height={80} className='max-sm:hidden flex'/>
                <Image src={'/pngegg.png'} alt='' width={60} height={80} className='hidden max-sm:flex'/>
              </Link>
            </div>
            <div className='max-ssw:col-span-2 hover:translate-y-[-10px] transition duration-300 ease-out'>
              <Link href={'https://html.com/'} target='_blank'>
                <Image src={'/html.png'} alt='' width={80} height={80} className='max-sm:hidden flex'/>
                <Image src={'/html.png'} alt='' width={60} height={80} className='hidden max-sm:flex'/>
              </Link>
            </div>
            <div className='max-ssw:col-span-2 hover:translate-y-[-10px] transition duration-300 ease-out'>
              <Link href={'https://developer.mozilla.org/en-US/docs/Web/CSS'} target='_blank'>
                <Image src={'/css.png'} alt='' width={80} height={80} className='max-sm:hidden flex'/>
                <Image src={'/css.png'} alt='' width={60} height={80} className='hidden max-sm:flex'/>
              </Link>
            </div>
            <div className='max-ssw:col-span-2 hover:translate-y-[-10px] transition duration-300 ease-out'>
              <Link href={'https://sass-lang.com/'} target='_blank'>
                <Image src={'/sass.png'} alt='' width={80} height={80} className='max-sm:hidden flex'/>
                <Image src={'/sass.png'} alt='' width={60} height={80} className='hidden max-sm:flex'/>
              </Link>
            </div>
            <div className='max-ssw:col-span-2'>
              <Link href={'https://tailwindcss.com/'} target='_blank'>
                <div className='hover:translate-y-[-10px] transition duration-300 ease-out rounded-xl p-4 bg-white'>
                  <Image src={'/tailwind.svg'} alt='' width={80} height={80} className='max-sm:hidden flex'/>
                  <Image src={'/tailwind.svg'} alt='' width={60} height={80} className='hidden max-sm:flex'/>
                </div>
              </Link>
            </div>
            <div className='max-ssw:col-span-2'>
              <Link href={'https://www.json.org/json-en.html'} target='_blank'>
                <div className='hover:translate-y-[-10px] transition duration-300 ease-out rounded-xl p-2 bg-white'>
                  <Image src={'/json.png'} alt='' width={80} height={80} className='max-sm:hidden flex'/>
                  <Image src={'/json.png'} alt='' width={60} height={80} className='hidden max-sm:flex'/>
                </div>
              </Link>
            </div>
            <div className='max-ssw:col-span-4'>
            <Link href={'https://getbootstrap.com/'} target='_blank'>
              <div className='hover:translate-y-[-10px] transition duration-300 ease-out rounded-xl p-2 bg-white'>
                <Image src={'/bootstrap.png'} alt='' width={80} height={80} className='max-sm:hidden flex'/>
                <Image src={'/bootstrap.png'} alt='' width={60} height={80} className='hidden max-sm:flex'/>
              </div>
            </Link>
            </div>
          </div>

        </div>
        <div className='w-full flex flex-col  bg-dark-blue max-lg:bg-green rounded-3xl p-8 shadow-xl shadow-gray-600'>
          <h1 className=' text-[35px]  max-ssw:text-[25px] font-bold max-ssw:text-center text-green max-lg:text-dark-green'>Backend Development</h1>
          <div ref={ref3} className={`grid grid-cols-3 max-ssw:grid-cols-2 gap-4 place-items-center h-full ${isVisible3 ? "animate-pop-left-right" : ""}`}>
            <div className='hover:translate-y-[-10px] transition duration-300 ease-out'>
              <Link href={'https://spring.io/'} target='_blank'>
                <Image src={'/spring.png'} alt='' width={100} height={80} className='max-sm:hidden flex'/>
                <Image src={'/spring.png'} alt='' width={80} height={80} className='hidden max-sm:flex'/>
              </Link>
            </div>
            <Link href={'https://dotnet.microsoft.com/en-us/apps/aspnet'} target='_blank'>
              <div className='hover:translate-y-[-10px] transition duration-300 ease-out rounded-xl p-2 bg-white'>
                <Image src={'/asp.net.png'} alt='' width={80} height={80} className='max-sm:hidden flex'/>
                <Image src={'/asp.net.png'} alt='' width={60} height={80} className='hidden max-sm:flex'/>
              </div>
            </Link>
            <Link href={'https://flask.palletsprojects.com/en/3.0.x/'} target='_blank'>
              <div className='hover:translate-y-[-10px] transition duration-300 ease-out rounded-xl p-2 bg-white'>
                <Image src={'/flask.svg'} alt='' width={80} height={80} className='max-sm:hidden flex'/>
                <Image src={'/flask.svg'} alt='' width={60} height={80} className='hidden max-sm:flex'/>
              </div>
            </Link>
            <Link href={'https://www.mysql.com/'} target='_blank'>
              <div className='hover:translate-y-[-10px] transition duration-300 ease-out rounded-xl p-2 bg-white'>
                <Image src={'/Mysql_logo.png'} alt='' width={80} height={80} className='max-sm:hidden flex'/>
                <Image src={'/Mysql_logo.png'} alt='' width={60} height={80} className='hidden max-sm:flex'/>
              </div>
            </Link>
            <Link href={'https://www.postgresql.org/'} target='_blank'>
              <div className='hover:translate-y-[-10px] transition duration-300 ease-out rounded-xl p-2 bg-white'>
                <Image src={'/postgresql-logo.png'} alt='' width={80} height={80} className='max-sm:hidden flex'/>
                <Image src={'/postgresql-logo.png'} alt='' width={60} height={80} className='hidden max-sm:flex'/>
              </div>
            </Link>
            <div className='hover:translate-y-[-10px] transition duration-300 ease-out'>
              <Link href={'https://angular.dev/'} target='_blank'>
                <Image src={'/pngegg.png'} alt='' width={80} height={80} className='max-sm:hidden flex'/>
                <Image src={'/pngegg.png'} alt='' width={60} height={80} className='hidden max-sm:flex'/>
              </Link>
            </div>
          </div>
        </div>
        <div className='w-full flex flex-col bg-green max-lg:bg-dark-blue rounded-3xl p-8 shadow-xl shadow-gray-600'>
          <h1 className=' text-[35px]  max-ssw:text-[25px] font-bold max-ssw:text-center text-dark-green max-lg:text-green'>Other</h1>
          <div ref={ref4} className={`grid grid-cols-3 max-ssw:grid-cols-2 gap-4 place-items-center h-full ${isVisible4 ? "animate-pop-right-left" : ""}`}>
            <div className='hover:translate-y-[-10px] transition duration-300 ease-out'>
              <Link href={'https://git-scm.com/'} target='_blank'>
                <Image src={'/git.png'} alt='' width={80} height={80} className='max-sm:hidden flex'/>
                <Image src={'/git.png'} alt='' width={60} height={80} className='hidden max-sm:flex'/>
              </Link>
            </div>
            <Link href={'https://firebase.google.com/'} target='_blank'>
              <div className='hover:translate-y-[-10px] transition duration-300 ease-out rounded-xl p-2 bg-white'>
                <Image src={'/firebase.png'} alt='' width={120} height={80} className='max-sm:hidden flex'/>
                <Image src={'/firebase.png'} alt='' width={80} height={80} className='hidden max-sm:flex'/>
              </div>
            </Link>
            <Link href={'https://www.postman.com/'} target='_blank'>
              <div className='hover:translate-y-[-10px] transition duration-300 ease-out '>
                <Image src={'/postman.png'} alt='' width={100} height={80} className='max-sm:hidden flex'/>
                <Image src={'/postman.png'} alt='' width={60} height={80} className='hidden max-sm:flex'/>
              </div>
            </Link>
            <Link href={'https://www.linux.org/'} target='_blank'>
              <div className='hover:translate-y-[-10px] transition duration-300 ease-out '>
                <Image src={'/linux.png'} alt='' width={80} height={80} className='max-sm:hidden flex'/>
                <Image src={'/linux.png'} alt='' width={60} height={80} className='hidden max-sm:flex'/>
              </div>
            </Link>
            <Link href={'https://jsreport.net/'} target='_blank'>
              <div className='hover:translate-y-[-10px] transition duration-300 ease-out '>
                <Image src={'/jsreport.png'} alt='' width={80} height={80} className='rounded-xl max-sm:hidden flex' />
                <Image src={'/jsreport.png'} alt='' width={60} height={80} className='rounded-xl hidden max-sm:flex' />
              </div>
            </Link>
            <Link href={'https://josm.openstreetmap.de/'} target='_blank'>
              <div className='hover:translate-y-[-10px] transition duration-300 ease-out '>
                <Image src={'/josm.png'} alt='' width={80} height={80} className='rounded-xl max-sm:hidden flex' />
                <Image src={'/josm.png'} alt='' width={60} height={80} className='rounded-xl hidden max-sm:flex' />
              </div>
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default HomeTools