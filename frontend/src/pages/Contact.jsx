import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

export default function Contact() {
  // Parallax effect for hero section
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const hero = document.querySelector(".parallax-bg");
      if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.1}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section with Parallax */}
      <div className="relative h-[60vh] overflow-hidden">
        <div
          className="parallax-bg absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(bg-img/24.jpg)",
            transform: "translateZ(0)",
          }}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        </div>

        <div className="relative h-full flex flex-col items-center justify-center text-white z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            Contact Us
          </motion.h1>

          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center space-x-2 text-sm md:text-base"
          >
            <NavLink
              to="/"
              className="hover:text-green-400 transition-colors flex items-center"
            >
              <span className="mr-1">🏠</span> Home
            </NavLink>
            <span>/</span>
            <span className="text-green-400">Contact</span>
          </motion.nav>
        </div>
      </div>

      {/* Contact Info Section */}
      <section className="py-16 px-4 md:py-24">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Logo/Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img
                  src="logos.png"
                  alt="Manavata Nursery"
                  className="w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </motion.div>

            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                  Get in Touch
                </h2>
                <p className="text-gray-600">
                  We're here to help and answer any questions you might have.
                </p>
              </div>

              <div className="space-y-6">
                {/* Contact Cards */}
                <div className="grid gap-6">
                  {[
                    {
                      icon: <MapPin className="w-6 h-6" />,
                      title: "Address",
                      content:
                        "jail road Tambeswar Nagar near by Agrsen chauraha, Fatehpur, UttarPradesh 212601",
                    },
                    {
                      icon: <Phone className="w-6 h-6" />,
                      title: "Phone",
                      content: "+919918771888",
                    },
                    {
                      icon: <Mail className="w-6 h-6" />,
                      title: "Email",
                      content: "info.manavatanurssery@gmail.com",
                    },
                    {
                      icon: <Clock className="w-6 h-6" />,
                      title: "Hours",
                      content: "Mon - Sun: 8 AM to 9 PM",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-4 p-4 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="p-3 bg-green-100 rounded-full text-green-600">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm">{item.content}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                />
                <textarea
                  rows={6}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                />
                <button
                  type="submit"
                  className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg 
                           hover:from-green-600 hover:to-green-700 transform hover:scale-105 
                           transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1126.5552752590188!2d80.79766371243804!3d25.94160747438078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c8355fcb7a191%3A0x54fbf80545fc7fe1!2sMANAVTA%20NURSERY!5e0!3m2!1sen!2sin!4v1722100863428!5m2!1sen!2sin"
                  className="w-full h-[500px]"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
