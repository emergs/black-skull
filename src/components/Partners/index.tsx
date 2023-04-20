import { partners } from "../../utils"
import Button from "../Button"
import { PartnerStyled } from "./styled"
import { HiArrowRight } from "react-icons/hi"
import { motion } from "framer-motion"
import { useContext, useRef, useState } from "react"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import { SlidersContexts } from "../../contexts/slider"

const Partners = () => {

  const carousel = useRef(null)
  const card = useRef(null)
  const { nextImage, previusImage } = useContext(SlidersContexts)

  const [isHovered, setIsHovered] = useState(Array(partners.length).fill(false));

  const handleHover = (indexElement: number) => {
    setIsHovered((card) => {
      return card.map((state, index) => {
        return indexElement === index ? !state : state
      })
    });
  };

  return (
    <PartnerStyled>
      <h2>Conheça a Tropa <em>Black Skull</em></h2>
      <Button
        padding="auto"
        width="32px"
        height="32px"
        position="absolute"
        top="242px"
        left="141px"
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
            partners.map((partner, index) => {
              return <motion.li key={index}
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={() => handleHover(index)}
              >
                <figure>
                  <img src={partner.img} alt={partner.name} ref={card} />
                  <motion.div
                    className="infoPartners"
                    animate={{
                      width: isHovered[index] ? '100%' : '0px',
                      opacity: isHovered[index] ? 0.9 : 0
                    }}
                  >
                    <h4>{partner.name}</h4>
                    <a href={`/${partner.description}`}>
                      <span>Mais informações</span>
                      <HiArrowRight />
                    </a>
                  </motion.div>
                </figure>
              </motion.li>
            })
          }
        </ul>
      </nav>
      <Button
        padding="auto"
        width="32px"
        height="32px"
        position="absolute"
        top="242px"
        right="141px"
        zIndex="1"
        backgroundColor="var(--gray2)"
        hoverBackground="var(--orange2)"
        onClick={(e) => nextImage(e, carousel, card)}
      >
        <BsArrowRight />
      </Button>
      <div>
        <Button padding="14px 24px">Ver Todos</Button>
      </div>
    </PartnerStyled>
  )
}

export default Partners