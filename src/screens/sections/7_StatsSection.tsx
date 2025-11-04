import { UserPlusIcon } from "lucide-react";
import React from "react";
import { Avatar, AvatarImage } from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { SectionWrapper } from "../../components/shared/SectionWrapper";
import { SectionHeader } from "../../components/shared/SectionHeader";
import { fonts } from "../../lib/fonts";
import { spacing } from "../../lib/constants";

const statsData = [
  {
    bgColor: "bg-[#00896a]",
    textColor: "text-white",
    statColor: "text-[#00ffc6]",
    stat: "1 Billion",
    description: "Members in 200+ countries worldwide",
    source: "Source: LinkedIn",
    vectorSrc: "/vector.svg",
  },
  {
    bgColor: "bg-white",
    textColor: "text-black",
    statColor: "text-[#00896a]",
    stat: "2x",
    description: "Conversion rates on LinkedIn compared to other channels",
    source: "Source: WebFX",
    vectorSrc: "/vector-3.svg",
  },
  {
    bgColor: "bg-[#00896a]",
    textColor: "text-white",
    statColor: "text-[#00ffc6]",
    stat: "55%",
    description: "More likely to buy from brands that use influencers",
    source: "Source: Capterra",
    vectorSrc: "/vector-2.svg",
  },
  {
    bgColor: "bg-white",
    textColor: "text-black",
    statColor: "text-[#00896a]",
    stat: "$33.80",
    description: "Average CPM of LinkedIn Ads",
    source: "Source: LinkedIn",
    vectorSrc: "/vector-7.svg",
  },
  {
    bgColor: "bg-[#221f29]",
    textColor: "text-white",
    statColor: "text-[#00ffc6]",
    stat: "6.5x",
    description: "ROI average for businesses investing in Influencer Marketing",
    source: "Source: Saleslion",
    vectorSrc: "/vector-4.svg",
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
    buttonBg: "bg-[#2d64bc]",
    buttonTextColor: "text-white",
    aboutGap: "gap-[15.5px]",
    aboutPadding: "p-[15.5px]",
    aboutTitleSize: "text-[20.7px]",
    aboutTitleLeading: "leading-[22.6px]",
    aboutTextSize: "text-[18.6px]",
    aboutTextLeading: "leading-[22.6px]",
    companyLogoSize: "w-[58.37px] h-[58.37px]",
    companyNameSize: "text-[20.4px]",
    companyNameLeading: "leading-[22.6px]",
    companyRoleSize: "text-[17.3px]",
    companyRoleLeading: "leading-[19.3px]",
    logoTop: "top-3.5",
    logoRight: "right-[15px]",
    logoSize: "w-[37px] h-[34px]",
    logoSrc: "/group-35423.png",
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
    buttonBg: "bg-[#2d64bc]",
    buttonTextColor: "text-white",
    aboutGap: "gap-[16.36px]",
    aboutPadding: "p-[16.36px]",
    aboutTitleSize: "text-[21.8px]",
    aboutTitleLeading: "leading-[23.9px]",
    aboutTextSize: "text-[19.6px]",
    aboutTextLeading: "leading-[23.9px]",
    companyLogoSize: "w-[61.62px] h-[61.62px]",
    companyNameSize: "text-[21.5px]",
    companyNameLeading: "leading-[23.9px]",
    companyRoleSize: "text-[18.3px]",
    companyRoleLeading: "leading-[20.3px]",
    logoTop: "top-[15px]",
    logoRight: "right-4",
    logoSize: "w-[39px] h-9",
    logoSrc: "/group-35423-1.png",
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
    buttonBg: "bg-[#00ffc6]",
    buttonTextColor: "text-neutral-900",
    aboutGap: "gap-[17.22px]",
    aboutPadding: "p-[17.22px]",
    aboutTitleSize: "text-[23px]",
    aboutTitleLeading: "leading-[25.1px]",
    aboutTextSize: "text-[20.7px]",
    aboutTextLeading: "leading-[25.1px]",
    companyLogoSize: "w-[64.86px] h-[64.86px]",
    companyNameSize: "text-[22.6px]",
    companyNameLeading: "leading-[25.1px]",
    companyRoleSize: "text-[19.3px]",
    companyRoleLeading: "leading-[21.4px]",
    logoTop: "top-[15px]",
    logoRight: "right-[17px]",
    logoSize: "w-[41px] h-[41px]",
    logoSrc: "/group-35423-2.png",
  },
];

