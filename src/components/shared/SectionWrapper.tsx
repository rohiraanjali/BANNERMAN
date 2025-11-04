import React from "react";
import { cn } from "../../lib/utils";
import { spacing } from "../../lib/constants";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  maxWidth?: keyof typeof spacing.container.maxWidth;
  padding?: keyof typeof spacing.container.padding;
  sectionPadding?: string;
}

/**
 * Reusable section wrapper component
 * Provides consistent section container structure
 */
export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  className,
  containerClassName,
  maxWidth = "default",
  padding = "default",
  sectionPadding = spacing.section.py,
}) => {
  return (
    <section className={cn("relative w-full bg-black", sectionPadding, className)}>
      <div
        className={cn(
          "mx-auto flex flex-col items-center",
          spacing.container.maxWidth[maxWidth],
          spacing.container.padding[padding],
          containerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
};

