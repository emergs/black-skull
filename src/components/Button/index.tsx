import { IChildren } from "../../interfaces"

const Button = ({children}:IChildren) => {
  return (
    <button>
      {children}
    </button>
  )
}

export default Button