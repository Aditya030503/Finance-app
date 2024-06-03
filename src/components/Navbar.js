import React from 'react'
import Logo from '../assets/logo (2).png'
import { navData } from '../data'
import { Link, matchPath, useLocation } from 'react-router-dom'
         

function Navbar() {
  const location=useLocation();

  const matchRoute=(route)=>{
    return matchPath({path:route},location.pathname)
  }

  return (
    <div className=' flex justify-around  bg-transparent  w-screen m-auto py-2 px-5 items-center inset-x-0 top-5 '>
      <div className='flex'>
      <Link to="/" className='flex relative'>
        <img src={Logo} alt="" loading='lazy'/>
        <span className=' text-4xl font-bold'>uifry</span>
        <span className=' absolute top-[14px]  -right-3 font-extrabold text-[5px]'>TM</span>
        </Link>
      
      <nav className='flex ml-20'>
        <ul className=' flex gap-6  justify-evenly'>
        {navData.map((item)=>{
            return  <li key={item.id} className='flex place-items-center'>
            <Link to={item.path}>
              <p className={`${matchRoute(item?.path) ?"text-richorange-20 font-extrabold text-2xl ":" text-richblack-800  text-xl"}`}>
              {item.title}
              </p> </Link>
        </li>
        })}
        </ul>
      </nav>
      </div>
       
      <div className=' flex gap-4  '>
       { <Link to="#" > <button className={`text-lg px-16 w-full py-4 rounded-md font-medium text-white bg-richblack-800  transition-all duration-300 `} 
      >Download</button>
</Link>}
       </div>
    </div>
  )
}

export default Navbar
