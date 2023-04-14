import { listCategories } from "../../utils"

const ProductsCategory = () => {
  return (
    <section>
      <nav>
        <ul>
          {
            listCategories.map((product) => {
              return <li>
                <figure>
                  <img src={product.img} alt={product.name} />
                  <figcaption>{product.name}</figcaption>
                </figure>
              </li>
            })
          }
        </ul>
      </nav>
    </section>
  )
}

export default ProductsCategory