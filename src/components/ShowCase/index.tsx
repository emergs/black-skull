import {products} from "../../utils"
import CardProducts from "../CardProducts"

const ShowCase = ()=>{
  return(
    <section>
      <h1></h1>
      <nav>
        <ul>
          {
            products.map((product)=>{
              return <CardProducts product={product}/>
            })
          }
        </ul>
      </nav>  
    </section>
  )
}
 
export default ShowCase