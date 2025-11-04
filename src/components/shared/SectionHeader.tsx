import React from "react";
import { fonts } from "../../lib/fonts";
import { cn } from "../../lib/utils";

interface SectionHeaderProps {
  title: string;
  highlight?: string;
  description?: string | React.ReactNode;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

/**
 * Reusable section header component
 * Eliminates repeated heading patterns across sections
 */
export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  highlight,
  description,
  className,
  titleClassName,
  descriptionClassName,
}) => {
  return (
    <div className={cn("flex flex-col items-center gap-6 w-full", className)}>
      <h2
        className={cn(
          fonts.anton,
          "font-normal text-[28px] sm:text-[36px] md:text-[42px] lg:text-[52px] text-center tracking-[0] leading-[34px] sm:leading-[42px] md:leading-[50px] lg:leading-[62.4px]",
          titleClassName
        )}
      >
        <span className="text-white">{title}</span>
        {highlight && <span className="text-[#00ffc6]">{highlight}</span>}
      </h2>

      {description && (
        <div
          className={cn(
            fonts.jakarta,
            "font-normal text-white text-sm sm:text-base md:text-lg text-center tracking-[0] leading-6 sm:leading-7 md:leading-8 max-w-[938px] px-4",
            descriptionClassName
          )}
        >
          {description}
        </div>
      )}
    </div>
  );
};

