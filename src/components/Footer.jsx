import { Link } from 'react-router-dom'
import { Phone, Mail, ArrowRight } from 'lucide-react'

function Footer() {
  const socialLinks = [
    { name: 'Facebook', abbr: 'Fb', color: 'bg-blue-600' },
    { name: 'Twitter', abbr: 'Tw', color: 'bg-sky-500' },
    { name: 'Instagram', abbr: 'In', color: 'bg-pink-500' },
    { name: 'LinkedIn', abbr: 'Li', color: 'bg-blue-700' },
    { name: 'YouTube', abbr: 'Yt', color: 'bg-red-600' },
  ]

  return (
    <footer className="bg-secondary-50 border-t border-secondary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-secondary-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-secondary-600 hover:text-primary-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-secondary-600 hover:text-primary-500 transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-secondary-600 hover:text-primary-500 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="font-semibold text-secondary-900 mb-4">Policies</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-secondary-600 hover:text-primary-500 transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-secondary-600 hover:text-primary-500 transition-colors">
                  Returns
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-secondary-600 hover:text-primary-500 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-secondary-900 mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-secondary-600">
                <Phone className="w-4 h-4" />
                <span>+1 (123) 55 6789</span>
              </li>
              <li className="flex items-center gap-2 text-secondary-600">
                <Mail className="w-4 h-4" />
                <span>support@technova.com</span>
              </li>
            </ul>
            <div className="flex gap-2 mt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className={`w-8 h-8 ${social.color} text-white rounded-full flex items-center justify-center text-xs font-bold hover:opacity-90 transition-opacity`}
                  aria-label={social.name}
                >
                  {social.abbr}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-secondary-900 mb-4">Subscribe for Latest Deals</h3>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-lg border border-secondary-200 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100 text-sm"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-primary-500 text-white rounded-r-lg hover:bg-primary-600 transition-colors"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-secondary-200 text-center text-secondary-500 text-sm">
          <p>&copy; {new Date().getFullYear()} TechNova. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
