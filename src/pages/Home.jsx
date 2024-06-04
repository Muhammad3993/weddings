import React from 'react'
// Components
import Hero from '../components/hero/Hero'
import Servicess from '../components/servicess/Servicess'
import TheBest from '../components/theBest/TheBest'
import Manager from '../components/manager/Manager'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Servicess/>
      <TheBest/>
      <Manager/>
    </div>
  )
}

export default Home;