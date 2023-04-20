import { IChildren } from "../interfaces"
import SlidersProviders from "./slider"

const Providers = ({ children }: IChildren) => {
  return (
    <SlidersProviders>
      {children}
    </SlidersProviders>
  )
}

export default Providers