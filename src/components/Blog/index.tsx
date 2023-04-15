import { blogContent } from "../../utils"
import Button from "../Button"
import CardBlog from "../CardBlog"
import { BlogStyled } from "./styled"

const Blog = () => {
  return (
    <BlogStyled>
      <div>
        <h2>Confira o <em>nosso blog</em></h2>
        <Button>ler todos</Button>
      </div>
      <nav>
        <ul>
          {
            blogContent.map((blog) => {
              return <CardBlog blog={blog} />
            })
          }
        </ul>
      </nav>
    </BlogStyled>
  )
}

export default Blog