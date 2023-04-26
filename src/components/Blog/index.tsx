import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import { blogContent } from "../../utils"
import Button from "../Button"
import CardBlog from "../CardBlog"
import { BlogStyled } from "./styled"
import { useContext, useRef } from "react"
import { SlidersContexts } from "../../contexts/slider"

const Blog = () => {

  const carousel = useRef(null)
  const card = useRef(null)
  const { nextImage, previusImage } = useContext(SlidersContexts)

  return (
    <BlogStyled id="blog">
      <div>
        <h2>Confira o <em>nosso blog</em></h2>
        <Button padding="10px 24px">ler todos</Button>
      </div>
      <Button
        padding="auto"
        width="32px"
        height="32px"
        position="absolute"
        top="278px"
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
            blogContent.map((blog) => {
              return <CardBlog blog={blog} card={card}/>
            })
          }
        </ul>
      </nav>
      <Button
        padding="auto"
        width="32px"
        height="32px"
        position="absolute"
        top="278px"
        right="40px"
        zIndex="1"
        backgroundColor="var(--gray2)"
        hoverBackground="var(--orange2)"
        onClick={(e) => nextImage(e, carousel, card)}
      >
        <BsArrowRight />
      </Button>
    </BlogStyled>
  )
}

export default Blog