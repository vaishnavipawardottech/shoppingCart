import React from 'react'
import products from '../data/product.js'
import ProductCard from './ProductCard'

export default function ProductList() {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}

