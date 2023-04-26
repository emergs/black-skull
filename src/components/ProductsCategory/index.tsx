import { AnimatePresence, motion } from "framer-motion"
import { listCategories } from "../../utils"
import Button from "../Button"
import { ProductsCategoryStyled } from "./styled"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import { MouseEvent, useContext, useRef, useState } from "react"
import { SlidersContexts } from "../../contexts/slider"

const ProductsCategory = () => {
  const caroseul = useRef<HTMLUListElement>(null)
  const card = useRef<HTMLImageElement>(null)
  const { nextImage, previusImage } = useContext(SlidersContexts)

  return (
    <ProductsCategoryStyled id="category">
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
        onClick={(e) => previusImage(e, caroseul, card)}
      >
        <BsArrowLeft />
      </Button>
      <AnimatePresence initial={false}>
        <nav>
          <ul ref={caroseul}>
            {
              listCategories.map((product, index) => {
                return <motion.li
                  key={index}
                  initial={{ x: -300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -300, opacity: 0 }}
                >
                  <figure>
                    <div>
                      <img src={product.img} alt={product.name} ref={card} />
                    </div>
                    <figcaption>{product.name}</figcaption>
                  </figure>
                </motion.li>
              })
            }
          </ul>
        </nav>
      </AnimatePresence>

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
        onClick={(e) => nextImage(e, caroseul, card)}
      >
        <BsArrowRight />
      </Button>
    </ProductsCategoryStyled>
  )
}

export default ProductsCategory