import React, { createContext, useContext, useState, useMemo, useEffect } from 'react'

const CartContext = createContext()

export function useCart() {
  return useContext(CartContext)
}

export function CartProvider({ children }) {
  // items: [{ product, quantity }]
  const [items, setItems] = useState(() => {
    try {
      const raw = localStorage.getItem('cart_items')
      if (raw) return JSON.parse(raw)
    } catch (err) {
      console.log(err);
    }
    return []
  })

  useEffect(() => {
    try {
      localStorage.setItem('cart_items', JSON.stringify(items))
    } catch (err) {
      console.log(err);
    }
  }, [items])

  function addToCart(product, qty = 1) {
    setItems((prev) => {
      const found = prev.find((it) => it.product.id === product.id)
      if (found) {
        const updated = prev.map((it) =>
          it.product.id === product.id
            ? { ...it, quantity: Math.min(it.quantity + qty, product.stock) }
            : it
        )
        return updated
      }
      return [...prev, { product, quantity: Math.min(qty, product.stock) }]
    })
  }

  function removeFromCart(productId) {
    setItems((prev) => prev.filter((it) => it.product.id !== productId))
  }

  function updateQuantity(productId, qty) {
    setItems((prev) =>
      prev
        .map((it) => (it.product.id === productId ? { ...it, quantity: Math.max(1, Math.min(qty, it.product.stock)) } : it))
        .filter((it) => it.quantity > 0)
    )
  }

  function clearCart() {
    setItems([])
  }

  const totals = useMemo(() => {
    const totalItems = items.reduce((acc, it) => acc + it.quantity, 0)
    const totalPrice = items.reduce((acc, it) => acc + it.quantity * it.product.price, 0)
    return { totalItems, totalPrice }
  }, [items])

  const value = { items, addToCart, removeFromCart, updateQuantity, clearCart, totals }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

