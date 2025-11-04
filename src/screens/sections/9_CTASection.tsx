import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { SectionWrapper } from "../../components/shared/SectionWrapper";
import { fonts } from "../../lib/fonts";
import { colors, spacing } from "../../lib/constants";

export const CTASection = (): JSX.Element => {
  const buttons = [{ label: "I'm a Brand" }, { label: "I'm a Creator" }];

  return (
    <SectionWrapper
      sectionPadding={spacing.section.pyMedium}
      containerClassName="justify-center"
    >
      <Card className={`relative w-full ${spacing.container.maxWidth.small} ${colors.background.cyan} rounded-[20px] border-0 overflow-hidden mx-4 md:mx-0`}>
        <CardContent className="flex flex-col items-center gap-8 sm:gap-12 md:gap-[69px] px-6 py-12 sm:py-16 md:px-[94px] md:py-20">
          <h2 className={`relative flex items-center justify-center w-full max-w-[841px] ${fonts.text.jakartaBold} ${colors.text.darkGreen} text-xl sm:text-2xl md:text-[36px] lg:text-[42px] text-center tracking-[0.16px] leading-tight sm:leading-7 md:leading-9 lg:leading-[21.1px] px-4`}>
            Let&apos;s Build Influence That Builds Business
          </h2>

          <div className="inline-flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto">
            {buttons.map((button, index) => (
              <Button
                key={index}
                className={`h-auto w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 ${colors.background.black} rounded-[30px] border-2 border-solid border-black hover:bg-black/90 ${fonts.text.jakartaMedium} ${colors.text.white} text-base sm:text-lg tracking-[0.16px] leading-6 sm:leading-[21.1px] whitespace-nowrap`}
              >
                {button.label}
              </Button>
            ))}
          </div>
        </CardContent>

        <div className="absolute top-[153px] left-[255px] w-[100px] h-[100px] rotate-[-31deg] bg-[url(/667c32917d57dfb4a7000d70-adfa-p-500-png.png)] bg-cover bg-[50%_50%] pointer-events-none hidden md:block" />
      </Card>
    </SectionWrapper>
  );
};
