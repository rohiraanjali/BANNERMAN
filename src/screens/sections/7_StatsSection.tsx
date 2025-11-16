import { UserPlusIcon } from "lucide-react";
import React from "react";
import { Avatar, AvatarImage } from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { SectionWrapper } from "../../components/shared/SectionWrapper";
import { SectionHeader } from "../../components/shared/SectionHeader";
import { fonts } from "../../lib/fonts";
import { spacing } from "../../lib/constants";

interface StatCard {
  highlight: string;
  text: string;
  source: string;
  isLight?: boolean;
}

const stats: StatCard[] = [
  {
    highlight: "1 Billion",
    text: "Members in 200+ countries worldwide",
    source: "LinkedIn",
  },
  {
    highlight: "2x",
    text: "Conversion rates on LinkedIn compared to other channels",
    source: "WebFX",
    isLight: true,
  },
  {
    highlight: "55%",
    text: "More likely to buy from brands that use influencers",
    source: "Capterra",
  },
  {
    highlight: "$33.80",
    text: "Average CPM of LinkedIn Ads",
    source: "LinkedIn",
    isLight: true,
  },
  {
    highlight: "6.5x",
    text: "ROI average for businesses investing in Influencer Marketing",
    source: "Saleslion",
  },
];

const profileCards = [
  {
    scale: "scale-[0.95]",
    zIndex: "z-10",
    top: "top-px",
    left: "left-[27px]",
    width: "w-[491px]",
    height: "h-[402px]",
    padding: "p-[20.67px]",
    rounded: "rounded-[14.47px]",
    borderWidth: "before:p-[1.03px]",
    borderRadius: "before:rounded-[14.47px]",
    avatarSize: "w-[111.6px] h-[111.6px]",
    avatarRounded: "rounded-[93px]",
    nameSize: "text-[20.4px]",
    nameLeading: "leading-[22.6px]",
    connectionSize: "text-[16.5px]",
    connectionLeading: "leading-[22.6px]",
    buttonPadding: "px-[15.5px] py-[10.33px]",
    buttonIconSize: "w-[16.53px] h-[16.53px]",
    buttonTextSize: "text-[16.5px]",
    buttonTextColor: "text-white",
    aboutGap: "gap-[15.5px]",
    aboutPadding: "p-[15.5px]",
    aboutTitleSize: "text-[18.8px]",
    aboutTitleLeading: "leading-[20.1px]",
    aboutTextSize: "text-[16.6px]",
    aboutTextLeading: "leading-[22.6px]",
    companyLogoSize: "w-[58.37px] h-[58.37px]",
    companyNameSize: "text-[20.4px]",
    companyNameLeading: "leading-[22.6px]",
    companyRoleSize: "text-[17.3px]",
    companyRoleLeading: "leading-[19.3px]",
    logoTop: "top-3.5",
    logoRight: "right-[15px]",
    logoSize: "w-[37px] h-[34px]",
    logoSrc: "/assets/creator-marketing/Linkedin.svg",
  },
  {
    scale: "scale-[0.98]",
    zIndex: "z-20",
    top: "top-6",
    left: "left-3.5",
    width: "w-[518px]",
    height: "h-[424px]",
    padding: "p-[21.81px]",
    rounded: "rounded-[15.27px]",
    borderWidth: "before:p-[1.09px]",
    borderRadius: "before:rounded-[15.27px]",
    avatarSize: "w-[117.8px] h-[117.8px]",
    avatarRounded: "rounded-[98.17px]",
    nameSize: "text-[21.5px]",
    nameLeading: "leading-[23.9px]",
    connectionSize: "text-[17.5px]",
    connectionLeading: "leading-[23.9px]",
    buttonPadding: "px-[16.36px] py-[10.91px]",
    buttonIconSize: "w-[17.45px] h-[17.45px]",
    buttonTextSize: "text-[17.5px]",
    buttonTextColor: "text-white",
    aboutGap: "gap-[16.36px]",
    aboutPadding: "p-[16.36px]",
    aboutTitleSize: "text-[18.8px]",
    aboutTitleLeading: "leading-[20.1px]",
    aboutTextSize: "text-[16.6px]",
    aboutTextLeading: "leading-[23.9px]",
    companyLogoSize: "w-[61.62px] h-[61.62px]",
    companyNameSize: "text-[21.5px]",
    companyNameLeading: "leading-[23.9px]",
    companyRoleSize: "text-[18.3px]",
    companyRoleLeading: "leading-[20.3px]",
    logoTop: "top-[15px]",
    logoRight: "right-4",
    logoSize: "w-[39px] h-9",
    logoSrc: "/assets/creator-marketing/Linkedin.svg",
  },
  {
    scale: "scale-100",
    zIndex: "z-30",
    top: "top-[47px]",
    left: "left-px",
    width: "w-[545px]",
    height: "h-[423px]",
    padding: "p-[22.96px]",
    rounded: "rounded-[16.07px]",
    borderWidth: "before:p-[1.15px]",
    borderRadius: "before:rounded-[16.07px]",
    avatarSize: "w-[124px] h-[124px]",
    avatarRounded: "rounded-[103.33px]",
    nameSize: "text-[22.6px]",
    nameLeading: "leading-[25.1px]",
    connectionSize: "text-[18.4px]",
    connectionLeading: "leading-[25.1px]",
    buttonPadding: "px-[17.22px] py-[11.48px]",
    buttonIconSize: "w-[18.37px] h-[18.37px]",
    buttonTextSize: "text-[18.4px]",
    buttonTextColor: "text-neutral-900",
    aboutGap: "gap-[17.22px]",
    aboutPadding: "p-[17.22px]",
    aboutTitleSize: "text-[18.8px]",
    aboutTitleLeading: "leading-[20.1px]",
    aboutTextSize: "text-[16.6px]",
    aboutTextLeading: "leading-[25.1px]",
    companyLogoSize: "w-[64.86px] h-[64.86px]",
    companyNameSize: "text-[22.6px]",
    companyNameLeading: "leading-[25.1px]",
    companyRoleSize: "text-[19.3px]",
    companyRoleLeading: "leading-[21.4px]",
    logoTop: "top-[15px]",
    logoRight: "right-[17px]",
    logoSize: "w-[41px] h-[41px]",
    logoSrc: "/assets/creator-marketing/Linkedin.svg",
  },
];

