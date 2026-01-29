import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView, animate } from 'framer-motion';
import { Star, ArrowRight, Award, ChevronRight, Play, Download, Mail, Phone, ExternalLink, Zap, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PARTNERS, COURSES, EVENTS, Category, FAQS } from '../constants';
import EnquiryForm from '../components/EnquiryForm';

const StatCounter = ({ value, label, prefix = "", suffix = "" }: { value: string, label: string, prefix?: string, suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView) {
      const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
      const controls = animate(0, numericValue, {
        duration: 2,
        onUpdate: (latest) => {
          setDisplayValue(latest.toFixed(value.includes('.') ? 1 : 0));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="space-y-1">
      <h4 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
        {prefix}{displayValue}{suffix}
      </h4>
      <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{label}</p>
    </div>
  );
};

const SectionTransition = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.7, 1, 1, 0.7]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.96, 1, 1, 0.96]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [40, 0, 0, -40]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale, y }}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  );
};

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

const Home: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>(Category.ComputerScience);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const filteredCourses = COURSES.filter(c => c.category === activeCategory);

  const heroRef = useRef(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroOpacity = useTransform(heroProgress, [0, 0.4], [1, 0]);
  const heroScale = useTransform(heroProgress, [0, 0.5], [1, 1.1]);
  const heroTextY = useTransform(heroProgress, [0, 0.5], [0, 150]);

  // Production Grade Sticky Narrative Section (150vh distance)
  const stickyRef = useRef(null);
  const { scrollYProgress: narrativeProgress } = useScroll({
    target: stickyRef,
    offset: ["start start", "end end"]
  });

  // Interpolated transforms for the 3 narrative beats
  // Beat 1: [0, 0.33]
  // Beat 2: [0.33, 0.66]
  // Beat 3: [0.66, 1.0]
  const opacity1 = useTransform(narrativeProgress, [0, 0.25, 0.33], [1, 1, 0]);
  const y1 = useTransform(narrativeProgress, [0, 0.25, 0.33], [0, 0, -50]);

  const opacity2 = useTransform(narrativeProgress, [0.25, 0.33, 0.58, 0.66], [0, 1, 1, 0]);
  const y2 = useTransform(narrativeProgress, [0.25, 0.33, 0.58, 0.66], [50, 0, 0, -50]);

  const opacity3 = useTransform(narrativeProgress, [0.58, 0.66, 0.9], [0, 1, 1]);
  const y3 = useTransform(narrativeProgress, [0.58, 0.66, 0.9], [50, 0, 0]);

  const image1Opacity = useTransform(narrativeProgress, [0, 0.33], [1, 0]);
  const image2Opacity = useTransform(narrativeProgress, [0.25, 0.33, 0.66], [0, 1, 0]);
  const image3Opacity = useTransform(narrativeProgress, [0.58, 0.66], [0, 1]);

  const progressBar = useTransform(narrativeProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center pt-24 lg:pt-0 overflow-hidden bg-slate-50">
        <div className="absolute top-0 right-0 w-[55%] h-full bg-white rounded-bl-[200px] -z-10 opacity-100 shadow-2xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              style={{ opacity: heroOpacity, y: heroTextY }}
              className="space-y-12"
            >
              {/* <Reveal delay={0.1} y={20}>
                <div className="inline-flex items-center space-x-3 bg-white px-4 py-2 rounded-2xl shadow-saas border border-slate-100">
                  <span className="flex h-2.5 w-2.5 rounded-full bg-indigo-600 animate-ping"></span>
                  <span className="text-xs font-black text-slate-900 uppercase tracking-widest">Next-Gen EdTech</span>
                </div>
              </Reveal> */}

              <Reveal delay={0.2} y={30}>
                <h1 className="text-6xl lg:text-[5.5rem] font-black text-slate-950 leading-[0.95] tracking-tighter">
                  Empower Your <br />
                  <span className="text-indigo-600">Future</span> With <br />
                  World-Class Skills
                </h1>
              </Reveal>

              <Reveal delay={0.3} y={30}>
                <p className="text-xl text-slate-600 max-w-lg leading-relaxed font-medium">
                  Unlock expert-led courses, certifications, and real-world projects designed for tomorrow's innovators and leaders at Apex Skills Technologies.
                </p>
              </Reveal>

              <Reveal delay={0.4} y={30}>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-5">
                  <a href="#enquiry" className="px-10 py-5 bg-indigo-600 text-white rounded-2xl font-black shadow-2xl shadow-indigo-500/30 hover:bg-slate-900 transition-all flex items-center justify-center group">
                    Get Started <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                  </a>
                  <Link to="/programs" className="px-10 py-5 bg-white text-slate-900 border-2 border-slate-100 rounded-2xl font-black hover:bg-slate-50 transition-all flex items-center justify-center">
                    Explore Programs
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={0.6} y={0}>
                <div className="flex flex-wrap items-center gap-10 pt-6">
                  <StatCounter value="4.6" label="Google Reviews" suffix="" />
                  <div className="h-10 w-px bg-slate-200"></div>
                  <StatCounter value="4.2" label="Glassdoor" suffix="" />
                  <div className="h-10 w-px bg-slate-200"></div>
                  <StatCounter value="4.7" label="AmbitionBox" suffix="" />
                </div>
              </Reveal>
            </motion.div>

            <motion.div
              style={{ scale: heroScale, opacity: heroOpacity }}
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: [0.21, 0.45, 0.32, 0.9] }}
              className="relative hidden lg:block"
            >
              <div className="absolute -inset-10 bg-indigo-600/5 rounded-full blur-[100px] -z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200"
                alt="Student Excellence"
                className="rounded-[4rem] shadow-3xl object-cover w-full aspect-[4/5] border-[16px] border-white"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Continuous Marquee */}
      <section id="partners" className="py-24 bg-white overflow-hidden border-y border-slate-100">
        <SectionTransition>
          <Reveal delay={0.1}>
            <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
              <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em]">Trusted By Leading Industry Giants</h3>
            </div>
          </Reveal>
          <div className="relative flex overflow-x-hidden">
            <div className="animate-marquee py-4 flex items-center">
              {[...PARTNERS, ...PARTNERS].map((partner, i) => (
                <span key={i} className="mx-16 text-2xl lg:text-3xl font-black text-slate-300 hover:text-indigo-600 transition-colors cursor-default whitespace-nowrap">
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </SectionTransition>
      </section>

      {/* Narrative Section (Production Refined: Interpolated Scroll) */}
      <section ref={stickyRef} className="relative h-[150vh] bg-white">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-2 gap-20 items-center">

              {/* Narrative Content Stack */}
              <div className="relative h-96">

                {/* Point 1 */}
                <motion.div style={{ opacity: opacity1, y: y1 }} className="absolute inset-0 flex flex-col justify-center space-y-6">
                  <div className="inline-block p-4 bg-indigo-50 rounded-3xl w-fit">
                    <Award className="w-12 h-12 text-indigo-600" />
                  </div>
                  <h2 className="text-5xl lg:text-6xl font-black text-slate-950 tracking-tighter">Expert Mentorship</h2>
                  <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-md">
                    Learn from industry leaders at Microsoft, Google, and Meta who bring years of battle-tested experience directly to your screen.
                  </p>
                </motion.div>

                {/* Point 2 */}
                <motion.div style={{ opacity: opacity2, y: y2 }} className="absolute inset-0 flex flex-col justify-center space-y-6">
                  <div className="inline-block p-4 bg-indigo-50 rounded-3xl w-fit">
                    <Zap className="w-12 h-12 text-indigo-600" />
                  </div>
                  <h2 className="text-5xl lg:text-6xl font-black text-slate-950 tracking-tighter">Real-World Projects</h2>
                  <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-md">
                    We don't just teach theory. You'll build production-ready applications and solve real corporate challenges during your internship.
                  </p>
                </motion.div>

                {/* Point 3 */}
                <motion.div style={{ opacity: opacity3, y: y3 }} className="absolute inset-0 flex flex-col justify-center space-y-6">
                  <div className="inline-block p-4 bg-indigo-50 rounded-3xl w-fit">
                    <Globe className="w-12 h-12 text-indigo-600" />
                  </div>
                  <h2 className="text-5xl lg:text-6xl font-black text-slate-950 tracking-tighter">Global Certification</h2>
                  <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-md">
                    Earn verified credentials recognized by top global tech firms, giving you a distinct competitive edge in the international market.
                  </p>
                </motion.div>

                {/* Footer Link (Stays Constant) */}
                <div className="absolute -bottom-16 left-0">
                  <Link to="/about" className="px-8 py-4 bg-slate-950 text-white rounded-2xl font-black text-sm hover:bg-indigo-600 transition-all inline-flex items-center shadow-xl">
                    Why Choose Us <ChevronRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Visual Stack (Synchronized dissolving cross-fade) */}
              <div className="relative aspect-square lg:aspect-[4/5] rounded-[4rem] overflow-hidden shadow-3xl bg-slate-100">
                <motion.img
                  style={{ opacity: image1Opacity }}
                  src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=1200"
                  className="absolute inset-0 w-full h-full object-cover"
                  alt="Expert Mentorship"
                />
                <motion.img
                  style={{ opacity: image2Opacity }}
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200"
                  className="absolute inset-0 w-full h-full object-cover"
                  alt="Real-World Projects"
                />
                <motion.img
                  style={{ opacity: image3Opacity }}
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200"
                  className="absolute inset-0 w-full h-full object-cover"
                  alt="Global Certification"
                />

                {/* Narrative Progress Indicator */}
                <div className="absolute bottom-10 left-10 right-10 h-1.5 bg-white/20 backdrop-blur-md rounded-full overflow-hidden">
                  <motion.div style={{ width: progressBar }} className="h-full bg-indigo-500 shadow-glow" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Course Categories & Offerings */}
      <section id="courses" className="py-32 bg-slate-50 overflow-hidden">
        <SectionTransition>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
              <Reveal delay={0.1}>
                <div className="space-y-4">
                  <h2 className="text-5xl lg:text-6xl font-black text-slate-950 tracking-tighter">Featured Courses</h2>
                  <p className="text-lg text-slate-500 max-w-xl font-medium">Curated career tracks to help you build a robust professional portfolio.</p>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <Link to="/programs" className="group inline-flex items-center text-indigo-600 font-black text-lg">
                  View All 8 Courses <ChevronRight className="ml-1 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Reveal>
            </div>

            <Reveal delay={0.3}>
              <div className="flex flex-wrap gap-4 mb-16 overflow-x-auto pb-4 no-scrollbar">
                {Object.values(Category).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-8 py-3.5 rounded-2xl text-xs font-black transition-all whitespace-nowrap border-2 ${activeCategory === cat ? 'bg-indigo-600 text-white border-indigo-600 shadow-xl shadow-indigo-100 translate-y-[-2px]' : 'bg-white text-slate-500 border-slate-100 hover:border-indigo-100'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </Reveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredCourses.slice(0, 4).map((course, idx) => (
                <Reveal key={course.id} delay={0.1 + idx * 0.1}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="group h-full bg-white rounded-[2.5rem] p-5 border border-slate-100 hover:border-indigo-100 hover:shadow-saas-hover transition-all duration-500 flex flex-col"
                  >
                    <div className="relative aspect-square overflow-hidden rounded-[2rem] mb-6">
                      <img src={`https://picsum.photos/seed/apex-c${course.id}/600/600`} alt={course.title} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" />
                      {course.isBestSeller && (
                        <div className="absolute top-4 right-4 bg-orange-500 text-white text-[10px] font-black uppercase px-3 py-1.5 rounded-full shadow-lg">Best Seller</div>
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
                        <div className="flex justify-between text-[10px] font-black text-slate-400 uppercase tracking-widest">
                          <span>{course.modules} Modules</span>
                          <span>{course.duration}</span>
                        </div>
                        <Link to="/programs" className="flex items-center justify-between w-full py-4 px-6 bg-slate-950 text-white rounded-2xl font-black group-hover:bg-indigo-600 transition-all">
                          <span>Enquire Now</span>
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </SectionTransition>
      </section>

      {/* Events Section */}
      <section id="events" className="py-32 bg-white overflow-hidden">
        <SectionTransition>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <Reveal delay={0.1}>
                <div className="space-y-4">
                  <h2 className="text-5xl lg:text-6xl font-black text-slate-950 tracking-tighter">Live Masterclasses</h2>
                  <p className="text-lg text-slate-500 max-w-xl font-medium">Join our experts for interactive sessions on the latest technology trends.</p>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <button className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-black text-sm hover:bg-slate-900 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-indigo-100">Show All Events</button>
              </Reveal>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {EVENTS.map((event, idx) => (
                <Reveal key={event.id} delay={0.1 + idx * 0.1}>
                  <div className="bg-slate-50 h-full p-10 rounded-[2.5rem] border border-slate-100 hover:shadow-saas transition-all group relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-white rounded-bl-[4rem] group-hover:bg-indigo-600 transition-colors -z-0"></div>
                    <div className="relative z-10">
                      <p className="text-indigo-600 font-black text-xs uppercase tracking-widest mb-4 group-hover:text-white transition-colors">{event.date}</p>
                      <h3 className="text-2xl font-black text-slate-950 mb-6 group-hover:text-indigo-600 transition-colors">{event.title}</h3>
                      <div className="space-y-4 mb-8">
                        <div className="flex items-center space-x-3 text-slate-500">
                          <Star className="w-4 h-4 text-amber-500" />
                          <span className="text-sm font-bold">Speaker: {event.speaker}</span>
                        </div>
                        <div className="flex items-center space-x-3 text-slate-500">
                          <Award className="w-4 h-4 text-indigo-500" />
                          <span className="text-sm font-bold">{event.participants} Participants</span>
                        </div>
                      </div>
                      <a href={event.recordingUrl} className="inline-flex items-center space-x-2 text-indigo-600 font-black text-sm hover:underline">
                        <span>Watch Recording</span>
                        <Play className="w-4 h-4 fill-current" />
                      </a>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </SectionTransition>
      </section>

      {/* Certificates Carousel Section
      <section id="certificates" className="py-32 bg-slate-50 overflow-hidden">
        <SectionTransition>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal delay={0.1}>
              <div className="text-center mb-24 space-y-6">
                <h2 className="text-5xl lg:text-6xl font-black text-slate-950 tracking-tighter">Verified Credentials</h2>
                <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">Boost your career with industry-recognized certifications from Apex Skills Technologies.</p>
                <div className="flex justify-center gap-12 pt-4">
                  {[
                    { icon: <Award />, label: "Boost Resume" },
                    { icon: <ExternalLink />, label: "Easily Shareable" },
                    { icon: <Star />, label: "Industry Recognized" }
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + idx * 0.1, duration: 0.6 }}
                      className="flex flex-col items-center gap-2"
                    >
                      <div className="p-3 bg-white rounded-xl text-indigo-600 shadow-sm border border-slate-100">{item.icon}</div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{item.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Reveal> */}

      {/* <div className="flex gap-8 overflow-x-auto no-scrollbar pb-10">
        {['Internship', 'Performance', 'Project'].map((type, idx) => (
          <Reveal key={type} delay={idx * 0.15}>
            <div className="min-w-[350px] lg:min-w-[450px] bg-white p-8 rounded-[3rem] border border-slate-100 hover:shadow-2xl transition-all group">
              <div className="bg-slate-50 aspect-[4/3] rounded-2xl mb-8 flex items-center justify-center border-4 border-dashed border-slate-200 overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="text-center p-6"
                >
                  <Award className="w-16 h-16 text-indigo-200 mx-auto mb-4" />
                  <p className="text-slate-400 font-bold italic">Apex Skills Technologies Certificate of {type}</p>
                </motion.div>
              </div>
              <div className="flex justify-between items-center">
                <h4 className="text-xl font-black text-slate-900">Certificate of {type}</h4>
                <button className="p-4 bg-indigo-600 text-white rounded-2xl hover:bg-slate-950 transition-all shadow-lg hover:shadow-indigo-200">
                  <Download className="w-5 h-5" />
                </button>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
        </SectionTransition >
      </section > */}

      {/* Enquiry Form */}
      < section id="enquiry" className="py-32 bg-white relative overflow-hidden" >
        <SectionTransition>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-50/10 to-transparent -z-10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-12">
                <Reveal delay={0.1}>
                  <h2 className="text-5xl lg:text-7xl font-black text-slate-950 tracking-tighter leading-[0.9]">
                    Launch Your <br />
                    <span className="text-indigo-600">Dream Career</span> <br />
                    Today
                  </h2>
                </Reveal>
                <Reveal delay={0.2}>
                  <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-md">
                    Fill out the form to speak with an expert counselor from Apex Skills Technologies who will help you find the perfect track for your future.
                  </p>
                </Reveal>
                <div className="space-y-8">
                  <Reveal delay={0.3}>
                    <div className="flex items-center gap-6 group cursor-pointer">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="p-5 bg-slate-50 rounded-2xl shadow-saas text-indigo-600 border border-slate-100 group-hover:bg-indigo-600 group-hover:text-white transition-all"
                      >
                        <Phone />
                      </motion.div>
                      <div>
                        <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Direct Line</p>
                        <p className="text-2xl font-black text-slate-900">+91 80882 79615</p>
                      </div>
                    </div>
                  </Reveal>
                  <Reveal delay={0.4}>
                    <div className="flex items-center gap-6 group cursor-pointer">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="p-5 bg-slate-50 rounded-2xl shadow-saas text-indigo-600 border border-slate-100 group-hover:bg-indigo-600 group-hover:text-white transition-all"
                      >
                        <Mail />
                      </motion.div>
                      <div>
                        <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Email Support</p>
                        <p className="text-2xl font-black text-slate-900">support@ediglobe.com</p>
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>
              <Reveal delay={0.5} y={50}>
                <div className="relative">
                  <EnquiryForm />
                </div>
              </Reveal>
            </div>
          </div>
        </SectionTransition>
      </section >

      {/* FAQ Section */}
      < section id="faq" className="py-32 bg-slate-50 overflow-hidden" >
        <SectionTransition>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal delay={0.1}>
              <div className="text-center mb-20 space-y-4">
                <h2 className="text-5xl font-black text-slate-950 tracking-tighter">Common Inquiries</h2>
                <p className="text-lg text-slate-500 font-medium">Everything you need to know about the Apex Skills Technologies ecosystem.</p>
              </div>
            </Reveal>
            <div className="space-y-4">
              {FAQS.map((faq, idx) => (
                <Reveal key={idx} delay={idx * 0.05} y={20}>
                  <div className="border border-slate-100 rounded-[2rem] overflow-hidden bg-white hover:border-indigo-100 transition-colors">
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full px-8 py-8 flex items-center justify-between text-left transition-all"
                    >
                      <span className="text-lg font-extrabold text-slate-900 pr-8">{faq.question}</span>
                      <ChevronRight className={`w-6 h-6 text-indigo-600 transition-transform duration-300 ${openFaq === idx ? 'rotate-90' : ''}`} />
                    </button>
                    <motion.div
                      initial={false}
                      animate={{ height: openFaq === idx ? "auto" : 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8 text-slate-600 font-medium leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </SectionTransition>
      </section >

      {/* Newsletter */}
      < section id="newsletter" className="py-32 bg-indigo-600 relative overflow-hidden" >
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <Reveal delay={0.1}>
              <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight">Stay Ahead of the Curve 🚀</h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-indigo-100 text-lg font-medium">Get exclusive access to new courses, special offers, and insider tips from our best mentors.</p>
            </Reveal>
            <Reveal delay={0.3} y={20}>
              <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-grow px-8 py-5 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-indigo-200 outline-none focus:bg-white focus:text-slate-900 transition-all shadow-inner font-medium"
                  required
                />
                <button className="px-10 py-5 bg-white text-indigo-600 rounded-2xl font-black hover:bg-slate-950 hover:text-white transition-all shadow-2xl active:scale-95">
                  Subscribe
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section >
    </div >
  );
};

export default Home;
