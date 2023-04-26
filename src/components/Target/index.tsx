import { useState } from "react"
import { targets } from "../../utils"
import { TargetStyled } from "./styled"
import { motion } from "framer-motion"
import rectangleMain from "../../assets/images/Rectangle49.svg"
import rectangle1 from "../../assets/images/Rectangle50.svg"
import rectangle2 from "../../assets/images/Rectangle51.svg"

const Target = () => {

  const [isHover, setIsHover] = useState(Array(targets.length).fill(false))

  const handleHover = (indexElement: number) => {
    setIsHover((elements) => {
      return elements.map((state, index) => {
        return indexElement === index ? !state : state
      })
    })
  }

  return (
    <TargetStyled id="goals">
      <h2>Objetivos</h2>
      <nav>
        <ul>
          {
            targets.map((target, index) => {
              return <li key={index}>
                <motion.figure
                  onMouseEnter={() => handleHover(index)}
                  onMouseLeave={() => handleHover(index)}
                >
                  <motion.img
                    src={target.img}
                    alt={target.title}
                    whileHover={{ scale: 1.2 }}
                  />
                  <figcaption>{target.title}</figcaption>
                  <motion.img
                    className="rectangleMain"
                    src={rectangleMain}
                    alt="image de um rectangle"
                    style={{ filter: isHover[index] ? 'grayscale(40%)' : '' }}
                  />
                  <motion.img
                    className="rectangle1"
                    src={rectangle1}
                    alt="image de um rectangle"
                    animate={{ left: isHover[index] ? '200px' : '180px' }} />
                  <motion.img
                    className="rectangle2"
                    src={rectangle2}
                    alt="image de um rectangle"
                    animate={{ left: isHover[index] ? '220px' : '180px' }} />
                </motion.figure>
              </li>
            })
          }
        </ul>
      </nav>
    </TargetStyled>
  )
}

export default Target