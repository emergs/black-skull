import cart from "../assets/images/ShoppingCart.svg"
import profile from "../assets/images/User.svg"
import whishlist from "../assets/images/Whishlist.svg"
import protein from "../assets/images/proteinMuscle.svg"
import whey from "../assets/images/whey.svg"
import partner1 from "../assets/images/partner1.svg"
import partner2 from "../assets/images/partner2.svg"
import partner3 from "../assets/images/partner3.svg"
import blog1 from "../assets/images/blog1.svg"
import blog2 from "../assets/images/blog2.svg"
import blog3 from "../assets/images/blog3.svg"
import ganhoDeMassa from "../assets/images/ganhoDeMassa.svg"
import energia from "../assets/images/energia.svg"
import recuperacaoMuscular from "../assets/images/recuperacaoMuscular.svg"
import emagrecimento from "../assets/images/emagrecimento.svg"
import facebook from "../assets/images/facebook.svg"
import instagram from "../assets/images/instagram.svg"
import youtube from "../assets/images/youtube.svg"
import twiter from "../assets/images/twitter.svg"
import tiktok from "../assets/images/tiktok.svg"
import mercadoPago from "../assets/images/mercadoPago.svg"
import visa from "../assets/images/visa.svg"
import mastercard from "../assets/images/mastercard.svg"
import hipercard from "../assets/images/hipercard.svg"
import pix from "../assets/images/pix.svg"
import amex from "../assets/images/amex.svg"
import dinners from "../assets/images/dinners.svg"
import elo from "../assets/images/elo.svg"
import boleto from "../assets/images/boleto.svg"
import vtex from "../assets/images/vtex.svg"
import ebit from "../assets/images/ebit.svg"
import { BiUserCircle } from "react-icons/bi"
import { AiOutlineStar } from "react-icons/ai"
import { BsCart2 } from "react-icons/bs"
import { ReactNode } from "react";

export const navbarOptions = [
  { name: 'categorias', link: '#' },
  { name: 'vestuário', link: '#' },
  { name: 'objetivos', link: '#' },
  { name: 'promoçôes', link: '#' },
  { name: 'atletas', link: '#' },
  { name: 'assinatura', link: '#' }
]

export const navbarUserOptions = [
  { name: 'profile', icon: <BiUserCircle /> },
  { name: 'favorites', icon: <AiOutlineStar /> },
  { name: 'cart', icon: <BsCart2 /> }
]

export const listCategories = [
  { name: 'Proteínas', img: protein, link: "#" },
  { name: 'Hipercalóricos', img: protein, link: "#" },
  { name: 'Creatina', img: protein, link: "#" },
  { name: 'Packs', img: protein, link: "#" },
  { name: 'Aminoácidos', img: protein, link: "#" },
  { name: 'Saúde', img: protein, link: "#" },
  { name: 'Proteínas', img: protein, link: "#" },
  { name: 'Hipercalóricos', img: protein, link: "#" },
  { name: 'Creatina', img: protein, link: "#" },
  { name: 'Packs', img: protein, link: "#" },
  { name: 'Aminoácidos', img: protein, link: "#" },
  { name: 'Saúde', img: protein, link: "#" },
]

export const products = [
  { name: 'Whey Zero (Com Lactase) Black Skull - 900G', price: '349,90', img: whey, category: "consumiveis" },
  { name: 'Whey Zero (Com Lactase) Black Skull - 900G', price: '349,90', img: whey, category: "consumiveis" },
  { name: 'Whey Zero (Com Lactase) Black Skull - 900G', price: '349,90', img: whey, category: "vestuario" },
  { name: 'Whey Zero (Com Lactase) Black Skull - 900G', price: '349,90', img: whey, category: "vestuario" }
]

export const partners = [
  { name: 'cedric mcmillan', img: partner1, description: '' },
  { name: 'cedric mcmillan', img: partner2, description: '' },
  { name: 'cedric mcmillan', img: partner3, description: '' },
  { name: 'cedric mcmillan', img: partner1, description: '' },
  { name: 'cedric mcmillan', img: partner2, description: '' },
  { name: 'cedric mcmillan', img: partner3, description: '' },
]

export const blogContent = [
  { title: 'Lorem ipsum dolor sit amet, consectetur adipis', date: '03.05.21', link: '#', img: blog1 },
  { title: 'Lorem ipsum dolor sit amet, consectetur adipis', date: '03.05.21', link: '#', img: blog2 },
  { title: 'Lorem ipsum dolor sit amet, consectetur adipis', date: '03.05.21', link: '#', img: blog3 },
  { title: 'Lorem ipsum dolor sit amet, consectetur adipis', date: '03.05.21', link: '#', img: blog1 },
  { title: 'Lorem ipsum dolor sit amet, consectetur adipis', date: '03.05.21', link: '#', img: blog2 },
  { title: 'Lorem ipsum dolor sit amet, consectetur adipis', date: '03.05.21', link: '#', img: blog3 },
]

export const targets = [
  { title: 'ganho de massa', img: ganhoDeMassa, link: '#' },
  { title: 'energia', img: energia, link: '' },
  { title: 'recuperação muscular', img: recuperacaoMuscular, link: '#' },
  { title: 'emagrecimento', img: emagrecimento, link: '#' },
]

export const footerOptions = [
  {
    title: 'BlackSkull usa', width: '141', content: [
      { title: 'Sobre Nós', link: '#' },
      { title: 'Black Skull é confiável?', link: '#' },
      { title: 'Atletas Black Skull', link: '#' },
      { title: 'Nosso Blog', link: '#' },
      { title: 'Seja um Revendedor', link: '#' },
      { title: 'Entre em Contato', link: '#' },
    ]
  },
  {
    title: 'Institucional', width: '160', content: [
      { title: 'Trocas e Devoluções', link: '#' },
      { title: 'Política de Entregas', link: '#' },
      { title: 'Política de Privacidade', link: '#' },
      { title: 'Política de Cancelamentos', link: '#' }
    ]
  },
  {
    title: 'afiliados', width: '156', content: [
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
      { title: 'mercadopago', link: '#', img: mercadoPago },
      { title: 'visa', link: '#', img: visa },
      { title: 'mastercard', link: '#', img: mastercard },
      { title: 'hipercard', link: '#', img: hipercard },
      { title: 'pix', link: '#', img: pix },
      { title: 'amex', link: '#', img: amex },
      { title: 'dinners', link: '#', img: dinners },
      { title: 'elo', link: '#', img: elo },
      { title: 'boleto', link: '#', img: boleto },
    ]
  },
  {
    title: 'segurança', content: [
      { title: 'vtex', link: '#', img: vtex },
      { title: 'ebit', link: '#', img: ebit }
    ]
  },
]

export const socialMedia = [
  { name: 'facebook', link: '#', icon: facebook },
  { name: 'instagram', link: '#', icon: instagram },
  { name: 'youtube', link: '#', icon: youtube },
  { name: 'twiter', link: '#', icon: twiter },
  { name: 'tiktok', link: '#', icon: tiktok }
]