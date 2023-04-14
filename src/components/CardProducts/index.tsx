import { CardProductsStyled } from "./styled"

const CardProducts = ({ product }: any) => {
  return (
    <CardProductsStyled>
      <figure>
        <img src={product.img} alt={product.name} />
      </figure>
      <span>{product.name}</span>
      <span>{product.price}</span>
      <span>{`ou 12X de R$${product.price}`}</span>
    </CardProductsStyled>
  )
}

export default CardProducts