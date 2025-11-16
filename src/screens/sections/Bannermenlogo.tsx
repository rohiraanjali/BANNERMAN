import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { SectionWrapper } from "../../components/shared/SectionWrapper";
import { fonts } from "../../lib/fonts";
import { colors, spacing } from "../../lib/constants";

export const Bannermenlogo = (): JSX.Element => {
  

  return (
    <SectionWrapper
      sectionPadding={spacing.section.pyMedium}
      containerClassName="justify-center"
    >
   <img
              src="/assets/creator-marketing/Group 1244831279 2 (1).svg"
              alt="Bannermen Logo"
  className="w-[500px] md:w-[500px] lg:w-[1000px] mx-auto p-8"
            />
    </SectionWrapper>
  );
};
