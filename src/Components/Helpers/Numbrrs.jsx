import React from 'react';
import CountUp from 'react-countup';
import { ParallaxBanner } from 'react-scroll-parallax';
import './style.css';
export const Numbrrs = () => {
  return (
    <>
      <div className='Contact relative'>
        <ParallaxBanner
          layers={[
            { image: './9.jpg', speed: -30 },
          ]}
          className={`aspect-[2/1] object-cover   absolute  pb-1 Number_Height `}
        >
          <section className='relative h-[100%] flex justify-center items-center  z-10'>

            <div className='lg:flex md:flex grid  font-mono   items-center justify-center gap-12  '>
              <div className='items-center    text-white  '>
                <p className=' w-full flex-col flex items-center text-5xl'>
                  <CountUp
                    start={0}
                    end={2343}
                    duration={30.75}
                    separator=","
                    decimals={0}
                    decimal=","
                  >
                    {({ countUpRef, start }) => (
                      <div>
                        <span ref={countUpRef} />
                      </div>
                    )}
                  </CountUp>
                </p>
                <span className='text-gray-400 flex flex-col font-thin uppercase items-center'>Hours of Work</span>
              </div>
              <div className='items-center    text-white  '>
                <p className=' w-full flex-col flex items-center text-5xl'>
                  <CountUp
                    start={0}
                    end={300}
                    duration={30.75}
                    separator=","
                    decimals={0}
                    decimal=","
                  >
                    {({ countUpRef, start }) => (
                      <div>
                        <span ref={countUpRef} />
                      </div>
                    )}
                  </CountUp>
                </p>
                <span className='text-gray-400 flex flex-col font-thin uppercase items-center'>project done</span>
              </div>
              <div className='text-white'>
                <p className=' relative  w-full flex-col flex items-center text-5xl'>
                  <CountUp
                    start={0}
                    end={343}
                    duration={30.75}
                    separator=","
                    decimals={0}
                    decimal=","
                  >
                    {({ countUpRef, start }) => (
                      <div>
                        <span ref={countUpRef} />
                      </div>
                    )}
                  </CountUp> </p>
                <span className='text-gray-400 flex flex-col font-thin uppercase items-center'>Awards wining</span>
              </div>

            </div>

          </section>
        </ParallaxBanner>

      </div>
    </>
  )
}
