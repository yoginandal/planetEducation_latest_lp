import React from "react";
import { Card } from "@/components/ui/card";

const AchievementsSection = () => {
  const achievements = [
    {
      percentage: "100%",
      label: "Visa Success Rate",
      description: "Near-perfect approval record",
    },
    {
      percentage: "350+",
      label: "Partner Universities",
      description: "Across 6 countries",
    },
    {
      percentage: "45,000+",
      label: "Students Placed",
      description: "Dreams turned into reality",
    },
    {
      percentage: "26+",
      label: "Years Experience",
      description: "Trusted since 1999",
    },
    {
      percentage: "25",
      label: "Global Offices",
      description: "Worldwide presence",
    },
    {
      percentage: "6",
      label: "Study Destinations",
      description: "Top countries covered",
    },
    {
      percentage: "100%",
      label: "Expert Counseling",
      description: "Personalized guidance",
    },
    {
      percentage: "24/7",
      label: "Student Support",
      description: "Always here for you",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-800 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/10 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Excellence in International Education
          </h2>
          <p className="text-blue-100 text-lg max-w-3xl mx-auto leading-relaxed">
            Ranked among India's top overseas education consultants. Our numbers
            speak for themselves—decades of expertise, thousands of success
            stories, and a commitment to your future.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {achievements.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              {/* Circular Stat */}
              <div className="relative mb-4">
                {/* Outer Circle */}
                <div className="w-32 h-32 md:w-36 md:h-36 rounded-full border-4 border-white/30 flex items-center justify-center relative group-hover:border-white/50 transition-all duration-300">
                  {/* Inner Glow Circle */}
                  <div className="absolute inset-2 rounded-full bg-white/5 group-hover:bg-white/10 transition-all duration-300"></div>

                  {/* Percentage */}
                  <div className="relative z-10">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                      {stat.percentage}
                    </div>
                  </div>
                </div>
              </div>

              {/* Label & Description */}
              <h3 className="text-white font-semibold text-base md:text-lg mb-1 px-2">
                {stat.label}
              </h3>
              <p className="text-blue-200 text-xs md:text-sm opacity-90">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-16 pt-8 border-t border-white/20">
          <p className="text-blue-100 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
            <span className="font-semibold text-white">
              Trusted by EaseMyTrip:
            </span>{" "}
            In 2024, EaseMyTrip acquired a 49% stake in Planet Education,
            recognizing our excellence in international education consulting and
            high visa success rate across 350+ partner universities worldwide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
