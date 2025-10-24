"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { WordPullUp } from "@/components/ui/word-pull-up";
import { WordFadeIn } from "@/components/ui/word-fade-in";
// import anu from "../../assets/logos/anu.png";
// import brunel from "../../assets/logos/Brunel University London.png";
// import charles from "../../assets/logos/Charles Darwin University Scholarships.png";
// import cqu from "../../assets/logos/cqu university.png";
// import deakin from "../../assets/logos/Deakin University.png";
// import james from "../../assets/logos/james-cook-university.png";
// import la from "../../assets/logos/La Trobe University.png";
// import macquarie from "../../assets/logos/Macquarie University.png";
// import monash from "../../assets/logos/monash-university.png";
// import murdoch from "../../assets/logos/MURDOCH UNIVERSITY.png";
// import rmit from "../../assets/logos/RMIT.png";
// import sydney from "../../assets/logos/su.png";
// import technology from "../../assets/logos/University of Technology - Sydney.png";
// import unsw from "../../assets/logos/UNSW Scholarships.png";
// import uq from "../../assets/logos/uq.png";
// import victoria from "../../assets/logos/Victoria University.png";
// import western from "../../assets/logos/Western Sydney University.png";

const GlobalPartnerships = () => {
  // University logo URLs - Replace with your actual partner university logos
  const partnerLogos = [
    {
      name: "Grab",
      logo: "https://nus.edu.sg/research/images/default-source/partners/grab.png?Status=Temp&sfvrsn=5f11e89f_8",
    },
    {
      name: "Exxonmobil",
      logo: "https://nus.edu.sg/research/images/default-source/partners/exxonmobil.png?Status=Temp&sfvrsn=34a0906c_6",
    },
    {
      name: "Ezlink",
      logo: "https://www.jedox.com/wp-content/uploads/2022/11/logo-ez-link-600x400px.png",
    },
    {
      name: "Alibaba Cloud",
      logo: "https://su.ultrasite.com/170_a_7103_ee80b992.png",
    },
    {
      name: "StarHub",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/StarHub_%282021%29.svg/1200px-StarHub_%282021%29.svg.png",
    },
    {
      name: "ComfortDelgro",
      logo: "https://static.cdnlogo.com/logos/c/17/comfortdelgro_thumb.png",
    },
    {
      name: "Veniam",
      logo: "https://www.ciscoinvestments.com/assets/logos/veniam.png",
    },
    {
      name: "Microsoft",
      logo: "https://nus.edu.sg/research/images/default-source/partners/microsoft.png?Status=Temp&sfvrsn=e6b10a4_8",
    },
    {
      name: "CDL",
      logo: "https://nus.edu.sg/research/images/default-source/partners/cdl.png?Status=Temp&sfvrsn=cfc8908d_6monash",
    },
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  return (
    <section className="py-12 md:py-20 bg-slate-50">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 bg-slate-900 rounded-full"></span>
            <span className="text-xs font-semibold tracking-[0.2em] text-slate-500 uppercase">
              Our Recent Research Partnerships
            </span>
            <span className="w-2 h-2 bg-slate-900 rounded-full"></span>
          </div>
          <WordPullUp
            className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6"
            words="Trusted by Leading Companies"
          />
          <WordFadeIn
            className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto"
            words="Partnering with industry leaders to drive innovation and research excellence across various domains"
          />
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
                <div className="flex items-center justify-center h-32 bg-white border border-slate-200 rounded-lg p-6 hover:shadow-xl hover:scale-110 hover:border-slate-300 transition-all duration-300 hover:-translate-y-1">
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
            And <span className="font-semibold">350+ more companies</span>{" "}
            across Singapore
          </p>
        </div>
      </div>
    </section>
  );
};

export default GlobalPartnerships;
