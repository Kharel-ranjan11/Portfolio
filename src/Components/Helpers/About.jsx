import React from 'react'
import { Element } from 'react-scroll'

export const About = () => {
    return (
        <>
            <Element name="home" className="element bg-[#171a1d]">
                <section className=' lg:p-4 md:p-4  md:flex md:justify-center lg:flex grid   lg:justify-around  items-center'>
                    <div>
                        <picture className='md:p-3 items-center'>
                            <img src="6.png" className='lg:w-[600px] object-cover lg:h-[700px] md:h-[500px] md:w-[400px] w-[400px] h-[400px]' alt="" />
                        </picture>
                    </div>
                    <div className='p-5 lg:w-[600px] w-[400px]  md:w-[600px] text-justify text-white font-mono '>
                        <h2 className='text-4xl text-white font-extrabold'>About </h2>
                        <span className='text-justify '>In quis amet ex veniam in irure est culpa veniam velit fugiat cupidatat duis anim commodo elit in occaecat cupidatat eu et sunt commodo voluptate ullamco magna nulla amet. Lorem ipsum officia veniam enim sit culpa velit proident enim ea officia aute non in mollit culpa anim magna sit veniam irure eiusmod.</span>
                    <section className='translate-y-3'>
                        <div>
                            <span>Business Lawyer</span>
                            <div className={`p-1 relative bg-[#3b3d3f]  lg:w-[550px] overflow-hidden rounded-full`}>
                                <div className='bg-[#ad8e6d] w-[80%]   rounded-full absolute left-0 top-0 h-full'></div>
                            </div>
                        </div>
                    </section>
                    </div>
                </section>
            </Element>
        </>
    )
}
