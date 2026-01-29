
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube, Linkedin } from 'lucide-react';
import EnquiryForm from '../components/EnquiryForm';

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

const Contact: React.FC = () => {
  return (
    <div className="pt-40 pb-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24 space-y-6">
          <Reveal delay={0.1}>
            <h1 className="text-6xl lg:text-[5.5rem] font-black text-slate-950 tracking-tighter leading-none">Contact Us</h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
              Have a question or guidance? Reach out to us for any queries you may have.
            </p>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-3 gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-12">
            <div className="space-y-10">
              <Reveal delay={0.3}>
                <h3 className="text-3xl font-black text-slate-950">Get in touch</h3>
              </Reveal>
              <div className="space-y-8">
                <Reveal delay={0.4}>
                  <div className="flex items-start space-x-6 group">
                    <div className="bg-indigo-50 p-4 rounded-2xl text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 uppercase tracking-widest text-[10px] mb-1">Email Support</h4>
                      <p className="text-slate-500 font-bold">support@apexskillstechnologies.com</p>
                    </div>
                  </div>
                </Reveal>
                <Reveal delay={0.5}>
                  <div className="flex items-start space-x-6 group">
                    <div className="bg-indigo-50 p-4 rounded-2xl text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 uppercase tracking-widest text-[10px] mb-1">Call Us Now</h4>
                      <p className="text-slate-500 font-bold">+91 XXXXXXXXXX</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Mon-Sat, 12pm-7pm IST</p>
                    </div>
                  </div>
                </Reveal>
                <Reveal delay={0.6}>
                  <div className="flex items-start space-x-6 group">
                    <div className="bg-indigo-50 p-4 rounded-2xl text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-black text-slate-900 uppercase tracking-widest text-[10px] mb-1">Head Office</h4>
                        <p className="text-slate-500 text-sm leading-relaxed font-medium">Bangalore Karnataka</p>
                      </div>
                      {/* <div>
                        <h4 className="font-black text-slate-900 uppercase tracking-widest text-[10px] mb-1">Branch Office</h4>
                        <p className="text-slate-500 text-sm leading-relaxed font-medium">Sector 91, Sahibzada Ajit Singh Nagar, Punjab 140307</p>
                      </div> */}
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>

            <Reveal delay={0.7}>
              <div className="space-y-6">
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-widest text-[10px]">Follow Our Journey</h3>
                <div className="flex space-x-4">
                  {[Instagram, Facebook, Youtube, Linkedin].map((Icon, i) => (
                    <a key={i} href="#" className="p-4 bg-slate-50 rounded-2xl text-slate-400 hover:bg-indigo-600 hover:text-white transition-all shadow-sm">
                      <Icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.4} y={50}>
            <div className="lg:col-span-2">
              <EnquiryForm />
            </div>
          </Reveal>
        </div>

        {/* Map Placeholder */}
        <Reveal delay={0.8} y={50}>
          <div className="mt-32 rounded-[4rem] overflow-hidden shadow-2xl border-[16px] border-slate-50 h-[550px] relative group">
            <img src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" alt="Map Location" />
            <div className="absolute inset-0 bg-indigo-900/10 group-hover:bg-transparent transition-all"></div>
            <div className="absolute bottom-12 left-12 bg-white p-12 rounded-[3rem] shadow-3xl max-w-md">
              <h4 className="text-3xl font-black text-slate-950 mb-4">Visit Our Hubs</h4>
              <p className="text-slate-500 font-medium leading-relaxed mb-8">Feel free to drop by our main campus for a campus tour and personalized career guidance sessions.</p>
              <button className="w-full py-5 bg-indigo-600 text-white font-black rounded-2xl hover:bg-slate-950 transition-all shadow-xl shadow-indigo-100 uppercase tracking-widest text-xs">Get Directions</button>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Contact;
