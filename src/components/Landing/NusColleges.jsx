"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { WordPullUp } from "@/components/ui/word-pull-up";
import { WordFadeIn } from "@/components/ui/word-fade-in";
import { ExternalLink, GraduationCap, BookOpen, Award } from "lucide-react";

const NUSColleges = () => {
  const stats = [
    { value: "15", label: "Colleges, Faculties & Schools" },
    { value: "4,000+", label: "Courses Each Semester" },
    { value: "20 Years", label: "Enrolment Validity" },
  ];

  const colleges = [
    {
      name: "Arts & Social Sciences",
      url: "https://fass.nus.edu.sg/",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Business",
      url: "https://bschool.nus.edu.sg/",
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Computing",
      url: "https://www.comp.nus.edu.sg/",
      color: "from-purple-500 to-indigo-500",
    },
    {
      name: "Continuing and Lifelong Education",
      url: "https://scale.nus.edu.sg/",
      color: "from-orange-500 to-red-500",
    },
    {
      name: "Dentistry",
      url: "https://www.dentistry.nus.edu.sg/",
      color: "from-pink-500 to-rose-500",
    },
    {
      name: "Design & Engineering",
      url: "https://cde.nus.edu.sg/",
      color: "from-teal-500 to-cyan-500",
    },
    {
      name: "Duke-NUS",
      url: "https://www.duke-nus.edu.sg/",
      color: "from-indigo-500 to-purple-500",
    },
    {
      name: "Law",
      url: "https://law.nus.edu.sg/",
      color: "from-red-500 to-orange-500",
    },
    {
      name: "Medicine",
      url: "https://medicine.nus.edu.sg/",
      color: "from-blue-600 to-indigo-600",
    },
    {
      name: "Music",
      url: "https://www.ystmusic.nus.edu.sg/",
      color: "from-violet-500 to-purple-500",
    },
    {
      name: "NUS College",
      url: "https://nuscollege.nus.edu.sg/",
      color: "from-cyan-500 to-blue-500",
    },
    {
      name: "NUS Graduate School",
      url: "https://nusgs.nus.edu.sg/",
      color: "from-emerald-500 to-green-500",
    },
    {
      name: "Public Health",
      url: "https://www.sph.nus.edu.sg/",
      color: "from-amber-500 to-yellow-500",
    },
    {
      name: "Public Policy",
      url: "https://lkyspp.nus.edu.sg/",
      color: "from-slate-600 to-slate-800",
    },
    {
      name: "Science",
      url: "https://www.science.nus.edu.sg/",
      color: "from-sky-500 to-blue-600",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mx-auto px-4 py-1.5 bg-white border border-slate-200 text-slate-700 uppercase tracking-wide rounded-md text-xs font-medium shadow-none mb-6">
            Academic Excellence
          </Badge>

          <WordPullUp
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-tight"
            words="NUS Colleges, Faculties & Schools"
          />

          <WordFadeIn
            className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto"
            words="Infinite possibilities. We offer a global and Asian experience that is broad, deep and rigorous. An NUS education is recognised as among the best in Asia, and the world."
          />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-slate-50 rounded-xl border border-slate-100 shadow-sm py-8 px-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl font-bold text-slate-900 mb-2">
                {stat.value}
              </div>
              <div className="text-sm uppercase text-slate-600 tracking-wider font-semibold text-center">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Colleges Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {colleges.map((college, index) => (
            <a
              key={index}
              href={college.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <Card className="h-full border-2 border-slate-200 hover:border-slate-900 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-blue-900 transition-colors duration-300">
                        {college.name}
                      </h3>
                      <div className="flex items-center gap-2 text-slate-600 text-sm group-hover:text-slate-900 transition-colors duration-300">
                        <span>Explore Programs</span>
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${college.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        {/* Bottom Info Card */}
        <Card className="bg-slate-50 border-2 border-slate-200">
          <CardContent className="p-8">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  20-Year Enrolment & Lifelong Learning
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Your enrolment at NUS is valid 20 years from the point of
                  undergraduate admission. Alumni are automatically eligible for{" "}
                  <a
                    href="https://scale.nus.edu.sg/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 font-semibold underline"
                  >
                    lifelong learning courses
                  </a>
                  . Whichever undergraduate or graduate programme you choose,
                  your experience will be intellectually fulfilling within and
                  outside the classroom.
                </p>
                <div className="flex items-center gap-2 text-slate-700 text-sm">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold">
                    Continue learning for two decades after graduation
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default NUSColleges;
