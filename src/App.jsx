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
import Test6 from './Practice/Test6'
import BookingStatus from './Page Component/Admin/BookingStauts'

import Date from './Practice/Date'
import Userdata from './Page Component/Admin/Userdata'
import UserForm from './Page Component/Login And Signup/UserForm'
import App1 from './Practice/App1'
import Time from './Practice/Time'



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
  

      {/* <Test1/> */}
      {/* <Test2/> */}
      {/* <Test3/> */}
      {/* <Test4/> */}
      <Router>
        <Routes>
          <Route path='/' element={<Test4/>}/>
          <Route path='test1' element={<Test1/>}/>
          <Route path='test2' element={<Test2/>}/>
          <Route path='newaccount' element={<SignUp/>}/>
        </Routes>
      </Router>
      {/* <Test6/> */}
      {/* <BookingStatus/> */}

      {/* <CustomerBooking/> */}
      {/* <P1/> */}
      {/* <Date/> */}
      {/* <Userdata/> */}
      {/* <UserForm/> */}
      {/* <App1/> */}
      {/* <BookingStatus/> */}
      {/* <Time/> */}
      
    </div>
  )
}

export default App
