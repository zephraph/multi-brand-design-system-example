import React from "react";
import { BaseButton } from "./button.shared";

/**
 * Describes the type of the button which can govern multiple different states
 */
type ButtonVariation = "primary" | "secondary" | "outline" | "link";

export interface ButtonProps {
  variation: ButtonVariation;
}
export const Button = () => {
  return <BaseButton />;
};
