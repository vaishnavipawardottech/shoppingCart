import React from 'react'
import { X } from 'lucide-react'

export default function ConfirmationModal({ 
  isOpen, 
  onClose, 
  onConfirm, 
  title, 
  message, 
  confirmText = 'Confirm',
  cancelText = 'Cancel'
}) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-gray-50 bg-opacity-95 flex items-center justify-center z-50">
      <div className="bg-white shadow-xl w-full max-w-md mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black hover:bg-red-500 hover:text-white p-1 transition-colors duration-200"
        >
          <X size={20} />
        </button>

        {/* Modal Content */}
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 pr-8">
            {title}
          </h3>
          <p className="text-gray-600 mb-6">
            {message}
          </p>

          {/* Buttons */}
          <div className="flex justify-end gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100 transition-colors duration-150"
            >
              {cancelText}
            </button>
            <button
              onClick={onConfirm}
              className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 transition-colors duration-150"
            >
              {confirmText}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
