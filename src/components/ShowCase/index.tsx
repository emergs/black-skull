import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import { products } from "../../utils"
import Button from "../Button"
import CardProducts from "../CardProducts"
import { ShowCaseStyled } from "./styled"
import { useContext, useRef } from "react"
import { SlidersContexts } from "../../contexts/slider"

const ShowCase = ({ title, id }: any) => {

  const carousel = useRef(null)
  const card = useRef(null)
  const { nextImage, previusImage } = useContext(SlidersContexts)

  return (
    <ShowCaseStyled id={id}>
      <h2>{title}</h2>
      <Button
        padding="auto"
        width="32px"
        height="32px"
        position="absolute"
        top="220px"
        left="40px"
        zIndex="1"
        backgroundColor="var(--gray2)"
        hoverBackground="var(--orange2)"
        onClick={(e) => previusImage(e, carousel, card)}
      >
        <BsArrowLeft />
      </Button>
      <nav>
        <ul ref={carousel}>
          {
            products.map((product) => {
              return <CardProducts name={product.name} category={product.category} img={product.img} price={product.price} card={card} />
            })
          }
        </ul>
      </nav>
      <Button
        padding="auto"
        width="32px"
        height="32px"
        position="absolute"
        top="220px"
        right="40px"
        zIndex="1"
        backgroundColor="var(--gray2)"
        hoverBackground="var(--orange2)"
        onClick={(e) => nextImage(e, carousel, card)}
      >
        <BsArrowRight />
      </Button>
    </ShowCaseStyled>
  )
}

export default ShowCase