import React, { useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'

export default function ProductFilter({ filters, onFilterChange }) {
  const [categoryOpen, setCategoryOpen] = useState(false)
  const [priceOpen, setPriceOpen] = useState(false)
  const categoryRef = useRef(null)
  const priceRef = useRef(null)

  const categories = ['category', 'electronics', 'accessories', 'footwear', 'home', 'sports']
  const priceRanges = [
    { label: 'Prices', min: 0, max: Infinity },
    { label: 'Under ₹500', min: 0, max: 500 },
    { label: '₹500 - ₹1500', min: 500, max: 1500 },
    { label: '₹1500 - ₹3000', min: 1500, max: 3000 },
    { label: '₹3000 - ₹5000', min: 3000, max: 5000 },
    { label: 'Above ₹5000', min: 5000, max: Infinity }
  ]

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (categoryRef.current && !categoryRef.current.contains(event.target)) {
        setCategoryOpen(false)
      }
      if (priceRef.current && !priceRef.current.contains(event.target)) {
        setPriceOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleCategorySelect = (cat) => {
    onFilterChange({ ...filters, category: cat })
    setCategoryOpen(false)
  }

  const handlePriceSelect = (range) => {
    onFilterChange({ ...filters, priceRange: { min: range.min, max: range.max } })
    setPriceOpen(false)
  }

  return (
    <div className="flex items-center gap-3 mb-6">
      {/* Category Dropdown */}
      <div className="relative" ref={categoryRef}>
        <button
          onClick={() => setCategoryOpen(!categoryOpen)}
          className="flex items-center gap-2 text-sm border border-gray-300 rounded-md px-4 py-2 bg-white hover:border-gray-400 transition-colors focus:outline-none"
        >
          <span>{filters.category.charAt(0).toUpperCase() + filters.category.slice(1)}</span>
          <ChevronDown size={16} className={`transition-transform ${categoryOpen ? 'rotate-180' : ''}`} />
        </button>
        
        {categoryOpen && (
          <div className="absolute top-full left-0 mt-1 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-10 max-h-60 overflow-y-auto">
            {categories.map((cat) => (
              <div
                key={cat}
                onClick={() => handleCategorySelect(cat)}
                className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 transition-colors ${
                  filters.category === cat ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700'
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Price Dropdown */}
      <div className="relative" ref={priceRef}>
        <button
          onClick={() => setPriceOpen(!priceOpen)}
          className="flex items-center gap-2 text-sm border border-gray-300 rounded-md px-4 py-2 bg-white hover:border-gray-400 transition-colors focus:outline-none"
        >
          <span>
            {priceRanges.find(r => r.min === filters.priceRange.min && r.max === filters.priceRange.max)?.label || 'Prices'}
          </span>
          <ChevronDown size={16} className={`transition-transform ${priceOpen ? 'rotate-180' : ''}`} />
        </button>
        
        {priceOpen && (
          <div className="absolute top-full left-0 mt-1 w-44 bg-white border border-gray-200 rounded-md shadow-lg z-10">
            {priceRanges.map((range, idx) => (
              <div
                key={idx}
                onClick={() => handlePriceSelect(range)}
                className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 transition-colors ${
                  filters.priceRange.min === range.min && filters.priceRange.max === range.max
                    ? 'bg-indigo-50 text-indigo-600'
                    : 'text-gray-700'
                }`}
              >
                {range.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

