import React, { useState, useEffect } from 'react';
import { 
  FaMicrochip, FaArrowRight, FaCheckCircle, FaUsers, 
  FaChalkboardTeacher, FaLaptopCode, FaUserGraduate, FaClock,
  FaPhoneAlt, FaMapMarkerAlt, FaFacebookF, 
  FaYoutube, FaBars, FaTimes,
  FaGraduationCap, FaCertificate, FaRocket, FaShieldAlt,
  FaLaptop, FaUserCog, FaUtensils, FaCut, FaPaintBrush,
  FaInstagram, FaHeart, FaWhatsapp,
  FaStar, FaQuoteLeft
} from 'react-icons/fa';

// ============================================
// COURSES DATA - FINAL
// ============================================
const coursesData = [
  {
    id: 1,
    title: 'Digital Marketing',
    icon: <FaLaptop className="text-3xl" />,
    image: 'https://images.makearmy.io/i/5359e4e8-230e-4425-a503-99760f7a228f.jpg',
    description: 'Master SEO, Social Media Marketing, Content Marketing, Email Marketing, Google Ads, and Analytics to create effective digital marketing strategies and drive business growth.',
    duration: '3 Months',
    fee: 'Rs. 5,000',
    students: 120,
    rating: 4.8,
    modules: [
    'SEO & SEM',
    'Social Media Marketing',
    'Content & Email Marketing',
    'Google Ads',
    'YouTube Ads',
    'Google Analytics & Performance Tracking',
    'Basic AI Automation',
    'Digital Marketing Strategy'],
    color: 'from-blue-600 to-blue-800'
  },
  {
    id: 2,
    title: 'Basic IT & Administration',
    icon: <FaUserCog className="text-3xl" />,
    image: 'https://images.makearmy.io/i/740da217-b55e-4e9f-91bc-518c1cef925c.jpg',
    description: 'Learn computer fundamentals, office automation, network basics, and IT support skills.',
    duration: '3 Months',
    fee: 'Rs. 3,500',
    students: 95,
    rating: 4.6,
    modules: ['Computer Basics', 'MS Office Suite', 'Network Fundamentals', 'IT Support'],
    color: 'from-blue-600 to-blue-800'
  },
  {
    id: 3,
    title: 'Professional Cook - Basic',
    icon: <FaUtensils className="text-3xl" />,
    image: 'https://images.makearmy.io/i/aa7e636d-53e4-4ca1-8b41-bd7f66259966.jpg',
    description: 'Learn fundamental cooking techniques, kitchen basics, and essential culinary skills.',
    duration: '3 Months',
    fee: 'Rs. 5,000',
    students: 80,
    rating: 4.9,
    modules: ['Culinary Basics', 'Kitchen Safety', 'Basic Cooking Techniques', 'Food Preparation'],
    color: 'from-blue-600 to-blue-800'
  },
  {
    id: 4,
    title: 'Professional Cook - Professional',
    icon: <FaUtensils className="text-3xl" />,
    image: 'https://images.makearmy.io/i/aa7e636d-53e4-4ca1-8b41-bd7f66259966.jpg',
    description: 'Advanced culinary training covering international cuisines, kitchen management, and food safety.',
    duration: '6 Months',
    fee: 'Rs. 5,000',
    students: 80,
    rating: 4.9,
    modules: ['International Cuisine', 'Kitchen Management', 'Food Safety', 'Menu Planning'],
    color: 'from-blue-600 to-blue-800'
  },
  {
    id: 5,
    title: 'Bakery & Pastry - Basic',
    icon: <span className="text-3xl">🧁</span>,
    image: 'https://images.makearmy.io/i/4c92397d-dd6a-4152-bf4c-2199b43c110b.jpg',
    description: 'Learn the fundamentals of baking breads, cakes, cookies, and basic pastry techniques.',
    duration: '3 Months',
    fee: 'Rs. 5,000',
    students: 65,
    rating: 4.7,
    modules: ['Bread Basics', 'Cake Basics', 'Cookie Making', 'Pastry Fundamentals'],
    color: 'from-blue-600 to-blue-800'
  },
  {
    id: 6,
    title: 'Bakery & Pastry - Professional',
    icon: <span className="text-3xl">🧁</span>,
    image: 'https://images.makearmy.io/i/4c92397d-dd6a-4152-bf4c-2199b43c110b.jpg',
    description: 'Master advanced baking techniques, cake decoration, pastry arts, and dessert plating.',
    duration: '6 Months',
    fee: 'Rs. 5,000',
    students: 65,
    rating: 4.7,
    modules: ['Cake Decoration', 'Pastry Arts', 'Dessert Plating', 'Advanced Baking'],
    color: 'from-blue-600 to-blue-800'
  },
  {
    id: 7,
    title: 'Beautician (Basic)',
    icon: <FaPaintBrush className="text-3xl" />,
    image: 'https://images.makearmy.io/i/8293302f-d6e5-46b1-93aa-da2469092163.jpg',
    description: 'Professional beauty training including makeup, skincare, nail art, and salon management.',
    duration: '3 Months',
    fee: 'Rs. 5,000',
    students: 110,
    rating: 4.8,
    modules: ['Makeup Artistry', 'Skincare', 'Nail Art', 'Salon Management'],
    color: 'from-blue-600 to-blue-800'
  },
  {
    id: 8,
    title: 'Beautician (Professional)',
    icon: <FaPaintBrush className="text-3xl" />,
    image: 'https://images.makearmy.io/i/8293302f-d6e5-46b1-93aa-da2469092163.jpg',
    description: 'Advanced beauty training including makeup, skincare, nail art, and salon management.',
    duration: '6 Months',
    fee: 'Rs. 5,000',
    students: 110,
    rating: 4.8,
    modules: ['Makeup Artistry', 'Skincare', 'Nail Art', 'Salon Management'],
    color: 'from-blue-600 to-blue-800'
  },
  {
    id: 9,
    title: 'Stitching',
    icon: <span className="text-3xl">🧵</span>,
    image: 'https://images.makearmy.io/i/47caa462-e08f-46dc-95e9-7ed5f17773d3.jpg',
    description: 'Drafting, Cutting, Tailoring and quality control.',
    duration: '3 Months',
    fee: 'Rs. 5,000',
    students: 75,
    rating: 4.6,
    modules: ['Drafting', 'Cutting', 'Tailoring'],
    color: 'from-blue-600 to-blue-800'
  },
  {
    id: 10,
    title: 'Fashion Design',
    icon: <FaCut className="text-3xl" />,
    image: 'https://images.makearmy.io/i/8c879854-6f62-4020-80cf-2601c160ed33.jpg',
    description: 'Creative fashion design including sketching, fabric selection, pattern making, and collection development.',
    duration: '6 Months',
    fee: 'Rs. 5,000',
    students: 90,
    rating: 4.9,
    modules: ['Fashion Sketching', 'Fabric Studies', 'Pattern Making', 'Collection Development'],
    color: 'from-blue-600 to-blue-800'
  }
];

