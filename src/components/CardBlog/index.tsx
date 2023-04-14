import Button from "../Button"

const CardBlog = ({ blog }: any) => {
  return (
    <li>
      <figure>
        <img src={blog.img} alt={blog.title} />
        <figcaption>
          <span>{blog.date}</span>
          <span>{blog.title}</span>
          <Button>Button</Button>
        </figcaption>
      </figure>
    </li>
  )
}

export default CardBlog