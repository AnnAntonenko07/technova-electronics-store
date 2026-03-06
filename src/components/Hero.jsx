import { Link } from 'react-router-dom'
import heroDevices from '../assets/images/hero-devices.jpg'

function Hero() {
  return (
    <section className="bg-gradient-to-r from-primary-500 to-primary-600 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center py-12 lg:py-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left mb-8 lg:mb-0">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
              UPGRADE YOUR<br />TECH TODAY
            </h1>
            <p className="text-primary-100 text-lg mb-8 max-w-md mx-auto lg:mx-0">
              Latest electronics with the best prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary-700 text-white font-semibold rounded-lg hover:bg-primary-800 transition-colors"
              >
                SHOP NOW
              </Link>
              <Link
                to="/shop?deals=true"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-secondary-800 font-semibold rounded-lg hover:bg-secondary-50 transition-colors"
              >
                EXPLORE DEALS
              </Link>
            </div>
          </div>

          {/* Product Images */}
          <div className="flex-1 relative">
            <div className="flex items-center justify-center">
              <img
                src={heroDevices}
                alt="Latest electronics including laptop, smartphone, tablet, and headphones"
                className="w-full max-w-lg h-auto object-contain rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center gap-2 pb-6">
          <button className="w-2 h-2 rounded-full bg-white" aria-label="Slide 1"></button>
          <button className="w-2 h-2 rounded-full bg-white/40" aria-label="Slide 2"></button>
          <button className="w-2 h-2 rounded-full bg-white/40" aria-label="Slide 3"></button>
        </div>
      </div>
    </section>
  )
}

export default Hero
