
import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Facebook, Twitter, Linkedin, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
        {/* Brand & Social */}
        <div className="space-y-8">
          <Link to="/" className="flex items-center space-x-3">
            <Cpu className="text-indigo-500 w-8 h-8" />
            <span className="text-xl font-extrabold text-white tracking-tighter uppercase">
              Apex <span className="text-indigo-500">Skills</span>
            </span>
          </Link>
          <p className="text-sm leading-relaxed text-slate-400">
            Empowering your future with world-class skills. Join the next generation of innovators and global leaders with Apex Skills Technologies.
          </p>
          <div className="flex space-x-3">
            {[Instagram, Facebook, Youtube, Linkedin].map((Icon, idx) => (
              <a key={idx} href="#" className="p-2.5 bg-slate-900/50 border border-slate-800 rounded-xl hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all duration-300">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Courses Section */}
        <div>
          <h3 className="text-white font-extrabold text-lg mb-8 uppercase tracking-widest text-[10px]">Courses</h3>
          <ul className="space-y-4 font-medium text-sm">
            <li><Link to="/programs" className="hover:text-indigo-400 transition-colors">Full Stack Web Development</Link></li>
            <li><Link to="/programs" className="hover:text-indigo-400 transition-colors">Android App Development</Link></li>
            <li><Link to="/programs" className="hover:text-indigo-400 transition-colors">Artificial Intelligence</Link></li>
            <li><Link to="/programs" className="hover:text-indigo-400 transition-colors">Machine Learning</Link></li>
            <li><Link to="/programs" className="hover:text-indigo-400 transition-colors">Embedded Systems</Link></li>
            <li><Link to="/programs" className="hover:text-indigo-400 transition-colors">Stock Market</Link></li>
          </ul>
        </div>

        {/* Company & Support */}
        <div className="grid grid-cols-1 gap-12">
          <div>
            <h3 className="text-white font-extrabold text-lg mb-8 uppercase tracking-widest text-[10px]">Company</h3>
            <ul className="space-y-4 font-medium text-sm">
              <li><Link to="/about" className="hover:text-indigo-400 transition-colors">About us</Link></li>
              <li><Link to="/blogs" className="hover:text-indigo-400 transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-indigo-400 transition-colors">Contact us</Link></li>
              <li><Link to="/careers" className="hover:text-indigo-400 transition-colors">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-extrabold text-lg mb-8 uppercase tracking-widest text-[10px]">Support</h3>
            <ul className="space-y-4 font-medium text-sm">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Refund Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Engage Section */}
        <div>
          <h3 className="text-white font-extrabold text-lg mb-8 uppercase tracking-widest text-[10px]">Engage</h3>
          <ul className="space-y-4 font-medium text-sm">
            <li><a href="#" className="hover:text-indigo-400 transition-colors">Apply as Mentor</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors">Check Your Certificate</a></li>
          </ul>
          <div className="mt-12 space-y-4 text-sm">
            <h3 className="text-white font-extrabold uppercase tracking-widest text-[10px]">Legal</h3>
            <ul className="space-y-4">
              <li><Link to="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:text-indigo-400 transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 pt-10 border-t border-slate-900 text-center text-xs font-bold text-slate-500">
        <p>&copy; 2026 APEX SKILLS TECHNOLOGIES PRIVATE LIMITED. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
