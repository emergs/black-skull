import Button from "../Button"
import { CardBlogStyled } from "./styled"

const CardBlog = ({ blog }: any) => {
  return (
    <CardBlogStyled>
      <figure>
        <img src={blog.img} alt={blog.title} />
        <div className="infoBlog">
          <span>{blog.date}</span>
          <figcaption>{blog.title}</figcaption>
          <Button>Ler mais</Button>
        </div>
      </figure>
    </CardBlogStyled>
  )
}

export default CardBlog