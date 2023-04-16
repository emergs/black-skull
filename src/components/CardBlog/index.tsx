import { useState } from "react";
import Button from "../Button"
import { CardBlogStyled } from "./styled"
import { motion } from "framer-motion"
import arrowSquareOut from "../../assets/images/ArrowSquareOut.svg"

const CardBlog = ({ blog }: any) => {

  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <CardBlogStyled>
      <motion.figure
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        style={{ position: "relative" }}
      >
        <div className="blog-image">
          <motion.img
            src={blog.img}
            alt={blog.title}
            animate={{ scale: isHovered ? 1.2 : 1 }}
          />
        </div>
        <div className="blog-info">
          <span>{blog.date}</span>
          <figcaption>{blog.title}</figcaption>
          <div className="blog-button-card">
            <Button>Ler mais</Button>
            <figure>
              <motion.img
                src={arrowSquareOut}
                alt="icone arrowSquareOut"
                animate={{
                  marginLeft: isHovered ? '60px' : '0px',
                  zIndex: isHovered ? 1 : -1,
                  width: '20px'
                }}
              />
            </figure>
          </div>
        </div>
      </motion.figure>
    </CardBlogStyled>
  )
}

export default CardBlog