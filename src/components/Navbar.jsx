 import "../App.css";
import { NavLink } from 'react-router-dom'
export const Navbar = () => {
  return (
    <>
    <div className="flex items-center justify-center gap-80 Nav ">
        <img className="w-60 h-14  rounded-xl" src="/logo.png" alt="logo" />
        <div>
            <ul className="flex  gap-20 font-serif text-md text-white ">
                <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} >Home</NavLink></li>
                <li><NavLink to="/shop" className={({ isActive }) => isActive ? 'active' : ''} >Shop</NavLink></li>
                <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''} >About</NavLink></li>
                <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''} >Contact</NavLink></li>
                <li><NavLink to="/cart" className={({ isActive }) => isActive ? 'active' : ''} >Cart</NavLink></li>
            </ul>
        </div>
    </div>
    </>
  )
}
