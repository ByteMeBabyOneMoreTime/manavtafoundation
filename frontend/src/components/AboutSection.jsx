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
              Foundation runs Manavta nursery which comes under this foundation
              this nursery is started on 1 July 2022 by Dr. Himsnshu kumar and
              the aim of this nursery is raising fund for The emerging India
              foundation what's the outcome comes from this nursery we put in a
              poor or it iscommitted to improving the lives of marginalized
              communities, by leveraging the power of youth and strengthening
              Government systems.
            </p>

            <p className="text-gray-700 mb-6">
              By focusing on the most marginalized groups within India,
              strengthening the ability of states to deploy impactful
              initiatives, and engaging youth in nation building efforts,It’s
              where people gather to assess your organization’s credibility and
              trustworthinessIt’s where people gather to assess your
              organization’s credibility and trustworthinessmore prospective
              future for all the classes of people irrespective of their caste,
              creed and religion. From the raise fund through manavta nursery we
              distribute rashan kit among 16070 people, 7780 clothes distrubute
              2245+ plantation /21159 plant distribution , 51005+ mask
              distribution, 55 adahar card correction, 7650 free medication ,
              and come under this foundation and the nursery which is running
              under The emerging India foundation to raise fund from which we
              can help the people who are literally poor....
            </p>
            <h3 className="text-2xl font-semibold text-green-700 mb-4">
              What we do with the earning money of NGO
            </h3>
            <ProgressBar label="Office plants" percentage={80} />
            <ProgressBar label="Field manager" percentage={70} />
            <ProgressBar label="Landscape design" percentage={85} />
            <ProgressBar label="Garden Care" percentage={65} />
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
