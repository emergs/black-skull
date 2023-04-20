import { MouseEvent, RefObject, createContext } from "react"
import { IChildren, ISliders } from "../../interfaces"

export const SlidersContexts = createContext<ISliders>({} as ISliders)

const SlidersProviders = ({ children }: IChildren) => {

  const nextImage = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    caroseul: RefObject<HTMLUListElement>,
    card: RefObject<HTMLImageElement>
  ) => {
    e.preventDefault()
    if (caroseul.current && card.current) {
      console.log(caroseul.current)
      caroseul.current.scrollLeft += card.current?.clientWidth
    }
  }

  const previusImage = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    caroseul: RefObject<HTMLUListElement>,
    card: RefObject<HTMLImageElement>
  ) => {
    e.preventDefault()
    if (caroseul.current && card.current) {
      console.log(card.current)
      caroseul.current.scrollLeft -= card.current?.clientWidth
    }
  }

  return (
    <SlidersContexts.Provider value={{ nextImage, previusImage }}>
      {children}
    </SlidersContexts.Provider>
  )
}

export default SlidersProviders