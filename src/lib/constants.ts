/**
 * Centralized constants for colors, spacing, and layout values
 */

export const colors = {
  primary: {
    cyan: "#00ffc6",
    darkGreen: "#151304",
    darkGreenAlt: "#00271e",
    darkGreenMedium: "#00896a",
  },
  neutral: {
    black: "#000000",
    white: "#ffffff",
    darkGray: "#1d1c20",
    gray: "#a5abb6",
    lightGray: "#a9a9a9",
  },
  background: {
    black: "bg-black",
    darkGreen: "bg-[#00271e]",
    cyan: "bg-[#00ffc6]",
  },
  text: {
    white: "text-white",
    black: "text-black",
    cyan: "text-[#00ffc6]",
    darkGreen: "text-[#151304]",
    gray: "text-[#a5abb6]",
    lightGray: "text-[#a9a9a9]",
  },
} as const;

export const spacing = {
  section: {
    py: "py-28",
    pyLarge: "py-[111px]",
    pyMedium: "py-20",
    pySmall: "py-16 md:py-24 lg:py-28",
    gap: "gap-[75px]",
    gapLarge: "gap-[69px]",
  },
  container: {
    maxWidth: {
      default: "max-w-[1366px]",
      large: "max-w-[1470px]",
      medium: "max-w-[1216px]",
      small: "max-w-[1029px]",
    },
    padding: {
      default: "px-4",
      medium: "px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[52px]",
      large: "px-[52px]",
    },
  },
} as const;

export const typography = {
  heading: {
    size: "text-[52px]",
    leading: "leading-[62.4px]",
    tracking: "tracking-[0]",
  },
} as const;

