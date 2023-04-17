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
        <motion.div
          className="blog-info"
          animate={{ backgroundColor: isHovered ? 'var(--dark2)' : '' }}
        >
          <span>{blog.date}</span>
          <figcaption>{blog.title}</figcaption>
          <div className="blog-button-card">
            <Button padding="10px 35.5px">Ler mais</Button>
            <figure>
              <motion.img
                src={arrowSquareOut}
                alt="icone arrowSquareOut"
                animate={{
                  marginLeft: isHovered ? '150px' : '0px',
                  zIndex: isHovered ? 1 : -1,
                  width: '24px'
                }}
              />
            </figure>
          </div>
        </motion.div>
      </motion.figure>
    </CardBlogStyled>
  )
}

export default CardBlog