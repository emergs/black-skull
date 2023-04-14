import { footerOptions, footerOptions2, socialMedia } from "../../utils"
import Button from "../Button"

const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          <div>
            <figure>
              <img src="" alt="" />
              <span>Nos siga:</span>
              <nav>
                <ul>
                  {
                    socialMedia.map((media) => {
                      return <li>
                        <figure>
                          <img src={media.icon} alt={media.name} />
                        </figure>
                      </li>
                    })
                  }
                </ul>
              </nav>
            </figure>
          </div>
          <div>
            {
              footerOptions.map((elem) => {
                return <div>
                  <h3>{elem.title}</h3>
                  <nav>
                    <ul>
                      {
                        elem.content.map((option) => {
                          return <li>{option.title}</li>
                        })
                      }
                    </ul>
                  </nav>
                </div>
              })
            }
            {
              footerOptions2.map((elem) => {
                return <div>
                  <h3>{elem.title}</h3>
                  <nav>
                    <ul>
                      {
                        elem.content.map((option) => {
                          return <li>{option.img}</li>
                        })
                      }
                    </ul>
                  </nav>
                </div>
              })
            }
          </div>
        </div>
        <div>
          <h2>fique por dentro</h2>
          <span>Inscreva-se e seja o primeiro a saber sobre as novidades, promoções e muito mais!</span>
          <div>
            <input type="text" />
            <input type="text" />
          </div>
          <Button>enviar</Button>
        </div>
      </div>
      <div>
        <span>Black Skull 2022. Todos os direitos reservados.</span>
        <figure>
          <img src="" alt="" />
        </figure>
        <figure>
          <img src="" alt="" />
        </figure>
      </div>
    </footer>
  )
}

export default Footer