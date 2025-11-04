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
      <div className="flex flex-col items-center gap-8 sm:gap-12 md:gap-[75px] w-full">
        <div className="flex flex-col items-center gap-4 sm:gap-[22px] w-full max-w-[1366px]">
          <div className="flex flex-col items-center gap-4 sm:gap-6 w-full px-4">
            <h2 className="flex flex-wrap items-center justify-center gap-x-2 sm:gap-x-3 [font-family:'Anton',Helvetica] font-normal text-[28px] sm:text-[36px] md:text-[42px] lg:text-[52px] text-center tracking-[0] leading-[34px] sm:leading-[42px] md:leading-[52px] lg:leading-[66px]">
              <span className="text-white">We Build</span>
              <span className="text-[#00ffc6]">Influence</span>
              <span className="text-white">That Moves</span>
              <span className="text-[#00ffc6]">Business</span>
            </h2>

            <p className="max-w-[834px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-white text-sm sm:text-base md:text-lg text-center tracking-[0] leading-6 sm:leading-7 md:leading-8 px-4">
              We help B2B and tech companies scale awareness, trust, and demand
              by partnering with creators who drive professional conversations
              and buying decisions.
            </p>
          </div>
        </div>

        <div className="w-full max-w-[1366px] h-auto aspect-video px-4 sm:px-0">
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
