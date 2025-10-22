"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NumberTicker } from "@/components/ui/number-ticker";
import { WordPullUp } from "@/components/ui/word-pull-up";
import { WordFadeIn } from "@/components/ui/word-fade-in";
import { ArrowRight, CheckCircle2, MapPin, Globe, Target } from "lucide-react";

const StudyDestinations = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById("apply-now");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const destinations = [
    {
      country: "Australia",
      image:
        "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=800&auto=format&fit=crop",
      highlights: [
        "Globally recognized degrees from top-ranked institutions",
        "Post-study work visa opportunities for career growth",
        "High quality of life with diverse cultural experiences",
      ],
      color: "from-blue-500 to-cyan-500",
      hoverColor: "from-blue-600 to-cyan-600",
      bgColor: "from-blue-50 to-cyan-50",
    },
    {
      country: "USA",
      image:
        "https://images.unsplash.com/photo-1569982175971-d92b01cf8694?q=80&w=800&auto=format&fit=crop",
      highlights: [
        "Home to world's leading universities and research centers",
        "Flexible education system with diverse course options",
        "Strong job market with excellent internship opportunities",
      ],
      color: "from-red-500 to-orange-500",
      hoverColor: "from-red-600 to-orange-600",
      bgColor: "from-red-50 to-orange-50",
    },
    {
      country: "UK",
      image:
        "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800&auto=format&fit=crop",
      highlights: [
        "Historic universities with world-class academic excellence",
        "Graduate Route visa allowing 2-3 years post-study work",
        "Rich cultural heritage and vibrant student communities",
      ],
      color: "from-purple-500 to-indigo-500",
      hoverColor: "from-purple-600 to-indigo-600",
      bgColor: "from-purple-50 to-indigo-50",
    },
    {
      country: "Canada",
      image:
        "https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=800&auto=format&fit=crop",
      highlights: [
        "Affordable tuition prices with high standard of living",
        "Clear pathways to permanent residency after studies",
        "Safe, inclusive environment welcoming international students",
      ],
      color: "from-green-500 to-emerald-500",
      hoverColor: "from-green-600 to-emerald-600",
      bgColor: "from-green-50 to-emerald-50",
    },
    {
      country: "New Zealand",
      image:
        "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=800&auto=format&fit=crop",
      highlights: [
        "Innovative teaching methods with hands-on learning",
        "Stunning natural landscapes and outdoor lifestyle",
        "Safe, friendly environment with strong support systems",
      ],
      color: "from-teal-500 to-cyan-500",
      hoverColor: "from-teal-600 to-cyan-600",
      bgColor: "from-teal-50 to-cyan-50",
    },
    {
      country: "Singapore",
      image:
        "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=800&auto=format&fit=crop",
      highlights: [
        "Leading global business and finance hub in Asia",
        "Top-tier universities with cutting-edge research facilities",
        "Multicultural society blending East and West cultures",
      ],
      color: "from-pink-500 to-rose-500",
      hoverColor: "from-pink-600 to-rose-600",
      bgColor: "from-pink-50 to-rose-50",
    },
  ];

  const stats = [
    {
      value: 350,
      label: "Partner Universities",
      suffix: "+",
      icon: Globe,
      color: "from-blue-500 to-purple-500",
    },
    {
      value: 6,
      label: "Countries Covered",
      suffix: "",
      icon: MapPin,
      color: "from-green-500 to-emerald-500",
    },
    {
      value: 98,
      label: "Visa Success Rate",
      suffix: "%",
      icon: Target,
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-200/10 to-transparent rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-200/10 to-transparent rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full mb-6">
            <Globe className="w-4 h-4 mr-2" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Our Partner Countries
            </span>
          </div>

          <WordPullUp
            className="text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-[1.1]"
            words="Top Study Destinations"
          />

          <WordFadeIn
            className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto"
            words="We partner with over 350 universities across six leading study destinations, each offering unique academic and cultural experiences to help you achieve your international education goals."
          />
        </div>

        {/* Destinations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {destinations.map((dest, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:rotate-1 bg-gradient-to-br ${dest.bgColor}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${dest.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              ></div>

              <div className="relative h-64 overflow-hidden">
                <img
                  src={dest.image}
                  alt={`Study in ${dest.country}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                />
                <div
                  className={`absolute top-4 left-4 bg-gradient-to-r ${dest.color} text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg`}
                >
                  {dest.country}
                </div>
              </div>

              <CardContent className="p-8 relative">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2 transition-colors duration-300">
                    Study in {dest.country}
                  </h3>
                </div>

                <ul className="space-y-4 mb-8">
                  {dest.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3 group/item">
                      <div
                        className={`p-1 rounded-full bg-gradient-to-br ${dest.color} group-hover/item:scale-110 transition-transform duration-300`}
                      >
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-slate-600 text-sm leading-relaxed group-hover/item:text-slate-800 transition-colors duration-300">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={scrollToForm}
                  className={`w-full bg-gradient-to-r ${dest.color} hover:${dest.hoverColor} text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group/btn`}
                >
                  <span>Explore {dest.country}</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-2 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA - Old Left + New Right */}
        <div className="border-t border-slate-200 pt-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Old Clean Design */}
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">
                Need help choosing the right destination?
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Our expert counselors will assess your academic background,
                career goals, and budget to recommend the perfect study
                destination for your unique needs.
              </p>
              <Button
                size="lg"
                onClick={scrollToForm}
                className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 h-12"
              >
                Get Free Counseling
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Right - New Enhanced Stats */}
            <div className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-3xl p-10 shadow-xl">
              <div className="space-y-6">
                {stats.map(
                  ({ value, label, suffix, icon: Icon, color }, index) => (
                    <div
                      key={label}
                      className="flex items-center justify-between p-6 bg-gradient-to-r from-white to-slate-50 rounded-2xl border border-slate-200/50 hover:border-slate-300 transition-all duration-300 hover:shadow-lg"
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-12 h-12 bg-gradient-to-br ${color} rounded-full flex items-center justify-center`}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-slate-600 text-sm font-medium uppercase tracking-wide">
                            {label}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-black text-slate-900 whitespace-nowrap">
                          <NumberTicker
                            value={value}
                            className="font-black inline-block"
                          />
                          <span className="text-blue-600 font-bold">
                            {suffix}
                          </span>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudyDestinations;
