import { IProducts } from "../../interfaces"
import Button from "../Button"
import ProductFlavorSelection from "../ProductFlavorSelection"
import ProductSizeSelection from "../ProductSizeSelection"
import { CardProductsStyled } from "./styled"

const CardProducts = ({ name, img, category, price }: IProducts) => {
  return (
    <CardProductsStyled>
      <figure>
        <img src={img} alt={name} />
      </figure>
      <span className="productName">{name}</span>
      <span className="productPrice">{price}</span>
      <span className="productPortion">{`ou 12X de R$${parseInt(price) / 12}`}</span>
      <form>
        {
          category === 'consumiveis' ?
            <ProductFlavorSelection />
            :
            <ProductSizeSelection />
        }
        <Button padding="15px 42px">comprar</Button>
      </form>
      <div className="productSizeSelection">

      </div>
    </CardProductsStyled>
  )
}

export default CardProducts