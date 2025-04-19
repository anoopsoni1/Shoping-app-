import React, { useState , useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {   
  return (
 
 <>
    <header className="flex justify-between items-center p-6 bg-gray-800 text-white">
   
    <div className="text-2xl font-bold"><img src="https://trendcart.in/cdn/shop/files/Logo1_1200x1200.png?v=1672830851" alt="#"  height={80} width={80} className='rounded-full'  /></div>

    <nav className="hidden md:flex space-x-8">
        <span className="text-lg cursor-pointer hover:text-yellow-400"> <NavLink className={({isActive})=> 
         `${isActive ? "text-orange-400" : "text-silver"}`} to='/'>Home</NavLink>
           </span>
        <span className="text-lg cursor-pointer hover:text-yellow-400"><NavLink  className={({isActive})=> 
         `${isActive ? "text-orange-400" : "text-silver"}`} to='/about'> About</NavLink></span>
        <span className="text-lg cursor-pointer hover:text-yellow-400"><NavLink className={({isActive})=> 
         `${isActive ? "text-orange-400" : "text-silver"}`} to='/services'>Services</NavLink></span>
        <span className="text-lg cursor-pointer hover:text-yellow-400"><NavLink className={({isActive})=> 
         `${isActive ? "text-orange-400" : "text-silver"}`} to='/contact'>Contact</NavLink></span>
    </nav>
    <div className='flex gap-7 '>
     <button  className='bg-yellow-400 text-gray-800 py-2 px-6 rounded-md font-semibold hover:bg-yellow-500 transition duration-300 ' > <Link to='/cart'>Cart </Link> </button>
    <button className="bg-yellow-400 text-gray-800 py-2 px-6 rounded-md font-semibold hover:bg-yellow-500 transition duration-300">
      <Link to="/login" > Get Started</Link>  
    </button>
    </div>
</header>


<div className="md:hidden p-4">
    <button  className="bg-gray-700 text-white p-2 rounded-md ">Menu</button>
</div>
</>
  )
}

export default Header