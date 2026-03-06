import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'
import CategoryCard from '../components/CategoryCard'
import TrustBadge from '../components/TrustBadge'

const featuredProducts = [
  {
    id: 1,
    name: 'Dell XPS 13',
    price: 789,
    rating: 4.5,
    reviews: 71,
    image: null,
    isNew: false,
  },
  {
    id: 2,
    name: 'Sony WH-1000XM5',
    price: 169,
    rating: 4.8,
    reviews: 121,
    image: null,
    isNew: false,
  },
  {
    id: 3,
    name: 'iPhone 15 Pro',
    price: 999,
    rating: 4.7,
    reviews: 74,
    image: null,
    isNew: true,
  },
  {
    id: 4,
    name: 'Samsung Galaxy Tab S9',
    price: 399,
    rating: 4.4,
    reviews: 21,
    image: null,
    isNew: false,
  },
]

const categories = [
  { name: 'Smartphones', slug: 'smartphones', icon: 'smartphones' },
  { name: 'Laptops', slug: 'laptops', icon: 'laptops' },
  { name: 'Gaming', slug: 'gaming', icon: 'gaming' },
  { name: 'Accessories', slug: 'accessories', icon: 'accessories' },
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
