import React from 'react';
import { Element } from 'react-scroll';
import './style.css';

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
                    <div className={`1 p-5 lg:w-[600px] ${window.innerWidth == 412 && 'w-[410px]'}  ${window.innerWidth == 375 && 'w-[373px]'} ${window.innerWidth == 325 && 'w-[320px]'}  md:w-[600px] text-justify text-white font-mono  `}>
                        <h2 className='text-4xl text-white font-light'>About </h2>
                        <span className='text-justify '>In quis amet ex veniam in irure est culpa veniam velit fugiat cupidatat duis anim commodo elit in occaecat cupidatat eu et sunt commodo voluptate ullamco magna nulla amet. Lorem ipsum officia veniam enim sit culpa velit proident enim ea officia aute non in mollit culpa anim magna sit veniam irure eiusmod.</span>
                        <section className='translate-y-3'>
                            {
                                [{ title: 'Business Lawyer', percentage: '50' }, { title: 'Personal Lawyer', percentage: '80' }, { title: ' Family Lawyer', percentage: '50' }, { title: 'Estate Lawyer', percentage: '80' },{ title: 'Corporate Lawyer', percentage: '50' }]?.map(({ title, percentage }, id) => {
                                    return <div className='leading-10'>
                                        <span>{title}</span>
                                        <div data-name={percentage} className={`p-1 relative bg-[#3b3d3f]   lg:w-[550px] overflow-hidden rounded-full `}>
                                            <div  className={`bg-[#00ffff] w-[${percentage}%] rounded-full absolute left-0 top-0 h-full `}></div>
                                        </div>
                                    </div>
                                })
                            }

                        </section>
                    </div>
                </section>
            </Element>
        </>
    )
}
