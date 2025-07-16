import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
export const Footer = () => {
  return (
    <div className='ftr h-50 mt-20'>
        <div className='flex text-4xl text-white justify-center gap-10 pt-10   '>
            <FaInstagram  />
            <FaLinkedin   />
            <FaTwitter />
            <FaFacebook />
            <FaTiktok />
        </div>
        <div>
            <ul className='flex justify-center gap-10 pt-8 text-xl text-white'>
                 <li><NavLink to="/">Home</NavLink></li>
                 <li><NavLink to="/shop">Shop</NavLink></li>
                 <li><NavLink to="/about">About Us</NavLink></li>
                 <li><NavLink to="/contact">Contact</NavLink></li>
                 <li><NavLink to="/cart">Cart</NavLink></li>
            </ul>
        </div>
        <p className='text-white text-center pt-8'>© 2025 Bloomnest. All rights reserved.</p>
    </div>
  )
}
