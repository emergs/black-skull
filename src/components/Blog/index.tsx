import { blogContent } from "../../utils"
import Button from "../Button"
import CardBlog from "../CardBlog"

const Blog = () => {
  return (
    <section>
      <div>
        <h2>Confira o nosso blog</h2>
        <Button>button</Button>
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
    </section>
  )
}

export default Blog