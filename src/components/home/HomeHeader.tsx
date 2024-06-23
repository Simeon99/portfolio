import React from 'react'

const HomeHeader = () => {

    return (
        <div className="bg-dark-blue h-[600px] max-ssw:h-[400px] rounded-bl-[100px] w-full py-[80px] px-8 flex flex-row  gap-8 justify-between items-end" >
            <div className='flex flex-col space-y-0 z-10'>
                <h1 className="text-[90px] max-lg:text-[70px] max-ssw:text-[45px]   text-white leading-none animate-pupSlideIn">Hello,</h1>
                <h1 className="text-[90px] max-lg:text-[70px] max-ssw:text-[45px]  text-white leading-none animate-pupSlideIn">I am Simeon Ilić</h1>
                <h1 className="text-[90px] max-lg:text-[70px] max-ssw:text-[45px]  text-green leading-none animate-pupSlideIn">Software Developer.</h1>
            </div>
        </div>
    )
}

export default HomeHeader