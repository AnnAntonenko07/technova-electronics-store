import { Link } from 'react-router-dom'
import { Smartphone, Laptop, Gamepad2, Headphones } from 'lucide-react'

const iconMap = {
  smartphones: Smartphone,
  laptops: Laptop,
  gaming: Gamepad2,
  accessories: Headphones,
}

function CategoryCard({ category }) {
  const { name, slug, icon } = category
  const IconComponent = iconMap[icon] || Smartphone

  return (
    <Link
      to={`/shop?category=${slug}`}
      className="flex flex-col items-center p-6 bg-white border border-secondary-100 rounded-xl hover:shadow-lg hover:border-primary-200 transition-all group"
    >
      <div className="w-16 h-16 bg-secondary-100 rounded-xl flex items-center justify-center mb-3 group-hover:bg-primary-50 transition-colors">
        <IconComponent className="w-8 h-8 text-secondary-600 group-hover:text-primary-500 transition-colors" />
      </div>
      <span className="font-medium text-secondary-700 group-hover:text-primary-500 transition-colors">
        {name}
      </span>
    </Link>
  )
}

export default CategoryCard
