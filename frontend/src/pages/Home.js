import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Carousel from '../components/Carousel'
import Image from '../components/Image'

function Home() {
  return (
    <div>
      <div>
        <Navbar />
        <div>
          <Carousel />
        </div>
        <div>
          <Image />
        </div>
        <div>
          <Card />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Home
