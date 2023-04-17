import styled from "styled-components";
import { IButton } from "../../interfaces";

export const ButtonStyled = styled.button<IButton>`
  padding: ${({ padding }) => padding};
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