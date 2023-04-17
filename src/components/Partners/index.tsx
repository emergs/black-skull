import { partners } from "../../utils"
import Button from "../Button"
import { PartnerStyled } from "./styled"
import { HiArrowRight } from "react-icons/hi"
import { motion } from "framer-motion"
import { useState } from "react"

const Partners = () => {

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
      <nav>
        <ul>
          {
            partners.map((partner, index) => {
              return <li key={index}>
                <figure>
                  <motion.img
                    src={partner.img}
                    alt={partner.name}
                    onMouseEnter={() => handleHover(index)}
                    onMouseLeave={() => handleHover(index)}
                  />
                  <motion.div
                    className="infoPartners"
                    animate={{
                      width: isHovered[index] ? '100%' : '0%',
                      opacity: isHovered[index] ? 1 : 0
                    }}
                  >
                    <h4>{partner.name}</h4>
                    <a href={`/${partner.description}`}>
                      <span>Mais informações</span>
                      <HiArrowRight />
                    </a>
                  </motion.div>
                </figure>
              </li>
            })
          }
        </ul>
      </nav>
      <div>
        <Button padding="14px 24px">Ver Todos</Button>
      </div>
    </PartnerStyled>
  )
}

export default Partners