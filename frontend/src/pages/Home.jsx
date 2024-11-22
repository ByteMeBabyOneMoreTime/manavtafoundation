import React, { useEffect, useState } from "react";
import {
  Play,
  Leaf,
  Droplet,
  Scissors,
  Users,
  Paintbrush,
  Trees,
  Award,
  ThumbsUp,
  Sprout,
  Recycle,
} from "lucide-react";

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

const BenefitCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
    <div className="mb-4 inline-block bg-green-100 p-3 rounded-full">
      <Icon className="w-8 h-8 text-green-600" />
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const ProgressBar = ({ label, percentage }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Animate progress bar on mount
    setTimeout(() => setWidth(percentage), 100);
  }, [percentage]);

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-2">
        <p className="text-lg font-medium text-gray-800">{label}</p>
        <span className="text-lg font-semibold text-green-600">{width}%</span>
      </div>
      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

export default function HomePage() {
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
    {
      icon: Trees,
      title: "Sustainable",
      description:
        "Our products are designed with sustainability in mind, using eco-friendly materials and practices to minimize environmental impact.",
    },
  ];

  const progressData = [
    { label: "Office Plants", percentage: 80 },
    { label: "Field Management", percentage: 70 },
    { label: "Landscape Design", percentage: 85 },
    { label: "Garden Care", percentage: 65 },
  ];

  const benefits = [
    {
      icon: Award,
      title: "Quality Products",
      description:
        "We ensure top-notch plants with robust health, vibrant growth, and resilience. Each plant is meticulously cared for, delivering excellence.",
    },
    {
      icon: ThumbsUp,
      title: "Perfect Service",
      description:
        "Experience unmatched service with our dedicated team, offering prompt, efficient, and friendly support to meet all your needs seamlessly.",
    },
    {
      icon: Sprout,
      title: "100% Natural",
      description:
        "Our products are crafted from pure, natural ingredients, ensuring authenticity and quality without additives or artificial components.",
    },
    {
      icon: Recycle,
      title: "Environmentally Friendly",
      description:
        "Our products are designed with sustainability in mind, using eco-friendly materials and practices to minimize environmental impact.",
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

            <div className="relative rounded-lg overflow-hidden shadow-lg ml-40 w-1/2">
              <img
                src="image.png"
                alt="Service Showcase"
                className="w-full h-full object-cover"
              />
              <a
                href="imggif.mp4"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                           bg-white p-4 rounded-full shadow-lg hover:bg-green-50 transition"
              >
                <Play className="w-12 h-12 text-green-600" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-gradient-to-b from-white to-green-50">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
            <p className="text-xl text-gray-600">
              We are leading in the plants service fields
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Progress Bars Section */}
            <div className="space-y-8 mt-20">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                {progressData.map((item, index) => (
                  <ProgressBar
                    key={index}
                    label={item.label}
                    percentage={item.percentage}
                  />
                ))}
              </div>
            </div>

            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <BenefitCard
                  key={index}
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                />
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="mt-20 border-b border-gray-200" />
        </div>
      </section>
    </div>
  );
}
