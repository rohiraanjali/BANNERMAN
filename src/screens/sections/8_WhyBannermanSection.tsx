import React, { useEffect, useRef } from "react";
import { Card, CardContent } from "../../components/ui/card";
import { ScrollArea, ScrollBar } from "../../components/ui/scroll-area";
import { SectionHeader } from "../../components/shared/SectionHeader";
import { SectionWrapper } from "../../components/shared/SectionWrapper";
import { fonts } from "../../lib/fonts";
import { spacing } from "../../lib/constants";

const features = [
  {
    title: "B2B Users & Category Focused",
    description:
      "We specialize in SaaS, AI, and B2B technology — understanding your users, customers and industry inside out.",
    icon: "assets/why/01.svg",
  },
  {
    title: "Creative Precision",
    description:
      "Cinematic videos, thought-leadership posts, and data-driven content — built for engagement and recall.",
    icon: "assets/why/02.svg",
  },
  {
    title: "Happy Creators, Happy Results",
    description:
      "We manage win-win rate negotiations for happy Creators and Brands, handling contracts and payouts so Brands work with us, not multiple Creators.",
    icon: "assets/why/03.svg",
  },
  {
    title: "Vetted Creator Network",
    description:
      "We partner with vetted, trustworthy LinkedIn Creators with loyal, engaged audiences to drive high-converting brand deals.",
    icon: "assets/why/04.svg",
  },
  {
    title: "Guaranteed Results & Reporting",
    description:
      "We handle campaign reporting end-to-end, giving you full visibility and measurable influence that drives sustained growth",
    icon: "assets/why/05.svg",
  },
];

export const WhyBannermenSection = (): JSX.Element => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const speed = 2; // pixels per frame
    let frame: number;
    let startTime = Date.now();

    const scroll = () => {
      const elapsed = Date.now() - startTime;

      // Stop after 3 seconds (3000ms)
      if (elapsed >= 3000) {
        cancelAnimationFrame(frame);
        return;
      }

      el.scrollLeft += speed;
      frame = requestAnimationFrame(scroll);
    };

    frame = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <SectionWrapper containerClassName={spacing.section.gap}>
      <SectionHeader
        title="Why"
        highlight=" Bannermen"
        description="More Than an Agency - A B2B Influence &amp; GTM Partner.."
      />

      <ScrollArea className="w-full">
        <div
          ref={scrollRef}
          className="flex items-center gap-6 sm:gap-8 md:gap-10 pb-4 px-4 md:px-0 overflow-x-auto scroll-smooth"
        >
          {features.map((feature, index) => (
            <Card
              key={index}
              className="flex-shrink-0 w-[280px] sm:w-[350px] md:w-[416px] bg-transparent border-none"
            >
              <CardContent className="flex flex-col items-center gap-4 sm:gap-6 p-0">
                <img
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl"
                  alt={feature.title}
                  src={feature.icon}
                />
                <div className="flex flex-col items-center gap-3 sm:gap-4 w-full">
                  <h3
                    className={`${fonts.text.jakartaBold} text-white text-lg sm:text-xl text-center tracking-[0] leading-6 sm:leading-[28.5px]`}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className={`${fonts.text.interNormal} text-[#a5abb6] text-sm sm:text-base text-center tracking-[0] leading-6 sm:leading-[25.5px] max-w-[333px]`}
                  >
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </SectionWrapper>
  );
};
