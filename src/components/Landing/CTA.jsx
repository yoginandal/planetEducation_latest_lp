"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, GraduationCap } from "lucide-react";

const CTASection = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById("apply-now");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section className="py-24 bg-slate-200">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Bottom CTA Banner */}
        <Card className="bg-gradient-to-r from-slate-900 to-blue-900 border-0 text-white overflow-hidden relative">
          <div className="absolute inset-0 bg-grid-white/5"></div>
          <CardContent className="relative p-12 text-center">
            <GraduationCap className="w-16 h-16 mx-auto mb-6" />
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Begin Your NUS Journey?
            </h3>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
              Application Status will appear as "Submitted Online" once your
              application is successfully submitted. Start your application
              today!
            </p>
            <Button
              size="lg"
              onClick={scrollToForm}
              className="bg-white text-slate-900 hover:bg-blue-50 font-bold px-10 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Apply Now for August 2026
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTASection;
