import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import Typewriter from 'typewriter-effect';
import './style.css';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export const HeroSection = () => {
    return (
        <>
            <Element name="home" className="element">

                <section className='relative lg:h-auto md:h-[100vh] ] '>
                    <ParallaxBanner
                        layers={[
                            { image: './7.jpg', speed: -30 },
                        ]}
                        className="aspect-[2/1] object-cover h-[150vh] lg:h-[100vh] "
                    >
                        <div className=' heros-custom    absolute inset-0    '>
                            <div className='text-sm    lg:w-[500px]  font-bold align-middle  text-white font-mono '>
                                <span className='text-xs text-white lg:tracking-[13px] md:tracking-[13px] sm:tracking-[13px] tracking-[10px] uppercase '>Your Legal Partner</span>
                                <p className='lg:text-5xl md:text-5xl  sm:text-5xl text-3xl '>Hi,I'm <code className='text-orange-300'>Ranjan kharel</code></p>
                                <span className='lg:text-5xl md:text-5xl  sm:text-5xl text-3xl font-mono'>

                                    <Typewriter
                                        options={{
                                            strings: ['a Designer.', 'a Photographer.', 'a Freelancer.', 'a Illustrator.'],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </span>
                                <span className='text-justify font-mono '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam consequuntur facilis laborum earum, velit sunt sit eaque, ipsum, dolores nisi recusandae? Dignissimos fugit velit delectus quam tenetur sint optio eos?</span>
                                <br />
                                <button className='bg-orange-400 capitalize tracking-wider translate-y-3 p-3 rounded-md  '>Contact</button>
                            </div>
                            <div className=''>
                                <picture className='mx-auto'>
                                    <img src="./5.png" className='lg:w-[600px] p-6 object-cover lg:h-[700px]' alt="" />
                                </picture>
                            </div>
                            <div className='absolute  top-0 left-0 z-30  w-full h-full bg-gradient'></div>
                        </div>
                    </ParallaxBanner>
                </section>
            </Element>

        </>
    )
}
