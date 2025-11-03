import React from 'react'
import { Plus, Minus, Trash2 } from 'lucide-react'
import { useCart } from '../contexts/CartContext'

export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart()
  const { product, quantity } = item

  function onIncrease() {
    updateQuantity(product.id, quantity + 1)
  }
  function onDecrease() {
    updateQuantity(product.id, quantity - 1)
  }

  return (
    <div className="py-4">
      <div className="flex items-center gap-4">
        <img src={product.image} alt={product.name} className="w-20 h-20 sm:w-28 sm:h-28 object-cover rounded-md shrink-0" />

        <div className="flex-1 min-w-0">
          <h3 className="text-sm sm:text-md font-medium text-gray-800 truncate">{product.name}</h3>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">₹{product.price.toFixed(2)}</p>

          <div className="mt-3 flex items-center space-x-2">
            <button 
              onClick={onDecrease} 
              className="p-1.5 sm:p-2 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors duration-150"
            >
              <Minus size={14} />
            </button>
            <div className="px-3 py-1.5 border rounded-md text-sm min-w-10 text-center">{quantity}</div>
            <button 
              onClick={onIncrease} 
              className="p-1.5 sm:p-2 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors duration-150"
            >
              <Plus size={14} />
            </button>
          </div>
        </div>

        <div className="text-right flex flex-col items-end gap-2">
          <button 
            onClick={() => removeFromCart(product.id)} 
            className="text-red-600 hover:text-red-700 transition-colors duration-150"
          >
            <Trash2 size={18} />
          </button>
          <div className="text-sm sm:text-md font-semibold whitespace-nowrap">₹{(product.price * quantity).toFixed(2)}</div>
        </div>
      </div>
    </div>
  )
}
