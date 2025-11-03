# 🛒 AddtoCart - Modern E-Commerce Shopping Cart

A fully functional, responsive shopping cart application built with React, TailwindCSS, and modern web technologies. Features real-time cart management, product filtering, search functionality, and persistent storage.

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?logo=react)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.16-38B2AC?logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?logo=vite)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

### 🛍️ Shopping Experience
- **Product Catalog** - Browse 8 different products across multiple categories
- **Advanced Filtering** - Filter by category and price range
- **Real-time Search** - Search products by name instantly
- **Stock Management** - Real-time stock availability tracking
- **Quantity Selection** - Custom dropdown for selecting product quantities

### 🛒 Cart Management
- **Add to Cart** - Seamlessly add products with quantity selection
- **Update Quantity** - Increase or decrease item quantities in cart
- **Remove Items** - Remove individual items with confirmation modal
- **Clear Cart** - Clear all items with confirmation modal
- **Cart Persistence** - Cart data persists across browser sessions using localStorage

### 🎨 User Interface
- **Responsive Design** - Mobile-first design that works on all devices
- **Professional Styling** - Clean, modern UI with TailwindCSS
- **Custom Components** - Custom dropdowns and modals for better UX
- **Interactive Elements** - Smooth transitions and hover effects
- **Stock Badges** - Visual indicators for stock availability

### 🔔 User Notifications
- **Confirmation Modals** - Confirm actions before removing items or clearing cart
- **Checkout Modal** - Confirmation dialog for checkout process
- **Empty State** - Clear messaging when cart or filters return no results

## 🚀 Tech Stack

- **Frontend Framework:** React 19.1.1
- **Build Tool:** Vite 7.1.7
- **Styling:** TailwindCSS 4.1.16
- **Icons:** Lucide React 0.552.0
- **State Management:** React Context API with useState
- **Data Persistence:** localStorage
- **Image Source:** Unsplash (high-quality product images)

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/vaishnavipawardottech/shoppingCart.git
   cd shoppingCart/shoppingcart
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   Navigate to http://localhost:5173
   ```

## 🏗️ Project Structure

```
shoppingcart/
├── src/
│   ├── components/
│   │   ├── NavBar.jsx              # Navigation bar with search and cart icon
│   │   ├── ProductList.jsx         # Product grid with filtering logic
│   │   ├── ProductCard.jsx         # Individual product card
│   │   ├── ProductFilter.jsx       # Category and price filter dropdowns
│   │   ├── CartPage.jsx            # Cart overview page
│   │   ├── CartItem.jsx            # Individual cart item
│   │   └── ConfirmationModal.jsx   # Reusable confirmation modal
│   ├── contexts/
│   │   └── CartContext.jsx         # Global cart state management
│   ├── data/
│   │   └── product.js              # Product catalog data
│   ├── App.jsx                     # Main application component
│   ├── main.jsx                    # Application entry point
│   └── index.css                   # Global styles and Tailwind directives
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎯 Key Components

### Context API (CartContext)
Manages global cart state with the following functionality:
- `addToCart(product, quantity)` - Add items to cart with stock validation
- `removeFromCart(productId)` - Remove items from cart
- `updateQuantity(productId, quantity)` - Update item quantities
- `clearCart()` - Clear all cart items
- `totals` - Computed total items and price

### Product Filtering
- **Category Filter:** Electronics, Accessories, Footwear, Home, Sports
- **Price Filter:** 
  - Under ₹500
  - ₹500 - ₹1500
  - ₹1500 - ₹3000
  - ₹3000 - ₹5000
  - Above ₹5000

### Search Functionality
Real-time case-insensitive search across product names

## 🎨 Design Features

- **Color Scheme:** Indigo primary with clean gray tones
- **Typography:** System font stack for optimal performance
- **Responsive Breakpoints:** Mobile, Tablet, Desktop (sm, md, lg)
- **Custom Dropdowns:** Built with React hooks for better control
- **Modals:** Clean confirmation dialogs with backdrop overlay

## 📱 Responsive Design

- **Mobile (< 640px):** Single column layout, stacked navigation
- **Tablet (640px - 1024px):** 2-3 column product grid
- **Desktop (> 1024px):** 4 column product grid, full navigation

## 🔧 Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 🌟 Product Catalog

| Product | Category | Price | Stock |
|---------|----------|-------|-------|
| Classic Leather Wallet | Accessories | ₹1,299 | 12 |
| Wireless Headphones | Electronics | ₹2,499 | 5 |
| Running Sneakers | Footwear | ₹3,999 | 20 |
| Ceramic Coffee Mug | Home | ₹299 | 30 |
| Fitness Tracker Watch | Electronics | ₹4,999 | 15 |
| Canvas Backpack | Accessories | ₹1,899 | 8 |
| Yoga Mat | Sports | ₹899 | 25 |
| Bluetooth Speaker | Electronics | ₹1,999 | 10 |

## 🔮 Future Enhancements

- [ ] User authentication and profiles
- [ ] Payment gateway integration
- [ ] Order history and tracking
- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Multiple currency support
- [ ] Admin dashboard for product management
- [ ] Advanced product sorting options
- [ ] Email notifications
- [ ] Social sharing features

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Vaishnavi Pawar**
- GitHub: [@vaishnavipawardottech](https://github.com/vaishnavipawardottech)

## 🙏 Acknowledgments

- Product images from [Unsplash](https://unsplash.com)
- Icons from [Lucide React](https://lucide.dev)
- Styling inspiration from modern e-commerce platforms

---

<p align="center">Made with ❤️ using React and TailwindCSS</p>

