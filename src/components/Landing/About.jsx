"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
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
  { value: 26, label: "Years of Excellence", icon: Award, suffix: "+" },
  { value: 1000, label: "Success Stories", icon: Users, suffix: "+" },
  { value: 350, label: "University Partners", icon: Globe, suffix: "+" },
  { value: 98, label: "Visa Success Rate", icon: TrendingUp, suffix: "%" },
];

const features = [
  {
    icon: Target,
    title: "Personalized Counseling",
    description:
      "Guidance tailored to your academic profile and ambitions. Our experienced advisors ensure your pathway aligns with your goals.",
  },
  {
    icon: Globe,
    title: "Global University Network",
    description:
      "Access to 350+ world-class universities across leading study destinations, giving you options and a global perspective.",
  },
  {
    icon: Shield,
    title: "Trusted Process",
    description:
      "A proven, streamlined application process that simplifies every step from selection to successful admission.",
  },
  {
    icon: CheckCircle2,
    title: "Proven Impact",
    description:
      "Thousands of students placed worldwide, with a 98% visa success rate and decades of expertise.",
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
            Trusted Since 1999
          </Badge>

          <WordPullUp
            className="mt-6 text-4xl md:text-5xl font-bold text-slate-900 leading-tight tracking-tight"
            words="About Planet Education"
          />

          <WordFadeIn
            className="mt-4 text-lg md:text-xl text-slate-700 max-w-2xl leading-relaxed mx-auto"
            words="Guiding students toward international education success for over 26 years. We partner with 350+ universities worldwide to help you find the perfect course, university, and country for your future."
          />
        </div>

        {/* Stats with Animation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map(({ value, label, icon: Icon, suffix }, index) => (
            <div
              key={label}
              className="group flex flex-col items-center bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-xl py-8 px-4 transition-all duration-500 hover:-translate-y-2"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-3">
                <Icon className="h-7 w-7 text-blue-900 opacity-80 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="text-3xl font-bold text-slate-900">
                <NumberTicker value={value} className="font-bold" />
                <span>{suffix}</span>
              </div>
              <div className="mt-1 text-xs uppercase text-slate-600 tracking-wider font-semibold">
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
                alt="Students global education"
                className="object-cover w-full h-[420px] grayscale group-hover:grayscale-0 transition-all duration-700"
              />

              {/* Floating Badge */}
              <div className="absolute bottom-0 left-0 bg-white/90 px-6 py-3 rounded-tr-lg shadow-lg text-slate-900 text-base font-medium transform group-hover:translate-y-0 transition-all duration-500">
                Empowering students since 1999
              </div>

              {/* Floating Achievement Badge */}
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl transform -translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-100">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-slate-900 rounded-full flex items-center justify-center shadow-lg">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-lg">
                      10,000+
                    </div>
                    <div className="text-xs text-slate-600 uppercase tracking-wide font-semibold">
                      Success Stories
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
                Why Choose Planet Education?
              </h3>
              <p className="text-slate-600">
                Experience, global reach, and unwavering support—every step of
                your journey.
              </p>
            </div>

            <div className="space-y-6">
              {features.map(({ icon: Icon, title, description }, index) => (
                <div
                  key={title}
                  className="group flex items-start gap-4 hover:-translate-y-1 transition-all duration-300"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="p-2 bg-slate-100 rounded-lg border border-slate-200 flex items-center justify-center group-hover:bg-blue-900 group-hover:border-blue-900 transition-all duration-300">
                    <Icon className="h-5 w-5 text-blue-900 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
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
              ))}
            </div>

            <div className="mt-10">
              <Button
                size="lg"
                onClick={scrollToForm}
                className="bg-blue-900 text-white px-8 py-3 font-semibold shadow-sm hover:bg-blue-950 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                Start Your Journey{" "}
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
