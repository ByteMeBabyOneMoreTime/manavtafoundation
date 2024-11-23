import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CarouselSection() {
  const [zoomLevel, setZoomLevel] = useState(1);

  // Array of image paths - replace with your actual image paths
  const images = [
    "bg-img/1.jpg",
    "bg-img/2.jpg",
    "bg-img/3.jpg",
    "bg-img/16.jpg",
  ];

  // Continuous zoom effect
  useEffect(() => {
    const zoomInterval = setInterval(() => {
      setZoomLevel((prev) => {
        if (prev >= 1.15) return 1; // Reset zoom when it reaches 115%
        return prev + 0.0005; // Very small increments for smooth zoom
      });
    }, 50); // Update zoom every 50ms

    return () => clearInterval(zoomInterval);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    speed: 2000, // Transition duration
    autoplay: true,
    autoplaySpeed: 4000, // Change image every 4 seconds
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
    cssEase: "linear",
  };

  const CustomSlide = ({ image }) => (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-50 ease-linear"
        style={{
          backgroundImage: `url(${image})`,
          transform: `scale(${zoomLevel})`,
        }}
      />
    </div>
  );

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Carousel */}
      <div className="absolute inset-0">
        <Slider {...settings}>
          {images.map((image, index) => (
            <CustomSlide key={index} image={image} />
          ))}
        </Slider>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50" />

      {/* Content */}
      <div className="relative z-10 container mx-auto flex items-center justify-center h-full text-center text-white">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Manavata Nursery
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-300">
            Cultivating green solutions and bringing nature closer to your home
          </p>
          <div className="space-x-4 animate-fade-in-up animation-delay-600">
            <a
              href="/shop"
              className="px-8 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Get Started
            </a>
            <a
              href="/contact"
              className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-600 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
