import { listCategories } from "../../utils"
import Button from "../Button"
import { ProductsCategoryStyled } from "./styled"
import { BsArrowLeft } from "react-icons/bs"
import { BsArrowRight } from "react-icons/bs"

const ProductsCategory = () => {
  return (
    <ProductsCategoryStyled>
      <Button
        padding="auto"
        width="32px"
        height="32px"
        position="absolute"
        top="129px"
        left="40px"
        zIndex="1"
        backgroundColor="var(--gray2)"
        hoverBackground="var(--orange2)"
      ><BsArrowLeft /></Button>
      <nav>
        <ul>
          {
            listCategories.map((product) => {
              return <li>
                <figure>
                  <div>
                    <img src={product.img} alt={product.name} />
                  </div>
                  <figcaption>{product.name}</figcaption>
                </figure>
              </li>
            })
          }
        </ul>
      </nav>
      <Button
        padding="auto"
        width="32px"
        height="32px"
        position="absolute"
        top="129px"
        right="40px"
        zIndex="1"
        backgroundColor="var(--gray2)"
        hoverBackground="var(--orange2)"
      ><BsArrowRight /></Button>
    </ProductsCategoryStyled>
  )
}

export default ProductsCategory