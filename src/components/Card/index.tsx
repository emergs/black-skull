import Button from "../Button"
import { CardStyled } from "./styled"
import packageImage from "../../assets/images/package.svg"
import dollarImage from "../../assets/images/dollar.svg"
import { motion } from "framer-motion"
import { useState } from "react"

const Card = () => {

  const [isHoverInfo, setIsHoverInfo] = useState(false)
  const [isHoverImage, setIsHoverImage] = useState(false)

  const handleHoverInfo = () => setIsHoverInfo(!isHoverInfo)
  const handleHoverImage = () => setIsHoverImage(!isHoverImage)

  return (
    <CardStyled>
      <motion.div className="card" onMouseEnter={handleHoverInfo} onMouseLeave={handleHoverInfo}>
        <div className="cardInfo">
          <h2>garanta o <em>frete grátis</em></h2>
          <Button>consulte</Button>
        </div>
        <div className="cardImage">
          <figure>
            <motion.img
              src={packageImage}
              alt="logo package"
              animate={{
                rotate: isHoverInfo ? 75 : 0,
                y: isHoverInfo ? -50 : 0,
              }}
              transition={{
                type: "tween"
              }}
            />
          </figure>
        </div>
      </motion.div>
      <motion.div className="card" onMouseEnter={handleHoverImage} onMouseLeave={handleHoverImage}>
        <div className="cardInfo">
          <h2>seu dinheiro <em>de volta</em></h2>
          <Button>entenda</Button>
        </div>
        <div className="cardImage">
          <figure>
            <motion.img
              src={dollarImage}
              alt="logo dinners"
              animate={{
                rotate: isHoverImage ? -170 : 0,
                y: isHoverImage ? -50 : 0,
              }}
              transition={{
                type: "tween"
              }}
            />
          </figure>
        </div>
      </motion.div>
    </CardStyled>
  )
}

export default Card