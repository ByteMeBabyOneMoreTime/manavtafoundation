import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const teamMembers = [
  {
    name: "Dr. Himanshu Kumar",
    role: "CEO & Founder",
    image: "teams-img/himanshu.jpg",
  },
  {
    name: "Team member 2",
    role: "Garden Designer",
    image: "teams-img/co-founder.png",
  },
  {
    name: "Anurag Patel",
    role: "Plan Manager",
    image: "teams-img/manage.png",
  },
];

const Team = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-4">
          OUR TEAM
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Meet the team behind this organization.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamMember = ({ name, role, image }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:scale-105 max-w-sm w-full mx-auto">
    <div className="relative">
      <img
        src={image}
        alt={name}
        className="w-full h-96 object-cover transition-all duration-300 transform hover:blur-sm"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 flex items-center justify-center group-hover:opacity-100">
        <div className="flex space-x-4">
          <SocialIcon icon={Facebook} />
          <SocialIcon icon={Twitter} />
          <SocialIcon icon={Linkedin} />
          <SocialIcon icon={Instagram} />
        </div>
      </div>
    </div>
    <div className="p-6 text-center">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </div>
  </div>
);

const SocialIcon = ({ icon: Icon }) => (
  <a
    href="#"
    className="text-white hover:text-green-400 transition-colors duration-200"
  >
    <Icon size={20} />
  </a>
);

export default Team;
