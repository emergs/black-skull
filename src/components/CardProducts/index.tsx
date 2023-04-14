import { CardProductsStyled } from "./styled"

const CardProducts = ({ product }: any) => {
  return (
    <CardProductsStyled>
      <figure>
        <img src={product.img} alt={product.name} />
      </figure>
      <span className="productName">{product.name}</span>
      <span className="productPrice">{product.price}</span>
      <span className="productPortion">{`ou 12X de R$${product.price}`}</span>
    </CardProductsStyled>
  )
}

export default CardProducts