import { AboutStyled } from "./styled"
import logo from "../../assets/images/logoSecondary.svg"

const About = () => {
  return (
    <AboutStyled>
      <figure>
        <img src={logo} alt="logo da black skull" />
      </figure>
      <h2>Sobre a Black Skull</h2>
      <p>
        A Black Skull USA é uma marca de suplementos alimentares com foco em atletas de alta performance. Nossa sede no Brasil está alocada em Embu das Artes – SP, com mais de 12.000 m² de área construída, com alta capacidade produtiva. Nossos produtos trabalham com as melhores matérias-primas do mercado e tem como principal característica maior concentração de insumos, que proporcionam níveis de pureza mais altos e por consequência otimizam a qualidade de nossos produtos.

      </p>
    </AboutStyled>
  )
}

export default About