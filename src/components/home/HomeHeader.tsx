import Image from 'next/image'
import React from 'react'

const HomeHeader = () => {

    return (
        <div className="bg-dark-blue h-[600px] max-ssw:h-[400px] rounded-bl-[100px] w-full py-[80px] px-8 flex flex-row  gap-8 justify-between items-end" >
            <div className='flex flex-col space-y-0 z-10'>
                <h1 className="text-[90px] max-lg:text-[70px] max-ssw:text-[45px]   text-white leading-none animate-pupSlideIn">Hello,</h1>
                <h1 className="text-[90px] max-lg:text-[70px] max-ssw:text-[45px]  text-white leading-none animate-pupSlideIn">I am Simeon Ilić</h1>
                <h1 className="text-[90px] max-lg:text-[70px] max-ssw:text-[45px]  text-green leading-none animate-pupSlideIn">Software Developer.</h1>
            </div>
            {/* <div className='hidden absolute ssw:flex right-0 rounded-full'>
                <Image src={'/Slika za cv.png'} alt='Me' width={300} height={500} className='flex-1'/>
                <div className="absolute inset-0 bg-gradient-to-t from-dark-blue from-1% to-10%" />
                <div className="absolute inset-0 bg-gradient-to-r from-dark-blue from-1% to-10%" />
                <div className="absolute inset-0 bg-gradient-to-l from-dark-blue from-1% to-10%" />
            </div>
            <div className='ssw:hidden absolute flex top-[80px] left-1/2 transform -translate-x-1/2 rounded-full'>
                <Image src={'/Slika za cv.png'} alt='Me' width={300} height={500} className='flex-1'/>
                <div className="absolute inset-0 bg-gradient-to-t from-dark-blue from-1% to-10%" />
                <div className="absolute inset-0 bg-gradient-to-r from-dark-blue from-1% to-10%" />
                <div className="absolute inset-0 bg-gradient-to-l from-dark-blue from-1% to-10%" />
            </div> */}
            {/* <div className='md:hidden relative '>
                <Image src={'/Slika za cv.png'} alt='Me' width={200} height={500}/>
                <div className="absolute inset-0 bg-gradient-to-t from-dark-blue from-1% to-10%" />
                <div className="absolute inset-0 bg-gradient-to-r from-dark-blue from-1% to-10%" />
                <div className="absolute inset-0 bg-gradient-to-l from-dark-blue from-1% to-10%" />
            </div> */}

        </div>
    )
}

export default HomeHeader