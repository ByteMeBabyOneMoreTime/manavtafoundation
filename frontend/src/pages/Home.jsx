import React, { useEffect, useState } from "react";
import {
  Play,
  Leaf,
  Droplet,
  Scissors,
  Trees,
  Award,
  ThumbsUp,
  Sprout,
  Recycle,
  Heart,
  ShoppingCart,
  ArrowLeftRight,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import CarouselSection from "../components/CarouselSection";

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="flex items-center space-x-6 mb-8 hover:bg-green-50 p-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
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
  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-green-50">
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

const portfolioItems = [
  {
    id: 1,
    image: "/work-img/pf-1.jpg",
    title: "Minimal Flower Store",
    subtitle: "Office Plants",
  },
  {
    id: 2,
    image: "/work-img/pf-2.jpg",
    title: "Minimal Flower Store",
    subtitle: "Office Plants",
  },
  {
    id: 3,
    image: "/work-img/pf-3.jpg",
    title: "Minimal Flower Store",
    subtitle: "Office Plants",
  },
  {
    id: 4,
    image: "/work-img/pf-4.jpg",
    title: "Minimal Flower Store",
    subtitle: "Office Plants",
  },
  {
    id: 5,
    image: "/work-img/pf-6.jpg",
    title: "Minimal Flower Store",
    subtitle: "Office Plants",
  },
  {
    id: 6,
    image: "/bg-img/21.jpg",
    title: "Minimal Flower Store",
    subtitle: "Office Plants",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Mr. Rajat Singh",
    image: "/bg-img/file.jpg",
    quote:
      "Manavta is a pleasure to work with. Their ideas are creative, they came up with imaginative solutions to some tricky issues, their landscaping and planting contacts are equally excellent we have a beautiful but also manageable garden as a result. Thank you!",
  },
  {
    id: 2,
    name: "Dr. Himanshu",
    role: "CEO of manavatanurssery",
    image: "/dr-himanshu-manavta-nuurssary.jpg",
    quote:
      "ManavtaNurssery is a pleasure to work with. Their ideas are creative, they came up with imaginative solutions to some tricky issues, their landscaping and planting contacts are equally excellent we have a beautiful but also manageable garden as a result. Thank you!",
  },
  {
    id: 3,
    name: "Mr. Jonas Nick",
    role: "CEO of NAVATECH",
    image: "/bg-img/15.jpg",
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error asperiores excepturi repudiandae dolor cupiditate facilis temporibus sint voluptas, unde labore et molestias corrupti eaque. Illum quo suscipit aut perspiciatis, atque eveniet impedit maxime iusto, exercitationem officia quasi et dolore vitae!",
  },
];

const products = [
  {
    id: 1,
    name: "Cactus Flower",
    price: 199,
    image: "bg-img/9.jpg",
    tag: "Hot",
  },
  { id: 2, name: "Cactus Flower", price: 199, image: "bg-img/10.jpg" },
  { id: 3, name: "Cactus Flower", price: 199, image: "bg-img/11.jpg" },
  {
    id: 4,
    name: "Cactus Flower",
    price: 199,
    image: "bg-img/12.jpg",
    tag: "Hot",
  },
];

const ProductCard = ({ product, delay }) => (
  <div
    className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
        {product.tag && (
          <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
            {product.tag}
          </div>
        )}
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 flex items-center justify-center group-hover:opacity-100">
          <div className="flex space-x-4">
            <button className="p-2 bg-white rounded-full text-gray-800 hover:bg-gray-200 transition-colors duration-200">
              <Heart size={20} />
            </button>
            <button className="p-2 bg-white rounded-full text-gray-800 hover:bg-gray-200 transition-colors duration-200">
              <ShoppingCart size={20} />
            </button>
            <button className="p-2 bg-white rounded-full text-gray-800 hover:bg-gray-200 transition-colors duration-200">
              <ArrowLeftRight size={20} />
            </button>
          </div>
        </div>
      </div>
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600">₹ {product.price}</p>
      </div>
    </div>
  </div>
);

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
      <CarouselSection />

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
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
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

      {/* Portfolio Section */}
      <section className="py-16 bg-gradient-to-b from-gray-100 to-gray-200">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">OUR PORTFOLIO</h2>
            <p className="text-gray-600 mt-2">
              We devote all of our experience and efforts for creation
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item, index) => (
              <div
                key={item.id}
                className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-500 bg-white"
              >
                {/* Portfolio Thumbnail */}
                <div className="h-64 relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Portfolio Hover Effect */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition duration-500 flex items-center justify-center">
                  <div className="text-center opacity-0 group-hover:opacity-100 transition duration-500">
                    <h3 className="text-white text-lg font-semibold">
                      {item.title}
                    </h3>
                    <h5 className="text-gray-300 text-sm mt-1">
                      {item.subtitle}
                    </h5>
                    <a
                      href={item.image}
                      className="inline-block mt-4 py-2 px-4 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-md hover:shadow-lg transition duration-300"
                      title={`Portfolio ${index + 1}`}
                    >
                      View More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-2 text-green-800">
            TESTIMONIAL
          </h2>
          <p className="text-xl text-center mb-12 text-green-600">
            Some kind words from clients about Manavta nursery
          </p>

          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            className="mySwiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide
                key={testimonial.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl"
              >
                <div className="flex flex-col md:flex-row items-center p-6">
                  <div className="md:w-1/2 mb-6 md:mb-0">
                    <div className="relative w-64 h-64 mx-auto overflow-hidden rounded-full shadow-inner">
                      <div className="relative w-full h-full">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-6">
                    <blockquote className="text-lg italic text-gray-600 mb-4">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                    <div className="font-semibold text-green-800">
                      {testimonial.name}
                    </div>
                    {testimonial.role && (
                      <div className="text-sm text-green-600">
                        {testimonial.role}
                      </div>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gradient-to-b from-gray-100 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              NEW ARRIVALS
            </h2>
            <p className="text-gray-600">
              We have the latest products, it must be exciting for you
            </p>
          </div>
          <div className="flex flex-wrap -mx-4">
            {products.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                delay={index * 100}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="/shop"
              className="inline-block px-8 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-300 transform hover:scale-105"
            >
              View All
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-green-50 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-wrap items-center justify-between">
            <div className="w-full lg:w-5/12 mb-10 lg:mb-0">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Join the Newsletter
              </h2>
              <p className="text-gray-600">
                Subscribe to our newsletter and get 10% off your first purchase
              </p>
            </div>
            <div className="w-full lg:w-6/12">
              <form className="flex flex-col sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-3 rounded-lg sm:rounded-r-none mb-4 sm:mb-0 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button
                  type="submit"
                  className="bg-green-500 text-white px-6 py-3 rounded-lg sm:rounded-l-none hover:bg-green-600 transition-colors duration-300 transform hover:scale-105"
                >
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-64 h-64 opacity-10 transform translate-x-1/4 translate-y-1/4">
          <img
            src="core-img/leaf.png"
            alt="Leaf"
            className="w-full h-full object-contain"
          />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                GET IN TOUCH
              </h2>
              <p className="text-gray-600 mb-8">
                Send us a message, we will call back later
              </p>
              <form className="space-y-6">
                <div className="flex flex-wrap -mx-2">
                  <div className="w-full sm:w-1/2 px-2 mb-4 sm:mb-0">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div className="w-full sm:w-1/2 px-2">
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <textarea
                  placeholder="Message"
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                ></textarea>
                <button
                  type="submit"
                  className="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 transition-colors duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <div className="h-96 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1126.5552752590188!2d80.79766371243804!3d25.94160747438078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c8355fcb7a191%3A0x54fbf80545fc7fe1!2sMANAVTA%20NURSERY!5e0!3m2!1sen!2sin!4v1722100863428!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
