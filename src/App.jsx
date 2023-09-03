import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Page Component/Navbar/Nav'
import Home from './Page Component/Home/Home'
import Book from './Page Component/Booking/Book'

function App() {
  

  return (
    <div className='bg-gradient-to-b from-yellow-200 to-white'>
      <Nav/>
      <Home/>
      <Book/>
    </div>
  )
}

export default App
