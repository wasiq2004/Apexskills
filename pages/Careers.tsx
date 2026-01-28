
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Star } from 'lucide-react';
import { JOBS } from '../constants';

const Reveal = ({ children, delay = 0, y = 30 }: { children: React.ReactNode, delay?: number, y?: number }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.45, 0.32, 0.9] }}
  >
    {children}
  </motion.div>
);

const Careers: React.FC = () => {
  return (
    <div className="pt-40 pb-24 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <Reveal delay={0.1}>
          <div className="bg-indigo-600 rounded-[3rem] p-12 lg:p-24 text-white text-center relative overflow-hidden mb-24 shadow-2xl shadow-indigo-100">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-[150px] opacity-10"></div>
            <div className="relative z-10 space-y-8">
              <p className="text-indigo-200 font-black uppercase tracking-widest text-sm">Join the Team</p>
              <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tighter">Help Us Reshape <br />The Future of <span className="text-indigo-200">Education</span></h1>
              <p className="text-xl text-indigo-100 max-w-2xl mx-auto leading-relaxed font-medium">
                We're looking for passionate educators, tech wizards, and creative minds to join our mission-driven team.
              </p>
              <button className="px-10 py-5 bg-white text-indigo-600 rounded-2xl font-black text-lg hover:bg-slate-950 hover:text-white transition-all shadow-xl">View Openings</button>
            </div>
          </div>
        </Reveal>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {[
            { title: 'Remote-First Culture', desc: 'Work from anywhere in the world at your own pace.' },
            { title: 'Learning Stipend', desc: 'We pay for your books, courses, and conferences.' },
            { title: 'Growth & Impact', desc: 'Fast-track your career in a high-growth EdTech environment.' }
          ].map((benefit, i) => (
            <Reveal key={i} delay={0.2 + i * 0.1}>
              <div className="p-10 bg-white h-full rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-saas transition-all">
                <Star className="w-8 h-8 text-indigo-600 mb-6" />
                <h4 className="text-2xl font-black text-slate-950 mb-4 tracking-tight">{benefit.title}</h4>
                <p className="text-slate-500 font-medium leading-relaxed">{benefit.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Jobs Listing */}
        <div className="space-y-12">
           <div className="flex items-center justify-between border-b border-slate-100 pb-8">
             <Reveal delay={0.1}>
               <h2 className="text-4xl lg:text-5xl font-black text-slate-950 tracking-tighter">Current Openings</h2>
             </Reveal>
             <Reveal delay={0.2}>
               <span className="bg-indigo-50 text-indigo-600 px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest">{JOBS.length} Open Positions</span>
             </Reveal>
           </div>

           <div className="space-y-8">
             {JOBS.map((job, idx) => (
               <Reveal key={job.id} delay={0.1 + idx * 0.1}>
                 <motion.div 
                   whileHover={{ x: 8 }}
                   className="group p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-saas-hover hover:border-indigo-100 transition-all flex flex-col md:flex-row md:items-center justify-between gap-8"
                 >
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <span className="px-3 py-1 bg-slate-50 text-slate-500 rounded-lg text-[10px] font-black uppercase tracking-widest">{job.type}</span>
                        <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-lg text-[10px] font-black uppercase tracking-widest">{job.department}</span>
                      </div>
                      <h3 className="text-2xl font-black text-slate-950 group-hover:text-indigo-600 transition-colors tracking-tight">{job.role}</h3>
                      <div className="flex items-center text-xs font-bold text-slate-400 uppercase tracking-widest">
                        <MapPin className="w-4 h-4 mr-2" />
                        {job.location}
                      </div>
                      <p className="text-slate-500 font-medium max-w-xl leading-relaxed">{job.description}</p>
                    </div>
                    <button className="px-10 py-5 bg-slate-950 text-white rounded-2xl font-black hover:bg-indigo-600 transition-all flex items-center justify-center shadow-xl">
                      Apply Now <ArrowRight className="ml-2 w-5 h-5" />
                    </button>
                 </motion.div>
               </Reveal>
             ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
