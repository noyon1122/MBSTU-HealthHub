import React, { useState } from 'react'
import logo from '../assets/assets_frontend/logo.svg'
import profile_pic from '../assets/assets_frontend/profile_pic.png'
import menu_icon from '../assets/assets_frontend/menu_icon.svg'
import dropdown_icon from '../assets/assets_frontend/dropdown_icon.svg'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate =useNavigate()
    const [showMenu,setShowMenu]=useState(false)
    const [token,setToken]=useState(true)
  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
        
            <img className='w-44 cursor-pointer' src={logo} alt="" />
           <ul className='hidden md:flex items-center gap-5 fort-medium'>
            <NavLink to={'/'}>
                <li className='py-1'>Home</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
            </NavLink>
            <NavLink to={'/doctors'}>
                <li className='py-1'>All Doctors</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
            </NavLink>
            <NavLink to={'about'}>
                <li className='py-1'>About</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
            </NavLink>
            <NavLink to={'contact'}>
                <li className='py-1'>Contact</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
            </NavLink>
           </ul>
           <div className='flex items-center gap-4'> 
            {
                token? <div className='flex items-center cursor-pointer gap-2 group relative'>
                    <img className='w-8 rounded-full' src={profile_pic} alt="" />
                    <img className='w-2.5' src={dropdown_icon} alt="" />
                   <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-700 z-20 hidden group-hover:block' >
                   <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                        <p onClick={()=> navigate('/myprofile')} className='hover:text-black cursor-pointer'>My Profile</p>
                        <p onClick={()=> navigate('/myappointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                        <p onClick={()=>setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                    </div>
                   </div>
                </div>
                :  <button onClick={()=> navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>Create Account</button>
            }
          
           </div>
    </div>
  )
}

export default Navbar