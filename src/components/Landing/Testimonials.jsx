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
      name: "Wilson Lam Wee Shen",
      university: "FASS Scholarship Recipient in AY2011",
      program: "Political Science Major",
      image: "https://fass.nus.edu.sg/wp-content/uploads/2020/07/janvin.jpg",
      quote:
        "The FASS Scholarship made my fulfilling academic journey possible, especially with my father as the sole breadwinner. It allowed me to pursue my honours thesis and gain valuable internships with civil service agencies. I am grateful for this gift of education, which enables my dream of a civil service career upon graduation.",
    },
    {
      name: "Athel Hu",
      university: "FASS bursary recipient in AY2007",
      program: "Sociology Major",
      image: "https://fass.nus.edu.sg/wp-content/uploads/2020/07/athel.gif",
      quote:
        "Receiving bursary support motivated me to study harder and succeed, even while caring for my mum. Now, I regularly contribute back to the gift funds. My dream is to establish a fund in my parents' name to help needy students, as giving back to society is my constant motivation to strive in life.",
    },
    {
      name: "Gurshan Singh",
      university: "bursary award recipient in AY2009",
      program: "Political Science Major",
      image: "https://fass.nus.edu.sg/wp-content/uploads/2020/07/gurham.gif",
      quote:
        "I lost my father to a sudden heart attack in 2010 and as the eldest of four children has a lot depending on my success. My mother, who is not in good health works as a kitchen helper. This bursary is my safety net. It gives me peace of mind that I will not be caught out by a sudden expenditure.",
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
