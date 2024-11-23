import { Play } from "lucide-react";
import { motion } from "framer-motion"; // Note: This would need to be installed

export default function Services() {
  const services = [
    {
      title: "Raashan Daan Yojna",
      description:
        "Poverty and malnutrition have always been a huge problem for India, especially in the rural areas and tribal belts...",
      stats: "1560 days, 15380 ration kits distributed",
      videoUrl: "https://www.youtube.com/embed/kIRb60r3cH8?si=Svl_FiLy8Y1tSCos",
    },
    {
      title: "Clothes Distribution",
      description:
        "Our volunteers at the EMERGING INDIA Foundation has distributed high quality thick woollen blankets...",
      stats: "7250 people received clothes",
      videoUrl: "https://www.youtube.com/embed/kIRb60r3cH8?si=Svl_FiLy8Y1tSCos",
    },
    {
      title: "Plantation Yojna",
      description:
        "In the Emerging India Foundation we are working with Municipality/Urban Local Bodies (ULBs)...",
      stats: "20668 plants distributed, 1300 plantations completed",
      videoUrl: "https://www.youtube.com/embed/kIRb60r3cH8?si=Svl_FiLy8Y1tSCos",
    },
    {
      title: "Mask Vitran Yojna",
      description:
        "Life has completely changed for everybody with the outbreak of a global Pandemic Covid-19...",
      stats: "51005+ masks distributed",
      videoUrl: "https://www.youtube.com/embed/kIRb60r3cH8?si=Svl_FiLy8Y1tSCos",
    },
    {
      title: "Blood Donation Yojana",
      description:
        "To make aware the people all over the country about the importance of the voluntary blood donation...",
      stats: "900 blood donations facilitated",
      videoUrl: "https://www.youtube.com/embed/kIRb60r3cH8?si=Svl_FiLy8Y1tSCos",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-800 mb-6"
          >
            OUR SERVICES
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-gray-600 leading-relaxed"
          >
            We TEI Foundation team focuses to help people with lower wages. We
            intend to provide them with ease and wish to make their life simple
            and flexible by providing some basic support.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row p-6 gap-8">
                {/* Content Section */}
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4 group-hover:text-green-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg inline-block">
                    <p className="text-green-600 font-medium">
                      {service.stats}
                    </p>
                  </div>
                </div>

                {/* Video Section */}
                <div className="lg:w-1/3">
                  <div className="relative rounded-lg overflow-hidden group cursor-pointer">
                    <iframe
                      src={service.videoUrl}
                      alt={service.title}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
