import { navbarOptions, navbarUserOptions } from "../../utils"
import { HeaderStyled, Navbar, TopContent } from "./style";
import logo from "../../assets/images/logoPrimary.svg"
import truck from "../../assets/images/Truck.svg"
import { motion } from "framer-motion"
import { useContext, useState } from "react";
import { MenuContexts } from "../../contexts/menu";

function Header() {

  const [isHover, setIsHover] = useState(Array(navbarOptions.length).fill(false))
  const { handleButtonClick } = useContext(MenuContexts)

  const handleHover = (indexElement: any) => {
    setIsHover((elem) => {
      return elem.map((state, index) => {
        return index === indexElement ? !state : state
      })
    })
  }

  return (
    <HeaderStyled>
      <TopContent>
        <a href="/fale-conosco">fale conosco</a>
        <div>
          <figure>
            <img src={truck} alt="icone de frete" />
          </figure>
          <span>Frete grátis a partir de R$ 199,90 para todo Brasil</span>
        </div>
        <a href="/blog">blog.blackskull</a>
      </TopContent>
      <Navbar>
        <figure>
          <img src={logo} alt="logo da Black Skull" />
        </figure>
        <nav className="navCategories">
          <ul>
            {
              navbarOptions.map((elem, index) => {
                return <motion.li key={index}
                  onMouseEnter={() => handleHover(index)}
                  onMouseLeave={() => handleHover(index)}
                  onClick={()=> handleButtonClick(elem.id)}
                >{elem.name}
                  <motion.div
                    initial={{
                      width: 0,
                      height: '5px',
                      backgroundColor: 'var(--orange1)'
                    }}
                    animate={{
                      width: isHover[index] ? '100%' : '0'
                    }}
                  ></motion.div>
                </motion.li>
              })
            }
          </ul>
        </nav>
        <div className="inputSearch">
          <input type="text" placeholder="Buscar" />
        </div>
        <nav className="navOptionsUser">
          <ul>
            {
              navbarUserOptions.map((elem) => {
                return <li>
                  {elem.icon}
                </li>
              })
            }
          </ul>
        </nav>
      </Navbar>
    </HeaderStyled>
  );
}

export default Header;