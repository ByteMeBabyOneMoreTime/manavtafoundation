import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      Icon: Facebook,
      href: "https://www.facebook.com/TEIFoundation",
      color: "text-blue-600",
    },
    {
      Icon: Twitter,
      href: "https://x.com/Himansh46056633",
      color: "text-sky-500",
    },
    {
      Icon: Instagram,
      href: "https://www.instagram.com/teif_9918",
      color: "text-pink-500",
    },
    // {
    //   Icon: WhatsApp,
    //   href: "https://chat.whatsapp.com/EDMT03GT1BI6JOIgV77bbS",
    //   color: "text-green-600",
    // },
  ];

  const quickLinks = [
    "Purchase",
    "Accessories",
    "Payment",
    "News",
    "Return",
    "Shipping",
    "Career",
    "Orders",
    "Plant Problem",
  ];

  return (
    <footer
      className="relative bg-cover bg-center bg-no-repeat text-gray-200 py-12"
      style={{
        backgroundImage: 'url("/3.jpg")',
        backgroundBlendMode: "multiply",
        backgroundColor: "rgba(4, 43, 15, 0.8)",
      }}
    >
      <div className="absolute inset-0 bg-green-900/70 backdrop-blur-sm"></div>

      <div className="container mx-auto px-4 space-y-12 relative z-10">
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <img
              src="/logos.png"
              alt="Company Logo"
              className="h-20 w-auto mb-4 transition-transform hover:scale-105"
            />
            <p className="text-xl font-bold text-green-200">
              घर घर हरियाली से <br />
              गरीब के घर खुशहाली
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4">
              {socialLinks.map(({ Icon, href, color }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    ${color} bg-white/10 hover:bg-white/20 
                    p-3 rounded-full transition-all 
                    duration-300 ease-in-out transform hover:scale-110
                  `}
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-green-900/30 p-6 rounded-lg">
            <h5 className="text-xl font-bold mb-6 text-green-200 uppercase">
              Quick Links
            </h5>
            <div className="grid grid-cols-2 gap-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="
                    text-gray-300 hover:text-green-300 
                    transition-all duration-500 ease-in-out
                    relative group
                  "
                >
                  <span className="block transform transition-transform group-hover:translate-x-2">
                    {link}
                  </span>
                  <span
                    className="
                      absolute bottom-0 left-0 w-0 h-0.5 
                      bg-green-300 transition-all duration-500 
                      ease-in-out group-hover:w-full
                    "
                  ></span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-green-900/30 p-6 rounded-lg space-y-4">
            <h5 className="text-xl font-bold mb-6 text-green-200 uppercase">
              Contact Us
            </h5>
            <div className="space-y-4">
              {[
                {
                  icon: MapPin,
                  text: "Jail road Tambeswar Nagar, Fatehpur, UP 212601",
                },
                { icon: Phone, text: "+91 9918771888" },
                { icon: Mail, text: "info.manavatanurssery@gmail.com" },
                { icon: Clock, text: "Mon - Sun: 8 AM to 9 PM" },
              ].map(({ icon: Icon, text }, index) => (
                <div key={index} className="flex items-center space-x-3 group">
                  <Icon className="w-5 h-5 text-green-400 transition-transform group-hover:scale-110" />
                  <p className="text-sm text-gray-300 transition-all group-hover:text-white">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-green-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} All Rights Reserved | Crafted with
            <span className="text-red-500 mx-1">❤</span>
            by{" "}
            <a
              href="https://www.instagram.com/rajat_singh__tomar/"
              className="
                text-green-300 hover:text-green-200 
                transition-all duration-500 ease-in-out
                relative group
              "
            >
              <span className="block">Rajat Singh Tomar</span>
              <span
                className="
                  absolute bottom-0 left-0 w-0 h-0.5 
                  bg-green-300 transition-all duration-500 
                  ease-in-out group-hover:w-full
                "
              ></span>
            </a>
          </p>

          <nav className="mt-4 md:mt-0">
            <ul className="flex space-x-4">
              {["Home", "About", "Service", "Portfolio", "Blog", "Contact"].map(
                (item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="
                      text-gray-400 hover:text-green-300 
                      text-sm transition-all duration-500 
                      ease-in-out relative group
                    "
                    >
                      <span className="block transform transition-transform group-hover:translate-x-1">
                        {item}
                      </span>
                      <span
                        className="
                        absolute bottom-0 left-0 w-0 h-0.5 
                        bg-green-300 transition-all duration-500 
                        ease-in-out group-hover:w-full
                      "
                      ></span>
                    </a>
                  </li>
                ),
              )}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
