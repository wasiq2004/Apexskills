
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Users, Award, TrendingUp, ShieldCheck, UserCheck, Briefcase } from 'lucide-react';

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

const About: React.FC = () => {
  const stats = [
    { label: 'Learners', value: '20k+', icon: <Users className="w-6 h-6 text-indigo-600" /> },
    { label: 'Courses', value: '50+', icon: <Award className="w-6 h-6 text-indigo-600" /> },
    { label: 'Experts', value: '100+', icon: <UserCheck className="w-6 h-6 text-indigo-600" /> },
    { label: 'Placement', value: '95%', icon: <TrendingUp className="w-6 h-6 text-indigo-600" /> },
  ];

  const expertise = [
    { title: "Expert-Led Courses", desc: "Learn directly from veterans at Microsoft, Google, and Texas Instruments.", icon: <UserCheck /> },
    { title: "Personalized Support", desc: "One-on-one mentorship and dedicated doubt clearing sessions.", icon: <ShieldCheck /> },
    { title: "Career Guidance", desc: "Resume building, mock interviews, and placement assistance.", icon: <TrendingUp /> },
    { title: "Practical Projects", desc: "Build a robust portfolio with hands-on, industry-aligned projects.", icon: <Briefcase /> },
  ];

  return (
    <div className="pt-40 pb-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-40">
          <div className="space-y-12">
            <Reveal delay={0.1}>
              <div className="inline-flex items-center space-x-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest">Our Story</div>
            </Reveal>
            <Reveal delay={0.2}>
              <h1 className="text-6xl lg:text-[5.5rem] font-black text-slate-950 leading-[0.95] tracking-tighter">
                We're Changing the Way the <span className="text-indigo-600">World</span> Learns
              </h1>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-xl text-slate-600 leading-relaxed font-medium">
                Apex Skills Technologies was founded with a clear mission: To democratize education by providing accessible, affordable, and high-quality learning experiences.
              </p>
            </Reveal>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((s, i) => (
                <Reveal key={i} delay={0.4 + i * 0.1}>
                  <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 hover:border-indigo-100 hover:bg-white transition-all h-full">
                    <div className="mb-6">{s.icon}</div>
                    <h4 className="text-5xl font-black text-slate-900 tracking-tight">{s.value}</h4>
                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] mt-2">{s.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute -inset-20 bg-indigo-600/5 rounded-full blur-[140px] -z-10"></div>
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200" className="rounded-[4rem] shadow-3xl object-cover w-full aspect-[4/5] border-[16px] border-white animate-float" alt="Apex Skills Technologies Collaboration" />
            <Reveal delay={0.8} y={20}>
              <div className="absolute -bottom-10 -right-10 bg-slate-950 text-white p-14 rounded-[3.5rem] shadow-2xl">
                <p className="text-6xl font-black mb-2 tracking-tighter">5+ Years</p>
                <p className="text-indigo-400 font-black tracking-[0.3em] uppercase text-[10px]">Innovation in EdTech</p>
              </div>
            </Reveal>
          </motion.div>
        </div>

        {/* Expertise Section */}
        <section className="mb-40 py-24 bg-slate-50 rounded-[4rem] px-10 lg:px-20">
           <div className="text-center mb-24 space-y-4">
              <Reveal delay={0.1}>
                <h2 className="text-5xl lg:text-6xl font-black text-slate-950 tracking-tighter">Premier Skill Coaching</h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium">We wholeheartedly support you on your unique professional journey at Apex Skills Technologies.</p>
              </Reveal>
           </div>
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
              {expertise.map((e, idx) => (
                <Reveal key={idx} delay={0.3 + idx * 0.1}>
                  <div className="space-y-6 text-center">
                    <div className="mx-auto w-16 h-16 bg-white rounded-2xl shadow-sm text-indigo-600 flex items-center justify-center border border-slate-100">
                        {e.icon}
                    </div>
                    <h4 className="text-xl font-black text-slate-900">{e.title}</h4>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">{e.desc}</p>
                  </div>
                </Reveal>
              ))}
           </div>
        </section>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-40">
          <Reveal delay={0.1} y={50}>
            <div className="p-16 bg-indigo-600 rounded-[4rem] text-white shadow-2xl shadow-indigo-200 h-full">
              <div className="bg-white/20 w-20 h-20 rounded-[2rem] flex items-center justify-center mb-10 backdrop-blur-md">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl font-black mb-6 tracking-tight">Our Mission</h2>
              <p className="text-indigo-50 text-xl font-medium leading-relaxed italic">
                "To democratize education by providing accessible, affordable, and high-quality learning experiences that empower individuals globally through Apex Skills Technologies."
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.2} y={50}>
            <div className="p-16 bg-slate-950 rounded-[4rem] text-white h-full">
              <div className="bg-white/10 w-20 h-20 rounded-[2rem] flex items-center justify-center mb-10 backdrop-blur-md border border-white/10">
                <Eye className="w-10 h-10 text-indigo-400" />
              </div>
              <h2 className="text-4xl font-black mb-6 tracking-tight">Our Vision</h2>
              <p className="text-slate-400 text-xl font-medium leading-relaxed italic">
                "To become the world's most trusted online learning platform, fostering innovation and lifelong learning for a better future."
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default About;
