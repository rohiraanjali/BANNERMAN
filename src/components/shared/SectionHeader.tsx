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
          "font-normal text-[52px] text-center tracking-[0] leading-[62.4px] whitespace-nowrap",
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
            "font-normal text-white text-lg text-center tracking-[0] leading-8 max-w-[938px]",
            descriptionClassName
          )}
        >
          {description}
        </div>
      )}
    </div>
  );
};

