
import React, { useState } from 'react';
import { BUSINESS_INFO } from '../constants';
import { Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, you'd handle form submission here
  };

  return (
    <div className="bg-white">
      <section className="bg-slate-900 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Contact Us</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium">
            Get plumbing help today. We're available 24/7 for all your plumbing emergencies.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Info Side */}
          <div className="lg:w-1/2 space-y-12">
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-8">Reach Out Directly</h2>
              <div className="space-y-8">
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="flex gap-6 p-6 rounded-3xl bg-slate-50 hover:bg-sky-50 transition-colors group border border-slate-100">
                  <div className="bg-plumbing-blue text-white p-4 rounded-2xl group-hover:scale-110 transition-transform">
                    <Phone size={28} />
                  </div>
                  <div>
                    <p className="text-slate-500 font-bold text-sm uppercase tracking-widest mb-1">Call Now</p>
                    <p className="text-2xl font-black text-slate-900">{BUSINESS_INFO.phone}</p>
                    <p className="text-orange-500 font-bold mt-1">Available 24 Hours</p>
                  </div>
                </a>

                <div className="flex gap-6 p-6 rounded-3xl bg-slate-50 border border-slate-100">
                  <div className="bg-orange-500 text-white p-4 rounded-2xl">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <p className="text-slate-500 font-bold text-sm uppercase tracking-widest mb-1">Location</p>
                    <p className="text-lg font-bold text-slate-900 leading-snug">
                      {BUSINESS_INFO.address}
                    </p>
                    <p className="text-slate-500 text-sm mt-2 font-medium">Serving Chandan Nagar & Kharadi</p>
                  </div>
                </div>

                <div className="flex gap-6 p-6 rounded-3xl bg-slate-50 border border-slate-100">
                  <div className="bg-sky-500 text-white p-4 rounded-2xl">
                    <Clock size={28} />
                  </div>
                  <div>
                    <p className="text-slate-500 font-bold text-sm uppercase tracking-widest mb-1">Working Hours</p>
                    <p className="text-xl font-bold text-slate-900 uppercase tracking-tight">{BUSINESS_INFO.hours}</p>
                    <p className="text-slate-500 text-sm mt-1">Ready for Emergency Dispatch</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Placeholder */}
            <div className="rounded-3xl overflow-hidden shadow-lg border-4 border-slate-100 h-80 relative bg-slate-100">
               <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                  <MapPin size={48} className="text-orange-500 mb-4" />
                  <p className="font-black text-xl text-slate-900">Visit Us in Chandan Nagar</p>
                  <p className="text-slate-500 mt-2 max-w-xs">{BUSINESS_INFO.address}</p>
                  <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS_INFO.address)}`} target="_blank" rel="noreferrer" className="mt-6 bg-plumbing-blue text-white px-8 py-3 rounded-xl font-bold">Open in Google Maps</a>
               </div>
               {/* Note: Real Google Maps embed would go here if an API key was available. For demo, we show this professional placeholder */}
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-1/2">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-slate-100 sticky top-32">
              <h3 className="text-2xl font-black text-slate-900 mb-6">Send an Enquiry</h3>
              
              {submitted ? (
                <div className="bg-green-50 border border-green-100 p-12 rounded-2xl text-center space-y-4">
                   <div className="bg-green-500 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle size={48} />
                   </div>
                   <h4 className="text-2xl font-bold text-green-900">Message Sent Successfully!</h4>
                   <p className="text-green-700">Thank you for reaching out. Aditya or one of our team members will call you shortly.</p>
                   <button onClick={() => setSubmitted(false)} className="mt-6 font-bold text-green-600 underline">Send another message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Your Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="John Doe" 
                        className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-plumbing-blue focus:ring-4 focus:ring-sky-50 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                      <input 
                        required
                        type="tel" 
                        placeholder="081491 XXXXX" 
                        className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-plumbing-blue focus:ring-4 focus:ring-sky-50 outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Service Needed</label>
                    <select className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-plumbing-blue focus:ring-4 focus:ring-sky-50 outline-none transition-all bg-white">
                      <option>Leak Repair</option>
                      <option>Bathroom Fitting</option>
                      <option>Water Line Upgrade</option>
                      <option>Drain Cleaning</option>
                      <option>Emergency Help</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Your Address (Chandan Nagar / Kharadi Area)</label>
                    <input 
                      type="text" 
                      placeholder="Street name, Society name..." 
                      className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-plumbing-blue focus:ring-4 focus:ring-sky-50 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                    <textarea 
                      rows={4} 
                      placeholder="Please describe your plumbing issue..." 
                      className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-plumbing-blue focus:ring-4 focus:ring-sky-50 outline-none transition-all"
                    ></textarea>
                  </div>
                  <button className="w-full bg-plumbing-blue text-white font-black text-xl py-5 rounded-xl shadow-xl hover:bg-sky-900 transition-all flex items-center justify-center gap-3">
                    <Send size={24} /> Submit Request
                  </button>
                  <p className="text-center text-xs text-slate-500">We typically respond to online inquiries within 30 minutes during standard hours.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
