export const EnumButtonVariant: { [x: string]: string } = {
  FILLED_DEFAULT: "filled_default",
  FILLED_TRANSPARENT_BADGE: "filled_transparent_badge",
};

export const buttonVariant: any = {
  filled_default: {
    color: "var(--white)",
    backgroundColor: "var(--main)",
    borderColor: "transparent",
    hover: {
      color: "var(--white)",
      backgroundColor: "#4969E1",
      borderColor: "transparent",
    },
  },
  filled_transparent_badge: {
    fontSize: "0.813rem",
    color: "var(--gray-400)",
    backgroundColor: "transparent",
    borderColor: "transparent",
    hover: {
      color: "var(--gray-400)",
      backgroundColor: "transparent",
      borderColor: "transparent",
    },
  },
};
