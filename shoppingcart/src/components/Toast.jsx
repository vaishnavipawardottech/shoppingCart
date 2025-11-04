import { Check, X } from 'lucide-react'
import { useEffect } from 'react'

const Toast = ({ message, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose()
      }, 3000) // Auto-close after 3 seconds

      return () => clearTimeout(timer)
    }
  }, [isVisible, onClose])

  if (!isVisible) return null

  return (
    <div className="fixed top-20 right-4 z-50">
      <div className="bg-white border-l-4 border-green-500 shadow-lg rounded-md p-4 flex items-center gap-3 min-w-[300px]">
        <div className="shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
          <Check size={18} className="text-green-600" />
        </div>
        <p className="text-sm font-medium text-gray-800 flex-1">{message}</p>
        <button
          onClick={onClose}
          className="shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  )
}

export default Toast
