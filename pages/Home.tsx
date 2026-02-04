
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Star, CheckCircle2, MapPin, ArrowRight, UserCheck } from 'lucide-react';
import { BUSINESS_INFO, SERVICES, REVIEWS, WHY_CHOOSE_US, SERVICE_ICONS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-slate-900 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-sky-500 to-transparent"></div>
            <img src="https://picsum.photos/1920/1080?grayscale&blur=2" className="w-full h-full object-cover" alt="Plumbing Background" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm font-bold mb-6 animate-fade-in">
              <Star size={16} fill="currentColor" /> 4.9 Rated Plumber in Pune
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
              Expert Plumbing Services in <span className="text-orange-500">Chandan Nagar</span> & <span className="text-sky-400">Kharadi Road</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
              Facing a plumbing crisis? Aditya Plumbing Services provides reliable 24/7 support for leakages, bathroom repairs, and full water line installations. Fast. Professional. Trustworthy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <a 
                href={`tel:${BUSINESS_INFO.phoneRaw}`} 
                className="bg-orange-500 hover:bg-orange-600 text-white text-lg font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-orange-500/20 active:scale-95"
              >
                <Phone size={24} /> Get Help Now
              </a>
              <Link 
                to="/services" 
                className="bg-white/10 hover:bg-white/20 text-white text-lg font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-3 transition-all backdrop-blur-sm border border-white/10"
              >
                Our Services <ArrowRight size={20} />
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 size={18} className="text-sky-400" />
                <span className="font-medium">24/7 Emergency Support</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 size={18} className="text-sky-400" />
                <span className="font-medium">Clean Execution</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 size={18} className="text-sky-400" />
                <span className="font-medium">Quality Materials</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Bar */}
      <section className="bg-white py-8 border-y border-slate-100 shadow-sm relative z-20 -mt-10 mx-4 md:mx-8 rounded-2xl max-w-7xl md:self-center w-full lg:max-w-5xl px-4 flex flex-wrap justify-around gap-8">
        <div className="flex items-center gap-4">
           <div className="bg-blue-100 p-3 rounded-full text-blue-600">
              <Star className="fill-blue-600" />
           </div>
           <div>
              <p className="font-black text-2xl leading-none">4.9/5</p>
              <p className="text-slate-500 text-xs uppercase tracking-widest font-bold">Google Rating</p>
           </div>
        </div>
        <div className="flex items-center gap-4">
           <div className="bg-green-100 p-3 rounded-full text-green-600">
              <UserCheck />
           </div>
           <div>
              <p className="font-black text-2xl leading-none">33+</p>
              <p className="text-slate-500 text-xs uppercase tracking-widest font-bold">Happy Clients</p>
           </div>
        </div>
        <div className="flex items-center gap-4">
           <div className="bg-orange-100 p-3 rounded-full text-orange-600">
              <MapPin />
           </div>
           <div>
              <p className="font-black text-xl leading-none">Local Experts</p>
              <p className="text-slate-500 text-xs uppercase tracking-widest font-bold">Pune Specialist</p>
           </div>
        </div>
      </section>

      {/* Services Grid Preview */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-orange-500 font-bold uppercase tracking-widest mb-4">What We Offer</h2>
          <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">Our Premium Plumbing Services</h3>
          <p className="text-slate-600 max-w-2xl mx-auto">From fixing a leaking tap to full residential plumbing installations, we provide complete, professional solutions across Pune.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.slice(0, 6).map((service) => (
            <div key={service.id} className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="bg-sky-50 text-sky-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-plumbing-blue group-hover:text-white transition-colors duration-300">
                {SERVICE_ICONS[service.iconName]}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <Link to="/services" className="text-plumbing-blue font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                Learn More <ArrowRight size={18} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-orange-500 font-bold uppercase tracking-widest mb-4 text-center lg:text-left">Why Aditya Plumbing?</h2>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 text-center lg:text-left">Dependable Repairs, Reliable Results</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {WHY_CHOOSE_US.map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="bg-white p-3 rounded-lg shadow-sm h-fit text-sky-600 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 mb-1">{item.title}</h5>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center lg:text-left">
               <a 
                href={`tel:${BUSINESS_INFO.phoneRaw}`} 
                className="inline-flex bg-plumbing-blue hover:bg-sky-900 text-white font-bold px-10 py-4 rounded-xl items-center gap-3 transition-all shadow-lg active:scale-95"
              >
                <Phone size={20} /> Call Now for a Consultation
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://picsum.photos/id/1050/800/600" className="w-full h-full object-cover" alt="Plumber Working" />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-orange-500 text-white p-8 rounded-3xl hidden md:block max-w-xs shadow-xl">
               <p className="text-4xl font-black mb-1">100%</p>
               <p className="font-bold text-lg leading-tight uppercase tracking-wide">Satisfaction Guaranteed</p>
               <p className="text-orange-100 text-sm mt-2 font-medium">We don't leave until the job is done perfectly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-orange-500 font-bold uppercase tracking-widest mb-4">Testimonials</h2>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">What Our Customers Say</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((review) => (
              <div key={review.id} className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 flex flex-col h-full">
                <div className="flex gap-1 mb-6 text-yellow-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="text-slate-600 italic mb-8 flex-grow">"{review.content}"</p>
                <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                  <div className="bg-sky-100 w-12 h-12 rounded-full flex items-center justify-center text-sky-700 font-black text-lg">
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900">{review.author}</h5>
                    <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">{review.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
             <Link to="/reviews" className="text-plumbing-blue font-bold flex items-center justify-center gap-2 hover:gap-4 transition-all">
                View All {BUSINESS_INFO.reviewCount} Reviews <ArrowRight size={20} />
             </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-plumbing-blue py-20">
         <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Ready to solve your plumbing problems?</h2>
            <p className="text-sky-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">Contact Aditya Plumbing Services today for prompt, reliable, and professional plumbing in Pune.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
               <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="w-full sm:w-auto bg-orange-500 text-white font-black text-xl px-10 py-5 rounded-xl shadow-xl flex items-center justify-center gap-4 hover:scale-105 active:scale-95 transition-all">
                  <Phone size={24} /> Call {BUSINESS_INFO.phone}
               </a>
               <Link to="/contact" className="w-full sm:w-auto bg-white/10 text-white font-bold text-lg px-10 py-5 rounded-xl border border-white/20 hover:bg-white/20 transition-all">
                  Inquiry Form
               </Link>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Home;
