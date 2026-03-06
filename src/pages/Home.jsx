import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'
import CategoryCard from '../components/CategoryCard'
import TrustBadge from '../components/TrustBadge'

// Product images
import dellXps13 from '../assets/images/products/dell-xps-13.jpg'
import sonyWh1000xm5 from '../assets/images/products/sony-wh1000xm5.jpg'
import iphone15Pro from '../assets/images/products/iphone-15-pro.jpg'
import samsungTabS9 from '../assets/images/products/samsung-galaxy-tab-s9.jpg'

// Category images
import smartphonesImg from '../assets/images/categories/smartphones.jpg'
import laptopsImg from '../assets/images/categories/laptops.jpg'
import gamingImg from '../assets/images/categories/gaming.jpg'
import accessoriesImg from '../assets/images/categories/accessories.jpg'

const featuredProducts = [
  {
    id: 1,
    name: 'Dell XPS 13',
    price: 789,
    rating: 4.5,
    reviews: 71,
    image: dellXps13,
    isNew: false,
  },
  {
    id: 2,
    name: 'Sony WH-1000XM5',
    price: 169,
    rating: 4.8,
    reviews: 121,
    image: sonyWh1000xm5,
    isNew: false,
  },
  {
    id: 3,
    name: 'iPhone 15 Pro',
    price: 999,
    rating: 4.7,
    reviews: 74,
    image: iphone15Pro,
    isNew: true,
  },
  {
    id: 4,
    name: 'Samsung Galaxy Tab S9',
    price: 399,
    rating: 4.4,
    reviews: 21,
    image: samsungTabS9,
    isNew: false,
  },
]

const categories = [
  { name: 'Smartphones', slug: 'smartphones', icon: 'smartphones', image: smartphonesImg },
  { name: 'Laptops', slug: 'laptops', icon: 'laptops', image: laptopsImg },
  { name: 'Gaming', slug: 'gaming', icon: 'gaming', image: gamingImg },
  { name: 'Accessories', slug: 'accessories', icon: 'accessories', image: accessoriesImg },
]

const trustBadges = [
  {
    title: 'Secure Payments',
    description: 'Your payment information is processed securely.',
    icon: 'secure',
  },
  {
    title: 'Fast Shipping',
    description: 'Fast, reliable shipping to your doorstep.',
    icon: 'shipping',
  },
  {
    title: '24/7 Support',
    description: 'Our support team is here to help anytime.',
    icon: 'support',
  },
]

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Products */}
          <div className="lg:col-span-2">
            <h2 className="section-title mb-6">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Popular Categories */}
            <div>
              <h2 className="section-title mb-6">Popular Categories</h2>
              <div className="grid grid-cols-2 gap-4">
                {categories.map((category) => (
                  <CategoryCard key={category.slug} category={category} />
                ))}
              </div>
            </div>

            {/* Trust Badges */}
            <div>
              <h2 className="section-title mb-6">Trust Badges</h2>
              <div className="space-y-4">
                {trustBadges.map((badge, index) => (
                  <TrustBadge key={index} badge={badge} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
