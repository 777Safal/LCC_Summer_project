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
import Login from './Page Component/Login And Signup/Login'
import SignUp from './Page Component/Login And Signup/Signin'
import ConfirmBooking from './Page Component/Booking/ConfirmBooking'
import Timetable from './Page Component/Timetable'
import Test1 from './Practice/Test1'
import Test2 from './Practice/Test2'
import Test3 from './Practice/Test3'
import Test4 from './Practice/Test4'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Test5 from './Practice/Test5'

function App() {
  

  return (
    <div className='bg-gradient-to-b from-yellow-200 to-white'>
      {/* <SignUp/> */}
      {/* <Login/> */}
      {/* <Nav/>
      <Home/>
      <Book/>
      <Contactus/>
      <Aboutus/>
      <Footer/> */}
      {/* <Timetable/> */}
  

      {/* <ConfirmBooking/> */}
      {/* <Test1/> */}
      {/* <Test2/> */}
      {/* <Test3/> */}
      <Router>
        <Routes>
          <Route path='/' element={<Test5/>}/>
          <Route path='test1' element={<Test4/>}/>
          <Route path='test2' element={<Test2/>}/>
          <Route path='timetable' element={<Timetable/>}/>
        </Routes>
      </Router>



      
    </div>
  )
}

export default App
