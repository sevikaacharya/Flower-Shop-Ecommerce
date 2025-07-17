 import "../App.css";
import { NavLink } from 'react-router-dom'
import { IoCartOutline } from "react-icons/io5";
export const Navbar = () => {
  return (
    <>
    <div className="flex items-center justify-around Nav mx-auto w-full ">
         <div>
          <img className="w-60 h-14  rounded-xl" src="/logo.png" alt="logo" />
         </div>
        <div>
            <ul className="hidden md:flex items-center gap-20 font-serif text-md text-white  ">
                <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} >Home</NavLink></li>
                <li><NavLink to="/shop" className={({ isActive }) => isActive ? 'active' : ''} >Shop</NavLink></li>
                <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''} >About</NavLink></li>
                <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''} >Contact</NavLink></li>
              
            </ul>
        </div>
        <div>
            <NavLink to="/cart"  ><IoCartOutline className="text-2xl text-white" /></NavLink>
        </div>
    </div>
    </>
  )
}
