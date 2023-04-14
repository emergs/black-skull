import { products } from "../../utils"
import CardProducts from "../CardProducts"

const ShowCase = ({ title }: any) => {
  return (
    <section>
      <h1>{title}</h1>
      <nav>
        <ul>
          {
            products.map((product) => {
              return <CardProducts product={product} />
            })
          }
        </ul>
      </nav>
    </section>
  )
}

export default ShowCase