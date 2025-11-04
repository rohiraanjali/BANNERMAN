import React from "react";
import { Button } from "../../components/ui/button";
import { fonts } from "../../lib/fonts";

const navButtons = [
  {
    text: "BOOK A CALL",
    variant: "default" as const,
    className: "bg-black text-[#00ffc6] border-black hover:bg-black/90",
  },
  {
    text: "FOR CREATORS",
    variant: "outline" as const,
    className:
      "bg-transparent text-[#151304] border-[#151304] hover:bg-[#151304]/10",
  },
];

const logos = [
  {
    src: "/logos/logo_1.png",
    className: "top-[calc(50.00%_-_18px)] h-9",
  },
  {
    src: "/logos/logo_2.jpg",
    className: "top-[calc(50.00%_-_26px)] h-[52px]",
  },
  {
    src: "/logos/logo_3.png",
    className: "top-[calc(50.00%_-_25px)] h-[50px]",
  },
  {
    src: "/logos/logo_4.png",
    className: "top-[calc(50.00%_-_21px)] h-[42px]",
  },
  {
    src: "/logos/logo_5.jpg",
    className: "top-[calc(50.00%_-_26px)] h-[52px]",
  },
  {
    src: "/logos/logo_6.png",
    className: "top-[calc(50.00%_-_23px)] h-[46px]",
  },
  {
    src: "/logos/logo_7.png",
    className: "top-[calc(50.00%_-_23px)] h-[46px]",
  },
  {
    src: "/logos/logo_8.png",
    className: "top-[calc(50.00%_-_28px)] h-[55px]",
  },
  {
    src: "/logos/logo_9.png",
    className: "top-[calc(50.00%_-_23px)] h-[46px]",
  },
];

export const HeroSection = (): JSX.Element => {
  const allLogos = [...logos, ...logos, ...logos];

  return (
    <section className="relative w-full h-screen bg-[#00ffc6] flex flex-col pb-8">
      <header className="w-full py-5 px-10">
        <nav className="max-w-[1470px] mx-auto flex items-center justify-between">
          <img
            className="h-14 w-auto"
            alt="Bannerman Logo"
            src="/assets/logo.svg"
          />

          <div className="flex items-center gap-4">
            {navButtons.map((button, index) => (
              <Button
                key={index}
                variant={button.variant}
                className={`h-[42px] px-[17px] rounded-[100px] ${button.className}`}
              >
                <span className={fonts.body.xs}>
                  {button.text}
                </span>
              </Button>
            ))}
          </div>
        </nav>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="max-w-[1130px] w-full flex flex-col items-center gap-8">
          <img
            className="w-full max-w-[994px] h-auto"
            alt="Hero graphic"
            src="/assets/bannerman.svg"
          />

          <div className="w-full max-w-[636px] rounded-lg border-r border-l border-[#151304] py-4 px-6 flex items-center justify-center">
            <h1 className={`${fonts.heading.hero} text-[#151304] text-center`}>
              Your Partner for Influencer-Led B2B Growth
            </h1>
          </div>

          <Button className="h-[71px] px-[30px] bg-black rounded-[40px] hover:bg-black/90">
            <span className={`${fonts.body.button} text-[#00ffc6]`}>
              LET'S CHAT
            </span>
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
