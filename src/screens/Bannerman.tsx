import React from "react";
import { HeroSection } from "./sections/1_HeroSection";
import { WhyChooseUsSection } from "./sections/2_SecondSection";
import { MainContentSection } from "./sections/3_WhatWeDo";
import { ServicesSection } from "./sections/4_ServicesSection";
import { FeaturesSection } from "./sections/5_OurProcess";
import { WhyCreatorMarketingSection } from "./sections/6_WhyCreatorMarketing";
import { StatsSection } from "./sections/7_StatsSection";
import { WhyBannermenSection } from "./sections/8_WhyBannermanSection";
import { CTASection } from "./sections/9_CTASection";
import {Bannermenlogo} from "./sections/Bannermenlogo";
import { FooterSection } from "./sections/10_Footer";

export const Bannermen = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <WhyChooseUsSection />
      <MainContentSection />
      <ServicesSection />
      <FeaturesSection />
      <WhyCreatorMarketingSection />
      <StatsSection />
      <WhyBannermenSection />
      <CTASection />
      <Bannermenlogo />
      <FooterSection />
    </div>
  );
};
