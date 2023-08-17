import React from 'react';
import { BiLogoFacebook, BiLogoInstagramAlt, BiLogoLinkedin, BiLogoTwitter } from "react-icons/bi";
import { TeamData } from '../utilities/Path';
export const Team = () => {
    return (
        <>
            <section className='bg-[#171a1d] pb-14'>
                <div className='relative'>
                    <div className='text-white text-center  font-mono relative z-10 '>
                        <h2 className='text-4xl pt-12 pb-12 underline underline-offset-2 capitalize font-semibold   '> Meet My Team</h2>

                        <div className=''>
                            <div className='md:flex md:justify-center lg:flex grid place-content-center   lg:justify-around  items-center lg:px-32 md:px-8 sm:px-20 px-5 gap-5 text-justify o'>
                                {
                                    TeamData.map(({ img, name, title }, id) => {
                                        return <div className='rounded-lg w-[350px] overflow-hidden  scale-95' key={id}>
                                            <div className='relative'>
                                                <picture>
                                                    <img src={img} className='rounded-md grayscale duration-700 hover:scale-110 transition-all scale-100  hover:grayscale-0' alt="5.png" />
                                                </picture>
                                                <div className='absolute bottom-0 left-0 w-full h-[0px] bg-transparent flex justify-center items-end'>
                                                    <div className='flex -translate-y-9 gap-3 bg-[#ad8e6d] p-2 rounded shadow-sm '>
                                                        <span><BiLogoFacebook /></span>
                                                        <span><BiLogoTwitter /></span>
                                                        <span><BiLogoInstagramAlt /></span>
                                                        <span><BiLogoLinkedin /></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='text-center pt-4 '>
                                                <p className='text-3xl '>{name}</p>
                                                <span className='tracking-widest'>{title}</span>
                                            </div>
                                        </div>
                                    })
                                }
                            </div>



                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
