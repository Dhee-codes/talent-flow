import { ValueCard } from "./ValueCard";

import globeIcon from "../../assets/aboutimages/value-globe.png";
import usersIcon from "../../assets/aboutimages/value-users.png";
import trendingIcon from "../../assets/aboutimages/value-trending.png";
import landmarkIcon from "../../assets/aboutimages/value-landmark.png";

export function AboutValues() {
  const values = [
    {
      icon: <img src={globeIcon} alt="Globe Icon" className="w-[80px] h-[80px] object-contain" />,
      text: "At TalentFlow, our mission is to unlock the transformative power of learning—helping individuals move from limitation to opportunity, from uncertainty to growth, and from potential to real-world impact."
    },
    {
      icon: <img src={usersIcon} alt="Users Icon" className="w-[80px] h-[80px] object-contain" />,
      text: "We believe learning should not only improve individual lives but also strengthen families, uplift communities, and shape a better future for society as a whole."
    },
    {
      icon: <img src={trendingIcon} alt="Trending Up Icon" className="w-[80px] h-[80px] object-contain" />,
      text: "No matter your background or starting point, access to meaningful, high-quality learning should be available to everyone—not as a privilege, but as a standard."
    },
    {
      icon: <img src={landmarkIcon} alt="Landmark Icon" className="w-[80px] h-[80px] object-contain" />,
      text: "That's why TalentFlow is committed to delivering practical, accessible, and impactful learning experiences that equip people everywhere to grow, earn, and redefine what's possible."
    }
  ];

  return (
    <section className="py-24 px-6 sm:px-10 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-[#5A8CFF] text-[36px] font-bold mb-2 text-center tracking-tight">
          At TalentFlow, we believe
        </h2>
        <p className="text-[#5A8CFF] text-lg mb-8 text-center font-medium">
          growth begins with learning the force that moves people and the world forward.
        </p>
        <div className="w-[120px] h-1.5 bg-[#5A8CFF] mb-20 rounded-full opacity-80"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 items-start w-full">
          {values.map((v, i) => (
            <ValueCard key={i} icon={v.icon} text={v.text} />
          ))}
        </div>
      </div>
    </section>
  );
}
