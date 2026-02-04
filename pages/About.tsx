
import React from 'react';
import { BUSINESS_INFO } from '../constants';
import { Award, ShieldCheck, Heart, User } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="bg-slate-900 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">About Aditya Plumbing</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Reliable plumbing expertise serving Chandan Nagar, Kharadi Road, and across Pune for years.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
             <h2 className="text-orange-500 font-bold uppercase tracking-widest mb-4">From the Owner</h2>
             <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">Commitment to Quality & Reliability</h3>
             <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
               <p>
                 Welcome to Aditya Plumbing Services. We founded this business on a simple principle: providing the highest quality plumbing solutions with honesty and skill. Over the years, we've grown into one of Pune's most trusted plumbing service providers, specifically serving the vibrant communities of Chandan Nagar and Kharadi Road.
               </p>
               <p>
                 Our team is composed of seasoned professionals who understand that plumbing isn't just about pipes and water—it's about the safety and comfort of your home or business. We treat every job, from a minor faucet repair to a complete water line overhaul, with the same level of care and precision.
               </p>
               <p>
                 We take pride in our "Clean Execution" philosophy. We ensure that our workspaces are kept tidy and your property is respected throughout the repair process. With our 24/7 availability, we're always here when you need us most.
               </p>
             </div>
             
             <div className="mt-10 flex items-center gap-6 pt-10 border-t border-slate-100">
                <div className="bg-slate-100 p-4 rounded-2xl">
                   <img src="https://picsum.photos/100/100?grayscale" className="w-16 h-16 rounded-xl object-cover" alt="Owner" />
                </div>
                <div>
                   <p className="text-xl font-bold text-slate-900">Aditya</p>
                   <p className="text-sm font-bold text-orange-500 uppercase tracking-widest">Founder & Lead Technician</p>
                </div>
             </div>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
             <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <Award className="text-orange-500 mb-6 w-12 h-12" />
                <h4 className="text-xl font-black mb-3">Certified Experts</h4>
                <p className="text-slate-600 text-sm">Our plumbers are highly trained and stay updated with modern techniques.</p>
             </div>
             <div className="bg-plumbing-blue p-8 rounded-3xl text-white">
                <ShieldCheck className="text-sky-400 mb-6 w-12 h-12" />
                <h4 className="text-xl font-black mb-3">Licensed & Insured</h4>
                <p className="text-sky-100 text-sm">Rest easy knowing your property is in professional, responsible hands.</p>
             </div>
             <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <Heart className="text-red-500 mb-6 w-12 h-12" />
                <h4 className="text-xl font-black mb-3">Customer First</h4>
                <p className="text-slate-600 text-sm">We listen to your needs and provide solutions that fit your budget.</p>
             </div>
             <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <User className="text-plumbing-blue mb-6 w-12 h-12" />
                <h4 className="text-xl font-black mb-3">Local Knowledge</h4>
                <p className="text-slate-600 text-sm">Being local, we respond faster and understand Pune's specific plumbing layouts.</p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
