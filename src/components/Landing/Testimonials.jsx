"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Hemanth Rajkumar",
      university: "UTS, Sydney",
      program: "Masters in Marketing",
      image:
        "https://images.squarespace-cdn.com/content/v1/5cd4cc35fd679362f1f3ebbc/1571657812485-N9YN8GNGZ9BV8KC56KDJ/hemanth.jpg",
      quote:
        "Planet Education is the right choice for a hassle-free application with continuous updates. Now, I'm a student at UTS, Sydney, and all credit goes to Mr. Vasantosh and his team.",
    },
    {
      name: "Prachit Desai",
      university: "Campus Coventry",
      program: "BSc Honors in Aviation Management",
      image:
        "https://images.squarespace-cdn.com/content/v1/5cd4cc35fd679362f1f3ebbc/1585728584863-B7GTIVJSLY4XEIM0JR1O/Asset%2B3.png",
      quote:
        "With the help of the staff, I faced no issues with my visa and admission for Campus Coventry. I'm proud to say I got my visa in just 64 hours.",
    },
    {
      name: "Smit Shah",
      university: "Griffith University",
      program: "",
      image:
        "https://images.squarespace-cdn.com/content/v1/5cd4cc35fd679362f1f3ebbc/1585728699955-O0OMT2FZS92P74FVC7ZL/Smit.png",
      quote:
        "A friend recommended Planet Education. After their counseling, I selected Griffith University. The process was smooth, and I received my COE as planned.",
    },
    {
      name: "Pramash Panchal",
      university: "Canada",
      program: "",
      image:
        "https://images.squarespace-cdn.com/content/v1/5cd4cc35fd679362f1f3ebbc/1585728615480-8WZ7IOQ48H2H3M9B13P6/Asset%2B4.png",
      quote:
        "Thanks to the team's guidance, I got my admission in Canada. I found Planet Education to be the best and most helpful consultancy. I received my visa in just 15 days!",
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 bg-slate-900 rounded-full"></span>
            <span className="text-xs font-semibold tracking-[0.2em] text-slate-500 uppercase">
              Testimonials
            </span>
            <span className="w-2 h-2 bg-slate-900 rounded-full"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Student Success Stories
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Hear from students who achieved their dreams of studying abroad with
            our expert guidance and support.
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <Card className="h-full border-2 border-slate-200 hover:border-slate-900 transition-all duration-300 shadow-sm hover:shadow-xl">
                  <CardContent className="p-8 flex flex-col h-full">
                    {/* Quote Icon */}
                    <div className="mb-6">
                      <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center">
                        <Quote className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Testimonial Quote */}
                    <blockquote className="flex-grow mb-8">
                      <p className="text-slate-700 leading-relaxed text-base">
                        "{testimonial.quote}"
                      </p>
                    </blockquote>

                    {/* Student Info */}
                    <div className="flex items-center gap-4 pt-6 border-t border-slate-200">
                      <div className="relative">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover border-2 border-slate-200 grayscale"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-900 text-lg mb-1">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-slate-600 font-medium">
                          {testimonial.university}
                        </p>
                        {testimonial.program && (
                          <p className="text-xs text-slate-500 mt-1">
                            {testimonial.program}
                          </p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-12">
            <CarouselPrevious className="static translate-y-0 border-2 border-slate-900 hover:bg-slate-900 hover:text-white w-12 h-12" />
            <CarouselNext className="static translate-y-0 border-2 border-slate-900 hover:bg-slate-900 hover:text-white w-12 h-12" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
