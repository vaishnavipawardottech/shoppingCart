import React from 'react'
import { useCart } from '../contexts/CartContext'
import CartItem from './CartItem'

export default function CartPage() {
  const { items, totals, clearCart } = useCart()

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Cart</h2>

      {items.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div>
          <div className="divide-y">
            {items.map((it) => (
              <CartItem key={it.product.id} item={it} />
            ))}
          </div>

          <div className="mt-6 pt-4 border-t flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-600">Total items</div>
              <div className="text-lg font-medium">{totals.totalItems}</div>
            </div>

            <div className="text-right">
              <div className="text-sm text-gray-600">Total</div>
              <div className="text-2xl font-semibold text-indigo-600">₹{totals.totalPrice.toFixed(2)}</div>
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row justify-between gap-3">
            <button onClick={clearCart} className="px-6 py-2 border border-red-600 rounded-md text-red-600 hover:bg-red-50 transition-colors duration-200">
              Clear Cart
            </button>
            <button className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-200">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
 
