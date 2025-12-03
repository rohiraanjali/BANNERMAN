import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import { SectionHeader } from "../../components/shared/SectionHeader";
import { SectionWrapper } from "../../components/shared/SectionWrapper";
import { fonts } from "../../lib/fonts";
import { spacing } from "../../lib/constants";

const featureCards = [
  {
    icon: "/assets/creator-marketing/Innovation Image - Colorfolio X Webflow Template.svg",
    title: "High-income Professionals invested in education",
    description:
      "Every campaign starts with audience insights and ends with measurable outcomes, driving awareness, leads, and trust, not just engagement.",
    mockup: (
      <div className="absolute w-[99.66%] h-[81.50%] top-[18.25%] left-0">
        <img
          className="absolute sm-visible top-[76px] left-52 w-[170px] h-[172px]"
          alt="Div text design"
          src="/assets/creator-marketing/div.text-design-orbit-1.svg"
        />
        <img
          className="absolute top-[29px] left-[163px] w-[260px] h-[264px]"
          alt="Div text design"
          src="/assets/creator-marketing/div.text-design-orbit-2.svg"
        />
        <img
          className="absolute top-[-15px] left-[118px] w-[350px] h-[342px]"
          alt="Div text design"
          src="/assets/creator-marketing/div.text-design-orbit-3.svg"
        />
        <img
          className="absolute top-[-57px] left-[73px] w-[440px] h-96"
          alt="Div text design"
          src="/assets/creator-marketing/div.text-design-orbit-4.svg"
        />
        <img
          className="absolute w-[90.97%] h-[164.92%] top-[-32.46%] left-[4.52%]"
          alt="Vector"
          src="/assets/creator-marketing/Vector.svg"
        />
        <div className="absolute top-[167px] left-[43px] w-[500px] h-[52px] rounded-[10px]">
          <img
            className=""
            alt="Div text to design div"
            src="/assets/creator-marketing/div.text-to-design-div.svg"
          />


        </div>
      </div>
    ),
  },
  {
    icon: "/assets/creator-marketing/Accountability Image - Colorfolio X Webflow Template.svg",
    title: "World's largest professional network",
    description:
      "We work with verified founders, executives, and thought leaders who already shape conversations in your industry, turning your brand into part of their authentic narrative.",
    mockup: (
      <>
        <img
          className="top-[62px] w-9 h-[338px] absolute left-0 opacity-20"
          alt="Div suggest orbit"
          src="/assets/creator-marketing/orbit-01.svg"
        />
        <img
          className="top-[15px] w-[81px] h-[385px] absolute left-0 opacity-20"
          alt="Div suggest orbit"
          src="/assets/creator-marketing/orbit-03.svg"
        />
        <img
          className="top-0 w-32 h-[400px] absolute left-0 opacity-20"
          alt="Div suggest orbit"
          src="/assets/creator-marketing/orbit-03.svg"
        />
        <div className="absolute top-[177px] left-[177px] w-full h-full ">
          <img
            className=""
            alt="Img"
            src="/assets/creator-marketing/div.food-delivery-screen.svg"
          />



        </div>
      </>
    ),
  },
  {
    icon: "/assets/creator-marketing/Commitment Image - Colorfolio X Webflow Template.svg",
    title: "End-to-End Management",
    description:
      "From sourcing and briefing to execution and performance tracking, we manage the entire journey so your team stays focused on growth.",
    mockup: (
      <>
        <img
          className="absolute h-[197.42%] top-[5.33%] -right-6 w-[234px]"
          alt="Div auto iterates"
          src="/assets/creator-marketing/div.auto-iterate-absolute.svg"
        />
        <img
          className="absolute top-[172px] left-[26px] w-[264px] h-[228px]"
          alt="Div figma design"
          src="/assets/creator-marketing/div.figma-design.svg"
        />
        <div className=" ">
          <img
            className="absolute left-[calc(60.00%_-_50px)] w-45 h-45"
            alt="Div iterate button"
            src="/assets/creator-marketing/div.auto-iterate-absolute.svg"
          />
        </div>
      </>
    ),
  },
  {
    icon: "/assets/creator-marketing/Excellence Image - Colorfolio X Webflow Template.svg",
    title: "Data-Backed Strategy",
    description:
      "We blend storytelling with analytics to plan and refine campaigns that deliver ROI and long-term credibility that fuels long-term growth.",
    mockup: (
      <div className="flex w-[113.95%] items-start justify-end absolute top-[calc(50.00%_-_35px)] left-[27.21%]">
        <div className="flex w-[252px] items-start justify-end pl-0 pr-4 pt-[78px] pb-0 relative self-stretch ml-[-182.00px]">
          <div className="flex w-[236px] items-center justify-center pt-4 pb-0 px-4 relative self-stretch bg-[#29292b] rounded-xl shadow-[0px_4px_12px_#0000003d]">
            <div className="inline-flex flex-col items-center pt-0 pb-[15px] px-0 relative self-stretch flex-[0_0_auto]">
              <img
                className="relative max-w-[204px] w-16 flex-[0_0_auto]"
                alt="Img margin"
                src="/assets/creator-marketing/Img_margin.svg"
              />
              <div className="inline-flex items-start justify-center pl-[3px] pr-[3.39px] pt-0 pb-1.5 relative flex-[0_0_auto]">
                <div className="text-white text-sm text-center leading-6 relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold tracking-[0] whitespace-nowrap">
                  Launch Successful
                </div>
              </div>
              <div className="inline-flex items-start justify-center pl-[7.7px] pr-[7.3px] py-0 relative flex-[0_0_auto]">
                <div className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-[#a9a9a9] text-[11px] text-center tracking-[0] leading-[17px]">
                  The Campaign was launched and <br />
                  reached 2.5M Sales professionals
                </div>
              </div>
              <div className="inline-flex items-center justify-center pt-4 pb-0 px-0 relative flex-[0_0_auto]">
                <div className="inline-flex items-center justify-center pl-[72.69px] pr-[73.31px] pt-[9px] pb-[11px] relative flex-[0_0_auto] bg-[#29292b] rounded-md border border-solid border-[#d1d5db40]">
                  <div className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-white text-[13px] tracking-[0] leading-5 whitespace-nowrap">
                    Continue
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="inline-flex justify-end pl-0 pr-4 pt-8 pb-0 flex-[0_0_auto] items-start relative">
          <div className="flex flex-col w-[104px] gap-3 items-start relative">
            <div className="inline-flex items-start gap-7 relative flex-[0_0_auto]">
              <div className="inline-flex flex-col items-start justify-end pt-[68px] pb-0 px-0 relative flex-[0_0_auto]">
                <img
                  className="relative flex-[0_0_auto] pb-4"
                  alt="Div ds controls div"
                  src="/assets/creator-marketing/div.ds-controls-div.svg"
                />
                <div className="inline-flex flex-col items-start gap-3 relative flex-[0_0_auto]">
                  <div className="flex w-[100px] items-center justify-center pl-[26.53px] pr-[26.47px] pt-2 pb-2.5 relative flex-[0_0_auto] bg-[#00ffc6] rounded-md">
                    <div className="text-black text-[13px] leading-5 relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold tracking-[0] whitespace-nowrap">
                      Launch
                    </div>
                  </div>
                  <div className="flex w-[100px] items-center justify-center pl-[31.81px] pr-[32.19px] pt-[9px] pb-[11px] relative flex-[0_0_auto] bg-[#1d1c20] rounded-md border border-solid border-[#d1d5db40]">
                    <div className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-white text-[13px] tracking-[0] leading-5 whitespace-nowrap">
                      Abort
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
        <div className="flex flex-col w-[480px] h-[281px] items-start gap-4 pt-6 pb-[120px] px-4 rounded-xl shadow-[0px_4px_12px_#0000003d] relative bg-[#29292b]">
          <div className="flex w-[328px] gap-3 items-start relative flex-[0_0_auto]">
            <img
              className="relative max-w-[328px] w-7"
              alt="Img"
              src="/assets/creator-marketing/6445395ce83dafa65d3fa8d6_telescope-icon.svg.svg"
            />
            <div className="inline-flex flex-col gap-[3px] mr-[-89.00px] items-start relative flex-[0_0_auto]">
              <div className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-white text-[15px] tracking-[0] leading-[23px] whitespace-nowrap">
                Engagement
              </div>
              <div className="inline-flex items-start pl-0 pr-[18px] pt-0 pb-px relative flex-[0_0_auto]">
                <div className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#a9a9a9] text-xs tracking-[0] leading-5">
                  Reach decision-makers through <br />
                  authentic creator content that drives awareness and
                  credibility.
                </div>
              </div>
            </div>
          </div>
          <div className="mb-[-13.00px] flex w-[328px] items-start gap-3 relative flex-[0_0_auto]">
            <img
              className="relative max-w-[328px] w-7"
              alt="Img"
              src="/assets/creator-marketing/6445395be1685dd88906fc96_planet-icon.svg.svg"
            />
            <div className="mr-[-32.00px] inline-flex flex-col items-start gap-[3px] relative flex-[0_0_auto]">
              <div className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-white text-[15px] tracking-[0] leading-[23px] whitespace-nowrap">
                Leads
              </div>
              <div className="inline-flex pl-0 pr-[49px] pt-0 pb-px items-start relative flex-[0_0_auto]">
                <div className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#a9a9a9] text-xs tracking-[0] leading-5">
                  Generate qualified leads with <br />
                  insight-driven campaigns built for your industry.
                </div>
              </div>
            </div>
          </div>
          <div className="mb-[-76.00px] flex w-[328px] pt-4 items-start gap-3 relative flex-[0_0_auto]">
            <img
              className="relative max-w-[328px] w-7"
              alt="Img"
              src="/assets/creator-marketing/6445395b61fa11637dcae88c_ufo1-icon.svg.svg"
            />
            <div className="mr-[-218.00px] inline-flex flex-col items-start gap-[3px] relative flex-[0_0_auto]">
              <div className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-white text-sm tracking-[0] leading-[23px] whitespace-nowrap">
                Conversion
              </div>
              <div className="inline-flex pl-0 pr-[49px] pt-0 pb-px items-start relative flex-[0_0_auto]">
                <div className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#a9a9a9] text-xs tracking-[0] leading-5 whitespace-nowrap">
                  Convert influence into measurable ROI through analytics and
                  precision targeting.
                </div>
              </div>
            </div>
          </div>
          <div className="mb-[-159.00px] flex w-[328px] items-start gap-3 relative flex-[0_0_auto]">
            <img
              className="relative max-w-[328px] w-7 mt-[-6535.50px] ml-[-1113.00px]"
              alt="Img"
              src="/6445395bb850974eed13ecfa-alien-icon-svg.svg"
            />
            <div className="pl-0 pr-[31px] pt-0 pb-[21px] inline-flex flex-col items-start gap-[3px] relative flex-[0_0_auto]">
              <div className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-white text-sm tracking-[0] leading-[23px] whitespace-nowrap">
                Meet
              </div>
              <div className="relative flex items-center justify-center w-fit [font-family:'Inter',Helvetica] font-normal text-[#a9a9a9] text-xs tracking-[0] leading-5 whitespace-nowrap">
                Encounter extraterrestrial life forms and learn
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export const WhyCreatorMarketingSection = (): JSX.Element => {
  return (
    <SectionWrapper containerClassName={spacing.section.gap}>
      <SectionHeader
        title="Why"
        highlight=" Creator Marketing"
        description={
          <>
            B2B influence needs more than followers.
            <br />
            It needs credibility, precision, and creators who move markets.
          </>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full max-w-[1200px] px-4 md:px-0">
        {featureCards.map((card, index) => (
          <Card
            key={index}
            className="bg-[#1d1c20] border-[#ffffff14] rounded-2xl sm:rounded-3xl overflow-hidden min-h-[350px] sm:min-h-[400px] relative"
          >
            <CardContent className="p-6 sm:p-8 flex flex-col gap-3 relative h-full">
              <div className="flex items-start gap-3 relative z-10">
                <img
                  className="w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0"
                  alt={card.title}
                  src={card.icon}
                />
                <div className="flex flex-col gap-2 sm:gap-[15px] flex-1">
                  <h3 className={`${fonts.text.jakartaSemibold} text-white text-lg sm:text-xl tracking-[0] leading-6 sm:leading-7`}>
                    {card.title}
                  </h3>
                  <p className={`${fonts.text.jakartaMedium} text-[#a9a9a9] text-sm sm:text-base tracking-[0] leading-6 sm:leading-[25.5px]`}>
                    {card.description}
                  </p>
                </div>
              </div>
              <div className="hidden md:block">
                {card.mockup}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
};
