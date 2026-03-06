import { Link } from 'react-router-dom'

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
            <div className="flex items-center justify-center gap-4">
              {/* Laptop */}
              <div className="w-40 h-32 sm:w-56 sm:h-44 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <div className="w-32 sm:w-44 h-24 sm:h-32 bg-secondary-800 rounded-lg relative">
                  <div className="absolute inset-2 bg-gradient-to-br from-secondary-600 to-secondary-700 rounded"></div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 sm:w-28 h-1 bg-secondary-600 rounded-b"></div>
                </div>
              </div>

              {/* Smartphone & Tablet Stack */}
              <div className="flex flex-col gap-3">
                <div className="w-16 sm:w-20 h-28 sm:h-36 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <div className="w-12 sm:w-16 h-24 sm:h-32 bg-secondary-800 rounded-xl relative">
                    <div className="absolute inset-1 bg-gradient-to-br from-primary-400 to-primary-500 rounded-lg"></div>
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-6 sm:w-8 h-1 bg-secondary-600 rounded"></div>
                  </div>
                </div>
                <div className="w-20 sm:w-24 h-14 sm:h-16 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <div className="w-16 sm:w-20 h-10 sm:h-12 bg-secondary-800 rounded-lg relative">
                    <div className="absolute inset-1 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded"></div>
                  </div>
                </div>
              </div>

              {/* Headphones */}
              <div className="w-24 sm:w-32 h-24 sm:h-32 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <div className="relative">
                  <div className="w-16 sm:w-20 h-4 bg-secondary-700 rounded-full"></div>
                  <div className="absolute -left-1 top-2 w-6 sm:w-8 h-10 sm:h-12 bg-secondary-800 rounded-full"></div>
                  <div className="absolute -right-1 top-2 w-6 sm:w-8 h-10 sm:h-12 bg-secondary-800 rounded-full"></div>
                </div>
              </div>
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
