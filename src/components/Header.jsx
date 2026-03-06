import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Search, ShoppingCart, Menu, X, ChevronDown } from 'lucide-react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false)
  const [cartCount] = useState(2)

  const navLinkClass = ({ isActive }) =>
    `text-secondary-700 hover:text-primary-500 font-medium transition-colors ${
      isActive ? 'text-primary-500' : ''
    }`

  const categories = ['Smartphones', 'Laptops', 'Gaming', 'Accessories', 'Audio', 'Wearables']

  return (
    <header className="bg-white border-b border-secondary-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span className="text-xl font-bold text-secondary-900">TechNova</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/shop" className={navLinkClass}>
              Shop
            </NavLink>
            <div className="relative">
              <button
                className="flex items-center gap-1 text-secondary-700 hover:text-primary-500 font-medium transition-colors"
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                onBlur={() => setTimeout(() => setIsCategoriesOpen(false), 150)}
              >
                Categories
                <ChevronDown className="w-4 h-4" />
              </button>
              {isCategoriesOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-secondary-100 py-2">
                  {categories.map((category) => (
                    <Link
                      key={category}
                      to={`/shop?category=${category.toLowerCase()}`}
                      className="block px-4 py-2 text-secondary-700 hover:bg-primary-50 hover:text-primary-500 transition-colors"
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <NavLink to="/shop?deals=true" className={navLinkClass}>
              Deals
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About Us
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </nav>

          {/* Search & Cart */}
          <div className="flex items-center gap-4">
            {/* Search Bar - Desktop */}
            <div className="hidden md:flex items-center">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-48 lg:w-64 pl-4 pr-10 py-2 rounded-lg border border-secondary-200 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100 text-sm"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1 bg-primary-500 rounded-md text-white hover:bg-primary-600 transition-colors">
                  <Search className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Search Icon - Mobile */}
            <button className="md:hidden p-2 text-primary-500 bg-primary-50 rounded-full">
              <Search className="w-5 h-5" />
            </button>

            {/* Cart */}
            <button className="relative p-2 text-secondary-700 hover:text-primary-500 transition-colors">
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-secondary-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-secondary-100">
            <div className="flex flex-col gap-4">
              <NavLink to="/" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>
                Home
              </NavLink>
              <NavLink to="/shop" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>
                Shop
              </NavLink>
              <NavLink to="/shop?deals=true" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>
                Deals
              </NavLink>
              <NavLink to="/about" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>
                About Us
              </NavLink>
              <NavLink to="/contact" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>
                Contact
              </NavLink>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
