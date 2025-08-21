import React from 'react'
import Header from '../CommonComponent/Header'
import Banner from '../CommonComponent/Banner'
import About from '../CommonComponent/About'
import Skill from '../CommonComponent/Skill'
import Work from '../CommonComponent/Work'


const HomePage = () => {
  return (
      <div>
      <Header />
      <Banner />
      <About />
      <Skill />
      <Work/>
    </div>
  )
}

export default HomePage