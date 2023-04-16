import { navbarOptions, navbarUserOptions } from "../../utils"
import { HeaderStyled, Navbar, TopContent } from "./style";
import logo from "../../assets/images/logoPrimary.svg"
import truck from "../../assets/images/Truck.svg"

function Header() {
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
              navbarOptions.map((elem) => {
                return <li>{elem.name}</li>
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
                  <figure>
                    <img src={elem.icon} alt={elem.name} />
                  </figure>
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