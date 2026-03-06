import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { SlidersHorizontal, Grid, List } from 'lucide-react'

// Product images
import dellXps13 from '../assets/images/products/dell-xps-13.jpg'
import sonyWh1000xm5 from '../assets/images/products/sony-wh1000xm5.jpg'
import iphone15Pro from '../assets/images/products/iphone-15-pro.jpg'
import samsungTabS9 from '../assets/images/products/samsung-galaxy-tab-s9.jpg'
import macbookAirM3 from '../assets/images/products/macbook-air-m3.jpg'
import airpodsPro2 from '../assets/images/products/airpods-pro-2.jpg'
import samsungGalaxyS24 from '../assets/images/products/samsung-galaxy-s24.jpg'
import nintendoSwitchOled from '../assets/images/products/nintendo-switch-oled.jpg'
import playstation5 from '../assets/images/products/playstation-5.jpg'
import logitechMxMaster3s from '../assets/images/products/logitech-mx-master-3s.jpg'
import googlePixel8Pro from '../assets/images/products/google-pixel-8-pro.jpg'
import xboxSeriesX from '../assets/images/products/xbox-series-x.jpg'

const allProducts = [
  { id: 1, name: 'Dell XPS 13', price: 789, rating: 4.5, reviews: 71, category: 'laptops', image: dellXps13 },
  { id: 2, name: 'Sony WH-1000XM5', price: 169, rating: 4.8, reviews: 121, category: 'accessories', image: sonyWh1000xm5 },
  { id: 3, name: 'iPhone 15 Pro', price: 999, rating: 4.7, reviews: 74, category: 'smartphones', isNew: true, image: iphone15Pro },
  { id: 4, name: 'Samsung Galaxy Tab S9', price: 399, rating: 4.4, reviews: 21, category: 'laptops', image: samsungTabS9 },
  { id: 5, name: 'MacBook Air M3', price: 1199, rating: 4.9, reviews: 89, category: 'laptops', isNew: true, image: macbookAirM3 },
  { id: 6, name: 'AirPods Pro 2', price: 249, rating: 4.6, reviews: 156, category: 'accessories', image: airpodsPro2 },
  { id: 7, name: 'Samsung Galaxy S24', price: 899, rating: 4.5, reviews: 62, category: 'smartphones', image: samsungGalaxyS24 },
  { id: 8, name: 'Nintendo Switch OLED', price: 349, rating: 4.7, reviews: 203, category: 'gaming', image: nintendoSwitchOled },
  { id: 9, name: 'PlayStation 5', price: 499, rating: 4.8, reviews: 312, category: 'gaming', image: playstation5 },
  { id: 10, name: 'Logitech MX Master 3S', price: 99, rating: 4.6, reviews: 87, category: 'accessories', image: logitechMxMaster3s },
  { id: 11, name: 'Google Pixel 8 Pro', price: 899, rating: 4.5, reviews: 45, category: 'smartphones', image: googlePixel8Pro },
  { id: 12, name: 'Xbox Series X', price: 499, rating: 4.7, reviews: 189, category: 'gaming', image: xboxSeriesX },
]

const categories = ['All', 'Smartphones', 'Laptops', 'Gaming', 'Accessories']

function Shop() {
  const [searchParams] = useSearchParams()
  const categoryParam = searchParams.get('category')
  const dealsParam = searchParams.get('deals')

  const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'All')
  const [sortBy, setSortBy] = useState('featured')
  const [viewMode, setViewMode] = useState('grid')

  const filteredProducts = allProducts.filter((product) => {
    if (selectedCategory === 'All') return true
    return product.category === selectedCategory.toLowerCase()
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'rating':
        return b.rating - a.rating
      default:
        return 0
    }
  })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-secondary-900 mb-2">
          {dealsParam ? 'Best Deals' : 'Shop All Products'}
        </h1>
        <p className="text-secondary-600">
          Discover the latest electronics at unbeatable prices
        </p>
      </div>

      {/* Filters Bar */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8 pb-6 border-b border-secondary-100">
        {/* Categories */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                selectedCategory === category
                  ? 'bg-primary-500 text-white'
                  : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Sort & View */}
        <div className="flex items-center gap-4 sm:ml-auto">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-secondary-500" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-secondary-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary-500"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>

          <div className="flex border border-secondary-200 rounded-lg overflow-hidden">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 ${viewMode === 'grid' ? 'bg-primary-500 text-white' : 'text-secondary-500 hover:bg-secondary-50'}`}
              aria-label="Grid view"
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 ${viewMode === 'list' ? 'bg-primary-500 text-white' : 'text-secondary-500 hover:bg-secondary-50'}`}
              aria-label="List view"
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <p className="text-sm text-secondary-500 mb-6">
        Showing {sortedProducts.length} products
      </p>

      {/* Products Grid */}
      <div
        className={
          viewMode === 'grid'
            ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
            : 'flex flex-col gap-4'
        }
      >
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {sortedProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-secondary-500 text-lg">No products found in this category.</p>
        </div>
      )}
    </div>
  )
}

export default Shop
