import React, { useState, useEffect } from 'react';
import { Store as AppStore, Store as PlayStore, Clock, Utensils, Calendar,User, Star, Users, ArrowRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import '@fontsource/roboto';


function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#mission", label: "About Us" },
    { href: "#download", label: "Download" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Navbar */}
      <motion.header
        className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#072D61] shadow-lg' : 'bg-transparent'
          }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.h1
              className="text-2xl font-bold text-white"
              whileHover={{ scale: 1.05 }}
            >

              {/* ---- */}

              {/* ---- */}


              <h1 className='font-roboto font-[300px]' > EATPLEK</h1>
            </motion.h1>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="text-white hover:text-gray-300 transition-colors relative"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden mt-4"
              >
                {navLinks.map((link) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className="block text-white py-2 hover:text-gray-300 transition-colors"
                    whileHover={{ x: 10 }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>

      {/* Hero Section with Enhanced Animations */}
      <div className="bg-[#072D61] text-white pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <motion.h2
              className="text-5xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Pre-Book Your Meal -<br />Dine Without Delay!
            </motion.h2>
            <motion.p
              className="text-xl mb-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              At EatPlek, we go beyond just reserving your table. We bring you the convenience of pre-booking your meal, so your favorite dishes are ready the moment you arrive. Say goodbye to waiting and hello to a dining experience tailored for ultimate ease and efficiency.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#download"
                className="flex items-center justify-center space-x-2 bg-white text-[#072D61] px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <AppStore size={24} />
                <span>App Store</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#download"
                className="flex items-center justify-center space-x-2 border border-white px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
              >
                <PlayStore size={24} />
                <span>Play Store</span>
              </motion.a>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
              alt="Restaurant interior"
              className="rounded-2xl shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Features Section with Hover Effects */}
      <section id="features" className="py-20 bg-gray-50">


        <div className='text-center'>
          <motion.h2
            className="text-5xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Why Pre-Book with EatPlek?
          </motion.h2>
        </div>


        <div className="container mt-4 mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            {[
              { icon: Clock, title: "No Waiting, Just Dining", desc: "Skip the wait for food preparation and enjoy your meal as soon as you're seated." },
              { icon: Calendar, title: "Real-Time Food Booking", desc: "Browse menus, select your dishes, and confirm your order before you step in." },
              { icon: Clock, title: "Perfectly Timed Service", desc: "Your pre-booked meal ensures everything is freshly prepared and served right on time." },
              { icon: User, title: "Personalized Experience", desc: "Customize your dishes and plan your dining experience just the way you like it." }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="bg-[#072D61] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <feature.icon className="text-white" size={32} />
                </motion.div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section with Enhanced Animations */}
      <section id="mission" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-8 text-[#072D61]">Our Mission & Vision</h2>

            <div className="space-y-8">
              {[
                {
                  title: "Mission",
                  points: [
                    "Redefine dining by integrating seamless table and meal reservations.",
                    "Create a unique connection between diners and restaurants using smart technology.",
                    "Empower local restaurants to streamline operations and elevate customer satisfaction."
                  ]
                },
                {
                  title: "Vision",
                  points: [
                    "Become the leading global platform for table and meal pre-booking.",
                    "Eliminate all dining delays, creating a stress-free and enjoyable experience.",
                    "Build a future where dining is personalized, efficient, and unforgettable."
                  ]
                }
              ].map((section, sectionIndex) => (
                <motion.div
                  key={section.title}
                  className="text-left"
                  initial={{ opacity: 0, x: sectionIndex % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: sectionIndex * 0.2 }}
                >
                  <h3 className="text-2xl font-semibold mb-4">{section.title}</h3>
                  <ul className="space-y-4 text-gray-700">
                    {section.points.map((point, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        whileHover={{ x: 10 }}
                      >
                        <ArrowRight className="text-[#072D61] mt-1 mr-2 flex-shrink-0" size={20} />
                        <span>{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Download Section with Enhanced Animations */}
      <section id="download" className="py-20 bg-[#072D61] text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.h2
              className="text-4xl font-bold mb-8"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Download EatPlek Today
            </motion.h2>
            <motion.p
              className="text-xl mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Join thousands of satisfied users who have transformed their dining experience with EatPlek
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="flex items-center justify-center space-x-2 bg-white text-[#072D61] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <AppStore size={24} />
                <div className="text-left">
                  <div className="text-sm">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="flex items-center justify-center space-x-2 border border-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors"
              >
                <PlayStore size={24} />
                <div className="text-left">
                  <div className="text-sm">Get it on</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer with Hover Effects */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 md:mb-0">
              <motion.h2
                className="text-2xl font-bold"
                whileHover={{ scale: 1.05 }}
              >
                EatPlek
              </motion.h2>
              <p className="text-gray-400 mt-2">Book. Eat. Enjoy.</p>
            </div>
            <div className="flex space-x-6">
              {["Privacy Policy", "Terms of Service", "Contact"].map((item) => (
                <motion.a
                  key={item}
                  href="#"
                  className="hover:text-gray-300 transition"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} EatPlek. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;