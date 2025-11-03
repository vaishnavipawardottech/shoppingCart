import React, { useState } from 'react'
import { useCart } from '../contexts/CartContext'
import CartItem from './CartItem'
import ConfirmationModal from './ConfirmationModal'

export default function CartPage() {
  const { items, totals, clearCart } = useCart()
  const [showClearConfirm, setShowClearConfirm] = useState(false)
  const [showCheckoutConfirm, setShowCheckoutConfirm] = useState(false)

  function handleClearClick() {
    setShowClearConfirm(true)
  }

  function handleConfirmClear() {
    clearCart()
    setShowClearConfirm(false)
  }

  function handleCancelClear() {
    setShowClearConfirm(false)
  }

  function handleCheckoutClick() {
    setShowCheckoutConfirm(true)
  }

  function handleConfirmCheckout() {
    // For now, just close the modal and stay on the same page
    // In the future, this is where checkout logic would go
    setShowCheckoutConfirm(false)
  }

  function handleCancelCheckout() {
    setShowCheckoutConfirm(false)
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Cart</h2>
      
      <div className="bg-white shadow rounded-lg p-6">
        {items.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <div>
            <div className="divide-y divide-gray-200">
              {items.map((it) => (
                <CartItem key={it.product.id} item={it} />
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm text-gray-600">Total items: {totals.totalItems}</div>
                <div className="text-right">
                  <div className="text-sm text-gray-600">Total</div>
                  <div className="text-2xl font-bold text-black">₹{totals.totalPrice.toFixed(2)}</div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row justify-between gap-3">
              <button onClick={handleClearClick} className="px-6 py-2 border border-red-600 rounded-md text-red-600 hover:bg-red-50 transition-colors duration-200">
                Clear Cart
              </button>
              <button onClick={handleCheckoutClick} className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-200">
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>

      <ConfirmationModal
        isOpen={showClearConfirm}
        onClose={handleCancelClear}
        onConfirm={handleConfirmClear}
        title="Clear Cart"
        message="Are you sure you want to clear all items from your cart?"
        confirmText="Clear All"
        cancelText="Cancel"
      />

      <ConfirmationModal
        isOpen={showCheckoutConfirm}
        onClose={handleCancelCheckout}
        onConfirm={handleConfirmCheckout}
        title="Checkout"
        message="Are you sure you want to proceed with checkout?"
        confirmText="Yes"
        cancelText="Cancel"
      />
    </div>
  )
}
