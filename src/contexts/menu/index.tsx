import { createContext, useState } from "react"
import { IChildren } from "../../interfaces"

interface IMenu {
  scrollToId: string,
  handleButtonClick: (id: string) => void,
}

export const MenuContexts = createContext<IMenu>({} as IMenu)

const MenuProviders = ({ children }: IChildren) => {

  const [scrollToId, setScrollToId] = useState('');

  const handleButtonClick = (id: string) => {
    setScrollToId(id);
  };


  return (
    <MenuContexts.Provider value={{ handleButtonClick, scrollToId }}>
      {children}
    </MenuContexts.Provider>
  )
}

export default MenuProviders