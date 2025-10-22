import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Award,
  Users,
  Globe,
  TrendingUp,
  Target,
  Shield,
  CheckCircle2,
  ArrowRight,
  Heart,
  BookOpen,
} from "lucide-react";

const stats = [
  { value: "26+", label: "Years of Excellence", icon: Award },
  { value: "1000+", label: "Success Stories", icon: Users },
  { value: "350+", label: "University Partners", icon: Globe },
  { value: "98%", label: "Visa Success Rate", icon: TrendingUp },
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

const About = () => (
  <section className="relative py-24 bg-slate-50 overflow-hidden">
    <div className="container mx-auto max-w-6xl px-6">
      {/* Header */}
      <div className="mb-16 text-center">
        <Badge className="mx-auto px-4 py-1.5 bg-white border border-slate-200 text-slate-700 uppercase tracking-wide rounded-md text-xs font-medium shadow-none">
          Trusted Since 1999
        </Badge>
        <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900 leading-tight tracking-tight">
          About{" "}
          <span className="text-blue-900 tracking-tight font-extrabold">
            Planet Education
          </span>
        </h2>
        <p className="mt-4 text-lg md:text-xl text-slate-700 max-w-2xl leading-relaxed mx-auto">
          With over 26 years of expertise, Planet Education has guided thousands
          of students toward achieving their international education dreams.
          Representing 350+ universities worldwide, we offer personalized
          counseling to help you select the right course, university, and
          country, ensuring a seamless and successful application process.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
        {stats.map(({ value, label, icon: Icon }) => (
          <div
            key={label}
            className="flex flex-col items-center bg-white rounded-xl border border-slate-100 shadow-sm py-8 px-4"
          >
            <div className="mb-3">
              <Icon className="h-7 w-7 text-blue-900 opacity-80" />
            </div>
            <div className="text-3xl font-bold text-slate-900">{value}</div>
            <div className="mt-1 text-xs uppercase text-slate-600 tracking-wider font-semibold">
              {label}
            </div>
          </div>
        ))}
      </div>

      {/* Image + Features */}
      <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
        {/* Left: Unsplash Image */}
        <div className="relative rounded-xl overflow-hidden shadow-xl min-h-[420px]">
          <img
            src="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=770&q=80"
            alt="Students global education"
            className="object-cover w-full h-full grayscale"
            style={{ minHeight: 420 }}
          />
          <div className="absolute bottom-0 left-0 bg-white/90 px-6 py-3 rounded-tr-lg shadow-lg text-slate-900 text-base font-medium">
            Empowering students since 1999
          </div>
        </div>
        {/* Right: Features */}
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
            {features.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex items-start gap-4">
                <div className="p-2 bg-slate-100 rounded-lg border border-slate-200 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-blue-900" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1 text-base">
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
              className="bg-blue-900 text-white px-8 py-3 font-semibold shadow-sm hover:bg-blue-950 transition-all"
            >
              Start Your Journey <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
