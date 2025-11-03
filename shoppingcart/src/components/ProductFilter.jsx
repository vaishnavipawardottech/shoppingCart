import React from 'react'
import { SlidersHorizontal, X } from 'lucide-react'

export default function ProductFilter({ filters, onFilterChange, onClearFilters }) {
  const categories = ['all', 'electronics', 'accessories', 'footwear', 'home', 'sports']
  const priceRanges = [
    { label: 'All Prices', min: 0, max: Infinity },
    { label: 'Under ₹50', min: 0, max: 50 },
    { label: '₹50 - ₹100', min: 50, max: 100 },
    { label: '₹100 - ₹200', min: 100, max: 200 },
    { label: 'Above ₹200', min: 200, max: Infinity }
  ]

  const hasActiveFilters = filters.category !== 'all' || filters.priceRange.min !== 0 || filters.priceRange.max !== Infinity

  return (
    <div className="bg-white shadow-sm rounded-lg p-4 mb-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <SlidersHorizontal size={18} className="text-gray-600" />
          <h3 className="text-sm font-semibold text-gray-800">Filters</h3>
        </div>
        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            className="flex items-center gap-1 text-xs text-indigo-600 hover:text-indigo-700 transition-colors"
          >
            <X size={14} />
            Clear All
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Category Filter */}
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-2">Category</label>
          <select
            value={filters.category}
            onChange={(e) => onFilterChange({ ...filters, category: e.target.value })}
            className="w-full text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-300"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range Filter */}
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-2">Price Range</label>
          <select
            value={JSON.stringify(filters.priceRange)}
            onChange={(e) => onFilterChange({ ...filters, priceRange: JSON.parse(e.target.value) })}
            className="w-full text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-300"
          >
            {priceRanges.map((range, idx) => (
              <option key={idx} value={JSON.stringify({ min: range.min, max: range.max })}>
                {range.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}
