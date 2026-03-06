import { ShieldCheck, Truck, Headphones } from 'lucide-react'

const iconMap = {
  secure: ShieldCheck,
  shipping: Truck,
  support: Headphones,
}

function TrustBadge({ badge }) {
  const { title, description, icon } = badge
  const IconComponent = iconMap[icon] || ShieldCheck

  return (
    <div className="flex flex-col items-center text-center p-6 bg-white border border-secondary-100 rounded-xl">
      <div className="w-14 h-14 bg-primary-50 rounded-full flex items-center justify-center mb-3">
        <IconComponent className="w-7 h-7 text-primary-500" />
      </div>
      <h3 className="font-semibold text-secondary-900 mb-1">{title}</h3>
      <p className="text-sm text-secondary-500 line-clamp-2">{description}</p>
    </div>
  )
}

export default TrustBadge
