import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { SectionWrapper } from "../../components/shared/SectionWrapper";
import { fonts } from "../../lib/fonts";
import { colors, spacing } from "../../lib/constants";

const processSteps = [
  {
    title: "Strategy & Research",
    description:
      "We analyze your audience, industry, and category trends to craft messaging that resonates.",
    icon: "/icon-of-matching-magnifying-glass.png",
  },
  {
    title: "Creator Selection & Coordination",
    description:
      "We tap into 500+ vetted creators who are trusted voices in tech, SaaS, and AI.",
    icon: "/icon-of-management.png",
  },
  {
    title: "Creative & Content Production",
    description:
      "We script and produce launch videos, posts, and visuals that spark conversation.",
    icon: "/icon-of-management-1.png",
  },
  {
    title: "Rollout & Momentum Building",
    description:
      "We engineer multi-week creator campaigns to sustain traction across B2B Social channel like Linkedin, X, Newsletters, Youtube etc.",
    icon: "/icon-of-management-2.png",
  },
  {
    title: "Performance Tracking",
    description:
      "Every creator post is tracked with custom UTMs monitored live through HubSpot dashboards — giving you clarity on reach, clicks, and conversions.",
    icon: "/icon-monetize.png",
  },
];

export const FeaturesSection = (): JSX.Element => {
  return (
    <SectionWrapper>
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-8 sm:gap-12 md:gap-20 lg:gap-28">
          <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 lg:w-[297px] w-full">
            <h2 className={`${fonts.anton} font-normal text-[28px] sm:text-[36px] md:text-[42px] lg:text-[52px] tracking-[0] leading-[34px] sm:leading-[42px] md:leading-[50px] lg:leading-[62.4px]`}>
              <span className="text-white">Our </span>
              <span className={colors.text.cyan}>End to End</span>
              <span className="text-white"> Process</span>
            </h2>

            <Button className={`w-full sm:w-fit h-auto px-6 py-3 ${colors.background.cyan} hover:bg-[#00ffc6]/90 rounded-full border border-solid border-[#105ff1] ${fonts.text.jakartaSemibold} ${colors.text.black} text-sm sm:text-base`}>
              Get Matched
            </Button>
          </div>

          <Card className="flex-1 bg-[#0f0f0f] rounded-2xl sm:rounded-3xl border-[0.65px] border-solid border-[#00ffc6] shadow-[3px_3px_0px_#1b1818] w-full">
            <CardContent className="p-0">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className={`flex flex-col sm:flex-row items-start gap-4 sm:gap-6 md:gap-[74px] px-6 sm:px-8 md:px-10 py-8 sm:py-10 md:py-12 ${
                    index < processSteps.length - 1
                      ? "border-b-[0.65px] border-solid border-[#00ffc6]"
                      : ""
                  }`}
                >
                  <div className="flex flex-col flex-1 gap-3 sm:gap-[15px]">
                    <h3 className={`${fonts.text.jakartaBold} text-white text-lg sm:text-xl tracking-[0] leading-7 sm:leading-9`}>
                      {step.title}
                    </h3>
                    <p className={`${fonts.text.jakartaNormal} text-white text-sm sm:text-base tracking-[0] leading-6 sm:leading-7`}>
                      {step.description}
                    </p>
                  </div>
                  <div
                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex-shrink-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${step.icon})` }}
                  />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </SectionWrapper>
  );
};
