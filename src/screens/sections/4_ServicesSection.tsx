import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import { SectionHeader } from "../../components/shared/SectionHeader";
import { SectionWrapper } from "../../components/shared/SectionWrapper";
import { fonts } from "../../lib/fonts";
import { spacing } from "../../lib/constants";

const servicesData = [
  {
    id: 1,
    title: "Creator Discovery & partnerships",
    description:
      "We match you with credible creators and industry professionals who influence your target audience, turning them into true advocates for your brand.",
    icon: "assets/how-we-help/01.svg",
    illustration: "assets/how-we-help/list.svg",
    hasIllustration: true,
    isWide: true,
  },
  {
    id: 2,
    title: "Content Strategy & Campaign Management",
    description:
      "We craft campaigns that blend your goals with each creator's authentic voice. From concept to posting, we handle everything end-to-end for seamless execution.",
    icon: "assets/how-we-help/02.svg",
    illustration: null,
    hasIllustration: false,
    isWide: false,
  },
  {
    id: 3,
    title: "Performance Tracking & Amplification",
    description:
      "We measure every campaign's reach, engagement, and ROI, then amplify top-performing content across channels to extend your influence further.",
    icon: "assets/how-we-help/03.svg",
    illustration: null,
    hasIllustration: false,
    isWide: false,
  },
  {
    id: 4,
    title: "Brand & Company Positioning",
    description:
      "Through creator-led storytelling, thought leadership, and consistent collaboration, we help your brand become a trusted name among professionals.",
    icon: "assets/how-we-help/04.svg",
    illustration: "assets/how-we-help/list.svg",
    hasIllustration: true,
    isWide: true,
  },
];

export const ServicesSection = (): JSX.Element => {
  return (
    <SectionWrapper containerClassName={spacing.section.gap}>
      <SectionHeader
        title="How we "
        highlight="Help"
        description={
          <>
            At <span className="font-bold">Bannermen</span>, We help B2B and tech companies launch and scale influencer-led
            GTM strategies that drive awareness, build trust, and accelerate
            buying decisions
          </>
        }
        descriptionClassName="px-4"
      />

        <div className="w-full max-w-[1216px] flex flex-col gap-6 sm:gap-8 px-4 md:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-[710px_1fr] gap-6 sm:gap-8">
            <Card className="bg-[#ffffff1a] border-0 rounded-xl overflow-hidden">
              <CardContent className="p-0 flex flex-col md:flex-row items-start gap-4 md:gap-8 min-h-[300px] md:h-[390px]">
                <div className="flex flex-col w-full md:w-[437px] justify-center gap-4 md:gap-6 pl-6 md:pl-16 py-6 md:py-8">
                  <img
                    className="w-[64px] md:w-[84px] h-auto rounded-2xl"
                    alt="Service icon"
                    src={servicesData[0].icon}
                  />

                  <div className="flex flex-col gap-3 md:gap-4 max-w-[360px]">
                    <h3 className={`${fonts.text.interSemibold} text-white text-lg md:text-xl tracking-[0] leading-[24px] md:leading-[27px]`}>
                      {servicesData[0].title}
                    </h3>

                    <p className={`${fonts.text.jakartaNormal} text-[#ffffffcc] text-sm md:text-base tracking-[0.30px] leading-[22px] md:leading-[25.5px]`}>
                      {servicesData[0].description}
                    </p>
                  </div>
                </div>

                <div className="hidden md:flex items-center justify-center w-[261px] h-[390px]">
                  <img
                    className="w-[241px] h-[355px]"
                    alt="Service illustration"
                    src={servicesData[0].illustration ?? undefined}
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#ffffff1a] border-0 rounded-xl">
              <CardContent className="p-8 md:p-16 flex flex-col justify-center gap-4 md:gap-6 min-h-[250px] md:h-[390px]">
                <img
                  className="w-[64px] md:w-[84px] h-auto rounded-2xl"
                  alt="Service icon"
                  src={servicesData[1].icon}
                />

                <div className="flex flex-col gap-3 md:gap-4">
                  <h3 className={`${fonts.text.jakartaSemibold} text-white text-lg md:text-xl tracking-[0] leading-6 md:leading-7 max-w-[346px]`}>
                    {servicesData[1].title}
                  </h3>

                  <p className={`${fonts.text.interNormal} text-[#ffffffcc] text-sm md:text-base tracking-[0.30px] leading-[22px] md:leading-[25.5px] max-w-[346px]`}>
                    {servicesData[1].description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_710px] gap-6 sm:gap-8">
            <Card className="bg-[#ffffff1a] border-0 rounded-xl">
              <CardContent className="p-8 md:p-16 flex flex-col justify-center gap-4 md:gap-6 min-h-[250px] md:h-[391px]">
                <img
                  className="w-[64px] md:w-[84px] h-auto rounded-2xl"
                  alt="Service icon"
                  src={servicesData[2].icon}
                />

                <div className="flex flex-col gap-3 md:gap-4">
                  <h3 className={`${fonts.text.jakartaSemibold} text-white text-lg md:text-xl tracking-[0] leading-6 md:leading-7 max-w-[346px]`}>
                    {servicesData[2].title}
                  </h3>

                  <p className={`${fonts.text.jakartaNormal} text-[#ffffffcc] text-sm md:text-base tracking-[0.30px] leading-[22px] md:leading-[25.5px] max-w-[346px]`}>
                    {servicesData[2].description}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#ffffff1a] border-0 rounded-xl overflow-hidden">
              <CardContent className="p-0 flex flex-col md:flex-row items-start gap-4 md:gap-8 min-h-[300px] md:h-[391px]">
                <div className="flex flex-col w-full md:w-[434px] justify-center gap-4 md:gap-[26px] pl-6 md:pl-16 py-6 md:py-8">
                  <img
                    className="w-[64px] md:w-[84px] h-auto rounded-2xl"
                    alt="Service icon"
                    src={servicesData[3].icon}
                  />

                  <div className="flex flex-col gap-3 md:gap-4 max-w-[386px]">
                    <h3 className={`${fonts.text.jakartaSemibold} text-white text-lg md:text-xl tracking-[0] leading-[24px] md:leading-[27px]`}>
                      {servicesData[3].title}
                    </h3>

                    <p className={`${fonts.text.jakartaNormal} text-[#ffffffcc] text-sm md:text-base tracking-[0.30px] leading-[22px] md:leading-[25.5px]`}>
                      {servicesData[3].description}
                    </p>
                  </div>
                </div>

                <div className="hidden md:flex items-center justify-center w-[228px] h-[391px]">
                  <img
                    className="w-[244px] h-[355px]"
                    alt="Service illustration"
                    src={servicesData[3].illustration ?? undefined}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
    </SectionWrapper>
  );
};
