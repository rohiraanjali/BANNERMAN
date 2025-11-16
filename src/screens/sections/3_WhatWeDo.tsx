import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import { SectionWrapper } from "../../components/shared/SectionWrapper";
import { fonts } from "../../lib/fonts";
import { colors, spacing } from "../../lib/constants";

const services = [
	{
		icon: "/assets/megaphone.svg",
		title: "Creator-Led Campaigns",
		description:
			"We match your brand with influential voices who tell your story authentically, reaching your exact audience where they listen most.",
		variant: "bordered" as const,
	},
	{
		icon: "/assets/presentation.svg",
		title: "Events & Webinars",
		description:
			"We manage creator-led webinars, panels, and events that attract your ideal customers.",
		variant: "filled" as const,
	},
	{
		icon: "/assets/gifts.svg",
		title: "PR & Gifts Campaigns",
		description:
			"We design creator-based PR and gifting campaigns that build relationships and long-term advocacy, not one-off shoutouts.",
		variant: "bordered" as const,
	},
];

export const MainContentSection = (): JSX.Element => {
	return (
		<SectionWrapper
			sectionPadding={spacing.section.pySmall}
			maxWidth="large"
			padding="medium"
		>
			<div className="flex flex-col items-center gap-8 sm:gap-12 md:gap-16 lg:gap-[75px]">
				<h1
					className={`${fonts.anton} text-[28px] sm:text-[32px] md:text-[42px] lg:text-[52px] font-normal leading-[34px] sm:leading-[40px] md:leading-[50px] lg:leading-[60px] tracking-[0] text-center px-4`}
				>
					<span className="text-white">B2B Influence, Engineered for Scale</span>
					<span className={colors.text.cyan}> Impact</span>
				</h1>

				<div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 w-full max-w-[1216px] mx-auto px-4 md:px-0">
					{services.map((service, index) => (
						<Card
								key={index}
								className={`border-none group flex-1 w-full md:w-auto h-auto md:h-[461px] min-h-[300px] sm:min-h-[350px] md:min-h-[461px] rounded-[20px] overflow-hidden relative transition-all duration-300 bg-black before:content-[''] before:absolute before:inset-0 before:p-[1.5px] before:rounded-[20px] before:bg-[linear-gradient(180deg,#00FFC6_0%,#01785D_40%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] hover:before:opacity-0 hover:bg-[linear-gradient(180deg,#00FFC6_0%,#01785D_40%)]`}
						>
							<CardContent className="flex flex-col items-center justify-between h-full p-0 pt-6 sm:pt-8 md:pt-12 lg:pt-[50px] pb-6 sm:pb-8 md:pb-12 lg:pb-[50px] px-4 md:px-6">
								<div className="flex flex-col items-center gap-4 w-full md:w-[305px] h-full justify-between">
									<img
										className="w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] md:w-[104px] md:h-[104px] transition-all duration-300 group-hover:filter group-hover:brightness-0 group-hover:saturate-0 group-hover:invert-0"
										alt={service.title}
										src={service.icon}
									/>
									<div className="flex flex-col items-center gap-3 sm:gap-4 flex-1 justify-center">
										<h3
											className={`${fonts.montserrat} font-bold text-[20px] sm:text-[22px] md:text-[26px] text-center tracking-[0.64px] leading-[26px] sm:leading-[28px] md:leading-[32.4px] transition-colors duration-300 text-white group-hover:text-black`}
										>
											{service.title}
										</h3>
										<p
											className={`[font-family:'Open_Sans',Helvetica] font-normal text-[15px] sm:text-[16px] md:text-[17.5px] text-center tracking-[0.25px] leading-5 sm:leading-6 transition-colors duration-300 text-white group-hover:text-black`}
										>
											{service.description}
										</p>
									</div>
								</div>
							</CardContent>
						</Card>
					))}
				</div>

				<div
					className={`w-full ${spacing.container.maxWidth.medium} mx-auto [-webkit-text-stroke:0.5px_#ffffff96] bg-[linear-gradient(178deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] ${fonts.jakarta} font-normal text-transparent text-[32px] sm:text-[40px] md:text-[60px] lg:text-[80px] xl:text-[120px] tracking-[-1px] sm:tracking-[-1.5px] md:tracking-[-2.40px] leading-[36px] sm:leading-[44px] md:leading-[60px] lg:leading-[80px] xl:leading-[120px] px-4 md:px-6 lg:px-0 mt-6 sm:mt-8 md:mt-12 lg:mt-0`}
				>
					<span
						className={`${colors.text.black} tracking-[-1.5px] sm:tracking-[-2px] md:tracking-[-2.88px] leading-[24px] sm:leading-[32px] md:leading-[40px] lg:leading-[55px] xl:leading-[70px]`}
					>
						&quot;
					</span>
					<span className={`font-semibold ${colors.text.black} text-[14px] sm:text-[16px] md:text-[20px] lg:text-[30px] xl:text-[40px] tracking-[-0.2px] sm:tracking-[-0.25px] md:tracking-[-0.32px] leading-[20px] sm:leading-[24px] md:leading-[28px] lg:leading-[42px] xl:leading-[64px]`}>
							Our in-house filmmakers, designers, and writers also helps craft videos, visuals, and thought-leadership content that earns engagement and drives action  🎉
          </span>
				</div>
			</div>
		</SectionWrapper>
	);
};
