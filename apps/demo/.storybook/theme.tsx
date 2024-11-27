import React, { useEffect } from "react";
import type { Decorator } from "@storybook/react";

const DEFAULT_BODY_CLASSES = ["sb-main-padded sb-show-main"];

import "@repo/foundations/styles";

export const ThemeDecorator: Decorator = (Story, context) => {
  const brand = context.globals.brands;
  const mode = context.globals.modes;
  const density = context.globals.density;
  const breakpoint = context.globals.breakpoints;
  useEffect(() => {
    document.body.classList.value = [
      DEFAULT_BODY_CLASSES,
      brand,
      mode,
      density,
      breakpoint,
      (document.body.style.backgroundColor =
        "var(--semantic-static-color-background-default-default)"),
    ].join(" ");
  }, [brand, mode, density, breakpoint]);
  return <Story />;
};
