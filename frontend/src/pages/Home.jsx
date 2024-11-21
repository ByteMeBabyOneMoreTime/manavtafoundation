import React from "react";
import { Play, Leaf, Droplet, Scissors } from "lucide-react";

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="flex items-center space-x-6 mb-8 hover:bg-gray-50 p-4 rounded-lg transition">
    <div className="bg-green-100 p-3 rounded-full">
      <Icon className="w-10 h-10 text-green-600" />
    </div>
    <div>
      <h5 className="text-xl font-semibold text-gray-800 mb-2">{title}</h5>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const HomePage = () => {
  const services = [
    {
      icon: Leaf,
      title: "Plants Care",
      description:
        "Proper plant care includes regular watering, adequate sunlight, well-drained soil, and occasional fertilization to ensure healthy, thriving plants.",
    },
    {
      icon: Droplet,
      title: "Pressure Washing",
      description:
        "Pressure washing removes dirt, grime, and mildew from surfaces using high-pressure water. It's effective for cleaning driveways, decks, and buildings.",
    },
    {
      icon: Scissors,
      title: "Tree Service & Trimming",
      description:
        "Tree service and trimming involve pruning, shaping, and maintaining trees to enhance health, appearance, and safety, ensuring optimal growth.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Carousel Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(/api/placeholder/1600/900)",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 container mx-auto flex items-center justify-center h-full text-center text-white">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">Manavata Nursery</h1>
            <p className="text-xl mb-8">
              Cultivating green solutions and bringing nature closer to your
              home
            </p>
            <div className="space-x-4">
              <a
                href="/shop"
                className="px-8 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
              >
                Get Started
              </a>
              <a
                href="/contact"
                className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-600 transition"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive green solutions tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>

            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img
                src="/api/placeholder/600/400"
                alt="Service Showcase"
                className="w-full h-full object-cover"
              />
              <a
                href="#"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                           bg-white p-4 rounded-full shadow-lg hover:bg-green-50 transition"
              >
                <Play className="w-12 h-12 text-green-600" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
