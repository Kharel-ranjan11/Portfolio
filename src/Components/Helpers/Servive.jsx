import React, { useState } from 'react';
import { FaUserAlt } from "react-icons/fa";
import { ImHammer2 } from "react-icons/im";
import { PiShoppingBagFill } from "react-icons/pi";
import { RiDoubleQuotesR } from "react-icons/ri";
import { ParallaxBanner } from 'react-scroll-parallax';
import './style.css'
export const Service = () => {
  return (
    <>
      <section className='relative '>
        <ParallaxBanner
          layers={[
            { image: './8.jpg', speed: -30 },
          ]}
          className={`aspect-[2/1] object-cover     Height   `}
        >
          <div className='text-white text-center font-mono relative z-10 '>
            <h2 className='text-4xl pt-12 pb-8 '> My service</h2>
            <div className='relative  flex  justify-center translate-y-1'>
              <span className=' absolute w-12 h-[1px] bg-white top-[-2rem] left-[43.5%]'></span>
              <span className=' absolute w-12 h-[1px] bg-[#ad8e6d] top-[-2rem] left-[48.5%]'></span>
              <span className=' absolute w-12 h-[1px] bg-white top-[-2rem] left-[53%]'></span>
            </div>

            <div className=''>
              <div className='md:flex md:justify-center lg:flex grid   lg:justify-around  items-center lg:px-32 md:px-8 sm:px-20 px-5 gap-5 text-justify'>


                {
                  [{ icons: <PiShoppingBagFill />, h2: 'Commercial Service', span: 'Ex velit cupidatat magna voluptate deserunt quis et dolor adipisicing elit culpa ad exercitation proident irure deserunt irure' }, { icons: <FaUserAlt />, h2: 'Employment', span: 'Ex velit cupidatat magna voluptate deserunt quis et dolor adipisicing elit culpa ad exercitation proident irure deserunt irure' }, { icons: <ImHammer2 />, h2: 'Civil Litigation', span: 'Ex velit cupidatat magna voluptate deserunt quis et dolor adipisicing elit culpa ad exercitation proident irure deserunt irure' }].map(({ h2, icons, span }, id) => {
                    return <>
                      <main key={id} className='bg-[#0202039d] p-3 rounded shadow-md backdrop-blur-sm'>

                        <div className='py-2'>
                          <span className='text-4xl text-[#ad8e6d]'>{icons}</span>
                        </div>
                        <div>
                          <h2 className='text-[22px] font-semibold tracking-widest py-2'>{h2} </h2>
                          <span>{span}</span>
                        </div>
                      </main>
                    </>
                  })
                }
              </div>



            </div>

          </div>
          <div className='relative translate-y-[1rem]  flex flex-col items-start text-center z-10 text-white '>
            <span className='text-5xl lg:px-32 md:px-8 sm:px-20 px-5 '><RiDoubleQuotesR /></span>
            <span className='text-4xl lg:px-32 md:px-8 sm:px-20 px-5    text-justify '>Do more than is required. What is the distance between someone who achieves their goals consistently and those who spend their lives and careers merely following? The extra mile.</span>
            <em className='lg:px-32 md:px-8 sm:px-20 px-5 '>Kyros Noriaki</em>
          </div>
        </ParallaxBanner>
        <div className='absolute top-0 left-0 bg h-full w-full'>

        </div>
      </section>
    </>
  )
}
