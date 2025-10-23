"use client";

import React from "react";
// import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { NumberTicker } from "@/components/ui/number-ticker";
import { WordPullUp } from "@/components/ui/word-pull-up";
import { WordFadeIn } from "@/components/ui/word-fade-in";
import {
  Award,
  Users,
  Globe,
  TrendingUp,
  Target,
  Shield,
  CheckCircle2,
  ArrowRight,
  GraduationCap,
} from "lucide-react";

const stats = [
  {
    value: 200000,
    label: "DIGITAL LEADERS & PROFESSIONALS",
    icon: Users,
    suffix: "",
  },
  {
    value: 9647,
    label: "CORPORATE CLIENTS ORGANISATIONS",
    icon: Award,
    suffix: "",
  },
  { value: 8277, label: "GRADUATE PROGRAMMES ALUMNI", icon: Globe, suffix: "" },
  { value: 425, label: "INDUSTRY SEMINARS", icon: TrendingUp, suffix: "" },
];

const features = [
  {
    icon: Target,
    title: "Leadership Development",
    description:
      "Comprehensive programs designed to nurture infocomm leaders with cutting-edge skills and strategic thinking capabilities.",
  },
  {
    icon: Globe,
    title: "Industry Partnerships",
    description:
      "Strong collaborations with leading technology companies and organizations to provide real-world business insights.",
  },
  {
    icon: Shield,
    title: "Innovation Focus",
    description:
      "Curriculum centered on driving technological innovation and business transformation across various industries.",
  },
  {
    icon: CheckCircle2,
    title: "Professional Excellence",
    description:
      "Proven track record of developing professionals who lead digital transformation and organizational innovation.",
  },
];

const About = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById("apply-now");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <Badge className="mx-auto px-4 py-1.5 bg-white border border-slate-200 text-slate-700 uppercase tracking-wide rounded-md text-xs font-medium shadow-none">
            Excellence in Leadership Development
          </Badge>

          <WordPullUp
            className="mt-6 text-4xl md:text-5xl font-bold text-slate-900 leading-tight tracking-tight"
            words="Developing infocomm leaders that drive business & organisation innovation"
          />

          <WordFadeIn
            className="mt-4 text-lg md:text-xl text-slate-700 max-w-2xl leading-relaxed mx-auto"
            words="Collectively transforming the technological and business landscape with"
          />
        </div>

        {/* Stats with Animation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map(({ value, label, icon: Icon }, index) => (
            <div
              key={label}
              className="group flex flex-col items-center bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-xl py-6 px-3 transition-all duration-500 hover:-translate-y-2"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-3">
                <Icon className="h-7 w-7 text-blue-900 opacity-80 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="text-3xl font-bold text-slate-900">
                <NumberTicker value={value} className="font-bold" />
              </div>
              <div className="mt-1 text-[8px] uppercase text-slate-600 tracking-widest font-semibold leading-none">
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* Image + Features */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
          {/* Left: Unsplash Image with Animations */}
          <div className="relative group">
            <div className="relative rounded-xl overflow-hidden shadow-xl transform group-hover:scale-105 transition-all duration-700">
              <img
                src="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=770&q=80"
                alt="Business leaders and technology innovation"
                className="object-cover w-full h-[420px] grayscale group-hover:grayscale-0 transition-all duration-700"
              />

              {/* Floating Badge */}
              <div className="absolute bottom-0 left-0 bg-white/90 px-6 py-3 rounded-tr-lg shadow-lg text-slate-900 text-base font-medium transform group-hover:translate-y-0 transition-all duration-500">
                Transforming business landscapes globally
              </div>

              {/* Floating Achievement Badge */}
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl transform -translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-100">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-slate-900 rounded-full flex items-center justify-center shadow-lg">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-lg">
                      200,000+
                    </div>
                    <div className="text-xs text-slate-600 uppercase tracking-wide font-semibold">
                      Digital Leaders
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Features with Animation */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Why Choose Our Leadership Programs?
              </h3>
              <p className="text-slate-600">
                Innovation, expertise, and transformative impact—shaping the
                future of business and technology leadership.
              </p>
            </div>

            <div className="space-y-6">
              {features.map(
                ({ icon: FeatureIconComponent, title, description }, index) => (
                  <div
                    key={title}
                    className="group flex items-start gap-4 hover:-translate-y-1 transition-all duration-300"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="p-2 bg-slate-100 rounded-lg border border-slate-200 flex items-center justify-center group-hover:bg-blue-900 group-hover:border-blue-900 transition-all duration-300">
                      <FeatureIconComponent className="h-5 w-5 text-blue-900 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1 text-base group-hover:text-blue-900 transition-colors duration-300">
                        {title}
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {description}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>

            <div className="mt-10">
              <Button
                size="lg"
                onClick={scrollToForm}
                className="bg-blue-900 text-white px-8 py-3 font-semibold shadow-sm hover:bg-blue-950 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                Begin Your Leadership Journey{" "}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
