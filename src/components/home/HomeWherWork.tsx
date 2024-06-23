
'use client'

import React, { useRef } from 'react'
import ProjectCard from '../ProjectCard'

const HomeWherWork = () => {

    const date = new Date();
    const year = date.getFullYear();

    const projectsBB = [
        {
            title: "Prostor web application",
            text: "Prostor is a web application developed using Next.js and C#. It is designed to facilitate the booking of storage spaces for a wide range of items, from small belongings to large items like cars. I worked on the dynamic and responsive front-end part of the application and contributed to the back-end development as well.",
            link: "https://prostor.rs/"
        },
        {
            title: "Blackbird web application",
            text: "I created a complete website for Blackbird, a company focused on promoting its brand and services. This project involved designing and developing a user-friendly and visually appealing site to effectively showcase the company's offerings.",
            link: "https://dev.blackbird.rs"
        },
        {
            title: "Sve zna web application",
            text: "Sve Zna is an application that allows users to ask questions and receive solutions from advisors. I created the home page and the notifications page for this platform, ensuring a user-friendly interface and effective communication of updates to users.",
            link: "https://svezna.com/"
        },
        {
            title: "NetSuite SuiteScript",
            text: "I worked on personalizing client needs within Oracle NetSuite using SuiteScript. Additionally, I developed dynamic front-end applications with Next.js, creating customized and responsive solutions to meet diverse client requirements.",
            
        },
        
    ]
    const projectsSS = [
        {
            title: "Dispatcher log",
            text: "The Dispatcher Log is a sophisticated web application designed to manage the workflow and SCADA events of the Serbian electrical network. This application was developed with a robust front-end using AngularJS and a powerful back-end powered by Spring. It ensures seamless and efficient workflow management, enhancing the operational efficiency and reliability of the electrical network.",
        },
        
    ]
    const projectsMS = [
        {
            title: "JOSM map labeling",
            text: "I worked on a project involving map labeling in JOSM (Java OpenStreetMap Editor). My role included labeling objects on maps using imagery from Japanese cities. This task required precise annotation to enhance the object recognition capabilities of AI models.",
        },
        
    ]
    return (
        <>
            <div id='experience' className='flex flex-col'>
                <div className='w-full h-[60px]  rounded-full flex items-center flex-1'>
                    <h1 className='text-dark-green text-[60px] max-ssw:text-[45px] max-ssw:text-center w-full'>Where i have worked</h1>
                </div>
                <div className='flex flex-col'>
                    <div className='flex flex-row max-h-[3000px] pt-8  gap-8 max-ssw:gap-4'>
                        <div className='max-h-[3000px] min-w-1 bg-dark-green relative'>
                            <div className='w-8 h-8 max-ssw:w-4 max-ssw:h-4 rounded-full bg-dark-green absolute left-1/2 transform -translate-x-1/2 '>
                            </div>
                            <h1 className='absolute -left-[39px] top-[60px] -rotate-90 text-dark-green font-bold text-[25px]'>{year}</h1>
                            <div className='absolute w-[4px] h-5 top-[115px] -left-[9px] bg-dark-green'></div>
                            <h1 className='absolute -left-[39px] top-[150px] -rotate-90 text-dark-green font-bold text-[25px]'>2023</h1>
                        </div>
                        <div className={`bg-dark-green rounded-3xl shadow-lg w-full p-8  max-ssw:p-4 `}>
                            <h1 className='text-[55px] text-grey leading-none max-ssw:text-[45px] max-ssw:text-center'>Blackbird</h1>
                            <p className='text-grey my-4 text-[25px] max-ssw:text-[18px] max-ssw:text-center'>Working on personalization of client needs in Oracle Netsuite using
                                SuiteScript and developing dynamic front-end applications with Next.js.</p>
                            <h1 className='text-[48px] leading-none text-grey max-ssw:text-[35px] max-ssw:text-center mb-4'>Projects</h1>
                            <div className='grid grid-cols-2 max-lg:flex max-lg:flex-col gap-4'>
                                {
                                    projectsBB.map((i, index) =>
                                        <ProjectCard key={index} item={i} />
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <div className={`flex flex-row max-h-[1900px]  gap-8 max-ssw:gap-4`}>
                        <div className='max-h-[1900px] min-w-1 bg-dark-green relative'>
                            <div className='w-8 h-8 max-ssw:w-4 max-ssw:h-4 rounded-full bg-dark-green absolute top-8 left-1/2 transform -translate-x-1/2 '>
                            </div>
                            <h1 className='absolute -left-[39px] top-[92px] -rotate-90 text-dark-green font-bold text-[25px]'>2022</h1>
                        </div>
                        <div className={`bg-dark-green shadow-xl shadow-gray-600 rounded-3xl w-full p-8  max-ssw:p-4 mt-8 `}>
                            <h1 className='text-[55px] text-grey leading-none max-ssw:text-[45px] max-ssw:text-center'>Synsoft LTD.</h1>
                            <p className='text-grey text-[25px] max-ssw:text-[18px] max-ssw:text-center my-4'>Working on app Dispatcher log used for managing workflow of Serbian
                                electrical network. App was developed in Angular JS on front-end and Spring
                                on back-end.</p>
                            <h1 className='text-[48px] leading-none mb-4 text-grey max-ssw:text-[35px] max-ssw:text-center'>Projects</h1>
                            <div className='flex flex-row  max-lg:flex-col gap-4'>
                                {
                                    projectsSS.map((i, index) =>
                                        <ProjectCard key={index} item={i} />
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <div className={`flex flex-row max-h-[1900px]  gap-8 max-ssw:gap-4`}>
                        <div className='max-h-[1900px] min-w-1 bg-dark-green relative'>
                            <div className='w-8 h-8 max-ssw:w-4 max-ssw:h-4 rounded-full bg-dark-green absolute top-8 left-1/2 transform -translate-x-1/2 '>
                            </div>
                            <h1 className='absolute -left-[39px] top-[92px] -rotate-90 text-dark-green font-bold text-[25px]'>2020</h1>
                        </div>
                        <div className={`bg-dark-green shadow-xl shadow-gray-600 rounded-3xl w-full p-8  max-ssw:p-4 mt-8`}>
                        <h1 className='text-[55px] text-grey leading-none max-ssw:text-[45px] max-ssw:text-center'>Microsoft</h1>
                        <p className='text-grey text-[25px] max-ssw:text-[18px] max-ssw:text-center my-4'>Working on map labeling in JOSM. I was teaching AI to recognize objects on
                                map based on imagery of Japanese cities.</p>
                                <h1 className='text-[48px] leading-none mb-4 text-grey max-ssw:text-[35px] max-ssw:text-center'>Projects</h1>
                            <div className='flex flex-row  max-lg:flex-col gap-4'>
                                {
                                    projectsMS.map((i, index) =>
                                        <ProjectCard key={index} item={i} />
                                    )
                                }
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeWherWork