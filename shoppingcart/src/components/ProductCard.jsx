import React, { useState, useRef, useEffect } from 'react'
import { useCart } from '../contexts/CartContext'
import { ShoppingCart, ChevronDown } from 'lucide-react'

export default function ProductCard({ product }) {
  const [qty, setQty] = useState(1)
  const [isOpen, setIsOpen] = useState(false)
  const { addToCart, items } = useCart()
  const dropdownRef = useRef(null)

  const inCart = items.find((it) => it.product.id === product.id)
  const inCartQty = inCart ? inCart.quantity : 0
  const remaining = Math.max(0, product.stock - inCartQty)

  // Reset qty to 1 when remaining stock changes
  useEffect(() => {
    if (remaining > 0 && qty > remaining) {
      setQty(1)
    }
  }, [remaining, qty])

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  function onAdd() {
    if (remaining <= 0) return
    addToCart(product, qty)
  }

  function handleQtySelect(value) {
    setQty(value)
    setIsOpen(false)
  }

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden h-96 flex flex-col hover:shadow-lg transition-shadow duration-200 relative">
      <div className="h-[70%]">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-t-lg" />
      </div>

      <div className="h-[30%] p-3 flex flex-col justify-between overflow-hidden relative">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <p className="text-xs text-gray-500 uppercase tracking-wide truncate">{product.category}</p>
            <h3 className="text-sm font-semibold text-gray-800 mt-0.5 line-clamp-1">{product.name}</h3>
            <p className="text-sm text-indigo-600 font-bold mt-1">₹{product.price.toFixed(2)}</p>
          </div>

          <div className="flex flex-col items-end gap-1.5 shrink-0 relative" ref={dropdownRef}>
            {/* Custom Qty Dropdown */}
            <div className="flex items-center gap-1">
              <label className="text-xs text-gray-600 font-medium">Qty:</label>
              <button
                onClick={() => !remaining ? null : setIsOpen(!isOpen)}
                disabled={remaining <= 0}
                className="text-xs border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-indigo-300 bg-white flex items-center gap-1 min-w-[50px] justify-between disabled:bg-gray-100 disabled:cursor-not-allowed"
              >
                <span>{remaining <= 0 ? '0' : qty}</span>
                <ChevronDown size={12} />
              </button>
            </div>

            {/* Dropdown Options - Opens downward within card bounds */}
            {isOpen && (
              <div className="absolute top-8 right-0 z-20 bg-white border border-gray-300 rounded shadow-lg max-h-20 overflow-y-auto w-16">
                {Array.from({ length: remaining }, (_, i) => i + 1).map((n) => (
                  <button
                    key={n}
                    onClick={() => handleQtySelect(n)}
                    className={`w-full text-left px-3 py-1.5 text-xs hover:bg-indigo-50 transition-colors ${
                      qty === n ? 'bg-indigo-100 font-medium' : ''
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>
            )}

            <button
              onClick={onAdd}
              disabled={remaining <= 0}
              className={`p-1.5 rounded-full transition-all duration-200 ${
                remaining > 0 
                  ? 'text-black hover:text-gray-600 hover:bg-gray-50' 
                  : 'text-gray-300 cursor-not-allowed'
              }`}
              title={remaining <= 0 ? 'Out of stock' : 'Add to cart'}
            >
              <ShoppingCart size={18} />
            </button>
          </div>
        </div>

        {/* Stock Status Badge - Positioned at bottom-right corner */}
        <div className={`absolute bottom-0 right-0 text-xs font-medium whitespace-nowrap px-3.5 py-2 rounded-tl-2xl ${
          remaining > 0 ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
        }`}>
          {remaining > 0 ? `In stock (${remaining})` : 'Out of stock'}
        </div>
      </div>
    </div>
  )
}

