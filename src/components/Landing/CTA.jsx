"use client";

import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { WordPullUp } from "@/components/ui/word-pull-up";
import { WordFadeIn } from "@/components/ui/word-fade-in";
import {
  ArrowRight,
  GraduationCap,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const CTASection = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById("apply-now");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
  };

  return (
    <section className="py-16 md:py-24 bg-linear-to-br from-slate-50 via-blue-50/30 to-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-bl from-blue-200/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-linear-to-tr from-purple-200/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-5xl relative z-10">
        <Card className="border-2 border-slate-200 shadow-2xl overflow-hidden bg-white">
          <CardContent className="p-0">
            {/* Header Section */}
            <div className="bg-linear-to-r from-slate-900 via-blue-900 to-slate-900 text-white p-8 md:p-12 text-center relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute top-4 left-4 w-20 h-20 border-2 border-white/30 rounded-full"></div>
                <div className="absolute bottom-4 right-4 w-32 h-32 border-2 border-white/30 rounded-full"></div>
              </div>

              <div className="relative z-10">
                <Badge className="mb-4 md:mb-6 bg-white/20 text-white border-white/30 px-4 py-1.5">
                  <Sparkles className="w-3 h-3 mr-2 inline" />
                  August 2026 Intake Open
                </Badge>

                <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 backdrop-blur-sm mb-4 md:mb-6">
                  <GraduationCap className="w-8 h-8 md:w-10 md:h-10" />
                </div>

                <WordPullUp
                  className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 leading-tight text-white"
                  words="Ready to Begin Your NUS Journey?"
                />

                <WordFadeIn
                  className="text-blue-100 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
                  words="Join thousands of successful students who have transformed their careers through our Master of Technology programs at one of Asia's top universities."
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 md:p-10 bg-linear-to-b from-slate-50 to-white">
              {/* Features */}
              <motion.div
                className="grid md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.div
                  className="flex items-start gap-3 bg-white p-4 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300"
                  variants={itemVariants}
                >
                  <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900 text-sm md:text-base">
                      5-Month Paid Internship
                    </div>
                    <div className="text-xs md:text-sm text-slate-600">
                      Included in 1-year program
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-3 bg-white p-4 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300"
                  variants={itemVariants}
                >
                  <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900 text-sm md:text-base">
                      3 Specializations
                    </div>
                    <div className="text-xs md:text-sm text-slate-600">
                      EBAC, AIS & SE tracks
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-3 bg-white p-4 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300"
                  variants={itemVariants}
                >
                  <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900 text-sm md:text-base">
                      No Test Required
                    </div>
                    <div className="text-xs md:text-sm text-slate-600">
                      No IELTS, TOEFL, or GRE
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* CTA Button - Centered on Mobile */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    onClick={scrollToForm}
                    className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 md:px-10 py-5 md:py-6 text-base md:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
                  >
                    Apply Now for August 2026
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </motion.div>
              </div>

              {/* Bottom Note */}
              <div className="mt-6 md:mt-8 text-center">
                <p className="text-xs md:text-sm text-slate-600">
                  <span className="font-semibold text-slate-900">
                    Quick Tip:
                  </span>{" "}
                  Application status appears as "Submitted Online" once
                  successfully submitted. Apply early to secure your spot!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTASection;
