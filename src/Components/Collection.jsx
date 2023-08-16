import React from 'react'
import { Navbar } from './Helpers/Navbar'
import { HeroSection } from './Helpers/HeroSection'
import { About } from './Helpers/About'
import { Service } from './Helpers/Servive'
import { Team } from './Helpers/Team'

export const Collection = () => {
  return (
    <>
        <Navbar/>
        <HeroSection/>
        <About/>
        <Service/>
        <Team/>
    </>
  )
}
