import {navbarOptions, navbarUserOptions} from  "../../utils"

function Header() {
  return (
    <header>
    <div>
      <a href="#">fale conosco</a>
      <div>
        <span>logo</span>
        <span>Frete grátis a partir de R$ 199,90 para todo Brasil</span>
      </div>
      <a href="#">blog.blackskull</a>
    </div>
    <div>
      <figure>
        <img src="" alt="" />
      </figure>
      <nav>
        {
          navbarOptions.map((elem)=>{
            return <li>{elem.name}</li>
          })
        }
      </nav>
      <input/>
      <nav>
        {
          navbarUserOptions.map((elem)=>{
            return <li>{elem.name}</li>
          })
        }
      </nav>
    </div>
  </header>
  );
}

export default Header;