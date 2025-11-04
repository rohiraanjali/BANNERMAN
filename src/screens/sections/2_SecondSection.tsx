import React from "react";
import { SectionWrapper } from "../../components/shared/SectionWrapper";
import { SectionHeader } from "../../components/shared/SectionHeader";
import { spacing } from "../../lib/constants";

export const WhyChooseUsSection = (): JSX.Element => {
  return (
    <SectionWrapper
      maxWidth="default"
      padding="large"
      containerClassName="justify-center"
    >
      <div className={`flex flex-col items-center ${spacing.section.gap} w-full`}>
        <div className="flex flex-col items-center gap-[22px] w-full max-w-[1366px]">
          <div className="flex flex-col items-center gap-6 w-full">
            <h2 className="flex flex-wrap items-center justify-center gap-x-3 [font-family:'Anton',Helvetica] font-normal text-[52px] text-center tracking-[0] leading-[66px]">
              <span className="text-white">We Build</span>
              <span className="text-[#00ffc6]">Influence</span>
              <span className="text-white">That Moves</span>
              <span className="text-[#00ffc6]">Business</span>
            </h2>

            <p className="max-w-[834px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-white text-lg text-center tracking-[0] leading-8">
              We help B2B and tech companies scale awareness, trust, and demand
              by partnering with creators who drive professional conversations
              and buying decisions.
            </p>
          </div>
        </div>

        <div className="w-full max-w-[1366px] h-auto aspect-video">
          <iframe
            className="w-full h-full rounded-xl"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </SectionWrapper>
  );
};
