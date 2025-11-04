import React, { useState } from 'react'
import products from '../data/product.js'
import ProductCard from './ProductCard'
import ProductFilter from './ProductFilter'

export default function ProductList({ searchQuery }) {
  const [filters, setFilters] = useState({
    category: 'category',
    priceRange: { min: 0, max: Infinity }
  })

  const filteredProducts = products.filter((product) => {
    const categoryMatch = filters.category === 'category' || product.category === filters.category
    const priceMatch = product.price >= filters.priceRange.min && product.price <= filters.priceRange.max
    const searchMatch = searchQuery === '' || product.name.toLowerCase().includes(searchQuery.toLowerCase())
    return categoryMatch && priceMatch && searchMatch
  })

  const handleClearFilters = () => {
    setFilters({
      category: 'category',
      priceRange: { min: 0, max: Infinity }
    })
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Products</h2>
      
      <ProductFilter 
        filters={filters} 
        onFilterChange={setFilters}
      />

      {filteredProducts.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow-sm">
          <p className="text-gray-500">No products found matching your filters.</p>
          <button
            onClick={handleClearFilters}
            className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  )
}

