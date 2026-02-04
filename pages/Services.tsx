
import React from 'react';
import { SERVICES, SERVICE_ICONS, BUSINESS_INFO } from '../constants';
import { CheckCircle2, Phone } from 'lucide-react';

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-slate-900 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Our Plumbing Services</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium">
            From minor repairs to major installations, we provide comprehensive plumbing solutions for homes and businesses in Pune.
          </p>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto space-y-24">
          {SERVICES.map((service, idx) => (
            <div key={service.id} className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24`}>
              <div className="w-full lg:w-1/2">
                <div className="bg-sky-50 text-sky-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-8">
                  {SERVICE_ICONS[service.iconName]}
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">{service.title}</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  {service.detailedContent || service.description}
                </p>
                
                <div className="space-y-4 mb-10">
                  <div className="flex items-center gap-3 text-slate-900 font-bold">
                    <CheckCircle2 className="text-orange-500" size={20} /> Quality Workmanship
                  </div>
                  <div className="flex items-center gap-3 text-slate-900 font-bold">
                    <CheckCircle2 className="text-orange-500" size={20} /> High-Grade Materials
                  </div>
                  <div className="flex items-center gap-3 text-slate-900 font-bold">
                    <CheckCircle2 className="text-orange-500" size={20} /> Transparent Quotes
                  </div>
                </div>

                <a 
                  href={`tel:${BUSINESS_INFO.phoneRaw}`} 
                  className="inline-flex bg-plumbing-blue text-white px-8 py-4 rounded-xl font-bold items-center gap-3 hover:bg-sky-900 transition-all"
                >
                  <Phone size={20} /> Call for Estimate
                </a>
              </div>
              
              <div className="w-full lg:w-1/2">
                <div className="rounded-3xl overflow-hidden shadow-2xl aspect-video lg:aspect-square">
                  <img src={`https://picsum.photos/id/${1020 + idx}/800/800`} className="w-full h-full object-cover" alt={service.title} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Emergency Alert */}
      <section className="bg-orange-500 py-16 px-4">
         <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-white">
            <div className="text-center md:text-left">
               <h3 className="text-3xl font-black mb-2">Emergency Service?</h3>
               <p className="text-orange-100 text-lg font-medium">Available 24 hours a day, 7 days a week.</p>
            </div>
            <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="bg-white text-orange-600 font-black text-2xl px-12 py-5 rounded-2xl shadow-xl hover:scale-105 transition-all">
               {BUSINESS_INFO.phone}
            </a>
         </div>
      </section>
    </div>
  );
};

export default ServicesPage;
