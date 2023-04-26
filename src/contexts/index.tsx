import { IChildren } from "../interfaces"
import MenuProviders from "./menu"
import SlidersProviders from "./slider"

const Providers = ({ children }: IChildren) => {
  return (
    <SlidersProviders>
      <MenuProviders>
        {children}
      </MenuProviders>
    </SlidersProviders>
  )
}

export default Providers