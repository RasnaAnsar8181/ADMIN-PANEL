import React from 'react'
import {Link, Outlet} from 'react-router-dom'
import { FaFacebook, FaInstagram, FaYoutube, } from 'react-icons/fa'
import './Layout.css'

function Layout() {
  return (
    <>
   
    <nav className='main-nav'>
      <div className='logo'>
          <h2>ADMIN PANEL</h2>
      </div>
      <div className='menu-link'>
        <ul>
            <li><Link className='link' to='/'>Home</Link></li>
            <li><Link className='link' to='/Products'>Products</Link></li>
            <li><Link className='link' to='/Orders'>Orders</Link></li>
            <li><Link className='link' to='/Sellers'>Sellers</Link></li>
            <li><Link className='link' to='/Messages'>Messages</Link></li>
        </ul>
      </div>
      <div className='social-media'>
            <ul className='social-media-link'>
              <li className='li1'><Link to='#'><FaFacebook /></Link></li>
              <li className='li2'><Link to='#'><FaInstagram /></Link></li>
              <li className='li3'><Link to='#'><FaYoutube /></Link></li>             
            </ul>
      </div>
      <div className='hamburger-menu'>     
      </div>
      <Outlet></Outlet>    
      </nav>
    </>
  )
}

export default Layout