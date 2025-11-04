import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import { SectionWrapper } from "../../components/shared/SectionWrapper";
import { fonts } from "../../lib/fonts";
import { colors, spacing } from "../../lib/constants";

const services = [
  {
    icon: "/assets/megaphone.svg",
    title: "Creator-Led Campaigns",
    description:
      "We match your brand with influential voices who tell your story authentically, reaching your exact audience where they listen most.",
    variant: "bordered" as const,
  },
  {
    icon: "/assets/presentation.svg",
    title: "Events & Webinars",
    description:
      "We manage creator-led webinars, panels, and events that attract your ideal customers.",
    variant: "filled" as const,
  },
  {
    icon: "/assets/gifts.svg",
    title: "PR & Gifts Campaigns",
    description:
      "We design creator-based PR and gifting campaigns that build relationships and long-term advocacy, not one-off shoutouts.",
    variant: "bordered" as const,
  },
];

export const MainContentSection = (): JSX.Element => {
  return (
    <SectionWrapper
      sectionPadding={spacing.section.pySmall}
      maxWidth="large"
      padding="medium"
    >
      <div className="flex flex-col items-center gap-12 md:gap-16 lg:gap-[75px]">
        <h1 className={`${fonts.anton} text-[32px] md:text-[42px] lg:text-[52px] font-normal leading-[40px] md:leading-[50px] lg:leading-[60px] tracking-[0] text-center px-4`}>
          <span className="text-white">
            B2B Influence, Engineered for Scale
          </span>
          <span className={colors.text.cyan}> Impact</span>
        </h1>

          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 w-full max-w-[1216px] mx-auto px-4 md:px-0">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`flex-1 w-full md:w-auto h-auto md:h-[461px] min-h-[400px] md:min-h-[461px] rounded-[20px] overflow-hidden border-none ${
                  service.variant === "filled"
                    ? "bg-[linear-gradient(180deg,rgba(0,255,198,1)_0%,rgba(0,123,95,1)_100%)] border border-solid border-[#00ffc6]"
                    : "bg-black before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[20px] before:[background:linear-gradient(180deg,rgba(0,255,198,1)_0%,rgba(1,120,93,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
                }`}
              >
                <CardContent className="flex flex-col items-center justify-between h-full p-0 pt-8 md:pt-12 lg:pt-[50px] pb-8 md:pb-12 lg:pb-[50px] px-4 md:px-6">
                  <div className="flex flex-col items-center gap-4 w-full md:w-[305px] h-full justify-between">
                    <img
                      className="w-[104px] h-[104px]"
                      alt={service.title}
                      src={service.icon}
                    />
                    <div className="flex flex-col items-center gap-4 flex-1 justify-center">
                      <h3
                        className={`${fonts.montserrat} font-bold text-[26px] text-center tracking-[0.64px] leading-[32.4px] ${
                          service.variant === "filled"
                            ? colors.text.black
                            : colors.text.white
                        }`}
                      >
                        {service.title}
                      </h3>
                      <p
                        className={`[font-family:'Open_Sans',Helvetica] font-normal text-[17.5px] text-center tracking-[0.25px] leading-6 ${
                          service.variant === "filled"
                            ? colors.text.black
                            : colors.text.white
                        }`}
                      >
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className={`w-full ${spacing.container.maxWidth.medium} mx-auto [-webkit-text-stroke:0.5px_#ffffff96] bg-[linear-gradient(178deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] ${fonts.jakarta} font-normal text-transparent text-[60px] md:text-[80px] lg:text-[120px] tracking-[-2.40px] leading-[60px] md:leading-[80px] lg:leading-[120px] px-4 md:px-6 lg:px-0 mt-8 md:mt-12 lg:mt-0`}>
            <span className={`${colors.text.black} tracking-[-2.88px] leading-[40px] md:leading-[55px] lg:leading-[70px]`}>
              &quot;
            </span>
            <span className={`font-semibold ${colors.text.black} text-[20px] md:text-[30px] lg:text-[40px] tracking-[-0.32px] leading-[28px] md:leading-[42px] lg:leading-[64px]`}>
            Our in-house filmmakers, designers, and writers also helps craft videos, visuals, and thought-leadership content that earns engagement and drives action  🎉
            </span>
          </div>
        </div>
    </SectionWrapper>
  );
};
