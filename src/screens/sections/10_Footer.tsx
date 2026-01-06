import React from "react";
import { fonts } from "../../lib/fonts";
import { colors } from "../../lib/constants";

import { Linkedin, Twitter, Mail } from "lucide-react";

const navigationLinks = [
  {
    text: "LinkedIn",
    href: "https://www.linkedin.com/company/getbannermen/",
    icon: <Linkedin size={18} />,
  },
  {
    text: "Twitter",
    href: "https://twitter.com/YOUR_USERNAME",
    icon: <Twitter size={18} />,
  },
  {
    text: "Mail",
    href: "mailto:anjali@getbannermen.com",
    icon: <Mail size={18} />,
  },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className={`w-full ${colors.background.darkGreen} py-8 sm:py-12`}>
      <div className="flex flex-col items-center gap-6 sm:gap-8 px-4">

        <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 border-b border-[#00ffc6] pb-3 w-50">
          {navigationLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target={link.text === "Mail" ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className={`
                flex items-center gap-2
                ${fonts.text.antonNormal}
                ${colors.text.cyan}
                text-sm sm:text-base
                tracking-[0.32px] leading-[15.7px]
                hover:opacity-80 transition-opacity
              `}
            >
              {link.icon}
              {link.text}
            </a>
          ))}
        </nav>

        <div
          className={`${fonts.text.jakartaNormal} ${colors.text.cyan} text-xs tracking-[0.12px] leading-[15.8px] text-center`}
        >
          © 2025, All Rights Reserved
        </div>
      </div>
    </footer>
  );
};
