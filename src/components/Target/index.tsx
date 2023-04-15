import { targets } from "../../utils"
import { TargetStyled } from "./styled"

const Target = () => {
  return (
    <TargetStyled>
      <h2>Objetivos</h2>
      <nav>
        <ul>
          {
            targets.map((target) => {
              return <li>
                <figure>
                  <img src={target.img} alt={target.title} />
                  <figcaption>{target.title}</figcaption>
                </figure>
              </li>
            })
          }
        </ul>
      </nav>
    </TargetStyled>
  )
}

export default Target