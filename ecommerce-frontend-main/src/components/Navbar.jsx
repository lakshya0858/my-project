import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {

  const [visible, setVisible] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  const location = useLocation()
  const navigate = useNavigate()

  const { setShowSearch, getCartCount } = useContext(ShopContext)

  const links = [
    { path: '/', label: 'HOME' },
    { path: '/collection', label: 'COLLECTION' },
    { path: '/about', label: 'ABOUT' },
    { path: '/contact', label: 'CONTACT' }
  ]

  return (

    <nav className="flex items-center justify-between px-4 py-5 sm:px-10 lg:px-16 font-medium bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm sticky top-0 z-50">

      {/* Logo */}
      <Link to="/" className="flex-shrink-0">
        <img src={assets.logo} className="w-36 sm:w-40 hover:scale-105 transition-transform duration-300" alt="Logo" />
      </Link>

      {/* Menu Links */}
      <ul className="hidden gap-8 text-sm sm:flex">
        {links.map(link => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 tracking-wide transition-all duration-300
              ${isActive ? 'text-black font-semibold' : 'text-gray-700 hover:text-black'}`
            }
          >
            <p>{link.label}</p>
            <hr className={`w-2/4 h-[1.5px] bg-gray-700 ${location.pathname === link.path ? 'block' : 'hidden'}`} />
          </NavLink>
        ))}
      </ul>

      {/* Icons */}
      <div className="flex items-center gap-6">

        {/* 🔍 Search */}
        <img
          onClick={() => setShowSearch(true)}
          src={assets.search_icon}
          className="w-5 cursor-pointer hover:scale-110 hover:opacity-80 transition-all duration-200"
          alt="Search"
        />

        {/* 👤 Profile */}
        <div className="relative">

          <img
            onClick={() => setShowMenu(!showMenu)}
            className="w-5 cursor-pointer hover:scale-110 hover:opacity-80 transition-all duration-200"
            src={assets.profile_icon}
            alt="Profile"
          />

          {/* Dropdown */}
          {showMenu && (
            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-md p-3 flex flex-col gap-2 text-gray-600">

              <p
                onClick={() => {
                  setShowMenu(false)
                  navigate("/profile")
                }}
                className="cursor-pointer hover:text-black"
              >
                My Profile
              </p>

              <p
                onClick={() => {
                  setShowMenu(false)
                  navigate("/orders")
                }}
                className="cursor-pointer hover:text-black"
              >
                Orders
              </p>

              <p
                onClick={() => {
                  localStorage.removeItem("token")
                  setShowMenu(false)
                  navigate("/login")
                }}
                className="cursor-pointer hover:text-black"
              >
                Logout
              </p>

            </div>
          )}

        </div>

        {/* 🛒 Cart */}
        <Link to="/cart" className="relative">
          <img
            src={assets.cart_icon}
            className="w-5 min-w-5 hover:scale-110 hover:opacity-80 transition-all duration-200"
            alt="Cart"
          />
          <p className="absolute right-[-6px] bottom-[-6px] w-4 h-4 flex items-center justify-center text-[10px] text-white bg-black rounded-full">
            {getCartCount()}
          </p>
        </Link>

        {/* 📱 Mobile Menu */}
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-6 cursor-pointer sm:hidden hover:scale-110 transition"
          alt="Menu"
        />

      </div>

      {/* 📱 Mobile Sidebar */}
      <div className={`fixed top-0 right-0 h-full bg-white transition-all duration-300 shadow-lg z-50 ${visible ? 'w-3/4 sm:w-1/2' : 'w-0'} overflow-hidden`}>

        <div className="flex flex-col h-full text-gray-600">

          <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-50">
            <img src={assets.dropdown_icon} className="h-4 rotate-180" alt="Back" />
            <p>Back</p>
          </div>

          {links.map(link => (
            <NavLink
              key={link.path}
              onClick={() => setVisible(false)}
              className="py-3 pl-6 border-b border-gray-200 hover:bg-gray-50 hover:text-black"
              to={link.path}
            >
              {link.label}
            </NavLink>
          ))}

        </div>

      </div>

    </nav>
  )
}

export default Navbar