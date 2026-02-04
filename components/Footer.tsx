
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Star } from 'lucide-react';
import { BUSINESS_INFO, NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-4">
          <div className="text-white font-black text-2xl leading-tight">
            ADITYA <br />
            <span className="text-orange-500">PLUMBING</span>
          </div>
          <p className="text-sm text-slate-400">
            Professional, dependable, and customer-focused plumbing solutions in Chandan Nagar and Kharadi Road. Your local experts for 24/7 emergency repairs.
          </p>
          <div className="flex items-center gap-2 bg-slate-800 p-3 rounded-lg w-fit">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="font-bold text-white">{BUSINESS_INFO.rating}</span>
            <span className="text-xs text-slate-400">({BUSINESS_INFO.reviewCount} Reviews)</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
          <ul className="space-y-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link to={item.href} className="hover:text-white transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-bold text-lg mb-6">Our Services</h4>
          <ul className="space-y-4">
            <li><Link to="/services" className="hover:text-white transition-colors">Leak Repair</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Emergency Plumbing</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Water Line Upgrades</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Bathroom Fittings</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <h4 className="text-white font-bold text-lg">Get In Touch</h4>
          <div className="space-y-4">
            <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="flex items-start gap-3 hover:text-white group">
              <Phone className="text-orange-500 mt-1 shrink-0" size={20} />
              <div>
                <p className="font-bold block text-white group-hover:text-orange-500 transition-colors">{BUSINESS_INFO.phone}</p>
                <p className="text-xs text-slate-500">Available 24/7 for Emergencies</p>
              </div>
            </a>
            <div className="flex items-start gap-3">
              <MapPin className="text-orange-500 mt-1 shrink-0" size={20} />
              <p className="text-sm leading-relaxed">
                {BUSINESS_INFO.address}
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="text-orange-500 mt-1 shrink-0" size={20} />
              <p className="text-sm">{BUSINESS_INFO.hours}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-slate-800 text-center">
        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved. | <Link to="/" className="underline hover:text-white">Privacy Policy</Link>
        </p>
        <p className="text-[10px] text-slate-600 mt-2 uppercase tracking-widest">
          Trusted Plumber in Chandan Nagar & Kharadi Road, Pune
        </p>
      </div>
    </footer>
  );
};

export default Footer;
