import { HTMLAttributes, ReactNode } from "react";

export interface IChildren {
  children: ReactNode
}

export interface IProducts {
  name: string,
  price: string,
  img: string,
  category: string
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

