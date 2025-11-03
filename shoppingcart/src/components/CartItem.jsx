import React, { useState } from 'react'
import { Plus, Minus, Trash2 } from 'lucide-react'
import { useCart } from '../contexts/CartContext'
import ConfirmationModal from './ConfirmationModal'

export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart()
  const { product, quantity } = item
  const [showConfirmModal, setShowConfirmModal] = useState(false)

  function onIncrease() {
    updateQuantity(product.id, quantity + 1)
  }
  function onDecrease() {
    updateQuantity(product.id, quantity - 1)
  }

  function handleRemoveClick() {
    setShowConfirmModal(true)
  }

  function handleConfirmRemove() {
    removeFromCart(product.id)
    setShowConfirmModal(false)
  }

  function handleCancelRemove() {
    setShowConfirmModal(false)
  }

  return (
    <>
      <div className="py-4">
        <div className="flex items-start gap-6">
          <img src={product.image} alt={product.name} className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-md shrink-0" />

          <div className="flex-1 min-w-0 flex flex-col gap-3">
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-800">{product.name}</h3>
              <p className="text-sm sm:text-base text-gray-500 mt-1">₹{product.price.toFixed(2)}</p>
            </div>

            <div className="flex items-center border rounded-md overflow-hidden mt-8 w-fit">
              <button 
                onClick={onDecrease} 
                className="px-2 py-1 hover:bg-gray-50 transition-colors duration-150"
              >
                <Minus size={12} />
              </button>
              <div className="px-3 py-1 text-xs font-medium bg-white">{quantity}</div>
              <button 
                onClick={onIncrease} 
                className="px-2 py-1 hover:bg-gray-50 transition-colors duration-150"
              >
                <Plus size={12} />
              </button>
            </div>

            <button 
              onClick={handleRemoveClick} 
              className="text-red-600 hover:text-red-700 transition-colors duration-150 flex items-center gap-1 w-fit"
            >
              <Trash2 size={16} />
              <span className="text-sm">Remove</span>
            </button>
          </div>

          <div className="text-right shrink-0">
            <div className="text-xs sm:text-sm text-gray-600 mb-1">Subtotal</div>
            <div className="text-base sm:text-lg font-semibold text-gray-800">₹{(product.price * quantity).toFixed(2)}</div>
          </div>
        </div>
      </div>

      <ConfirmationModal
        isOpen={showConfirmModal}
        onClose={handleCancelRemove}
        onConfirm={handleConfirmRemove}
        title="Confirm Removal"
        message="Are you sure you want to remove this product from your cart?"
        confirmText="Confirm"
        cancelText="Cancel"
      />
    </>
  )
}
