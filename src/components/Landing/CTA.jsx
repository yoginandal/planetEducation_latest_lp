"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById("apply-now");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <Card className="border-2 border-slate-200 shadow-lg">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Take the first step toward your international education dream. Our
              expert counselors are here to guide you.
            </p>
            <Button
              size="lg"
              onClick={scrollToForm}
              className="bg-slate-900 hover:bg-slate-800 text-white font-semibold text-lg px-10 h-14 group"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTASection;
