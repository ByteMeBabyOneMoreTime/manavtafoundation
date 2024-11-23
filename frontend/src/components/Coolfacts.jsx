import React from "react";
import { Award, Briefcase, Users, DollarSign } from "lucide-react";

const CoolFacts = () => {
  return (
    <section className="py-16 bg-green-800 text-white relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 z-10"
        style={{ backgroundImage: "url('bg-img/cool-facts.png')" }}
      ></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <FactCard icon={Award} count={20} label="AWARDS" />
          <FactCard icon={Briefcase} count={70} label="PROJECTS" />
          <FactCard
            icon={Users}
            count={30}
            label="MORE THAN 30+ HAPPY CLIENTS"
          />
          <FactCard icon={DollarSign} count={80000} label="REVENUE (K+)" />
        </div>
      </div>
      <img
        src="core-img/pot.png"
        alt="Decorative Pot"
        className="absolute bottom-10 right-12 w-40 h-auto transform translate-x-1/4 translate-y-2/4 opacity-100 z-50"
      />
    </section>
  );
};

const FactCard = ({ icon: Icon, count, label }) => (
  <div className="flex items-center space-x-4 bg-white bg-opacity-10 p-6 rounded-lg backdrop-filter backdrop-blur-lg">
    <Icon className="w-12 h-12 text-green-300" />
    <div>
      <h3 className="text-3xl font-bold mb-1">{count}</h3>
      <p className="text-green-200">{label}</p>
    </div>
  </div>
);

export default CoolFacts;
