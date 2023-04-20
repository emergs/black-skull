import { HTMLAttributes, MouseEvent, MutableRefObject, ReactNode, RefObject } from "react";

export interface IChildren {
  children: ReactNode
}

export interface IProducts {
  name: string,
  price: string,
  img: string,
  category: string
  card: MutableRefObject<null>
}

export interface IDivLists {
  width: string,
}

export interface IButton extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode,
  width?: string,
  height?: string,
  backgroundColor?: string,
  color?: string,
  font?: string,
  type?: "button" | "submit" | "reset",
  border?: string,
  borderRadius?: string,
  textTransform?: string,
  hoverBackground?: string,
  padding: string,
  position?: string,
  top?: string,
  bottom?: string,
  left?: string,
  right?: string,
  zIndex?: string
}

export interface ISliders {
  nextImage: (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    carousel: RefObject<HTMLUListElement>,
    card: RefObject<HTMLImageElement>
  ) => void
  previusImage: (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    carousel: RefObject<HTMLUListElement>,
    card: RefObject<HTMLImageElement>
  ) => void
}

