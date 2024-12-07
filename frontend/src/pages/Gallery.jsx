import { NavLink } from "react-router-dom";
import { Home, ZoomIn, X, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, Suspense } from "react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isImageLoading, setIsImageLoading] = useState(true);

  // Fixed image array with correct paths
  const images = [
    { id: 0, src: "pf-img/pic0.jpg", alt: "Gallery Image 0" },
    { id: 1, src: "pf-img/pic1.jpg", alt: "Gallery Image 1" },
    { id: 2, src: "pf-img/pic2.jpg", alt: "Gallery Image 2" },
    { id: 3, src: "pf-img/pic3.jpg", alt: "Gallery Image 3" },
    { id: 4, src: "pf-img/pic4.jpg", alt: "Gallery Image 4" },
    { id: 5, src: "pf-img/pic5.jpg", alt: "Gallery Image 5" },
    { id: 6, src: "pf-img/pic6.jpg", alt: "Gallery Image 6" },
    { id: 7, src: "pf-img/pic7.jpg", alt: "Gallery Image 7" },
    { id: 8, src: "pf-img/pic8.jpg", alt: "Gallery Image 8" },
    { id: 9, src: "pf-img/pic9.jpg", alt: "Gallery Image 9" },
    { id: 10, src: "pf-img/pic10.jpg", alt: "Gallery Image 10" },
    { id: 11, src: "pf-img/pic11.jpg", alt: "Gallery Image 11" },
    { id: 12, src: "pf-img/pic12.jpg", alt: "Gallery Image 12" },
    { id: 13, src: "pf-img/pic14.jpg", alt: "Gallery Image 13" },
    { id: 16, src: "pf-img/pic16.jpg", alt: "Gallery Image 16" },
    { id: 17, src: "pf-img/pic17.jpg", alt: "Gallery Image 17" },
    { id: 18, src: "pf-img/pic18.jpg", alt: "Gallery Image 18" },
    { id: 19, src: "pf-img/pic19.jpg", alt: "Gallery Image 19" },
    { id: 20, src: "pf-img/pic20.jpg", alt: "Gallery Image 20" },
    { id: 21, src: "pf-img/pic21.jpg", alt: "Gallery Image 21" },
    { id: 22, src: "pf-img/pic22.jpg", alt: "Gallery Image 22" },
    { id: 23, src: "pf-img/pic23.jpg", alt: "Gallery Image 23" },
    { id: 24, src: "pf-img/pic24.jpg", alt: "Gallery Image 24" },
    { id: 25, src: "pf-img/pic25.jpg", alt: "Gallery Image 25" },
    { id: 26, src: "pf-img/pic26.jpg", alt: "Gallery Image 26" },
    { id: 27, src: "pf-img/pic27.jpg", alt: "Gallery Image 27" },
    { id: 28, src: "pf-img/pic28.jpg", alt: "Gallery Image 28" },
    { id: 29, src: "pf-img/pic29.jpg", alt: "Gallery Image 29" },
    { id: 30, src: "pf-img/pic30.jpg", alt: "Gallery Image 30" },
    { id: 31, src: "pf-img/pic31.jpg", alt: "Gallery Image 31" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  // Loading Spinner Component
  const LoadingSpinner = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <Loader2 className="w-16 h-16 text-white animate-spin" />
      </motion.div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(pf-img/pic24.jpg)",
            filter: "brightness(0.7)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
        <div className="relative h-full flex flex-col items-center justify-center text-white space-y-4 px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Explore Our Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-xl text-gray-200 text-sm md:text-base"
          >
            Discover a curated collection of stunning images that tell our
            unique story.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center space-x-2 text-sm md:text-base"
          >
            <NavLink
              to="/"
              className="hover:text-blue-400 transition-colors flex items-center"
            >
              <Home className="w-4 h-4 mr-1" />
              Home
            </NavLink>
            <span>/</span>
            <span className="text-blue-400">Gallery</span>
          </motion.div>
        </div>
      </div>

      {/* Gallery Grid with Dynamic Sizing */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {images.map((image) => (
            <motion.div
              key={image.id}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
                <Suspense fallback={<LoadingSpinner />}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    onLoad={() => setIsImageLoading(false)}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                </Suspense>
                {isImageLoading && <LoadingSpinner />}
              </div>
              <div
                className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 
                  transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100"
              >
                <button
                  onClick={() => setSelectedImage(image)}
                  className="p-3 bg-white text-gray-800 rounded-full transform translate-y-4 group-hover:translate-y-0 
                    transition-all duration-300 hover:bg-blue-500 hover:text-white"
                >
                  <ZoomIn className="w-6 h-6" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox with AnimatePresence for smooth transitions */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-blue-400 transition-colors group"
              >
                <X className="w-8 h-8 group-hover:rotate-90 transition-transform" />
              </button>
              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto rounded-lg shadow-2xl object-contain max-h-[90vh]"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
