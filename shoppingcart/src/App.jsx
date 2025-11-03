import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/NavBar'
import ProductList from './components/ProductList'
import CartPage from './components/CartPage'

function App() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar 
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        <main className="main-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Routes>
            <Route path="/" element={<ProductList searchQuery={searchQuery} />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
