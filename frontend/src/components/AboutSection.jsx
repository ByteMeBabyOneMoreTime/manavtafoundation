import React from "react";
import { Award, ThumbsUp, Leaf, Recycle } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4 ">
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
            <h2 className="text-3xl font-bold text-green-800 mb-4">ABOUT US</h2>
            <p className="text-gray-600 mb-6">
              We are leading in the plants service fields.
            </p>
            <p className="text-gray-700 mb-6">
              Aligned to the Sustainable Development Goals, The Emerging India
              Foundation runs Manavta nursery which comes under this foundation.
              This nursery was started on 1 July 2022 by Dr. Himanshu Kumar with
              the aim of raising funds for The Emerging India Foundation...
            </p>
            <h3 className="text-2xl font-semibold text-green-700 mb-4">
              What we do with the earning money of NGO
            </h3>
            <ProgressBar label="Greeb KO Dan" percentage={80} />
            <ProgressBar label="XYZ yojna" percentage={70} />
            <ProgressBar label="Xyz yojna" percentage={85} />
            <ProgressBar label="Xyz kam" percentage={65} />
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <BenefitCard
                icon={Award}
                title="Quality Products"
                description="We ensure top-notch plants with robust health, vibrant growth, and resilience."
              />
              <BenefitCard
                icon={ThumbsUp}
                title="Perfect Service"
                description="Experience unmatched service with our dedicated team, offering prompt support."
              />
              <BenefitCard
                icon={Leaf}
                title="100% Natural"
                description="Our products are crafted from pure, natural ingredients, ensuring authenticity."
              />
              <BenefitCard
                icon={Recycle}
                title="Environmentally friendly"
                description="We use eco-friendly materials and practices to minimize environmental impact."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProgressBar = ({ label, percentage }) => (
  <div className="mb-6">
    <div className="flex justify-between mb-1">
      <span className="text-gray-700">{label}</span>
      <span className="text-green-600 font-semibold">{percentage}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div
        className="bg-green-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  </div>
);

const BenefitCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
    <Icon className="w-12 h-12 text-green-600 mb-4" />
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default AboutSection;
