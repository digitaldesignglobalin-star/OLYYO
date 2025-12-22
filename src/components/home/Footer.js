'use client';

import { useState } from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Heart } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: '#', color: 'hover:text-blue-600' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', color: 'hover:text-sky-500' },
    { icon: <Instagram className="w-5 h-5" />, href: '#', color: 'hover:text-pink-600' },
    { icon: <Mail className="w-5 h-5" />, href: '#', color: 'hover:text-red-500' },
  ];

  const footerLinks = [
    { title: 'Company', links: ['About Us', 'Careers', 'Press', 'Blog'] },
    { title: 'Support', links: ['Help Center', 'Safety', 'Contact Us', 'FAQ'] },
    { title: 'Legal', links: ['Terms', 'Privacy', 'Cookies', 'Licenses'] },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white pt-12 pb-6 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 animate-shimmer"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 animate-slide-up">
            <div className="flex items-center space-x-2 mb-6 group">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 w-12 h-12 rounded-xl flex items-center justify-center 
                            group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 cursor-pointer">
                <span className="text-white font-bold text-2xl bounce-in">O</span>
              </div>
              <div>
                <span className="text-3xl font-bold group-hover:scale-105 transition-transform duration-300 cursor-pointer">
                  OLYYO.COM
                </span>
                <p className="text-gray-400 mt-2 group-hover:text-gray-300 transition-colors duration-300">
                  Fastest food delivery in 10 minutes
                </p>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-400 hover:text-white transition-colors duration-300 group">
                <Phone className="w-4 h-4 mr-3 group-hover:scale-125 transition-transform duration-300" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-400 hover:text-white transition-colors duration-300 group">
                <Mail className="w-4 h-4 mr-3 group-hover:scale-125 transition-transform duration-300" />
                <span>support@olyyo.com</span>
              </div>
              <div className="flex items-center text-gray-400 hover:text-white transition-colors duration-300 group">
                <MapPin className="w-4 h-4 mr-3 group-hover:scale-125 transition-transform duration-300" />
                <span>123 Food Street, New York</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section, index) => (
            <div key={index} className="animate-slide-up" style={{animationDelay: `${0.1 + index * 0.1}s`}}>
              <h3 className="text-lg font-semibold mb-4 group cursor-default">
                {section.title}
                <div className="w-8 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 mt-1 
                              group-hover:w-12 transition-all duration-300"></div>
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-gray-400 hover:text-white hover:pl-2 
                                        transition-all duration-300 flex items-center group">
                      <div className="w-0 h-0.5 bg-orange-500 mr-0 group-hover:w-2 
                                   group-hover:mr-2 transition-all duration-300"></div>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter & Social */}
        <div className="border-t border-gray-800 pt-8 animate-slide-up" style={{animationDelay: '0.4s'}}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Newsletter */}
            <div className="mb-6 md:mb-0 md:w-1/2">
              <h4 className="text-lg font-semibold mb-3">Stay Updated</h4>
              <form onSubmit={handleSubscribe} className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 bg-gray-800 text-white px-4 py-3 rounded-l-xl focus:outline-none 
                           focus:ring-2 focus:ring-orange-500 transition-all duration-300"
                />
                <button
                  type="submit"
                  className={`bg-gradient-to-r from-orange-500 to-red-500 px-6 py-3 rounded-r-xl font-medium 
                           hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 
                           ${subscribed ? 'bg-gradient-to-r from-green-500 to-emerald-500' : ''}`}
                >
                  {subscribed ? 'Subscribed!' : 'Subscribe'}
                </button>
              </form>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center 
                             transition-all duration-300 hover:scale-110 ${social.color}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 animate-slide-up" 
             style={{animationDelay: '0.5s'}}>
          <p className="flex items-center justify-center">
            © 2024 OLYYO.COM. All rights reserved. 
          </p>
          <p className="mt-1 text-xs">
                      ❤️Proudly developed by{" "}
                      <Link href="https://designglobal.in/">
                        Design Global Technology
                      </Link>
                    </p>
        </div>
      </div>
    </footer>
  );
}