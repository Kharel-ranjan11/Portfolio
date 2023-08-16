import React, { useState } from 'react';
import { Element } from 'react-scroll';
import { ParallaxBanner } from 'react-scroll-parallax';
import Typewriter from 'typewriter-effect';
import './style.css';

export const HeroSection = () => {
    const [Scroll, setScroll] = useState(0)
    window.addEventListener('scroll', (e) => {
        setScroll(window.scrollY)
    })

    return (
        <>
            <Element name="home" className="element">

                <section className='relative   '>
                    <ParallaxBanner
                        layers={[
                            { image: './7.jpg', speed: -30 },
                        ]}
                        className={`aspect-[2/1] object-cover   lg:h-[100vh] md:h-[56vh] sm:h-[56vh] ${window.innerWidth==360 && 'h-[100vh]'}  height_ `}
                    >
                        <main className='relative lg:translate-y-0 translate-y-24   md:flex md:justify-center lg:flex grid   lg:justify-around  items-center  z-40'>
                            <div className='ps-9 relative ' >
                                <div className='md:w-[400px] font-semibold lg:w-[500px] text-white font-mono'>
                                    <span className='lg:tracking-[10px] tracking-[6px] sm:tracking-[10px] md:tracking-[10px]'>Your Legal Partner </span>
                                    <h2 className=' md:text-5xl sm:text-5xl text-2xl lg:text-5xl'>Hi,I'm <code className=' text-[#ad8e6d]'>Ranjan kharel</code></h2>
                                    <span className='md:text-5xl sm:text-5xl text-2xl lg:text-5xl  '>
                                        <Typewriter
                                            options={{
                                                strings: ['a Web developer', 'a MERN Stack', 'a UI/UX design'],
                                                autoStart: true,
                                                loop: true,
                                            }}

                                        />
                                    </span>

                                    <span className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos corporis illo sed iste assumenda? Dicta commodi debitis laborum a magnam repellat atque! Quas quia nulla minus adipisci, dolores dolorum blanditiis?</span>
                                    <br /> <button className='p-2 translate-y-3 bg-[#ad8e6d] rounded cursor-pointer relative z-50 '>Contact</button>
                                </div>
                            </div>
                            <div className=' items-center'>
                                <picture className=''>
                                    <img src="5.png" className='object-cover lg:w-[600px] lg:h-[700px] md:h-[500px] md:w-[400px] ' alt="" />
                                </picture>
                            </div>
                            <div className='absolute '></div>
                        </main>
                    </ParallaxBanner>
                    <div className={`absolute bottom-14 ${Scroll > 5 ? 'hidden' : 'visible'} animate-bounce md:left-[28rem] lg:left-[48rem] cursor-pointer left-44 z-50`} onClick={() => { window.scrollTo(1650, 1650) }}>
                        <span className='bg-transparent  relative border  p-4 rounded-full  '>
                            <span className='absolute  rounded-full left-2 translate-x-1 top-6 bg-yellow-600 h-2 w-2'></span>
                        </span>
                    </div>
                    <div className='absolute bg-gradient z-40 top-0 left-0 h-full w-full'></div>
                </section>
            </Element>

        </>
    )
}
