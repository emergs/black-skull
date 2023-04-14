import { IProducts } from "../../interfaces"

const CardProducts = ({product}:any)=>{
  return(
    <li>
      <figure>
        <img src={product.img} alt={product.name} />
      </figure>
      <span>{product.name}</span>
      <span>{product.price}</span>
      <span>{`ou 12X de R$${product.price}`}</span>
    </li>
  )
}
 
export default CardProducts