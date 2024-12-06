import { Play } from "lucide-react";
import { motion } from "framer-motion"; // Note: This would need to be installed

export default function Services() {
  const services = [
    {
      title: "Raashan Daan Yojna",
      description:
        "Poverty and malnutrition have always been a huge problem for India, especially in the rural areas and tribal belts. COVID-19 created an alarming situation for people who were already below the poverty line, as they did not have even odd jobs to work during this difficult time. We are making constant efforts to reach out to families in dire need with the help of our campaign, Garib Parivar Ration Yojana (GPRY). Under this campaign, we provide monthly ration to families that are associated with us every month. All these families are provided with Ration Cards, and they receive a grocery kit at the beginning of every month. There are many families that need your help in these difficult times and we are putting in all possible efforts to help more and more such families throughout India. The Garib Parivar Ration Yojana provides underprivileged families with food supplies like wheat flour, pulses, cooking oil, and spices, etc. Each family is provided with a monthly supply to ensure that no one in their families has to go to bed hungry. So far, we have distributed in 1560 days and there are 15380 anration kits all over.",
      stats: "1560 days, 15380 ration kits distributed",
      videoUrl: "https://www.youtube.com/embed/kIRb60r3cH8?si=Svl_FiLy8Y1tSCos",
    },
    {
      title: "Clothes Distribution",
      description:
        "Our volunteers at the EMERGING INDIA Foundation has distributed high quality thick woollen blankets and clothes in slum or underdeveloped areas of society or city and the rural region to make the poverty-stricken people survive even in the harsher winters. The considerable volume of the blanket and old clothes distribution took place in different parts of city villages ,Wrapped in jackets and mufflers, most of us don't even have any idea about how millions of individuals and families living under reduced circumstances are making the arrangements of basic requirements to survive. Affording thick blankets and mufflers is not a possibility for many people. Thus, after understanding their needs, at the EMERGING INDIA Foundation, we have taken quick steps in meeting the daily winter needs of natives living in marginalized communities. In our blanket and old clothes distribution drive, we have distributed thousands of blankets and old clothes better in terms of quality and comfort.hungry stomach is always a soul standing in the well of pain and loss. Millions of homeless and underprivileged individuals wandering on the streets are praying with the hope that they will be able to survive amid the testing time of the winter season. People spending their life on the streets and footpaths have become a common sight in recent times. Impoverished people who can't manage the budget to buy a roof over their head struggle to survive on the footpaths and flyovers of well-built in different areas of city villages. We distributed clothes to those people wo are deaf,blind ,physically handicapped n old peoples whose families are not allowed to live with his family...we distributed 7250 peoples to clothes.wholesome healthy living environment residents and thus contributing to growth of clean, green, healthy and sustainable cities.",
      stats: "7250 people received clothes",
      videoUrl: "https://www.youtube.com/embed/kIRb60r3cH8?si=Svl_FiLy8Y1tSCos",
    },
    {
      title: "Plantation Yojna",
      description:
        "IIn the Emerging India Foundation we are working with /Municipality/Urban Local Bodies (ULBs) for providing wholesome healthy living environment for the residents and thus contributing to growth of clean, green, healthy and sustainable cities. The salient features of plantation and plant distribution Yojana are: (i) Creating green space and aesthetic environment in an urban set up. (ii) Creating awareness about plants and biodiversity and developing environment stewardship (iii) Facilitating in-situ conservation of important flora of the region. (iv) Contributing to environmental improvement of cities by pollution mitigation, providing cleaner air, noise reduction, water harvesting and reduction of heat islands effect. v) Extending health benefits to residents of the city and vi) Helping cities become climate resilient. PLANTAION AND PLANT DISTRIBUTION YOJANA We distributed 20668 plants as well as we done. 1300 plant plantation on different areas ,cities n villages ,included schools also. . .",
      stats: "20668 plants distributed, 1300 plantations completed",
      videoUrl: "https://www.youtube.com/embed/kIRb60r3cH8?si=Svl_FiLy8Y1tSCos",
    },
    {
      title: "Mask Vitran Yojna",
      description:
        "Life has completely changed for everybody with the outbreak of a global Pandemic Covid-19. The care and protection is the need of an hour. There are responsibilities towards our countrymen and we ought to discharge our duties more sincerely and with utmost responsibilitiesThe number of masks distributed goes around 51005+ and not only they distributed the masks but also interacted with the localitiy. They created an awareness about the present situation and guided the villagers how to positively approach this difficult phase. The live demonstration of face mask usage as well as its importance was also highlighted....",
      stats: "51005+ masks distributed",
      videoUrl: "https://www.youtube.com/embed/kIRb60r3cH8?si=Svl_FiLy8Y1tSCos",
    },
    {
      title: "Blood Donation Yojana",
      description:
        "Blood donation Yojana Blood donation Yojana To make aware the people all over the country about the importance of the voluntary blood donation. To successfully achieve the target of Voluntary Blood Donation to fulfill the urgent need of the needy patients. To store the blood in stock in blood banks for any urgent and serious requirement. To promote and emphasize the self esteem of blood donors through a lot of thanks. To motivate and encourage people who are not interested in donating blood even being a healthy person. To stimulate people to donate blood voluntarily who are interested in donating blood only to their relatives or friends The emerging India foundation helps to donate blood to 900 peoples......",
      stats: "900 blood donations facilitated",
      videoUrl: "https://www.youtube.com/embed/kIRb60r3cH8?si=Svl_FiLy8Y1tSCos",
    },
    {
      title: "Ayogya Yojna",
      description:
        "To provide cashless quality medical care to beneficiaries under the scheme for catastrophic illnesses requiring hospitalization for surgeries and therapies under identified specialty services through a network of health care providers..WE Provide 51005+ mask .AROGYA scheme has been launched to cover the bottom 70% of poor and economically weaker sections of the country. The Arogya Yojana Eligibility is designed with pre-conditions so that only the underprivileged people of the society benefit from the initiative..",
      stats: "900 blood donations facilitated",
      videoUrl: "https://www.youtube.com/embed/kIRb60r3cH8?si=Svl_FiLy8Y1tSCos",
    },
    {
      title: "Clean India Mission Yojna",
      description:
        "Eliminate open defecation: The campaign aims to make India open-defecation free by constructing toilets and promoting the use of sanitation facilities. The campaign focuses on changing people's behavior towards open defecation and promoting the use of toilets. Improve solid waste management: The campaign aims to promote proper disposal of waste and ensure cleanliness in public places. The campaign emphasizes the importance of segregating waste at source and promoting the use of recycling and composting. Promote hygiene and cleanliness: The campaign aims to promote good hygiene practices, including handwashing, and cleanliness in public places. The campaign also aims to create awareness about the ill effects of littering and spitting The emerging India foundation help to clean the 100+ ditches of society , as well as rural areas .",
      stats: "Cleaned 100+ ditches of society",
      videoUrl: "https://www.youtube.com/embed/kIRb60r3cH8?si=Svl_FiLy8Y1tSCos",
    },
    {
      title: "Siksha Sankalp Yojna",
      description:
        "The SANKALP Scheme has recently been urged by the Ministry of Skill Development and Entrepreneurship to concentrate on the ecosystem of district-level skilling through convergence and coordination. The Skills Acquisition and Knowledge Awareness for Livelihood Promotion (SANKALP) initiative launched to enhance institutional mechanisms for skill development and expand youth access to high-quality, market-relevant traininglong- and short-term skill development training programmes’ quality and market relevance are to be improved (Vocational and Educational Training) according to SANKALP Scheme guidelines..",
      stats: "Knowledge and Skill Development",
      videoUrl: "https://www.youtube.com/embed/kIRb60r3cH8?si=Svl_FiLy8Y1tSCos",
    },
    {
      title: "Employement Generation Yojna",
      description:
        "To provide cashless quality medical care to beneficiaries under the scheme for catastrophic illnesses requiring hospitalization for surgeries and therapies under identified specialty services through a network of health care providers..WE Provide 51005+ mask .AROGYA scheme has been launched to cover the bottom 70% of poor and economically weaker sections of the country. The Arogya Yojana Eligibility is designed with pre-conditions so that only the underprivileged people of the society benefit from the initiative..",
      stats:
        "Provide 51005+ mask in AROGYA to cover the bottom 70% of poor and economically weaker sections of the country. ",
      videoUrl: "https://www.youtube.com/embed/kIRb60r3cH8?si=Svl_FiLy8Y1tSCos",
    },
    {
      title: "Save Water Yojna",
      description:
        "Save water yojana initiative that was started to solve the problem of less groundwater in India. The goal of the scheme is to manage groundwater better in areas where there is a shortage of water. The plan wants people in the community to work together and make decisions. It wants people to use water wisely, fill up the groundwater again, and save water. This scheme wants to make sure there is enough clean water for drinking and farming. The plan focuses on including local people, especially farmers, in taking care of groundwater. The government hopes that this plan will help save water and make sure we have enough for the future. So we constructed 145 damaged pipelines ...and raptured pipes though which water is supplied in homes the sustainable management of groundwater with community involvement. It envisages public involvement through the establishment of ‘Water User Associations’, water budgeting, formulation and realization of wise water security designs, etc...",
      stats: "900 blood donations facilitated",
      videoUrl: "https://www.youtube.com/embed/kIRb60r3cH8?si=Svl_FiLy8Y1tSCos",
    },
    {
      title: "Medical Help Yojna",
      description:
        "To provide cashless quality medical care to beneficiaries under the scheme for catastrophic illnesses requiring hospitalization for surgeries and therapies under identified specialty services through a network of health care providers..WE Provide 71005+ people free treatment for any disease .AROGYA scheme has been launched to cover the bottom 70% of poor and economically weaker sections of the country. The Arogya Yojana Eligibility is designed with pre-conditions so that only the underprivileged people of the society benefit from the initiative..",
      stats: "Provide 71005+ people free treatment.",
      videoUrl: "https://www.youtube.com/embed/kIRb60r3cH8?si=Svl_FiLy8Y1tSCos",
    },
    {
      title: "Road safety Yojna",
      description:
        "Meaning of road safety Road safety teaches people how to conduct themselves while driving or crossing roads. Road safety measures, including the use of road barriers and highway barriers, are aimed at reducing the risks of people getting involved in accidents in the first place. Following these measures, the chances of accidents, injuries and damage to property are vastly reduced. Importance of road safety There is a constant uptick in the number of vehicles on the road. If you feel that the traffic conditions are bad right now, they will only worsen in the upcoming years unless people follow road safety measures and traffic awareness to make life easier for everyone. There are a few factors that lead to such accidents in the country. Some of them are unsafe driving, disregard for traffic rules and regulations, users refraining from using helmets and seat belts and so on. The government of India follows road safety week between the 11th to 17th of January. Road safety awareness week aims at improving road safety awareness across the country with the help of a few methods, including pedestrian safety, road safety signage, and road and safety. Key objectives of road safety week It is essential to drive at slower speeds. Research shows that for an increase of 1% in speed, the chances of accidents increase by 4%. One must altogether avoid the usage of phones or other gadgets for any sort of activities that can be distracting. It is hazardous as it reduces the reaction time, making it difficult to react to changes. Using a good helmet while riding a bike is critical, irrespective of whether you are riding or being a pillion rider. The presence of a helmet can reduce the risk of severe accidents and death by a considerable margin....",
      videoUrl: "https://www.youtube.com/embed/kIRb60r3cH8?si=Svl_FiLy8Y1tSCos",
    },
    {
      title: "Marriage Help Yojna",
      description:
        "The scheme has been launched at the initiative and The objective is to provide financial help to poor, needy, destitute families for marrying off their daughters/widows/divorcees. Under the scheme, assistance of Rs. 15,000 is given for house hold items and the mass marriage expenditure. This assistance is given in mass marriages with the condition that the girl must have attained the age of 18 years. Beneficiary: This assistance is given in mass marriages with the condition that the girl must have attained the age of 18 years.",
      stats: "Rs 15,000 Given for House hold Items",
      videoUrl: "https://www.youtube.com/embed/kIRb60r3cH8?si=Svl_FiLy8Y1tSCos",
    },
    {
      title: "Judicial Help",
      description:
        "Legal Services includes providing Free Legal Aid to those weaker sections Free legal aid is the provision of free legal services in civil and criminal matters for those poor and marginalized people who cannot afford the services of a lawyer for the conduct of a case or a legal proceeding in any Court the emerging India foundation help in solving 150+cases of judicial....",
      stats: "Helped in solving 150+ Cases",
      videoUrl: "https://www.youtube.com/embed/kIRb60r3cH8?si=Svl_FiLy8Y1tSCos",
    },
    {
      title: "Cancer Awarenes",
      description:
        "Cancer is a disease* which occurs when changes in a group of normal cells within the body lead to uncontrolled, abnormal growth forming a lump called a tumour; this is true of all cancers except leukaemia (cancer of the blood). If left untreated, tumours can grow and spread into the surrounding normal tissue, or to other parts of the body via the bloodstream and lymphatic systems, and can affect the digestive, nervous and circulatory systems or release hormones that may affect body function. At certain times of the year, we mark awareness days, weeks or months to help spread the word about how to help prevent different kinds of cancers, and how to spot them early. The emerging India helps to aware the people about this . Below are some of the cancer awareness periods we regularly cover, with links to helpful resources on each cancer....",
      stats: "Helped in solving 150+ Cases",
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
