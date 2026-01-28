
import React, { useState } from 'react';
import { Send, CheckCircle, Phone } from 'lucide-react';

const EnquiryForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const programs = [
    "Artificial Intelligence", "Machine Learning", "Data Science", "Web Development",
    "Project Management", "VLSI Design", "Genetic Engineering", "Structural Analysis",
    "Digital Marketing", "Cyber Security", "Cloud Computing", "UI/UX Design",
    "Android App Development", "Embedded Systems", "Stock Market", "Civil Engineering",
    "Mechanical Engineering", "Biotechnology", "Electronics & Communication",
    "Financial Management", "HR Management", "B2B Sales", "Content Writing",
    "SEO Specialist", "Social Media Marketing", "Software Testing"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="bg-white p-10 rounded-3xl shadow-2xl border border-indigo-100 text-center space-y-6">
        <div className="flex justify-center">
          <div className="bg-green-100 p-4 rounded-full">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
        </div>
        <h3 className="text-2xl font-bold text-gray-900">Enquiry Sent Successfully!</h3>
        <p className="text-gray-600">Our expert career counselor at Apex Skills Technologies will contact you within 24 hours.</p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-indigo-600 font-bold hover:underline"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 lg:p-12 rounded-[2.5rem] shadow-2xl border border-indigo-50">
      <div className="mb-8">
        <h3 className="text-2xl lg:text-3xl font-extrabold text-gray-900 mb-2">Enquire Now</h3>
        <p className="text-gray-500 font-medium">Start your professional journey with Apex Skills Technologies.</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 ml-1">Full Name *</label>
          <input
            required
            type="text"
            className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
            placeholder="John Doe"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 ml-1">Email *</label>
            <input
              required
              type="email"
              className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 ml-1">Phone Number</label>
            <input
              type="tel"
              className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
              placeholder="+91 00000 00000"
            />
          </div>
        </div>
        <div>
          <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 ml-1">Select Program *</label>
          <div className="relative">
            <select className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none appearance-none cursor-pointer transition-all">
              <option>Select Curated Program</option>
              {programs.map(p => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>
        </div>
        <div>
          <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 ml-1">Your Message *</label>
          <textarea
            required
            className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all min-h-[120px]"
            placeholder="Tell us about your goals..."
          ></textarea>
        </div>
        <button
          disabled={isLoading}
          type="submit"
          className="w-full py-5 bg-indigo-600 hover:bg-indigo-700 text-white font-black rounded-2xl transition-all flex items-center justify-center space-x-2 shadow-xl shadow-indigo-100 disabled:opacity-50 active:scale-[0.98]"
        >
          {isLoading ? (
            <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
          ) : (
            <>
              <Send className="w-5 h-5" />
              <span>Enquire Now</span>
            </>
          )}
        </button>
        
        <div className="pt-8 border-t border-slate-100 text-center">
           <p className="text-sm font-bold text-slate-400 mb-4 uppercase tracking-widest">Still Confused?</p>
           <a href="tel:+918088279615" className="inline-flex items-center space-x-3 px-6 py-3 bg-indigo-50 text-indigo-600 rounded-full font-black text-sm hover:bg-indigo-100 transition-colors">
              <Phone className="w-4 h-4" />
              <span>Schedule a Free Call: +91 80882 79615</span>
           </a>
        </div>
      </form>
    </div>
  );
};

export default EnquiryForm;
