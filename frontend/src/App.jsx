import React from 'react'
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from './pages/About'
import Contact from './pages/Contact'
import Doctors from './pages/Doctors'
import MyAppointment from './pages/MyAppointment'
import MyProfile from './pages/MyProfile'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/doctors' element={<Doctors/>}></Route>
        <Route path='/myappointments' element={<MyAppointment/>}></Route>
        <Route path='/myprofile' element={<MyProfile/>}></Route>
      

      
      </Routes>
    </div>
  )
}

export default App