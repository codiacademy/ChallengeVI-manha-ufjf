import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div><footer className="bg-purple-900 text-white">
      <Link to='/aboutus'>
    <div className="flex justify-between items-center px-6 py-4">
      <h1 className="cursor-pointer">ABOUT US</h1>
      <h1 className="cursor-pointer">HELP</h1>
      <h1 className="cursor-pointer">CONTACT</h1>
      <h1 className="cursor-pointer">SERVICES</h1>
    </div></Link>
    <div className="h-px bg-white"></div>
    <div className="bg-purple-800 text-center py-3 text-sm">
      © 2024 Copyright: E-Commerce
    </div>
  </footer></div>
  )
}

export default Footer