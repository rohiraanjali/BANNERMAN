/**
 * Centralized font style utilities
 * Use these classes instead of inline font-family declarations
 */

export const fonts = {
  // Font families
  jakarta: "[font-family:'Plus_Jakarta_Sans',Helvetica]",
  anton: "[font-family:'Anton',Helvetica]",
  inter: "[font-family:'Inter',Helvetica]",
  montserrat: "[font-family:'Montserrat_Alternates',Helvetica]",

  // Common text styles
  heading: {
    h1: "[font-family:'Anton',Helvetica] font-normal text-[52px] tracking-[0] leading-[62.4px]",
    h2: "[font-family:'Anton',Helvetica] font-normal text-[52px] tracking-[0] leading-[62.4px]",
    h1Small: "[font-family:'Anton',Helvetica] font-normal text-[42px] tracking-[0] leading-[70px]",
    hero: "[font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[28px] tracking-[0.12px] leading-[37.0px]",
  },

  body: {
    default: "[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-lg tracking-[0] leading-8",
    small: "[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-base tracking-[0.30px] leading-[25.5px]",
    xs: "[font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-xs tracking-[0.12px] leading-[15.8px]",
    button: "[font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[23px] tracking-[0.16px] leading-[21.1px]",
    buttonSmall: "[font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-lg tracking-[0.16px] leading-[21.1px]",
  },

  // Typography combinations
  text: {
    // Jakarta Sans variants
    jakartaMedium: "[font-family:'Plus_Jakarta_Sans',Helvetica] font-medium",
    jakartaBold: "[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold",
    jakartaSemibold: "[font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold",
    jakartaNormal: "[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal",

    // Inter variants
    interNormal: "[font-family:'Inter',Helvetica] font-normal",
    interSemibold: "[font-family:'Inter',Helvetica] font-semibold",
    interBold: "[font-family:'Inter',Helvetica] font-bold",
    interMedium: "[font-family:'Inter',Helvetica] font-medium",

    // Anton variants
    antonNormal: "[font-family:'Anton',Helvetica] font-normal",
  },
};

// Helper function to combine font classes
export const fontClass = (...classes: string[]): string => {
  return classes.filter(Boolean).join(" ");
};

