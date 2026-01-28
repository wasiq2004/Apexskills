
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Filter, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COURSES, Category } from '../constants';
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

const Programs: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');

  const filteredCourses = selectedCategory === 'All'
    ? COURSES
    : COURSES.filter(c => c.category === selectedCategory);

  return (
    <div className="pt-40 pb-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="mb-20 space-y-6">
          <Reveal delay={0.1}>
            <p className="text-indigo-600 font-black uppercase tracking-[0.3em] text-xs">Explore Curated Learning</p>
          </Reveal>
          <Reveal delay={0.2}>
            <h1 className="text-6xl lg:text-7xl font-black text-slate-950 tracking-tighter leading-none">Our Programs</h1>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-xl text-slate-500 max-w-2xl font-medium leading-relaxed">
              Specialized curriculum designed by industry veterans to take you from fundamentals to professional expertise.
            </p>
          </Reveal>
        </div>

        {/* Filters */}
        <Reveal delay={0.4}>
          <div className="mb-16 flex flex-col md:flex-row md:items-center justify-between space-y-6 md:space-y-0 border-b border-slate-100 pb-10">
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setSelectedCategory('All')}
                className={`px-8 py-3 rounded-2xl text-xs font-black transition-all ${selectedCategory === 'All' ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-100' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'}`}
              >
                All Courses
              </button>
              {Object.values(Category).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-8 py-3 rounded-2xl text-xs font-black transition-all ${selectedCategory === cat ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-100' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="flex items-center text-xs font-black text-slate-400 uppercase tracking-widest">
              <Filter className="w-4 h-4 mr-2" />
              Showing {filteredCourses.length} programs
            </div>
          </div>
        </Reveal>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-40">
          {filteredCourses.map((course, idx) => (
            <Reveal key={course.id} delay={0.1 + (idx % 4) * 0.1}>
              <motion.div 
                whileHover={{ y: -8 }}
                className="group h-full bg-white rounded-[2.5rem] p-5 border border-slate-100 hover:border-indigo-100 hover:shadow-saas-hover transition-all duration-500 flex flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] mb-6">
                  <img src={`https://picsum.photos/seed/p${course.id}/600/400`} alt={course.title} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" />
                  {course.isBestSeller && (
                    <span className="absolute top-4 right-4 bg-orange-500 text-white text-[10px] font-black uppercase px-3 py-1.5 rounded-full shadow-lg">Best Seller</span>
                  )}
                </div>
                <div className="flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="text-yellow-500 w-4 h-4 fill-current" />
                      <span className="text-sm font-black text-slate-900">{course.rating}</span>
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{course.enrollments} Learners</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-2 leading-tight group-hover:text-indigo-600 transition-colors">{course.title}</h3>
                  <p className="text-sm text-slate-500 mb-8 font-medium line-clamp-2">{course.description}</p>
                  <div className="mt-auto space-y-4 pt-4 border-t border-slate-50">
                    <div className="flex items-center justify-between text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      <span>{course.modules} Modules</span>
                      <span>{course.duration}</span>
                    </div>
                    <Link to="/contact" className="flex items-center justify-between w-full py-4 px-6 bg-slate-950 text-white rounded-2xl font-black group-hover:bg-indigo-600 transition-all">
                      <span>Enquire Now</span>
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Enquiry Section */}
        <div className="grid lg:grid-cols-2 gap-20 items-center pt-40 border-t border-slate-100">
          <div className="space-y-10">
            <Reveal delay={0.1}>
              <h2 className="text-5xl lg:text-6xl font-black text-slate-950 tracking-tighter leading-tight">Customized Corporate Training</h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-xl text-slate-500 font-medium leading-relaxed">
                Need to upskill your team? We offer customized corporate batches and internships for colleges. Contact our B2B team for a tailor-made proposal.
              </p>
            </Reveal>
            <div className="space-y-6">
              {['Dedicated Mentor', 'Weekly Assessments', 'Real-world Capstone Project', 'Placement Support'].map((item, idx) => (
                <Reveal key={item} delay={0.3 + idx * 0.1}>
                  <div className="flex items-center font-black text-slate-900">
                    <div className="w-2.5 h-2.5 bg-indigo-600 rounded-full mr-4"></div>
                    {item}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={0.5} y={50}>
            <div className="relative">
              <EnquiryForm />
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Programs;
