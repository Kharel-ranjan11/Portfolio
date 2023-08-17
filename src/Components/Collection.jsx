import React, { useState } from 'react'
import { Navbar } from './Helpers/Navbar'
import { HeroSection } from './Helpers/HeroSection'
import { About } from './Helpers/About'
import { Service } from './Helpers/Servive'
import { Team } from './Helpers/Team'
import { Fotter } from './Helpers/Fotter'
import { Contact } from './Helpers/Contact'
import { Numbrrs } from './Helpers/Numbrrs'
import { Timelines } from './Helpers/Timelines'
import { ThreeCircles } from 'react-loader-spinner'
export const Collection = () => {
  const [loader, setLoader] = useState(true)
  React.useEffect(() => {
    setInterval(() => {
      setLoader(false)
    }, 2000)
  }, [])

  return (
    <>
      {
        loader ?
          <div className='flex bg-[#171a1d] w-full h-[100vh] justify-center items-center'>
            <ThreeCircles
              height="100"
              width="100"
              color="#4fa94d"
             
              visible={true}
              ariaLabel="three-circles-rotating"
              outerCircleColor="#ad8e6d"
              innerCircleColor="#ad8e6d"
              middleCircleColor="#ad8e6d"
            />
          </div>
          :
          <main>

            <Navbar />
            <HeroSection />
            <About />
            <Service />
            <Team />
            <Timelines />
            <Numbrrs />
            <Contact />
            <Fotter />
          </main>
      }

    </>
  )
}
