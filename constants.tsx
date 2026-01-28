
import { Course, Mentor, Event, Job, BlogPost, Category } from './types';

export { Category };

export const PARTNERS: string[] = [
  "Corporate Bhaiya", "Kalpita Technologies", "Kriyah Consulting", "Cloud Analogy", 
  "Google", "Early Jobs", "Skills Hap", "Microsoft", "Edmingle", "Instamojo", 
  "Razorpay", "Wipro", "Meta", "Upwork", "TechRotech", "Infosys", "IBM", "Adobe", "Salesforce", "Intel"
];

export const COURSES: Course[] = [
  {
    id: '1',
    title: 'Artificial Intelligence',
    category: Category.ComputerScience,
    description: 'Dive into the world of AI, from machine learning fundamentals to advanced deep learning and generative AI models.',
    rating: 4.8,
    enrollments: '15K+',
    modules: 8,
    duration: '2 Months',
    isBestSeller: true
  },
  {
    id: '2',
    title: 'Machine Learning',
    category: Category.ComputerScience,
    description: 'Build a solid foundation in machine learning, from linear regression to ensemble methods.',
    rating: 4.4,
    enrollments: '12K+',
    modules: 8,
    duration: '2 Months',
    isBestSeller: true
  },
  {
    id: '3',
    title: 'Data Science',
    category: Category.ComputerScience,
    description: 'Unlock the power of data. Learn to analyze data, generate insights, and make predictions using Python, SQL.',
    rating: 4.2,
    enrollments: '20K+',
    modules: 8,
    duration: '2 Months',
    isBestSeller: true
  },
  {
    id: '4',
    title: 'Web Development',
    category: Category.ComputerScience,
    description: 'Master front-end and back-end technologies covering everything from HTML/CSS to the MERN stack.',
    rating: 3.9,
    enrollments: '35K+',
    modules: 11,
    duration: '2 Months',
    isBestSeller: true
  },
  {
    id: '5',
    title: 'Project Management',
    category: Category.Management,
    description: 'Agile methodologies and leadership skills.',
    rating: 4.6,
    enrollments: '8K+',
    modules: 8,
    duration: '3 Months'
  },
  {
    id: '6',
    title: 'VLSI Design',
    category: Category.ECE,
    description: 'Advanced chip design and verification processes.',
    rating: 4.8,
    enrollments: '5K+',
    modules: 12,
    duration: '6 Months'
  },
  {
    id: '7',
    title: 'Genetic Engineering',
    category: Category.BioTech,
    description: 'Fundamentals of gene editing and biotechnology.',
    rating: 4.7,
    enrollments: '3K+',
    modules: 10,
    duration: '5 Months'
  },
  {
    id: '8',
    title: 'Structural Analysis',
    category: Category.Civil,
    description: 'Advanced mechanics for modern infrastructure.',
    rating: 4.5,
    enrollments: '4K+',
    modules: 9,
    duration: '4 Months'
  }
];

export const MENTORS: Mentor[] = [
  {
    id: 'm1',
    name: 'Ayan Chawla',
    organization: 'Microsoft',
    image: 'https://picsum.photos/seed/ayan/400/400',
    linkedIn: 'https://linkedin.com',
    bio: 'Industry veteran at Microsoft specializing in cloud-scale AI solutions.'
  },
  {
    id: 'm2',
    name: 'Ansh R Hiran',
    organization: 'University of Mumbai',
    image: 'https://picsum.photos/seed/ansh/400/400',
    linkedIn: 'https://linkedin.com',
    bio: 'Academic researcher and consultant with a focus on computer engineering.'
  },
  {
    id: 'm3',
    name: 'CA Nikhil Khaneja',
    organization: 'Institute of Chartered Accountants of India',
    image: 'https://picsum.photos/seed/nikhil/400/400',
    linkedIn: 'https://linkedin.com',
    bio: 'Management and financial expert providing strategic leadership training.'
  },
  {
    id: 'm4',
    name: 'NILABH A',
    organization: 'Texas Instruments',
    image: 'https://picsum.photos/seed/nilabh/400/400',
    linkedIn: 'https://linkedin.com',
    bio: 'Semiconductor expert with deep knowledge in ECE and hardware design.'
  }
];

export const EVENTS: Event[] = [
  {
    id: 'e1',
    title: 'Day 1: AI Overview & Market Models',
    date: 'Oct 4, 2024',
    time: '1:30 PM IST',
    speaker: 'Ayan Chawla',
    participants: '800+',
    isPast: true,
    recordingUrl: '#'
  },
  {
    id: 'e2',
    title: 'Day 2: AI Responses & Tokens',
    date: 'Oct 5, 2024',
    time: '1:30 PM IST',
    speaker: 'Ayan Chawla',
    participants: '700+',
    isPast: true,
    recordingUrl: '#'
  },
  {
    id: 'e3',
    title: 'Day 3: Image Reading & Vision Models',
    date: 'Oct 11, 2024',
    time: '1:30 PM IST',
    speaker: 'Ayan Chawla',
    participants: '900+',
    isPast: true,
    recordingUrl: '#'
  }
];

