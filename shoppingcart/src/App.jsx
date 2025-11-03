import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/NavBar'
import ProductList from './components/ProductList'
import CartPage from './components/CartPage'

function App() {
  const [page, setPage] = useState('home')
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Navbar 
          onNavigate={(p) => setPage(p)} 
          page={page} 
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        <main className="main-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {page === 'home' && <ProductList searchQuery={searchQuery} />}
          {page === 'cart' && <CartPage />}
        </main>
      </div>
    </>
  )
}

export default App
