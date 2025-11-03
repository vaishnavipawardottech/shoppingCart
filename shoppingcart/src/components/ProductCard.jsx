import React, { useState } from 'react'
import { useCart } from '../contexts/CartContext'
import { ShoppingCart } from 'lucide-react'

export default function ProductCard({ product }) {
  const [qty, setQty] = useState(1)
  const { addToCart, items } = useCart()

  const inCart = items.find((it) => it.product.id === product.id)
  const inCartQty = inCart ? inCart.quantity : 0
  const remaining = Math.max(0, product.stock - inCartQty)

  function onAdd() {
    if (remaining <= 0) return
    addToCart(product, qty)
  }

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden h-96 flex flex-col hover:shadow-lg transition-shadow duration-200">
      <div className="h-3/4">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
      </div>

      <div className="h-1/4 p-4 flex flex-col">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            <p className="text-xs text-gray-500 uppercase tracking-wide">{product.category}</p>
            <h3 className="text-sm font-semibold text-gray-800 mt-0.5 line-clamp-1">{product.name}</h3>
            <p className="text-base text-indigo-600 font-bold mt-1">₹{product.price.toFixed(2)}</p>
          </div>

          <button
            onClick={onAdd}
            disabled={remaining <= 0}
            className={`ml-2 p-2 rounded-full transition-all duration-200 ${
              remaining > 0 
                ? 'text-black hover:text-gray-600 hover:bg-gray-50' 
                : 'text-gray-300 cursor-not-allowed'
            }`}
            title={remaining <= 0 ? 'Out of stock' : 'Add to cart'}
          >
            <ShoppingCart size={20} />
          </button>
        </div>

        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center space-x-2">
            <label className="text-xs text-gray-600 font-medium">Qty:</label>
            <select
              value={qty}
              onChange={(e) => setQty(Number(e.target.value))}
              className="text-xs border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-indigo-300"
              disabled={remaining <= 0}
            >
              {Array.from({ length: remaining }, (_, i) => i + 1).map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </div>

          <p className={`text-xs font-medium ${remaining > 0 ? 'text-green-600' : 'text-red-600'}`}>
            {remaining > 0 ? `In stock (${remaining})` : 'Out of stock'}
          </p>
        </div>
      </div>
    </div>
  )
}

