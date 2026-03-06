import { Link } from 'react-router-dom'
import { Smartphone, Laptop, Gamepad2, Headphones } from 'lucide-react'

const iconMap = {
  smartphones: Smartphone,
  laptops: Laptop,
  gaming: Gamepad2,
  accessories: Headphones,
}

function CategoryCard({ category }) {
  const { name, slug, icon, image } = category
  const IconComponent = iconMap[icon] || Smartphone

  return (
    <Link
      to={`/shop?category=${slug}`}
      className="flex flex-col items-center p-4 bg-white border border-secondary-100 rounded-xl hover:shadow-lg hover:border-primary-200 transition-all group"
    >
      <div className="w-16 h-16 bg-secondary-50 rounded-xl flex items-center justify-center mb-3 group-hover:bg-primary-50 transition-colors overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <IconComponent className="w-8 h-8 text-secondary-600 group-hover:text-primary-500 transition-colors" />
        )}
      </div>
      <span className="font-medium text-secondary-700 group-hover:text-primary-500 transition-colors text-sm text-center">
        {name}
      </span>
    </Link>
  )
}

export default CategoryCard
