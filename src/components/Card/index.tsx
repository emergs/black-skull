import Button from "../Button"
import { CardStyled } from "./styled"
import packageImage from "../../assets/images/package.svg"
import dollarImage from "../../assets/images/dollar.svg"

const Card = () => {
  return (
    <CardStyled>
      <div className="card">
        <div className="cardInfo">
          <h2>garanta o <em>frete grátis</em></h2>
          <Button>consulte</Button>
        </div>
        <div className="cardImage">
          <figure>
            <img src={packageImage} alt="logo package" />
          </figure>
        </div>
      </div>
      <div className="card">
        <div className="cardInfo">
          <h2>seu dinheiro <em>de volta</em></h2>
          <Button>entenda</Button>
        </div>
        <div className="cardImage">
          <figure>
            <img src={dollarImage} alt="logo dinners" />
          </figure>
        </div>
      </div>
    </CardStyled>
  )
}

export default Card