export const JOBS: Job[] = [
  {
    id: 'j1',
    role: 'Digital Marketing Manager',
    department: 'Marketing',
    location: 'Bengaluru & Chandigarh',
    type: 'Full-time',
    description: 'We are seeking a creative and analytical Digital Marketing Manager to lead our marketing efforts...'
  },
  {
    id: 'j2',
    role: 'Digital Marketing Intern',
    department: 'Marketing',
    location: 'Bengaluru & Chandigarh',
    type: 'Internship',
    description: 'Join our marketing team as an intern and gain hands-on experience in the EdTech industry...'
  },
  {
    id: 'j3',
    role: 'Business Development Trainee / Academic Counselor',
    department: 'Sales & Counseling',
    location: 'Chandigarh & Bengaluru (Work from Office)',
    type: 'Full-time',
    description: 'We are seeking a dedicated and compassionate BDT / Academic Counselor to join our team...'
  },
  {
    id: 'j4',
    role: 'Human Resources Executive',
    department: 'Human Resources',
    location: 'Bengaluru (Work from Office)',
    type: 'Full-time',
    description: 'As an HR Executive at Apex Skills Technologies, you will play a crucial role in managing our recruitment process...'
  },
  {
    id: 'j5',
    role: 'B2B Manager',
    department: 'B2B Sales',
    location: 'Bengaluru & Chandigarh',
    type: 'Full-time',
    description: 'We are seeking a results-driven B2B Manager to build and lead our corporate partnerships division...'
  },
  {
    id: 'j6',
    role: 'B2B Intern',
    department: 'B2B Sales',
    location: 'Bengaluru & Chandigarh',
    type: 'Internship',
    description: 'Gain valuable experience in corporate sales with our B2B Sales Internship...'
  }
];

export const BLOGS: BlogPost[] = [
  {
    id: 'b1',
    title: 'Digital Transformation: How Direct Marketing has evolved in Canada during the Pandemic',
    category: 'Getting Started',
    date: 'Dec 15, 2024',
    excerpt: 'The pandemic acted as a catalyst, forcing a rapid shift from traditional to digital-first strategies...',
    image: 'https://picsum.photos/seed/blog1/800/400'
  },
  {
    id: 'b2',
    title: 'The Future of Technology and its Impact on Our Lives',
    category: 'Getting Started',
    date: 'Nov 22, 2024',
    excerpt: 'From AI-driven automation to the metaverse, we explore the technological breakthroughs...',
    image: 'https://picsum.photos/seed/blog2/800/400'
  },
  {
    id: 'b3',
    title: 'Top SEO Trends to Watch Out for in 2025',
    category: 'Getting Started',
    date: 'Oct 30, 2024',
    excerpt: 'Stay ahead of the curve. Learn about the rise of AI-powered search, importance of E-E-A-T...',
    image: 'https://picsum.photos/seed/blog3/800/400'
  },
  {
    id: 'b4',
    title: 'How to Boost Your Social Media Engagement',
    category: 'Getting Started',
    date: 'Sep 18, 2024',
    excerpt: 'Tired of posting to an empty audience? We break down the strategies that actually work...',
    image: 'https://picsum.photos/seed/blog4/800/400'
  },
  {
    id: 'b5',
    title: 'Shaping the Future of Education with Apex Skills Technologies',
    category: 'Getting Started',
    date: 'Sep 15, 2025',
    excerpt: 'Apex Skills Technologies is a forward-thinking EdTech platform bridging the gap between academic learning...',
    image: 'https://picsum.photos/seed/blog5/800/400'
  },
  {
    id: 'b6',
    title: 'Skill Incubation in Education: The Future of Career Discovery Before Degrees',
    category: 'Getting Started',
    date: 'Oct 20, 2025',
    excerpt: 'Skill incubation is redefining education by helping learners discover strengths...',
    image: 'https://picsum.photos/seed/blog6/800/400'
  }
];

export const FAQS = [
  {
    question: "What is Apex Skills Technologies and who is it for?",
    answer: "Apex Skills Technologies is a comprehensive EdTech platform designed for students, fresh graduates, and professionals looking to gain industry-aligned skills and internships."
  },
  {
    question: "Are the classes live or pre-recorded?",
    answer: "Our classes are hybrid, featuring pre-recorded expert-led modules combined with live doubt-clearing sessions and weekend workshops."
  },
  {
    question: "Do all plans offer certificates, LOR, and job assistance?",
    answer: "Yes! Successful completion of our core programs includes an industry-recognized certificate, LOR for top performers, and career guidance."
  },
  {
    question: "What kinds of projects are included? Is feedback provided?",
    answer: "Every course includes multiple real-world capstone projects. Our mentors provide detailed feedback to help you refine your skills."
  },
  {
    question: "Is doubt clearing support provided?",
    answer: "Yes, we offer dedicated doubt-clearing sessions and community support channels for all our learners."
  },
  {
    question: "What types of Apex Skills Technologies Internship programs are available?",
    answer: "We offer technical internships (AI, Web Dev, Data Science) and management internships (HR, Marketing, B2B Sales)."
  },
  {
    question: "What kind of certification will I receive?",
    answer: "You will receive verified Certificates of Internship, Performance, and Project Completion, which are industry-recognized and shareable."
  },
  {
    question: "Is there any placement assistance after course completion?",
    answer: "Yes, we provide placement assistance including resume building, interview preparation, and access to our hiring partner network."
  }
];
