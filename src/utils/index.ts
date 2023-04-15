import cart from "../assets/images/ShoppingCart.svg"
import user from "../assets/images/User.svg"
import protein from "../assets/images/proteinMuscle.svg"
import whey from "../assets/images/whey.svg"
import partner1 from "../assets/images/partner1.svg"
import partner2 from "../assets/images/partner2.svg"
import partner3 from "../assets/images/partner3.svg"
import blog1 from "../assets/images/blog1.svg"
import blog2 from "../assets/images/blog2.svg"
import blog3 from "../assets/images/blog3.svg"
import { ReactNode } from "react";

export interface IUserOptions {
  name: string,
  icon: ReactNode
}

export const navbarOptions = [
  {
    name: 'categorias', link: '#'
  },
  {
    name: 'vestuário', link: '#'
  },
  {
    name: 'objetivos', link: '#'
  },
  {
    name: 'promoçôes', link: '#'
  },
  {
    name: 'atletas', link: '#'
  },
  {
    name: 'assinatura', link: '#'
  }
]

export const navbarUserOptions: IUserOptions[] = [
  {
    name: 'profile', icon: user
  },
  {
    name: 'favorites', icon: user
  },
  {
    name: 'cart', icon: cart
  }
]

export const listCategories = [
  { name: 'Proteínas', img: protein, link: "#" },
  { name: 'Hipercalóricos', img: protein, link: "#" },
  { name: 'Creatina', img: protein, link: "#" },
  { name: 'Packs', img: protein, link: "#" },
  { name: 'Aminoácidos', img: protein, link: "#" },
  { name: 'Saúde', img: protein, link: "#" },
]

export const products = [
  { name: 'Whey Zero (Com Lactase) Black Skull - 900G', price: '349,90', img: whey },
  { name: 'Whey Zero (Com Lactase) Black Skull - 900G', price: '349,90', img: whey },
  { name: 'Whey Zero (Com Lactase) Black Skull - 900G', price: '349,90', img: whey },
  { name: 'Whey Zero (Com Lactase) Black Skull - 900G', price: '349,90', img: whey }
]

export const partners = [
  { name: 'cedric mcmillan', img: partner1, description: '' },
  { name: 'cedric mcmillan', img: partner2, description: '' },
  { name: 'cedric mcmillan', img: partner3, description: '' },
]

export const blogContent = [
  { title: 'Lorem ipsum dolor sit amet, consectetur adipis', date: '03.05.21', link: '#', img: blog1 },
  { title: 'Lorem ipsum dolor sit amet, consectetur adipis', date: '03.05.21', link: '#', img: blog2 },
  { title: 'Lorem ipsum dolor sit amet, consectetur adipis', date: '03.05.21', link: '#', img: blog3 },
]

export const targets = [
  { title: 'ganho de massa', img: '#', link: '#' },
  { title: 'energia', img: '#', link: '#' },
  { title: 'recuperação muscular', img: '#', link: '#' },
  { title: 'emagrecimento', img: '#', link: '#' },
]

export const footerOptions = [
  {
    title: 'BlackSkull usa', content: [
      { title: 'sobre nós', link: '#' },
      { title: 'Black Skull é confiável?', link: '#' },
      { title: 'Atletas Black Skull', link: '#' },
      { title: 'Nosso Blog', link: '#' },
      { title: 'Seja um Revendedor', link: '#' },
      { title: 'Entre em Contato', link: '#' },
    ]
  },
  {
    title: 'Institucional', content: [
      { title: 'Trocas e Devoluções', link: '#' },
      { title: 'Política de Entregas', link: '#' },
      { title: 'Política de Privacidade', link: '#' },
      { title: 'Política de Cancelamentos', link: '#' }
    ]
  },
  {
    title: 'afiliados', content: [
      { title: 'Programa de Afiliados', link: '#' },
      { title: 'Desconto para Militares', link: '#' },
      { title: 'Benefícios para Profissionais da Saúde', link: '#' },
      { title: 'Benefícios para Profs. de Educação Física', link: '#' },
      { title: 'Assinaturas', link: '#' }
    ]
  }
]

export const footerOptions2 = [
  {
    title: 'Formas de pagamento', content: [
      { title: 'mercado pago', link: '#', img: '' },
      { title: 'visa', link: '#', img: '' },
      { title: 'master card', link: '#', img: '' },
      { title: 'hipercard', link: '#', img: '' },
      { title: 'pix', link: '#', img: '' },
      { title: 'amex', link: '#', img: '' },
      { title: 'dinners', link: '#', img: '' },
      { title: 'elo', link: '#', img: '' },
      { title: 'boleto', link: '#', img: '' },
    ]
  },
  {
    title: 'segurança', content: [
      { title: 'vtex', link: '#', img: '' },
      { title: 'ebit', link: '#', img: '' }
    ]
  },
]

export const socialMedia = [
  { name: 'facebook', link: '#', icon: '' },
  { name: 'instagram', link: '#', icon: '' },
  { name: 'youtube', link: '#', icon: '' },
  { name: 'twiter', link: '#', icon: '' },
  { name: 'tiktok', link: '#', icon: '' }
]