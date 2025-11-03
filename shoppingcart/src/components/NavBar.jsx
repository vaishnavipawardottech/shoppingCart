import React from 'react'
import { Home, ShoppingCart, User, Search } from 'lucide-react'
import { useCart } from '../contexts/CartContext'

export default function Navbar({ onNavigate, page, searchQuery, onSearchChange }) {
  const { totals } = useCart()

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="text-xl font-semibold text-indigo-600">AddtoCart</div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Right side: Home -> Cart icon with badge -> search */}
            <div className="flex items-center space-x-6">
              <button onClick={() => onNavigate('home')} className={`text-sm ${page === 'home' ? 'text-indigo-600' : 'text-gray-600'}`}>
                Home
              </button>

              <div className="flex items-center space-x-1">
                <button onClick={() => onNavigate('cart')} className="relative">
                  <ShoppingCart size={20} className={`${page === 'cart' ? 'text-indigo-600' : 'text-gray-600'}`} />
                </button>
                <span className="text-xs bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-md font-medium">{totals.totalItems}</span>
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="pl-8 pr-3 py-2 border rounded-md w-48 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-300"
                />
                <Search size={16} className="absolute left-2 top-2 text-gray-400" />
              </div>

            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

