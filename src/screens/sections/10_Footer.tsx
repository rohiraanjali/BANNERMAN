import React from "react";
import { fonts } from "../../lib/fonts";
import { colors } from "../../lib/constants";

const navigationLinks = [
  { text: "What We Do" },
  { text: "Creator" },
  { text: "Contact Us" },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className={`w-full ${colors.background.darkGreen} py-12`}>
      <div className="flex flex-col items-center gap-8">
        <nav className="flex items-center gap-6 border-b border-[#00ffc6] pb-3">
          {navigationLinks.map((link, index) => (
            <button
              key={index}
              className={`${fonts.text.antonNormal} ${colors.text.cyan} text-base tracking-[0.32px] leading-[15.7px] hover:opacity-80 transition-opacity`}
            >
              {link.text}
            </button>
          ))}
        </nav>

        <div className={`${fonts.text.jakartaNormal} ${colors.text.cyan} text-xs tracking-[0.12px] leading-[15.8px]`}>
          © 2024, All Rights Reserved
        </div>
      </div>
    </footer>
  );
};
