import React from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingCart, Search } from 'lucide-react'
import { useCart } from '../contexts/CartContext'

export default function Navbar({ searchQuery, onSearchChange }) {
  const { totals } = useCart()

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <NavLink to="/" className="text-lg sm:text-xl font-semibold text-indigo-600">
              AddtoCart
            </NavLink>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Right side */}
            <div className="flex items-center space-x-3 sm:space-x-6">
              <NavLink 
                to="/" 
                className={({ isActive }) => `text-sm sm:text-base ${isActive ? 'text-indigo-600' : 'text-gray-600 hover:text-gray-800'}`}
              >
                Home
              </NavLink>

              <div className="flex items-center space-x-1">
                <NavLink to="/cart" className="relative">
                  {({ isActive }) => (
                    <ShoppingCart size={20} className={isActive ? 'text-indigo-600' : 'text-gray-600 hover:text-gray-800'} />
                  )}
                </NavLink>
                <span className="text-xs bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-md font-medium">{totals.totalItems}</span>
              </div>

              <div className="relative hidden sm:block">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="pl-8 pr-3 py-2 border rounded-md w-40 md:w-48 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-300"
                />
                <Search size={16} className="absolute left-2 top-2 text-gray-400" />
              </div>

            </div>
          </div>
        </div>
        
        {/* Mobile Search Bar */}
        <div className="pb-3 sm:hidden">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-8 pr-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-indigo-300"
            />
            <Search size={16} className="absolute left-2 top-2 text-gray-400" />
          </div>
        </div>
      </div>
    </header>
  )
}

