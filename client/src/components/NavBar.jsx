import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='flex items-center justify-between bg-gray-100 text-gray-800 shadow-md p-4'>
  {/* Logo */}
  <div>
    <Link to={'/'}>
      <h1 className='font-bold text-4xl text-teal-700'>TaskMate</h1>
    </Link> 
  </div>
  {/* Search bar */}
  <div className='mt-2 flex items-center'>
    <input className='w-72 border border-teal-400 rounded-3xl p-2 bg-white text-gray-800 focus:ring-2 focus:ring-teal-500' placeholder="Search..." />
    <button className='ml-2 px-3 py-2 bg-teal-500 text-white rounded-3xl hover:bg-teal-600 transition duration-300'>
      Search
    </button>
  </div>
  {/* Links */}
  <div className='flex gap-10 justify-between mt-2'>
    <Link to={'/'} className='hover:text-teal-600 transition duration-250'>Home</Link>
    <Link to={'/todopage'} className='hover:text-teal-600 transition duration-250'>Todo</Link>
    <Link to={'/weatherpage'} className='hover:text-teal-600 transition duration-250'>Weather</Link>
    <Link to={'/budgettrackerpage'} className='hover:text-teal-600 transition duration-250'>BudgetTracker</Link>
    <Link to={'/login'} className='hover:text-teal-600 transition duration-250'>Logout</Link>
  </div>
</nav>

  )
}

export default NavBar