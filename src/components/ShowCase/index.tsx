import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import { products } from "../../utils"
import Button from "../Button"
import CardProducts from "../CardProducts"
import { ShowCaseStyled } from "./styled"

const ShowCase = ({ title }: any) => {
  return (
    <ShowCaseStyled>
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
      >
        <BsArrowLeft />
      </Button>
      <nav>
        <ul>
          {
            products.map((product) => {
              return <CardProducts name={product.name} category={product.category} img={product.img} price={product.price} />
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
      >
        <BsArrowRight />
      </Button>
    </ShowCaseStyled>
  )
}

export default ShowCase