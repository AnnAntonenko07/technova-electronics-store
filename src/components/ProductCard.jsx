import { Star } from 'lucide-react'
import { Link } from 'react-router-dom'

function ProductCard({ product }) {
  const { id, name, price, rating, reviews, image, isNew } = product

  return (
    <div className="bg-white border border-secondary-100 rounded-xl p-4 hover:shadow-lg transition-shadow group">
      {/* Product Image */}
      <div className="relative aspect-square bg-secondary-50 rounded-lg mb-4 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          {image ? (
            <img src={image} alt={name} className="w-3/4 h-3/4 object-contain" />
          ) : (
            <div className="w-3/4 h-3/4 bg-gradient-to-br from-secondary-200 to-secondary-300 rounded-lg"></div>
          )}
        </div>
        {isNew && (
          <span className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
            NEW
          </span>
        )}
      </div>

      {/* Product Info */}
      <div>
        <h3 className="font-semibold text-secondary-900 mb-1 line-clamp-1">{name}</h3>
        
        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${
                  i < Math.floor(rating)
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'fill-secondary-200 text-secondary-200'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-secondary-500">({reviews})</span>
        </div>

        {/* Price */}
        <p className="text-lg font-bold text-secondary-900 mb-3">${price}</p>

        {/* Buttons */}
        <div className="flex gap-2">
          <button className="flex-1 bg-primary-500 text-white text-sm font-semibold py-2 rounded-md hover:bg-primary-600 transition-colors">
            ADD TO CART
          </button>
          <Link
            to={`/shop/${id}`}
            className="flex-1 bg-secondary-100 text-secondary-700 text-sm font-semibold py-2 rounded-md hover:bg-secondary-200 transition-colors text-center"
          >
            VIEW DETAILS
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
