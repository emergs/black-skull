import { IButton } from "../../interfaces"
import { ButtonStyled } from "./styled"

const Button = ({
  children,
  width,
  height,
  backgroundColor,
  color,
  font,
  type,
  border,
  borderRadius,
  textTransform,
  hoverBackground,
  padding,
  onClick,
  position,
  top,
  bottom,
  left,
  right,
  zIndex

}: IButton) => {
  return (
    <ButtonStyled
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      width={width}
      height={height}
      border={border}
      color={color}
      font={font}
      padding={padding}
      onClick={onClick}
      type={type}
      textTransform={textTransform}
      hoverBackground={hoverBackground}
      position={position}
      top={top}
      bottom={bottom}
      left={left}
      right={right}
      zIndex={zIndex}
    >
      {children}
    </ButtonStyled>
  )
}

export default Button