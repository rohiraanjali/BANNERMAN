import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import { SectionHeader } from "../../components/shared/SectionHeader";
import { SectionWrapper } from "../../components/shared/SectionWrapper";
import { fonts } from "../../lib/fonts";
import { spacing } from "../../lib/constants";

const featureCards = [
  {
    icon: "/innovation-image---colorfolio-x-webflow-template.svg",
    title: "High-income Professionals invested in education",
    description:
      "Every campaign starts with audience insights and ends with measurable outcomes, driving awareness, leads, and trust, not just engagement.",
    mockup: (
      <div className="absolute w-[99.66%] h-[81.50%] top-[18.25%] left-0">
        <img
          className="absolute top-[76px] left-52 w-[170px] h-[172px]"
          alt="Div text design"
          src="/div-text-design-orbit-1.svg"
        />
        <img
          className="absolute top-[29px] left-[163px] w-[260px] h-[264px]"
          alt="Div text design"
          src="/div-text-design-orbit-2.svg"
        />
        <img
          className="absolute top-[-15px] left-[118px] w-[350px] h-[342px]"
          alt="Div text design"
          src="/div-text-design-orbit-3.svg"
        />
        <img
          className="absolute top-[-57px] left-[73px] w-[440px] h-96"
          alt="Div text design"
          src="/div-text-design-orbit-4.svg"
        />
        <img
          className="absolute w-[90.97%] h-[164.92%] top-[-32.46%] left-[4.52%]"
          alt="Vector"
          src="/vector-5.svg"
        />
        <div className="absolute top-[167px] left-[43px] w-[500px] h-[52px] rounded-[10px]">
          <div className="absolute w-[100.20%] h-[101.92%] top-0 left-0 rounded-[80px] bg-[linear-gradient(176deg,rgba(86,86,87,1)_0%,rgba(52,52,55,1)_100%)]" />
          <div className="flex w-[500px] h-[52px] items-start absolute top-0 left-0 bg-[#262629] rounded-[80px]">
            <div className="flex w-[500px] h-[52px] justify-between pl-4 pr-[7.99px] py-2 items-center relative rounded-[80px]">
              <div className="absolute w-full h-full top-0 left-0 bg-[#ffffff01] rounded-[80px] shadow-[0px_24px_24px_-5px_#0000001a,0px_12px_12px_-5px_#0000000a]" />
              <div className="relative w-[299.09px] h-5 ml-[-484px]">
                <img
                  className="absolute top-0 left-0 w-5 h-5"
                  alt="Img"
                  src="/641cc2f93287d140e901334d-genius-icon-svg.svg"
                />
                <div className="inline-flex items-start pl-0 pr-[0.09px] py-0 absolute top-px left-9 opacity-50">
                  <div className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#eeeeee] text-base tracking-[0] leading-[17px] whitespace-nowrap">
                    How AI is transforming enterprise sales
                  </div>
                </div>
              </div>
              <div className="inline-flex max-w-[500px] h-9 items-start relative flex-[0_0_auto] ml-[-484px] bg-[#ffffff01] rounded-[80px] shadow-[0px_2px_4px_#00000029]">
                <div className="inline-flex flex-col h-9 justify-center pl-5 pr-[20.13px] pt-2.5 pb-3 flex-[0_0_auto] overflow-hidden [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.34)_0%,rgba(255,255,255,0)_100%),linear-gradient(0deg,rgba(49,49,49,1)_0%,rgba(49,49,49,1)_100%)] items-center relative rounded-[80px]">
                  <div className="absolute w-full h-[116.67%] top-0 left-0 bg-[url(/div-gen-button-stars-div.svg)] bg-cover bg-[50%_50%]" />
                  <div className="inline-flex items-start absolute w-[117.83%] h-full top-0 left-[-8.91%]">
                    <img
                      className="relative w-[84.13px] h-9"
                      alt="Image"
                      src="/image.png"
                    />
                  </div>
                  <div className="relative flex items-center justify-center w-fit mt-[-1.00px] bg-[linear-gradient(180deg,rgba(255,255,255,0.3)_0%,rgba(255,255,255,1)_75%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Inter',Helvetica] font-semibold text-transparent text-[13px] tracking-[0] leading-[14px] whitespace-nowrap">
                    Search
                  </div>
                </div>
                <div className="absolute w-full h-full top-0 left-0 rounded-[80px] border border-solid border-[#ffffff29]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: "/accountability-image---colorfolio-x-webflow-template.svg",
    title: "World's largest professional network",
    description:
      "We work with verified founders, executives, and thought leaders who already shape conversations in your industry, turning your brand into part of their authentic narrative.",
    mockup: (
      <>
        <img
          className="top-[62px] w-9 h-[338px] absolute left-0"
          alt="Div suggest orbit"
          src="/div-suggest-orbit-1.svg"
        />
        <img
          className="top-[15px] w-[81px] h-[385px] absolute left-0"
          alt="Div suggest orbit"
          src="/div-suggest-orbit-2.svg"
        />
        <img
          className="top-0 w-32 h-[400px] absolute left-0"
          alt="Div suggest orbit"
          src="/div-suggest-orbit-3.svg"
        />
        <div className="absolute top-[177px] left-[177px] w-[230px] h-[500px] bg-[#1b1b1e] rounded-[18px] border border-solid border-[#2c2c2c] shadow-[0px_2px_22px_#0000004c]">
          <img
            className="absolute w-[calc(100%_-_2px)] top-[calc(50.00%_-_249px)] left-px h-[34px]"
            alt="Img"
            src="/6423553b5f7e114147decea9-topnavigation-png.png"
          />
          <div className="w-[200px] h-8 justify-center px-3 py-2.5 top-[39px] left-[calc(50.00%_-_100px)] bg-[#29292b] rounded-[80px] flex flex-col items-start absolute">
            <div className="flex items-center gap-2.5 pl-0 pr-[13.27px] py-0 relative self-stretch w-full flex-[0_0_auto]">
              <img
                className="relative max-w-44 w-3 h-3"
                alt="Img"
                src="/6423561c45a6d5c3d206cf66-magnify-glass-svg.svg"
              />
              <div className="inline-flex items-start pl-0 pr-[5.73px] py-0 relative flex-[0_0_auto] mr-[-23.00px] opacity-50">
                <div className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#eeeeee] text-[10px] tracking-[0] leading-[11px] whitespace-nowrap">
                  Search companies, thought lead..
                </div>
              </div>
            </div>
          </div>
          <div className="w-[calc(100%_-_2px)] px-3.5 py-1 top-[81px] left-px flex flex-col items-start absolute">
            <div className="flex items-start self-stretch w-full relative flex-[0_0_auto]">
              <div className="inline-flex items-center pl-0 pr-2 py-0 relative self-stretch flex-[0_0_auto]">
                <div className="inline-flex h-[22px] items-center pl-3 pr-[14.2px] pt-[2.31px] pb-[3.69px] bg-[#424242] rounded-md relative flex-[0_0_auto]">
                  <div className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-white text-[9px] tracking-[0] leading-[15.4px] whitespace-nowrap">
                    Companies
                  </div>
                </div>
              </div>
              <div className="inline-flex items-center pl-0 pr-2 py-0 relative self-stretch flex-[0_0_auto]">
                <div className="inline-flex h-[22px] items-center pl-3 pr-[12.14px] pt-[2.31px] pb-[3.69px] bg-[#29292b] rounded-md relative flex-[0_0_auto]">
                  <div className="relative flex items-center justify-center w-fit mt-[-1.00px] opacity-50 [font-family:'Inter',Helvetica] font-normal text-white text-[10px] tracking-[0] leading-[15.4px] whitespace-nowrap">
                    Posts
                  </div>
                </div>
              </div>
              <div className="mr-[-9.18px] inline-flex items-center pl-0 pr-2 py-0 relative self-stretch flex-[0_0_auto]">
                <div className="inline-flex h-[22px] items-center pl-3 pr-[12.84px] pt-[2.31px] pb-[3.69px] bg-[#29292b] rounded-md relative flex-[0_0_auto]">
                  <div className="relative flex items-center justify-center w-fit mt-[-1.00px] opacity-50 [font-family:'Inter',Helvetica] font-normal text-white text-[10px] tracking-[0] leading-[15.4px] whitespace-nowrap">
                    People
                  </div>
                </div>
              </div>
              <div className="inline-flex items-center pl-0 pr-2 py-0 relative self-stretch flex-[0_0_auto] mr-[-72.10px]">
                <div className="inline-flex h-[22px] items-center pl-3 pr-[12.92px] pt-[2.31px] pb-[3.69px] bg-[#29292b] rounded-md relative flex-[0_0_auto]">
                  <div className="relative flex items-center justify-center w-fit mt-[-1.00px] opacity-50 [font-family:'Inter',Helvetica] font-bold text-white text-[10px] tracking-[0] leading-[15.4px] whitespace-nowrap">
                    Italian
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="absolute w-[99.13%] top-[120px] left-0 h-[103px]"
            alt="Div food sparkle div"
            src="/div-food-sparkle-div.svg"
          />
        </div>
      </>
    ),
  },
  {
    icon: "/commitment-image---colorfolio-x-webflow-template.svg",
    title: "End-to-End Management",
    description:
      "From sourcing and briefing to execution and performance tracking, we manage the entire journey so your team stays focused on growth.",
    mockup: (
      <>
        <img
          className="absolute h-[197.42%] top-[5.33%] -right-6 w-[234px]"
          alt="Div auto iterates"
          src="/div-auto-iterates-absolute.svg"
        />
        <img
          className="absolute top-[172px] left-[26px] w-[264px] h-[228px]"
          alt="Div figma design"
          src="/div-figma-design.svg"
        />
        <div className="absolute top-[184px] left-[306px] w-60 h-[512px] rounded-2xl">
          <img
            className="absolute top-[calc(50.00%_-_162px)] left-[calc(50.00%_-_50px)] w-[100px] h-[63px]"
            alt="Div iterate button"
            src="/div-iterate-button-relative.svg"
          />
          <div className="absolute w-[calc(100%_-_209px)] top-[115px] left-[38px] h-4 flex overflow-hidden">
            <div className="flex items-center justify-center -mt-0.5 w-[30.93px] h-5 [font-family:'Inter',Helvetica] font-bold text-[#ffffff4f] text-[15px] tracking-[0] leading-4">
              OFF
            </div>
          </div>
          <img
            className="absolute -top-3 left-[-280px] w-[264px] h-[228px]"
            alt="Div figma design"
            src="/div-figma-design-genius.svg"
          />
          <div className="absolute top-[110px] left-[84px] w-7 h-7 rounded-[28px] shadow-[inset_-2px_2px_4px_#ffffff45,0px_2px_4px_#00000066] [background:radial-gradient(50%_50%_at_50%_50%,rgba(49,49,49,1)_22%,rgba(75,75,75,1)_68%,rgba(116,115,115,1)_100%)]" />
        </div>
      </>
    ),
  },
  {
    icon: "/excellence-image---colorfolio-x-webflow-template.svg",
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
                src="/img-margin.svg"
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
                  className="relative flex-[0_0_auto]"
                  alt="Div ds controls div"
                  src="/div-ds-controls-div-margin.svg"
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
                <img
                  className="relative flex-[0_0_auto]"
                  alt="Div ds controls div"
                  src="/div-ds-controls-div-margin-1.svg"
                />
              </div>
            </div>
            <div className="pl-0 pr-[153.67px] py-0 mr-[-182.00px] bg-[#ffffff01] shadow-[0px_4px_12px_#0000003d] inline-flex items-start relative flex-[0_0_auto]">
              <div className="inline-flex items-end justify-between pt-2 pb-[9px] px-[9px] flex-[0_0_auto] rounded-md border border-solid border-[#d1d5db40] relative bg-[#29292b]">
                <div className="inline-flex items-end gap-3 relative flex-[0_0_auto]">
                  <img
                    className="relative max-w-[90.33px] w-6 h-6 mt-[-6568.50px] ml-[-986.00px]"
                    alt="Img"
                    src="/64469e98c7172eecb01ec049-planet-p-500-png.png"
                  />
                  <div className="pl-0 pr-[1.33px] pt-0 pb-px inline-flex items-start relative flex-[0_0_auto]">
                    <div className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-white text-[13px] tracking-[0] leading-6 whitespace-nowrap">
                      Nebulon
                    </div>
                  </div>
                </div>
                <img
                  className="relative max-w-[286px] w-6 mt-[-6568.50px] ml-[-2062.33px]"
                  alt="Img"
                  src="/644977d78c3ec240dff75184-randomize-icon-svg.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[480px] h-[281px] items-start gap-4 pt-6 pb-[120px] px-4 rounded-xl shadow-[0px_4px_12px_#0000003d] relative bg-[#29292b]">
          <div className="flex w-[328px] gap-3 items-start relative flex-[0_0_auto]">
            <img
              className="relative max-w-[328px] w-7"
              alt="Img"
              src="/6445395ce83dafa65d3fa8d6-telescope-icon-svg.svg"
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
              src="/6445395be1685dd88906fc96-planet-icon-svg.svg"
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
          <div className="mb-[-76.00px] flex w-[328px] items-start gap-3 relative flex-[0_0_auto]">
            <img
              className="relative max-w-[328px] w-7"
              alt="Img"
              src="/6445395b61fa11637dcae88c-ufo1-icon-svg.svg"
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
