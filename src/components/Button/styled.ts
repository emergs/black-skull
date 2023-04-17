import styled from "styled-components";
import { IButton } from "../../interfaces";

export const ButtonStyled = styled.button<IButton>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: ${({ padding }) => padding};
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  z-index: ${({ zIndex }) => zIndex};
  background-color: ${({ backgroundColor }) => backgroundColor ? backgroundColor : 'var(--orange1)'};
  border-radius: ${({ borderRadius }) => borderRadius ? borderRadius : '4px'};
  border: ${({ border }) => border ? border : 'none'};
  color: ${({ color }) => color ? color : 'var(--black1)'};
  font: ${({ font }) => font ? font : 'var(--barlow16-700)'};
  text-transform: ${({ textTransform }) => textTransform ? textTransform : 'uppercase'};
  &:hover {
    background-color: ${({ hoverBackground }) => hoverBackground ? hoverBackground : 'var(--orange2)'};
  }
`