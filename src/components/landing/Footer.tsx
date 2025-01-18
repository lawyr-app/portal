import Link from "next/link";
import { Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { X } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-black text-gray-600 dark:text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
              AI Legal Assistant
            </h3>
            <p className="text-sm mb-4">
              Empowering legal decisions with artificial intelligence for Indian
              law.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300"
              >
                <X size={20} />
                <span className="sr-only">X (formerly Twitter)</span>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-black dark:text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm hover:text-black dark:hover:text-white transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/info/pricing"
                  className="text-sm hover:text-black dark:hover:text-white transition-colors duration-300"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/info/contact"
                  className="text-sm hover:text-black dark:hover:text-white transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/info/privacy-policy"
                  className="text-sm hover:text-black dark:hover:text-white transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/info/terms-of-use"
                  className="text-sm hover:text-black dark:hover:text-white transition-colors duration-300"
                >
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-black dark:text-white mb-4">
              Contact Us
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-black dark:text-white" />
                <a
                  href="mailto:info@ailegalassistant.com"
                  className="text-sm hover:text-black dark:hover:text-white transition-colors duration-300"
                >
                  info@ailegalassistant.com
                </a>
              </li>
              {/* <li className="flex items-center">
                <Phone size={16} className="mr-2 text-black dark:text-white" />
                <a
                  href="tel:+911234567890"
                  className="text-sm hover:text-black dark:hover:text-white transition-colors duration-300"
                >
                  +91 123 456 7890
                </a>
              </li> */}
              <li className="flex items-start">
                <MapPin
                  size={16}
                  className="mr-2 mt-1 text-black dark:text-white"
                />
                <span className="text-sm">Goa India</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} AI Legal Assistant. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