// ============================================
// NAVBAR COMPONENT
// ============================================
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Courses', href: '#courses' },
    { name: 'About', href: '#about' },
    { name: 'Why Choose Us', href: '#why-choose' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-xl py-3' : 'bg-white/95 backdrop-blur py-5'
    }`}>
      <div className="container-custom">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <div className="w-11 h-11 bg-blue-600 rounded-xl flex items-center justify-center">
              <FaMicrochip className="text-white text-xl" />
            </div>
            <div>
              <span className="text-2xl font-extrabold text-blue-600 tracking-tight">FIT</span>
              <p className="text-[10px] text-gray-500 tracking-widest uppercase -mt-0.5">Foundation Institute</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link-blue text-sm">
                {link.name}
              </a>
            ))}
            <a href="#contact" className="btn-primary-blue text-sm px-6 py-2.5">
              <FaWhatsapp /> Register Now
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-blue-600 text-2xl"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="flex flex-col gap-4 pb-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="btn-primary-blue text-center justify-center"
              onClick={() => setIsOpen(false)}
            >
              <FaWhatsapp /> Register Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

// ============================================
// HERO SECTION
// ============================================
const Hero = () => (
  <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-20">
    <div className="container-custom relative">
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl"></div>
      
      <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full">
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
            <span className="text-blue-600 font-semibold text-sm">Admissions Open 2026</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Build Your Future with{' '}
            <span className="text-blue-600">Technology</span>
          </h1>
          
          <p className="text-lg text-gray-600 max-w-lg">
            Empowering the next generation with professional skills in IT, 
            culinary arts, fashion, beauty, and more.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#courses" className="btn-primary-blue">
              Explore Courses <FaArrowRight />
            </a>
            <a href="#contact" className="btn-outline-blue">
              <FaWhatsapp /> Contact Us
            </a>
          </div>

          <div className="flex items-center gap-8 pt-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center text-xs font-bold text-blue-600">
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <div>
              <p className="text-gray-900 font-semibold">500+ Students</p>
              <p className="text-gray-500 text-sm">Trusted by many</p>
            </div>
          </div>
        </div>

        <div className="relative animate-float hidden lg:block">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-6 border border-blue-100 shadow-lg">
                <FaGraduationCap className="text-blue-600 text-3xl mb-3" />
                <h3 className="text-gray-900 font-bold text-lg">10+ Courses</h3>
                <p className="text-gray-500 text-sm">Expert-led programs</p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-blue-100 shadow-lg animate-float">
                <FaCertificate className="text-blue-600 text-3xl mb-3" />
                <h3 className="text-gray-900 font-bold text-lg">Certified</h3>
                <p className="text-gray-500 text-sm">Industry recognized</p>
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="bg-white rounded-2xl p-6 border border-blue-100 shadow-lg animate-float">
                <FaRocket className="text-blue-600 text-3xl mb-3" />
                <h3 className="text-gray-900 font-bold text-lg">90%</h3>
                <p className="text-gray-500 text-sm">Placement rate</p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-blue-100 shadow-lg">
                <FaShieldAlt className="text-blue-600 text-3xl mb-3" />
                <h3 className="text-gray-900 font-bold text-lg">100%</h3>
                <p className="text-gray-500 text-sm">Practical training</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ============================================
// COURSES SECTION
// ============================================
const Courses = () => {
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'IT', 'Culinary', 'Fashion', 'Beauty'];
  
  const filteredCourses = filter === 'all' 
    ? coursesData 
    : coursesData.filter(c => {
        if (filter === 'IT') return c.title.includes('IT') || c.title.includes('Digital');
        if (filter === 'Culinary') return c.title.includes('Cook') || c.title.includes('Bakery');
        if (filter === 'Fashion') return c.title.includes('Fashion') || c.title.includes('Stitching');
        if (filter === 'Beauty') return c.title.includes('Beautician');
        return true;
      });

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-14 animate-fade-in">
          <div className="inline-block bg-blue-100 px-4 py-1.5 rounded-full mb-4">
            <span className="text-blue-600 font-semibold text-sm">Our Programs</span>
          </div>
          <h2 className="section-title-blue mb-4">
            Professional <span className="text-blue-600">Courses</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our comprehensive range of professional courses designed to build your career
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                filter === cat 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => (
            <div 
              key={course.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg card-hover-blue animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden h-56">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <div className="flex items-center gap-2 bg-black/50 backdrop-blur px-3 py-1.5 rounded-full">
                    <FaStar className="text-yellow-400" />
                    <span className="text-white font-semibold text-sm">{course.rating}</span>
                  </div>
                  <span className="bg-blue-600 text-white px-3 py-1.5 rounded-full text-sm font-semibold">
                    {course.duration}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-blue-600">{course.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {course.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                
                <div className="bg-blue-50 rounded-lg px-4 py-2 mb-4">
                  <span className="text-blue-600 font-bold">{course.fee}</span>
                  <span className="text-gray-500 text-sm ml-2">| Full Course</span>
                </div>
                
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {course.modules.slice(0, 3).map((module, i) => (
                    <span key={i} className="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-full">
                      {module}
                    </span>
                  ))}
                  {course.modules.length > 3 && (
                    <span className="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-full">
                      +{course.modules.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span><FaUsers className="inline mr-1" /> {course.students}</span>
                    <span><FaClock className="inline mr-1" /> {course.duration}</span>
                  </div>
                  <a 
                    href="#contact"
                    className="text-blue-600 font-semibold hover:underline flex items-center gap-1"
                  >
                    Enroll Now <FaArrowRight className="text-xs" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// ABOUT SECTION
// ============================================
const About = () => (
  <section id="about" className="py-20 bg-blue-50">
    <div className="container-custom">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in">
          <div className="inline-block bg-blue-100 px-4 py-1.5 rounded-full mb-4">
            <span className="text-blue-600 font-semibold text-sm">About Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
            Empowering Futures Through <span className="text-blue-600">Quality Education</span>
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            Foundation Institute of Technology is dedicated to providing professional training 
            that bridges the gap between education and industry demands.
          </p>
          <div className="space-y-4">
            {[
              { icon: <FaCheckCircle className="text-blue-600" />, text: 'Industry-driven curriculum' },
              { icon: <FaCheckCircle className="text-blue-600" />, text: 'Expert faculty with real-world experience' },
              { icon: <FaCheckCircle className="text-blue-600" />, text: 'Hands-on practical training' },
              { icon: <FaCheckCircle className="text-blue-600" />, text: 'Career guidance and placement support' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-xl">{item.icon}</span>
                <span className="text-gray-700">{item.text}</span>
              </div>
            ))}
          </div>
          <a href="#courses" className="btn-primary-blue mt-8">
            Explore Programs <FaArrowRight />
          </a>
        </div>
        
        <div className="grid grid-cols-2 gap-4 animate-fade-in">
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-lg">
              <FaUsers className="text-blue-600 text-3xl mb-3" />
              <h4 className="font-bold text-2xl text-gray-900">500+</h4>
              <p className="text-gray-600 text-sm">Students Trained</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-lg">
              <FaChalkboardTeacher className="text-blue-600 text-3xl mb-3" />
              <h4 className="font-bold text-2xl text-gray-900">20+</h4>
              <p className="text-gray-600 text-sm">Expert Faculty</p>
            </div>
          </div>
          <div className="space-y-4 mt-8">
            <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-lg">
              <FaLaptopCode className="text-blue-600 text-3xl mb-3" />
              <h4 className="font-bold text-2xl text-gray-900">10</h4>
              <p className="text-gray-600 text-sm">Professional Courses</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-lg">
              <FaUserGraduate className="text-blue-600 text-3xl mb-3" />
              <h4 className="font-bold text-2xl text-gray-900">90%</h4>
              <p className="text-gray-600 text-sm">Placement Rate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ============================================
// WHY CHOOSE US SECTION
// ============================================
const WhyChoose = () => {
  const features = [
    { 
      icon: <FaChalkboardTeacher className="text-4xl" />, 
      title: 'Expert Instructors',
      description: 'Learn from industry professionals with years of real-world experience.',
    },
    { 
      icon: <FaLaptopCode className="text-4xl" />, 
      title: 'Hands-on Learning',
      description: 'Practical, project-based training that prepares you for the job market.',
    },
    { 
      icon: <FaUserGraduate className="text-4xl" />, 
      title: 'Career Support',
      description: 'Guidance on placements, resume building, and interview preparation.',
    },
    { 
      icon: <FaUsers className="text-4xl" />, 
      title: 'Community Network',
      description: 'Join a vibrant community of learners and alumni who support each other.',
    },
    { 
      icon: <FaCertificate className="text-4xl" />, 
      title: 'Certified Programs',
      description: 'Earn recognized certifications that add value to your professional profile.',
    },
    { 
      icon: <FaRocket className="text-4xl" />, 
      title: 'Fast Track Career',
      description: 'Accelerate your career with industry-relevant skills and knowledge.',
    },
  ];

  return (
    <section id="why-choose" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-14 animate-fade-in">
          <div className="inline-block bg-blue-100 px-4 py-1.5 rounded-full mb-4">
            <span className="text-blue-600 font-semibold text-sm">Why Choose Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            What Makes Us <span className="text-blue-600">Different?</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We combine practical skills, industry expertise, and career support to help you succeed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-blue-50 rounded-2xl p-8 border border-blue-100 
                        hover:border-blue-600 transition-all duration-500 
                        hover:-translate-y-2 group animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-block p-4 rounded-2xl bg-blue-600 text-white mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// TESTIMONIALS
// ============================================
const Testimonials = () => {
  const testimonials = [
    {
      name: 'Ayesha Khan',
      course: 'Digital Marketing',
      text: 'The digital marketing course transformed my career. I now run my own successful agency!',
      rating: 5
    },
    {
      name: 'Usman Ali',
      course: 'Industrial Stitching',
      text: 'The practical training was excellent. I started my own stitching business within 3 months.',
      rating: 5
    },
    {
      name: 'Fatima Noor',
      course: 'Beautician',
      text: 'The beautician course gave me professional skills. I now work at a top salon in the city.',
      rating: 4
    },
    {
      name: 'Muhammad Ahmed',
      course: 'Professional Cook',
      text: 'The cooking course was amazing! I learned professional techniques and now work at a 5-star hotel.',
      rating: 5
    },
    {
      name: 'Sana Tariq',
      course: 'Fashion Design',
      text: 'FIT gave me the confidence and skills to start my own fashion brand. Highly recommended!',
      rating: 5
    },
    {
      name: 'Ali Raza',
      course: 'Basic IT & Administration',
      text: 'The IT course helped me get my first job in a multinational company. Great instructors!',
      rating: 4
    }
  ];

  const renderStars = (rating) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'} />
        ))}
      </div>
    );
  };

  return (
    <section className="py-20 bg-blue-50">
      <div className="container-custom">
        <div className="text-center mb-14 animate-fade-in">
          <div className="inline-block bg-blue-100 px-4 py-1.5 rounded-full mb-4">
            <span className="text-blue-600 font-semibold text-sm">Testimonials</span>
          </div>
          <h2 className="section-title-blue mb-4">
            What Our <span className="text-blue-600">Students Say</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real stories from our graduates who have transformed their careers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg card-hover-blue animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <FaQuoteLeft className="text-blue-600 text-3xl opacity-30 mb-4" />
              <p className="text-gray-700 text-sm leading-relaxed mb-4">"{testimonial.text}"</p>
              
              <div className="mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              <div className="border-t border-gray-100 pt-4">
                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-blue-600 font-medium">{testimonial.course}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// CONTACT / REGISTRATION SECTION
// ============================================
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    course: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hello FIT!%0A%0A📝 Name: ${formData.name}%0A📞 Phone: ${formData.phone}%0A📚 Course: ${formData.course}%0A💬 Message: ${formData.message}%0A%0APlease guide me on the next steps. Thank you!`;
    const whatsappUrl = `https://wa.me/923401586258?text=${message}`;
    window.open(whatsappUrl, '_blank');
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-14 animate-fade-in">
          <div className="inline-block bg-blue-100 px-4 py-1.5 rounded-full mb-4">
            <span className="text-blue-600 font-semibold text-sm">Get Started</span>
          </div>
          <h2 className="section-title-blue mb-4">
            Ready to <span className="text-blue-600">Begin?</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Contact us today and take the first step towards your professional career
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-blue-600 text-white p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              {[
                { icon: <FaPhoneAlt />, text: '0340-1586258' },
                { icon: <FaPhoneAlt />, text: '051-8890887' },
                { icon: <FaMapMarkerAlt />, text: '171, Sarwar Road, Rawalpindi' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white">
                    {item.icon}
                  </div>
                  <span className="text-gray-100">{item.text}</span>
                </div>
              ))}
              
              {/* Social Media Icons - Updated: Facebook, Instagram, YouTube only */}
              <div className="flex gap-3 mt-6">
                {[
                  { Icon: FaFacebookF, link: 'https://www.facebook.com/fit_rwp' },
                  { Icon: FaInstagram, link: 'https://www.instagram.com/fit_rwp' },
                  { Icon: FaYoutube, link: 'https://www.youtube.com/@fit_rwp' }
                ].map((item, i) => (
                  <a 
                    key={i} 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <item.Icon />
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
              <h4 className="font-semibold text-gray-900 mb-2">Quick Registration</h4>
              <p className="text-sm text-gray-600">
                Register via WhatsApp for instant confirmation and guidance.
              </p>
              <a 
                href="https://wa.me/923401586258" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 font-semibold mt-3 hover:underline"
              >
                <FaWhatsapp /> Chat Now
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-blue-50 p-8 rounded-2xl shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    <FaUserGraduate className="inline mr-2 text-blue-600" /> Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    <FaPhoneAlt className="inline mr-2 text-blue-600" /> Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                    placeholder="0340-1586258"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  <FaGraduationCap className="inline mr-2 text-blue-600" /> Course of Interest
                </label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                  required
                >
                  <option value="">Select a course...</option>
                  {coursesData.map(course => (
                    <option key={course.id} value={course.title}>{course.title}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition resize-none"
                  placeholder="Any specific questions?"
                />
              </div>

              <button 
                type="submit" 
                className="w-full btn-primary-blue justify-center text-lg"
              >
                <FaWhatsapp className="text-xl" /> Register via WhatsApp
              </button>
            </form>

            {isSubmitted && (
              <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-center animate-fade-in">
                ✅ Thank you! You will be redirected to WhatsApp to complete your registration.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// FOOTER
// ============================================
const Footer = () => (
  <footer className="bg-blue-600 text-gray-200">
    <div className="container-custom pt-16 pb-8">
      <div className="grid md:grid-cols-4 gap-10 pb-10 border-b border-white/10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center">
              <FaMicrochip className="text-blue-600 text-xl" />
            </div>
            <div>
              <span className="text-xl font-extrabold text-white">FIT</span>
              <p className="text-[10px] text-gray-300 tracking-widest uppercase">Foundation Institute</p>
            </div>
          </div>
          <p className="text-sm text-gray-300">Empowering the next generation with professional skills and career opportunities.</p>
          {/* Social Media Icons - Updated: Facebook, Instagram, YouTube only */}
          <div className="flex gap-3 mt-4">
            {[
              { Icon: FaFacebookF, link: 'https://www.facebook.com/fit_rwp' },
              { Icon: FaInstagram, link: 'https://www.instagram.com/fit_rwp' },
              { Icon: FaYoutube, link: 'https://www.youtube.com/@fit_rwp' }
            ].map((item, i) => (
              <a 
                key={i} 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <item.Icon className="text-sm" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#courses" className="hover:text-white transition-colors">Courses</a></li>
            <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
            <li><a href="#why-choose" className="hover:text-white transition-colors">Why Choose Us</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">Popular Courses</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#courses" className="hover:text-white transition-colors">Digital Marketing</a></li>
            <li><a href="#courses" className="hover:text-white transition-colors">Fashion Design</a></li>
            <li><a href="#courses" className="hover:text-white transition-colors">Professional Cook</a></li>
            <li><a href="#courses" className="hover:text-white transition-colors">Beautician</a></li>
            <li><a href="#courses" className="hover:text-white transition-colors">Stitching</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">Get In Touch</h4>
          <ul className="space-y-2 text-sm">
            <li><FaPhoneAlt className="inline mr-2 text-white" /> 0340-1586258</li>
            <li><FaPhoneAlt className="inline mr-2 text-white" /> 051-8890887</li>
            <li><FaMapMarkerAlt className="inline mr-2 text-white" /> 171, Sarwar Road, Rawalpindi</li>
          </ul>
          <div className="mt-4 p-3 bg-white/10 rounded-lg">
            <a 
              href="https://wa.me/923401586258" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white font-semibold hover:underline"
            >
              <FaWhatsapp /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="text-center pt-8 text-sm text-gray-300">
        <p>© 2026 Foundation Institute of Technology. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
);

// ============================================
// MAIN APP
// ============================================
const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Courses />
      <About />
      <WhyChoose />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;