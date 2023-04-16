import { partners } from "../../utils"
import Button from "../Button"
import { PartnerStyled } from "./styled"
import { HiArrowRight } from "react-icons/hi"
import { motion } from "framer-motion"

const Partners = () => {
  return (
    <PartnerStyled>
      <h2>Conheça a Tropa <em>Black Skull</em></h2>
      <nav>
        <ul>
          {
            partners.map((partner) => {
              return <li>
                <figure>
                  <img src={partner.img} alt={partner.name} />
                  <motion.div
                    className="infoPartners"
                    whileHover={{
                      width: '100%',

                      opacity: 1
                    }}
                    initial={{
                      width: '0%',
                      opacity: 0
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
        <Button>Ver Todos</Button>
      </div>
    </PartnerStyled>
  )
}

export default Partners