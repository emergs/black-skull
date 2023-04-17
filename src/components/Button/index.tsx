import { IButton } from "../../interfaces"
import { ButtonStyled } from "./styled"

const Button = ({
  children,
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

}: IButton) => {
  return (
    <ButtonStyled
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      border={border}
      color={color}
      font={font}
      padding={padding}
      onClick={onClick}
      type={type}
      textTransform={textTransform}
      hoverBackground={hoverBackground}
    >
      {children}
    </ButtonStyled>
  )
}

export default Button