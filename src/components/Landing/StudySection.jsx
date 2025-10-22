import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const StudyDestinations = () => {
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
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header - Center Aligned */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-xs font-semibold tracking-[0.2em] text-slate-500 uppercase">
              Our Partner Countries
            </span>
          </div>
          <h2 className="text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-[1.1]">
            Top Study Destinations
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            We partner with over 350 universities across six leading study
            destinations, each offering unique academic and cultural experiences
            to help you achieve your international education goals.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {destinations.map((dest, index) => (
            <Card
              key={index}
              className="group border border-slate-200 hover:border-slate-900 transition-all duration-300 overflow-hidden bg-white shadow-sm hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <img
                  src={dest.image}
                  alt={`Study in ${dest.country}`}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Content */}
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">
                  {dest.country}
                </h3>

                <ul className="space-y-4 mb-8">
                  {dest.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-600 leading-relaxed">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant="ghost"
                  className="w-full justify-between px-0 text-slate-900 hover:text-slate-900 hover:bg-transparent font-semibold group/btn border-t border-slate-200 rounded-none pt-6"
                >
                  <span>Explore {dest.country}</span>
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="border-t border-slate-200 pt-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
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
                className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 h-12"
              >
                Get Free Counseling
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            <div className="bg-slate-50 p-8 border border-slate-200">
              <div className="space-y-6">
                <div className="flex items-baseline gap-4">
                  <div className="text-4xl font-bold text-slate-900">350+</div>
                  <div className="text-sm text-slate-600">
                    Partner Universities
                  </div>
                </div>
                <div className="flex items-baseline gap-4">
                  <div className="text-4xl font-bold text-slate-900">6</div>
                  <div className="text-sm text-slate-600">
                    Countries Covered
                  </div>
                </div>
                <div className="flex items-baseline gap-4">
                  <div className="text-4xl font-bold text-slate-900">98%</div>
                  <div className="text-sm text-slate-600">
                    Visa Success Rate
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudyDestinations;
