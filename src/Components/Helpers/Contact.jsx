import React from 'react'
import { ParallaxBanner } from 'react-scroll-parallax'
import './style.css'
export const Contact = () => {
    return (
        <>

            <div className='Contact '>
                <ParallaxBanner
                    layers={[
                        { image: './10.jpg', speed: -30 },
                    ]}
                    className={`aspect-[2/1] object-cover     absolute  pb-1 Contact_Height pt-8 `}
                >
                    <section className='relative  z-10'>
                        <div className='align-center grid justify-center'>
                            <h3 className='text-3xl  capitalize text-white underline pb-8 '>Contact Me</h3>
                        </div>
                        <form action="" className='grid justify-center p-3'>
                            <div className='lg:flex md:flex grid gap-3 pb-4 '>
                                <input   className='bg-transparent focus:bg-[#5d040431] p-2 border-2 outline-none border-white text-white ' placeholder='Name..' required type="text" name="" id="" />
                                <input  className='bg-transparent focus:bg-[#5d040431] p-2 border-2 outline-none border-white text-white ' placeholder='Email..' required type="email" name="" id="" />
                                <input  className='bg-transparent focus:bg-[#5d040431] p-2 border-2 outline-none border-white text-white ' placeholder='Number..' required type="number" name="" id="" />
                            </div>
                            <textarea name="" id="" className='bg-transparent outline-none p-2 text-white border-2 border-white   focus:bg-[#5d040431] ' cols="45" rows="10" placeholder='Your Message.... '>Your Message</textarea>
                            <button type='submit' className='p-2  translate-y-3  bg-[#ad8e6d] text-white font-mono '>Send Message </button>
                        </form>
                        <div className='lg:flex md:flex grid  font-mono   items-center justify-center gap-12 translate-y-28 text-xl '>
                            <div className='items-center    text-white  '>
                                <p className=' w-full flex-col flex items-center '>Email Me</p>
                                <span className='text-gray-400 flex flex-col items-center'>contact@gmail.com</span>
                            </div>
                            <div className='items-center    text-white  '>
                                <p className=' w-full flex-col flex items-center'>Call Me</p>
                                <span className='text-gray-400 flex flex-col items-center'>+9882736212</span>
                            </div>
                            <div className='text-white'> 
                                <p className=' w-full flex-col flex items-center'>Address </p>
                                <span className='text-gray-400 flex flex-col items-center'>Bagmati,sarlahi (Nepal)</span>
                            </div>

                        </div>
                    </section>
                </ParallaxBanner>
            </div>

        </>
    )
}
