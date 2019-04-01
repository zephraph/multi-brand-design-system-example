import styled from "styled-components";
import { color, ColorProps, background, BackgroundProps } from "styled-system";

export interface BaseButtonProps extends ColorProps, BackgroundProps {}

export const BaseButton = styled.button`
  ${color}
  ${background}
`;