export const StatsSection = (): JSX.Element => {
  return (
 <SectionWrapper containerClassName={spacing.section.gap}>   
      <SectionHeader
        title="These "
        highlight="Stats don't lie"
        titleClassName="whitespace-nowrap"
      />
      {/* <div className="flex flex-col items-center gap-4 sm:gap-6 w-full">
        <h2 className={`${fonts.anton} font-normal text-[28px] sm:text-[36px] md:text-[42px] lg:text-[52px] text-center tracking-[0] leading-[34px] sm:leading-[42px] md:leading-[50px] lg:leading-[62.4px]`}>
        </h2>
      </div> */}

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-[54px] w-full px-4 md:px-0">
        <div className="relative w-full max-w-[545.37px] h-[300px] sm:h-[400px] md:h-[469.59px] flex-shrink-0 hidden md:block">
          {profileCards.map((card, index) => (
            <Card
              key={index}
              className={`absolute ${card.top} ${card.left} ${card.width} ${card.height} ${card.zIndex} ${card.scale} bg-neutral-900 ${card.rounded} overflow-hidden border-[none] before:content-[''] before:absolute before:inset-0 ${card.borderWidth} ${card.borderRadius} before:[background:linear-gradient(180deg,rgba(255,255,255,0.29)_0%,rgba(239,239,239,0.02)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none`}
            >
              <CardContent
                className={`${card.padding} flex flex-col gap-[40.3px] h-full`}
              >
                <div className="flex items-center gap-[20.67px] w-full">
                  <Avatar
                    className={`${card.avatarSize} ${card.avatarRounded}`}
                  >
                    <AvatarImage
                      src="/assets/creator-marketing/morgan.jpeg"
                      alt="Kévin Moënne-Loccoz"
                      className="object-cover"
                    />
                  </Avatar>

                  <div className="flex flex-col gap-[10.33px] flex-1">
                    <div
                      className={`[font-family:'Inter',Helvetica] font-semibold text-[#ffffffcc] ${card.nameSize} ${card.nameLeading} tracking-[0] whitespace-nowrap`}
                    >
                      Morgan J Ingram
                    </div>

                    <div
                      className={`[font-family:'Inter',Helvetica] font-medium text-[#ffffff4c] ${card.connectionSize} ${card.connectionLeading} tracking-[0] whitespace-nowrap`}
                    >
                      {index === 2 ? "1,88,679 followers" : "500+connections"}
                    </div>

                    <Button
                      className={`${card.buttonPadding} bg-[#00ffc6] rounded-full h-auto gap-[8.27px]`}
                    >
                      <UserPlusIcon
                        className={`${card.buttonIconSize} ${card.buttonTextColor}`}
                      />
                      <span
                        className={`[font-family:'Inter',Helvetica] font-bold ${card.buttonTextColor} ${card.buttonTextSize} tracking-[-0.33px]`}
                      >
                        Connect
                      </span>
                    </Button>
                  </div>
                </div>

                <div className={`flex flex-col ${card.aboutGap} w-full`}>
                  <div
                    className={`flex flex-col gap-[10.33px] ${card.aboutPadding} bg-[#ffffff05] ${card.rounded} border-[none] 
    before:content-[''] before:absolute before:inset-0 ${card.borderWidth} ${card.borderRadius} 
    before:[background:linear-gradient(180deg,rgba(255,255,255,0.29)_0%,rgba(239,239,239,0.02)_100%)] 
    before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] 
    before:[-webkit-mask-composite:xor] 
    before:[mask-composite:exclude] 
    before:z-[1] 
    before:pointer-events-none 
    relative`}
                  >

                    <div
                      className={`[font-family:'Inter',Helvetica] font-semibold text-[#ffffffcc] ${card.aboutTitleSize} ${card.aboutTitleLeading} tracking-[0] whitespace-nowrap`}
                    >
                      About
                    </div>

                    <div className="flex items-start gap-[10.33px]">
                      <div
                        className={`[font-family:'Inter',Helvetica] font-medium text-[#ffffff80] ${card.aboutTextSize} ${card.aboutTextLeading} tracking-[0] whitespace-nowrap`}
                      >
                        For B2B Teams That Want Outbound → Reve..
                      </div>


                    </div>
                  </div>

                  <div
                    className={`flex flex-col ${card.aboutPadding} bg-[#ffffff05] ${card.rounded} border-[none] before:content-[''] before:absolute before:inset-0 ${card.borderWidth} ${card.borderRadius} before:[background:linear-gradient(180deg,rgba(255,255,255,0.29)_0%,rgba(239,239,239,0.02)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none relative`}
                  >
                    <div className="flex items-center gap-[16.36px] mb-4 rounded-500">
                      <img
                        className={`${card.companyLogoSize} rounded-full`}
                        alt="luster logo"
                        src="/assets/creator-marketing/luster_ai_logo.jpeg"
                      />

                      <div className="flex flex-col gap-[10.91px]">
                        <div
                          className={`[font-family:'Inter',Helvetica] font-semibold text-[#ffffffcc] ${card.companyNameSize} ${card.companyNameLeading} tracking-[0] whitespace-nowrap`}
                        >
                          Luster
                        </div>

                        <div
                          className={`[font-family:'Inter',Helvetica] font-medium text-[#ffffff80] ${card.companyRoleSize} ${card.companyRoleLeading} tracking-[0] whitespace-nowrap`}
                        >
                          GTM and Content Advisor
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <img
                  className={`absolute ${card.logoTop} ${card.logoRight} ${card.logoSize}`}
                  alt="LinkedIn logo"
                  src={card.logoSrc}
                />
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-col items-start justify-center gap-4 sm:gap-[15px] w-full max-w-[622px]">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`relative rounded-2xl px-6 py-3 inline-block ${index % 2 === 0 ? "self-start" : "self-end"
                } ${stat.isLight ? "bg-[#b8fff0]" : "bg-[#1a1a1a]"} animate-pulseNeon`}
              style={{
                border: "2px solid rgba(0,255,195,1)",
                boxShadow:
                  "0 0 15px rgba(0,255,195,0.4), 0 0 40px rgba(0,255,195,0.25), inset 0 0 20px rgba(0,255,195,0.15)",
              }}
            >
              <p
                className={`font-semibold leading-snug ${stat.isLight ? "text-black" : "text-white"
                  }`}
                style={{
                  fontSize: "18px",
                }}
              >
                <span
                  className="mr-1"
                  style={{
                    color: index % 2 === 0 ? "#00ffc3" : "#008A6B",
                  }}
                >
                  {stat.highlight}
                </span>
                {stat.text}
              </p>
              <p
                className={`mt-1 opacity-80 ${stat.isLight ? "text-black" : "text-gray-300"
                  }`}
                style={{ fontSize: "16px" }}
              >
                Source: {stat.source}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
