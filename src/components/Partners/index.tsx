import { partners } from "../../utils"
import Button from "../Button"
import { PartnerStyled } from "./styled"

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