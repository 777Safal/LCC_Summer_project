import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Page Component/Navbar/Nav'
import Home from './Page Component/Home/Home'
import Book from './Page Component/Booking/Book'
import Footer from './Page Component/Footer/Footer'
import Contactus from './Page Component/Contact/Contactus'
import Aboutus from './Page Component/About/Aboutus'
import Tournament from './Page Component/ICon/Tournament'

function App() {
  

  return (
    <div className='bg-gradient-to-b from-yellow-200 to-white'>
      <Nav/>
      <Home/>
      <Book/>
      <Footer/>
      <Contactus/>
      <Aboutus/>
      <Tournament/>
    </div>
  )
}

export default App
