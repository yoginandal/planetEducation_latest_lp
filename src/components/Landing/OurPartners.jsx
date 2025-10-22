"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import anu from "../../assets/logos/anu.png";
import brunel from "../../assets/logos/Brunel University London.png";
import charles from "../../assets/logos/Charles Darwin University Scholarships.png";
import cqu from "../../assets/logos/cqu university.png";
import deakin from "../../assets/logos/Deakin University.png";
import james from "../../assets/logos/james-cook-university.png";
import la from "../../assets/logos/La Trobe University.png";
import macquarie from "../../assets/logos/Macquarie University.png";
import monash from "../../assets/logos/monash-university.png";
import murdoch from "../../assets/logos/MURDOCH UNIVERSITY.png";
import rmit from "../../assets/logos/RMIT.png";
import sydney from "../../assets/logos/su.png";
import technology from "../../assets/logos/University of Technology - Sydney.png";
import unsw from "../../assets/logos/UNSW Scholarships.png";
import uq from "../../assets/logos/uq.png";
import victoria from "../../assets/logos/Victoria University.png";
import western from "../../assets/logos/Western Sydney University.png";

const GlobalPartnerships = () => {
  // University logo URLs - Replace with your actual partner university logos
  const partnerLogos = [
    {
      name: "Australian National University",
      logo: anu,
    },
    {
      name: "Brunel University London",
      logo: brunel,
    },
    {
      name: "Charles Darwin University",
      logo: charles,
    },
    { name: "CQU University", logo: cqu },
    {
      name: "Deakin University",
      logo: deakin,
    },
    {
      name: "James Cook University",
      logo: james,
    },
    {
      name: "La Trobe University",
      logo: la,
    },
    {
      name: "Macquarie University",
      logo: macquarie,
    },
    {
      name: "Monash University",
      logo: monash,
    },
    {
      name: "Murdoch University",
      logo: murdoch,
    },
    { name: "RMIT University", logo: rmit },
    { name: "Sydney University", logo: sydney },
    {
      name: "University of Technology Sydney",
      logo: technology,
    },
    { name: "UNSW Sydney", logo: unsw },
    { name: "University of Queensland", logo: uq },
    {
      name: "Victoria University",
      logo: victoria,
    },
    {
      name: "Western Sydney University",
      logo: western,
    },
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 bg-slate-900 rounded-full"></span>
            <span className="text-xs font-semibold tracking-[0.2em] text-slate-500 uppercase">
              Our Global Partnerships
            </span>
            <span className="w-2 h-2 bg-slate-900 rounded-full"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Trusted by Leading Universities
          </h2>
        </div>

        {/* Logo Carousel */}
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="-ml-4">
            {partnerLogos.map((partner, index) => (
              <CarouselItem
                key={index}
                className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
              >
                <div className="flex items-center justify-center h-32 bg-white border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300 grayscale hover:grayscale-0">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Bottom Text */}
        <div className="text-center mt-12">
          <p className="text-slate-600 text-sm">
            And <span className="font-semibold">350+ more universities</span>{" "}
            across UK, USA, Canada, Australia, New Zealand, and Singapore
          </p>
        </div>
      </div>
    </section>
  );
};

export default GlobalPartnerships;
