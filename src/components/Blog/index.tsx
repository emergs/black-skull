import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import { blogContent } from "../../utils"
import Button from "../Button"
import CardBlog from "../CardBlog"
import { BlogStyled } from "./styled"

const Blog = () => {
  return (
    <BlogStyled>
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
      >
        <BsArrowLeft />
      </Button>
      <nav>
        <ul>
          {
            blogContent.map((blog) => {
              return <CardBlog blog={blog} />
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
      >
        <BsArrowRight />
      </Button>
    </BlogStyled>
  )
}

export default Blog