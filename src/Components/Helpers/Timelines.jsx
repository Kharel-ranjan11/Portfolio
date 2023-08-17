import React from 'react'
import './style.css'
import { resume } from '../utilities/Path'

export const Timelines = () => {
    return (
        <>
            <div className='Contact pb-4 bg-black md:px-8 lg:flex md:flex md:flex-wrap md:justify-center grid justify-center     lg:flex-wrap lg:justify-center pt-8  sm:px-20  '>
                {
                    resume?.map(({ key, date, title, span }, id) => {
                        return <section className='relative  z-10 section-width  px-16 ' key={id}>
                            <div className='align-center grid justify-start font-semibold'>
                                <h3 className='text-3xl  capitalize text-white  pb-2 -translate-x-4 '>{key}  </h3>
                            </div>
                            <ol className="relative border-l  border-[#ad8e6d]  ">
                                <li className=" ml-6 ">
                                    <div className="absolute  w-8 h-8 bg-[#ad8e6d] rounded-full  -left-4 border border-[#ad8e6d] "></div>
                                    <div className="absolute w-full -z-10 h-8 from-[#20262d] bg-gradient-to-r rounded-md   -left-1 "></div>
                                    <time className="mb-1 text-sm font-normal leading-none text-white align-middle font-mono   tracking-wider ">{date}</time>
                                    <h3 className="text-lg font-semibold text-white  pt-6  ">{title}</h3>
                                    <p className=" text-base font-normal text-yellow-100 pb-4 text-left">{span}</p>

                                </li>

                            </ol>

                        </section>
                    })
                }




            </div>
        </>
    )
}
