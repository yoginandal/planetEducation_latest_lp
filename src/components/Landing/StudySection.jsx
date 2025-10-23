"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { WordPullUp } from "@/components/ui/word-pull-up";
import { WordFadeIn } from "@/components/ui/word-fade-in";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  GraduationCap,
  FileText,
  CreditCard,
  Upload,
  ExternalLink,
  Calendar,
  Users,
  DollarSign,
} from "lucide-react";

const NUSProgramSection = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById("apply-now");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const programs = [
    {
      name: "Enterprise Business Analytics",
      abbr: "EBAC",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      eligibility: [
        "Undergraduate degree in Finance, Accountancy, Mathematics, Statistics",
        "Undergraduate degree in Econometrics, Engineering, Computer Science & IT",
        "Relevant working experience preferred",
        "Freshers are welcome to apply",
      ],
      color: "from-blue-500 to-cyan-500",
      hoverColor: "from-blue-600 to-cyan-600",
      bgColor: "from-blue-50 to-cyan-50",
    },
    {
      name: "Artificial Intelligence Systems",
      abbr: "AIS",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
      eligibility: [
        "Undergraduate degree with ICT background",
        "Relevant working experience as ICT professional preferred",
        "Strong foundation in programming and algorithms",
        "Freshers are welcome to apply",
      ],
      color: "from-purple-500 to-indigo-500",
      hoverColor: "from-purple-600 to-indigo-600",
      bgColor: "from-purple-50 to-indigo-50",
    },
    {
      name: "Software Engineering",
      abbr: "SE",
      image:
        "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800&auto=format&fit=crop",
      eligibility: [
        "Undergraduate degree with ICT background",
        "Relevant working experience as ICT professional preferred",
        "Understanding of software development lifecycle",
        "Freshers are welcome to apply",
      ],
      color: "from-green-500 to-emerald-500",
      hoverColor: "from-green-600 to-emerald-600",
      bgColor: "from-green-50 to-emerald-50",
    },
  ];

  const requiredDocuments = [
    "Degree scroll",
    "Consolidated academic semester marksheets OR detailed transcript",
    "Curriculum Vitae (CV)",
    "Passport page or Aadhaar Card (for Indian applicants)",
  ];

  const keyDetails = [
    {
      icon: Clock,
      label: "Duration",
      value: "1 Year",
      description: "Including 5-month paid internship",
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: Calendar,
      label: "Intake",
      value: "August 2026",
      description: "Full-time study mode",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: DollarSign,
      label: "Application Fee",
      value: "SGD $50",
      description: "Online payment required",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-200/10 to-transparent rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-200/10 to-transparent rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full mb-6">
            <GraduationCap className="w-4 h-4 mr-2" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              National University of Singapore
            </span>
          </div>

          <WordPullUp
            className="text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-[1.1]"
            words="Master of Technology Programs"
          />

          <WordFadeIn
            className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto"
            words="1-year Masters programme inclusive of 5-month paid internship. Choose from three specialized tracks designed for the future of technology and business."
          />
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {programs.map((program, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:rotate-1 bg-gradient-to-br ${program.bgColor}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              ></div>

              <div className="relative h-64 overflow-hidden">
                <img
                  src={program.image}
                  alt={`MTech in ${program.abbr}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                />
                <div
                  className={`absolute top-4 left-4 bg-gradient-to-r ${program.color} text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg`}
                >
                  MTech {program.abbr}
                </div>
              </div>

              <CardContent className="p-8 relative">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2 transition-colors duration-300">
                    {program.name}
                  </h3>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-700 mb-3 uppercase tracking-wide">
                    Who Should Apply
                  </h4>
                  <ul className="space-y-3">
                    {program.eligibility.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 group/item"
                      >
                        <div
                          className={`p-1 rounded-full bg-gradient-to-br ${program.color} group-hover/item:scale-110 transition-transform duration-300`}
                        >
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-slate-600 text-sm leading-relaxed group-hover/item:text-slate-800 transition-colors duration-300">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  onClick={scrollToForm}
                  className={`w-full bg-gradient-to-r ${program.color} hover:${program.hoverColor} text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group/btn`}
                >
                  <span>Apply for {program.abbr}</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-2 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Application Process Section */}
        <div className="border-t border-slate-200 pt-16 mb-20">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left - Application Process */}
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight flex items-center gap-3">
                <FileText className="w-8 h-8 text-blue-600" />
                Application Process
              </h3>

              <div className="space-y-6">
                <div className="bg-white/80 backdrop-blur-sm border border-blue-200 rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      1
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-900 mb-2">
                        Submit Online Application
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed mb-3">
                        Complete your application through NUS online portal for
                        August 2026 intake
                      </p>
                      <a
                        href="https://gradapp.nus.edu.sg/portal/app_manage"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm"
                      >
                        Visit Application Portal
                        <ExternalLink className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm border border-green-200 rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      2
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                        <CreditCard className="w-5 h-5" />
                        Pay Application Fee
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        SGD $50 via international debit/credit card payment
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm border border-purple-200 rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      3
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                        <Upload className="w-5 h-5" />
                        Upload Required Documents
                      </h4>
                      <ul className="space-y-2 mt-3">
                        {requiredDocuments.map((doc, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-2 text-slate-600 text-sm"
                          >
                            <CheckCircle2 className="w-4 h-4 text-purple-600" />
                            {doc}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                        <p className="text-amber-800 text-xs font-medium">
                          Note: No IELTS, TOEFL, GMAT or GRE required
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Button
                size="lg"
                onClick={scrollToForm}
                className="mt-8 w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 h-12"
              >
                Start Your Application
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Right - Key Details */}
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">
                Program Highlights
              </h3>

              <div className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-3xl p-8 shadow-xl mb-8">
                <div className="space-y-6">
                  {keyDetails.map(
                    (
                      { icon: Icon, label, value, description, color },
                      index
                    ) => (
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
                            <div className="text-slate-900 font-bold text-lg">
                              {value}
                            </div>
                            <div className="text-slate-600 text-xs uppercase tracking-wide">
                              {label}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-slate-500 text-xs">
                            {description}
                          </p>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Additional Info Card */}
              <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-0 text-white">
                <CardContent className="p-8">
                  <Users className="w-10 h-10 mb-4" />
                  <h4 className="text-xl font-bold mb-3">Freshers Welcome!</h4>
                  <p className="text-blue-100 leading-relaxed mb-4">
                    All programs welcome fresh graduates. Relevant working
                    experience is preferred but not mandatory for admission.
                  </p>
                  <Badge className="bg-white text-blue-600 hover:bg-blue-50">
                    No Work Experience Required
                  </Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NUSProgramSection;
