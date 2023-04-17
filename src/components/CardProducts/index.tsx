import { useState } from "react"
import { IProducts } from "../../interfaces"
import Button from "../Button"
import ProductFlavorSelection from "../ProductFlavorSelection"
import ProductSizeSelection from "../ProductSizeSelection"
import { CardProductsStyled } from "./styled"
import { motion } from "framer-motion"
import { FiStar } from "react-icons/fi"
import { BsCart3 } from "react-icons/bs"

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
      <Button
        padding="auto"
        width="24px"
        height="24px"
        position="absolute"
        top="20px"
        right="16px"
        zIndex="1"
        backgroundColor="inherit"
        hoverBackground="inherit"
        color="var(--gray1)"
      >
        <FiStar />
      </Button>
      <Button
        padding="auto"
        width="24px"
        height="24px"
        position="absolute"
        top="60px"
        right="16px"
        zIndex="1"
        backgroundColor="inherit"
        hoverBackground="inherit"
        color="var(--gray1)"
      >
        <BsCart3 />
      </Button>
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