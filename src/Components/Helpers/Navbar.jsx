import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Path } from '../utilities/Path';
import { GiHamburgerMenu } from "react-icons/gi";

export const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [Scroll, setScroll] = useState(0)
    window.addEventListener('scroll', (e) => {
        setScroll(window.scrollY)
    })
    
    const handleClick = (e) => {
    }
    return (
        <>
            <nav className={`flex z-50   ${Scroll>40?'bg-black ':'md:bg-black sm:bg-black bg-black  lg:bg-transparent'} duration-700   p-6 justify-between fixed w-full items-center lg:px-32 md:px-8 sm:px-20 px-10`}>
                <div>
                    <picture>
                        <img src="/logo-4.png" alt="" />
                    </picture>
                </div>
                <div className={`  lg:static left-0  ${open ? 'top-[4.5rem]' : '-top-[23rem]'}   lg:z-10  duration-700 flex  absolute  w-full  `}>
                    <ul className=' lg:flex justify-end lg:bg-transparent bg-black w-full   lg:gap-6 '>
                        {
                            Path.map(({ title, path }, id) => {
                                return <div className='lg:ps-0 ps-2.5 relative  ' key={id}>
                                    <li className='text-white  lg:border-0 border-b-2 border-b-gray-800 lg:p-0 p-2 lg:px-0 '>
                                        <Link activeClass="active" className='  capitalize font-mono font-semibold   cursor-pointer' to={path} spy={true} smooth={true} offset={50} duration={500} onSetActive={(e) => handleClick(e)}>
                                            {title}
                                        </Link>
                                    </li>
                                </div>
                            })
                        }
                    </ul>
                </div>
                <div className='lg:hidden cursor-pointer  visible hover:bg-red-500 p-1 bg-transparent rounded duration-700    translate-x-6  ' onClick={() => setOpen(!open)}  >
                    <GiHamburgerMenu className=' text-2xl  ' style={{ color: 'white' }}></GiHamburgerMenu>
                </div>
            </nav>
        </>
    )
}
