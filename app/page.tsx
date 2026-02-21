'use client';

import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const FeatureItem = ({ icon, title, description }) => (
  <motion.div 
    className="bg-white p-6 rounded-xl shadow-md"
    variants={fadeInUp}
  >
    <div className="text-3xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const AppLandingPage = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white text-gray-800 font-sans">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">PawsomeGroom 🐾</div>
          <motion.button 
            className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 flex flex-col items-center text-center">
        <motion.div 
          className="max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Professional Pet Grooming at Your Doorstep
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Book experienced groomers for your furry friends with just one tap. 
            We come to you, so your pet stays comfortable at home.
          </p>
          <motion.button 
            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download App
          </motion.button>
        </motion.div>
        
        {/* Mobile Mockup */}
        <motion.div 
          className="mt-12"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-gray-200 rounded-3xl p-4 w-[280px] h-[500px] relative shadow-xl">
            <div className="bg-white rounded-2xl overflow-hidden h-full flex items-center justify-center">
              <img 
                src="https://via.placeholder.com/250x450.png?text=Pet+Grooming+App" 
                alt="App Interface" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="bg-blue-100 py-20">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-gray-800"
            {...fadeInUp}
          >
            Why Choose PawsomeGroom?
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            <FeatureItem 
              icon="🛁"
              title="Spa Treatments"
              description="Bathing, nail trimming, ear cleaning, and pawdicures for your pet's ultimate comfort."
            />
            <FeatureItem 
              icon="✂️"
              title="Stylish Haircuts"
              description="Professional grooming with precision tools and modern styles for every breed."
            />
            <FeatureItem 
              icon="🏠"
              title="Home Service"
              description="Our certified groomers come to your home at your preferred time and date."
            />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <motion.div 
          className="bg-gradient-to-r from-purple-400 via-blue-500 to-purple-400 p-10 rounded-2xl shadow-xl relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')] opacity-10"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">
            Ready to Pamper Your Pet?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto relative z-10">
            Join thousands of happy pet owners enjoying our convenient and professional grooming service.
          </p>
          <motion.button 
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all relative z-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get the App Now
          </motion.button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-blue-400">PawsomeGroom 🐾</h3>
              <p className="text-gray-400 mt-2">Bringing luxury grooming to your doorstep</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Services</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-500">
            <p>© 2023 PawsomeGroom. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AppLandingPage;