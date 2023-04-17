import { useState } from "react"
import { IProducts } from "../../interfaces"
import Button from "../Button"
import ProductFlavorSelection from "../ProductFlavorSelection"
import ProductSizeSelection from "../ProductSizeSelection"
import { CardProductsStyled } from "./styled"
import { motion } from "framer-motion"

const CardProducts = ({ name, img, category, price }: IProducts) => {

  const [isHover, setIsHover] = useState(false)

  const handleHover = () => setIsHover(!isHover)

  return (
    <CardProductsStyled
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      animate={{
        backgroundColor: isHover ? 'var(--background)' : ''
      }}
    >
      <figure>
        <img src={img} alt={name} />
      </figure>
      <span className="productName">{name}</span>
      <span className="productPrice">{price}</span>
      <span className="productPortion">{`ou 12X de R$${(parseInt(price) / 12).toFixed(2)}`}</span>
      <motion.form
        animate={{
          display: isHover ? 'flex' : 'none',
        }}
      >
        {
          category === 'consumiveis' ?
            <ProductFlavorSelection />
            :
            <ProductSizeSelection />
        }
        <Button padding="15px 42px">comprar</Button>
      </motion.form>
      <div className="productSizeSelection">

      </div>
    </CardProductsStyled>
  )
}

export default CardProducts