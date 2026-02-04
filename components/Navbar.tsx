
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { BUSINESS_INFO, NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Bar - Desktop Only */}
      <div className="hidden lg:block bg-plumbing-blue text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm font-medium">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <MapPin size={14} /> {BUSINESS_INFO.serviceAreas[0]}, Pune
            </span>
            <span className="flex items-center gap-2">
              <Phone size={14} /> Call 24/7: {BUSINESS_INFO.phone}
            </span>
          </div>
          <div className="bg-orange-500 px-3 py-1 rounded-full text-xs animate-pulse">
            24/7 Emergency Support Available
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 md:h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <div className="text-plumbing-blue font-black text-xl md:text-2xl leading-tight">
                ADITYA <br className="md:hidden" />
                <span className="text-orange-500">PLUMBING</span>
              </div>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`${
                  isActive(item.href)
                    ? 'text-plumbing-blue font-bold border-b-2 border-plumbing-blue'
                    : 'text-slate-600 hover:text-plumbing-blue font-medium'
                } px-1 py-2 text-sm transition-colors duration-200`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="bg-plumbing-blue text-white px-5 py-2.5 rounded-lg font-bold flex items-center gap-2 hover:bg-sky-900 transition-all shadow-md active:scale-95"
            >
              <Phone size={18} /> Call Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="bg-plumbing-blue text-white p-2.5 rounded-full shadow-md active:scale-95"
            >
              <Phone size={20} />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-plumbing-blue hover:bg-slate-100 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-xl overflow-hidden animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-4 text-base font-bold ${
                  isActive(item.href)
                    ? 'text-plumbing-blue bg-blue-50'
                    : 'text-slate-600 border-b border-slate-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full bg-plumbing-blue text-white py-4 rounded-xl font-bold flex justify-center items-center gap-3 text-lg"
              >
                <Phone size={20} /> Call {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
