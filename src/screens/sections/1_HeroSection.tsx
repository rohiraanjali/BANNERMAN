import React from "react";
import { Button } from "../../components/ui/button";
import { fonts } from "../../lib/fonts";

const navButtons = [
  {
    text: "BOOK A CALL",
    href: "https://calendly.com/bannermen",
    variant: "default" as const,
    className: `
    h-auto w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4
    bg-black text-[#00ffc6] border-2 border-black
    transition-all duration-300
    hover:text-white hover:shadow-[0_0_15px_4px_rgba(255,255,255,0.8)]
  `,

  },
  {
    text: "FOR CREATORS",
    href: "https://x4jb96vcirt.typeform.com/to/cgf2g99q",
    variant: "outline" as const,
    className:
      "bg-transparent text-[#151304] border-[#151304] hover:bg-[#151304]/10",
  },
];

const logos = [
  {
    src: "/assets/stack-logos/linkedin_black-logo_brandlogos.net_qahzv.png",
    className: "top-[calc(50.00%_-_18px)] h-9",
  },
  {
    src: "/assets/stack-logos/x-social-media-black-icon.png",
    className: "top-[calc(50.00%_-_26px)] h-[36px]",
  },
  {
    src: "/assets/stack-logos/youtube-2-logo-black-and-white.png",
    className: "top-[calc(50.00%_-_26px)] h-[40px]",
  },
  {
    src: "/assets/stack-logos/tiktok-logo.webp",
    className: "top-[calc(50.00%_-_21px)] h-[40px]",
  },
  {
    src: "/assets/stack-logos/Black_Spotify_logo_with_text.svg.png",
    className: "top-[calc(50.00%_-_23px)] h-[46px]",
  },
  {
    src: "/assets/stack-logos/Beehiv-logo.png",
    className: "top-[calc(50.00%_-_28px)] h-[40px]",
  },
  {
    src: "/assets/stack-logos/Medium-logo.svg",
    className: "top-[calc(50.00%_-_23px)] h-[36px]",
  },
  {
    src: "/assets/stack-logos/substack-logo.svg",
    className: "top-[calc(50.00%_-_30px)] h-[30px]",
  },
];

export const HeroSection = (): JSX.Element => {
  const allLogos = [...logos, ...logos, ...logos];

  return (
    <section className="relative w-full h-screen bg-[#00ffc6] flex flex-col pb-8">
      <header className="w-full py-4 sm:py-5 px-4 sm:px-6 md:px-10">
        <nav className="max-w-[1470px] mx-auto flex items-center justify-between">
          <img
            className="h-10 sm:h-12 md:h-14 w-auto"
            alt="Bannerman Logo"
            src="/assets/logo.svg"
          />

          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            {navButtons.map((button, index) => (
              <Button
                key={index}
                variant={button.variant}
                className={`h-[36px] sm:h-[38px] md:h-[42px] px-3 sm:px-4 md:px-[17px] rounded-[100px] text-[10px] sm:text-xs ${button.className}`}
              >
                <a href={button.href} target="_blank" rel="noopener noreferrer">
                  {button.text}
                </a>
              </Button>
            ))}
          </div>
        </nav>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8 sm:py-12">
        <div className="max-w-[1130px] w-full flex flex-col items-center gap-6 sm:gap-8">
          <img
            className="w-full max-w-[994px] h-auto px-4 sm:px-0"
            alt="Hero graphic"
            src="/assets/logo-main.svg"
          />

          <div className="w-full sm: w-[200px] max-w-[636px] rounded-lg border-r border-l border-[#151304] flex items-center justify-center">
            <h1 className={`${fonts.heading.hero} text-[#151304] text-center md:text-[28px] text-[18px]`}>
              Your Partner for Influencer-Led B2B Growth
            </h1>
          </div>
          <br />
          <br />
          <br />
          <br />

          <Button className="
    h-[56px] sm:h-[64px] md:h-[71px]
    px-6 sm:px-[24px] md:px-[30px]
    bg-black rounded-[40px]
    border-2 border-black
    transition-all duration-300
    hover:text-white
    hover:shadow-[0_0_15px_4px_rgba(255,255,255,0.8)]
  "
          >

          <a
    href="https://calendly.com/bannermen"
    className={`
      ${fonts.body.button}
      text-[#00ffc6]
      text-[18px] sm:text-[18px] md:text-[18px]
      transition-colors duration-300
      hover:text-white
    `}
    target="_blank"
    rel="noopener noreferrer"
  >
    LET'S CHAT
  </a>
          </Button>
        </div>
      </div>

      <div className="w-full h-[55px] overflow-hidden relative mt-auto">
        <div className="absolute left-0 w-[10%] h-full top-0 bg-[linear-gradient(90deg,rgba(0,255,198,1)_0%,rgba(0,255,198,0.25)_75%,rgba(0,255,198,0)_100%)] z-10" />

        <div className="absolute left-[90%] w-[10%] h-full top-0 bg-[linear-gradient(270deg,rgba(0,255,198,1)_0%,rgba(0,255,198,0)_100%)] z-10" />

        <div
          className="flex absolute left-0 whitespace-nowrap logo-strip"
          style={{
            animation: "marquee-left-to-right 40s linear infinite",
            willChange: "transform"
          }}
        >
          {allLogos.map((logo, index) => (
            <div
              key={index}
              className={`relative w-[200px] flex-shrink-0 mx-4 logo-item ${logo.className}`}
              style={{
                backgroundImage: `url(${logo.src})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                opacity: 0.8,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
