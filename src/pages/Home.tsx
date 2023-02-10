import React from 'react'
import {  
  Navbar,
  Main,
  Footer,
} from '../components'
import { useScrollToTop } from '../hooks'

export const Home = () => {
  useScrollToTop()
  
  return(
    <div className="px-5 flex flex-col justify-between md:px-16 lg:px-24 w-full min-h-screen max-w-screen-2xl 2xl:mx-auto bg-main">
      <Navbar />
      <Main />
      <Footer />
    </div>
  )
}