export const StatsSection = (): JSX.Element => {
  return (
    <SectionWrapper
      sectionPadding={spacing.section.pyLarge}
      maxWidth="large"
      containerClassName="justify-center"
    >
      <SectionHeader
        title="These "
        highlight="Stats"
        titleClassName="whitespace-nowrap"
      />
      <div className="flex flex-col items-center gap-6 w-full">
        <h2 className={`${fonts.anton} font-normal text-[52px] text-center tracking-[0] leading-[62.4px] whitespace-nowrap`}>
          <span className="text-white"> don&apos;t lie</span>
        </h2>
      </div>

        <div className="flex items-center justify-center gap-[54px] w-full flex-wrap lg:flex-nowrap">
          <div className="relative w-[545.37px] h-[469.59px] flex-shrink-0">
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
                        src="assets/profile/kevin.png"
                        alt="Kévin Moënne-Loccoz"
                        className="object-cover"
                      />
                    </Avatar>

                    <div className="flex flex-col gap-[10.33px] flex-1">
                      <div
                        className={`[font-family:'Inter',Helvetica] font-semibold text-[#ffffffcc] ${card.nameSize} ${card.nameLeading} tracking-[0] whitespace-nowrap`}
                      >
                        Kévin Moënne-Loccoz
                      </div>

                      <div
                        className={`[font-family:'Inter',Helvetica] font-medium text-[#ffffff4c] ${card.connectionSize} ${card.connectionLeading} tracking-[0] whitespace-nowrap`}
                      >
                        {index === 2 ? "1,11,099 Followers" : "500+connections"}
                      </div>

                      <Button
                        className={`${card.buttonPadding} ${card.buttonBg} rounded-full h-auto gap-[8.27px]`}
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
                      className={`flex flex-col gap-[10.33px] ${card.aboutPadding} bg-[#ffffff05] ${card.rounded} border-[none] before:content-[''] before:absolute before:inset-0 ${card.borderWidth} ${card.borderRadius} before:[background:linear-gradient(180deg,rgba(255,255,255,0.29)_0%,rgba(239,239,239,0.02)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none relative`}
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
                          Tell me a time you implement
                        </div>

                        <div
                          className={`[font-family:'Inter',Helvetica] font-normal text-[#ffffff80] ${card.aboutTextSize} ${card.aboutTextLeading} tracking-[0] underline whitespace-nowrap`}
                        >
                          see more...
                        </div>
                      </div>
                    </div>

                    <div
                      className={`flex flex-col ${card.aboutPadding} bg-[#ffffff05] ${card.rounded} border-[none] before:content-[''] before:absolute before:inset-0 ${card.borderWidth} ${card.borderRadius} before:[background:linear-gradient(180deg,rgba(255,255,255,0.29)_0%,rgba(239,239,239,0.02)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none relative`}
                    >
                      <div className="flex items-center gap-[16.36px] mb-4">
                        <img
                          className={`${card.companyLogoSize}`}
                          alt="lemlist logo"
                          src="/vector-1.svg"
                        />

                        <div className="flex flex-col gap-[10.91px]">
                          <div
                            className={`[font-family:'Inter',Helvetica] font-semibold text-[#ffffffcc] ${card.companyNameSize} ${card.companyNameLeading} tracking-[0] whitespace-nowrap`}
                          >
                            lemlist
                          </div>

                          <div
                            className={`[font-family:'Inter',Helvetica] font-medium text-[#ffffff80] ${card.companyRoleSize} ${card.companyRoleLeading} tracking-[0] whitespace-nowrap`}
                          >
                            Head of Growth
                          </div>
                        </div>
                      </div>

                      <img
                        className="w-full"
                        alt="Experience timeline"
                        src={
                          index === 0
                            ? "/frame-95262.svg"
                            : index === 1
                              ? "/frame-95262-1.svg"
                              : "/frame-95262-2.svg"
                        }
                      />
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

          <div className="flex flex-col items-start justify-center gap-[15px] w-full max-w-[622px]">
            {statsData.map((stat, index) => (
              <div
                key={index}
                className={`relative ${index === 1 || index === 3 ? "ml-auto" : ""} ${index === 0 ? "w-[452px]" : index === 1 ? "w-[570px]" : index === 2 ? "w-[528px]" : index === 3 ? "w-[367px]" : "w-[610px]"} h-[70px]`}
              >
                <img
                  className="absolute top-[-22px] left-[-27px] w-full h-[124px]"
                  alt="Background shape"
                  src={stat.vectorSrc}
                />

                <div
                  className={`absolute top-1.5 ${index === 3 ? "left-5" : "left-5"} flex flex-col ${index === 4 ? "gap-2" : ""}`}
                >
                  <div
                    className={`[font-family:'Inter',Helvetica] ${index === 1 || index === 3 ? "font-semibold" : index === 4 ? "font-semibold" : "font-normal"} text-lg tracking-[0] leading-[28.8px] whitespace-nowrap`}
                  >
                    <span
                      className={`${index === 1 || index === 3 ? stat.statColor : "font-bold " + stat.statColor}`}
                    >
                      {stat.stat}
                    </span>
                    <span
                      className={`${index === 1 || index === 3 ? stat.textColor : "font-semibold " + stat.textColor}`}
                    >
                      {" "}
                      {stat.description}
                    </span>
                  </div>

                  <div
                    className={`[font-family:'Inter',Helvetica] font-normal ${stat.textColor} text-base tracking-[0] leading-[28.8px] whitespace-nowrap`}
                  >
                    {stat.source}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    </SectionWrapper>
  );
};
