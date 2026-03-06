import { Users, Target, Award, Globe } from 'lucide-react'

const stats = [
  { label: 'Happy Customers', value: '50K+' },
  { label: 'Products', value: '10K+' },
  { label: 'Countries', value: '30+' },
  { label: 'Years in Business', value: '10+' },
]

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description:
      'To provide cutting-edge technology products at affordable prices, making innovation accessible to everyone.',
  },
  {
    icon: Users,
    title: 'Customer First',
    description:
      'We prioritize customer satisfaction above all else, offering exceptional service and support at every step.',
  },
  {
    icon: Award,
    title: 'Quality Assured',
    description:
      'Every product we sell undergoes rigorous quality checks to ensure you receive only the best.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description:
      'We ship worldwide, bringing the latest tech to customers across the globe with fast, reliable delivery.',
  },
]

function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-500 to-primary-600 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">About TechNova</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Your trusted destination for premium electronics and cutting-edge technology since 2014.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-secondary-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-secondary-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-secondary-600">
                <p>
                  TechNova was founded in 2014 with a simple vision: to make premium technology
                  accessible to everyone. What started as a small online store has grown into a
                  trusted destination for tech enthusiasts worldwide.
                </p>
                <p>
                  We carefully curate our product selection, partnering only with reputable brands
                  and manufacturers to ensure every item meets our high standards of quality and
                  performance.
                </p>
                <p>
                  Today, we serve over 50,000 happy customers across 30+ countries, offering
                  everything from the latest smartphones and laptops to gaming gear and smart home
                  devices.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl h-80 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-3xl font-bold">T</span>
                </div>
                <p className="text-primary-700 font-semibold">TechNova HQ</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-secondary-900 text-center mb-12">
            What We Stand For
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary-500" />
                </div>
                <h3 className="font-semibold text-secondary-900 mb-2">{value.title}</h3>
                <p className="text-sm text-secondary-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
