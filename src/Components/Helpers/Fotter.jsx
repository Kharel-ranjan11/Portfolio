import React from 'react';
import { BiLogoFacebook, BiLogoInstagramAlt, BiLogoLinkedin, BiLogoTwitter } from "react-icons/bi";

export const Fotter = () => {
    return (
        <>
            <footer className="bg-black p-6 px-12 flex   justify-center lg:p-4 md:p-4   text-white ">
                <div className=' justify-around items-center  lg:flex md:flex sm:flex grid gap-4   ' >
                    <div className='text-center'>© Copyright 2022 - Kyros by Designesia</div>
                    <div className='flex gap-5 justify-center translate-x-[0rem] lg:translate-x-0 md:translate-x-0 sm:translate-x-0 align-middle'>
                        <a href="#" className='p-2 hover:bg-slate-100 hover:text-[#ad8e6d] text-2xl duration-700 transition-all rounded-full  '><span className=''><BiLogoFacebook /></span></a>
                        <a href="#" className='p-2 hover:bg-slate-100 hover:text-[#ad8e6d] text-2xl duration-700 transition-all rounded-full  '><span className=''><BiLogoInstagramAlt /></span></a>
                        <a href="#" className='p-2 hover:bg-slate-100 hover:text-[#ad8e6d] text-2xl duration-700 transition-all rounded-full  '><span className=''><BiLogoLinkedin /></span></a>
                        <a href="#" className='p-2 hover:bg-slate-100 hover:text-[#ad8e6d] text-2xl duration-700 transition-all rounded-full  '><span className=''><BiLogoTwitter /></span></a>
                    </div>
                </div>
            </footer>

        </>
    )
}
