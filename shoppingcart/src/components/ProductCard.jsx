import React, { useState, useEffect } from 'react'
import { useCart } from '../contexts/CartContext'
import { ShoppingCart, Check, Plus, Minus } from 'lucide-react'

export default function ProductCard({ product }) {
  const [justAdded, setJustAdded] = useState(false)
  const { addToCart, updateQuantity, removeFromCart, items } = useCart()

  const inCart = items.find((it) => it.product.id === product.id)
  const inCartQty = inCart ? inCart.quantity : 0
  const remaining = Math.max(0, product.stock - inCartQty)

  function onAdd() {
    if (remaining <= 0) return
    addToCart(product, 1)
    setJustAdded(true)
    setTimeout(() => {
      setJustAdded(false)
    }, 2000) // Revert back after 2 seconds
  }

  function onIncrease() {
    if (inCartQty < product.stock) {
      updateQuantity(product.id, inCartQty + 1)
    }
  }

  function onDecrease() {
    if (inCartQty === 1) {
      removeFromCart(product.id)
    } else {
      updateQuantity(product.id, inCartQty - 1)
    }
  }

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-200 relative" style={{ height: '420px' }}>
      <div className="h-[65%]">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-t-lg" />
      </div>

      <div className="h-[35%] p-3 flex flex-col justify-between overflow-hidden relative">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <p className="text-xs text-gray-500 uppercase tracking-wide truncate">{product.category}</p>
            <h3 className="text-sm font-semibold text-gray-800 mt-0.5 line-clamp-1">{product.name}</h3>
            <p className="text-sm text-indigo-600 font-bold mt-1">₹{product.price.toFixed(2)}</p>
          </div>
        </div>

        {/* Add to Cart Button or Quantity Controls */}
        {inCartQty === 0 || justAdded ? (
          <button
            onClick={onAdd}
            disabled={remaining <= 0 || justAdded}
            className={`w-full py-2.5 rounded-md font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
              remaining > 0 
                ? justAdded 
                  ? 'bg-green-600 text-white' 
                  : 'bg-indigo-600 text-white hover:bg-indigo-700 active:bg-indigo-800'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            {remaining <= 0 ? (
              <>
                <ShoppingCart size={18} />
                <span>Out of Stock</span>
              </>
            ) : justAdded ? (
              <>
                <Check size={18} />
                <span>Added to Cart</span>
              </>
            ) : (
              <>
                <ShoppingCart size={18} />
                <span>Add to Cart</span>
              </>
            )}
          </button>
        ) : (
          <div className="flex items-center justify-center gap-15 bg-gray-100 rounded-md py-2 px-6">
            <button 
              onClick={onDecrease} 
              className="w-7 h-7 rounded-full hover:bg-indigo-100 transition-colors duration-150 flex items-center justify-center text-indigo-600"
            >
              <Minus size={14} />
            </button>
            <div className="text-sm font-semibold text-gray-800 min-w-6 text-center">{inCartQty}</div>
            <button 
              onClick={onIncrease} 
              disabled={inCartQty >= product.stock}
              className="w-7 h-7 rounded-full hover:bg-indigo-100 transition-colors duration-150 flex items-center justify-center text-indigo-600 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed"
            >
              <Plus size={14} />
            </button>
          </div>
        )}

        {/* Stock Status Badge */}
        <div className={`absolute top-0 right-0 text-xs font-medium whitespace-nowrap px-3 py-1.5 rounded-bl-lg ${
          remaining > 0 ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
        }`}>
          {remaining > 0 ? `In stock (${remaining})` : 'Out of stock'}
        </div>
      </div>
    </div>
  )
}

