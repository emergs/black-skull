import { listCategories } from "../../utils"
import { ProductsCategoryStyled } from "./styled"

const ProductsCategory = () => {
  return (
    <ProductsCategoryStyled>
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
    </ProductsCategoryStyled>
  )
}

export default ProductsCategory