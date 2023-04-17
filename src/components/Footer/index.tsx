import { footerOptions, footerOptions2, socialMedia } from "../../utils"
import Button from "../Button"
import { DivLists, FooterStyled } from "./styled"
import logoWicomm from "../../assets/images/logoWicomm.svg"
import logoVtex from "../../assets/images/logoVtex.svg"
import logoBlackSkull from "../../assets/images/logoBlackSkullPrimary2.svg"

const Footer = () => {
  return (
    <FooterStyled>
      <div className="footerTop">
        <div className="footerLinks">
          <div className="footerSocialMedias">
            <figure>
              <img src={logoBlackSkull} alt="logo black skull" />
            </figure>
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
          </div>
          <div className="footerLists">
            <div className="footerListsTop">
              {
                footerOptions.map((elem) => {
                  return <DivLists width={elem.width}>
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
                  </DivLists>
                })
              }
            </div>
            <div className="footerListsBottom">
              {
                footerOptions2.map((elem) => {
                  return <div>
                    <h3>{elem.title}</h3>
                    <nav>
                      <ul>
                        {
                          elem.content.map((option) => {
                            return <li>
                              <figure>
                                <img src={option.img} alt={elem.title} />
                              </figure>
                            </li>
                          })
                        }
                      </ul>
                    </nav>
                  </div>
                })
              }
            </div>
          </div>
        </div>
        <div className="footerForm">
          <h2>fique por <em>dentro</em></h2>
          <span>Inscreva-se e seja o primeiro a saber sobre as novidades, promoções e muito mais!</span>
          <div className="footerInputs">
            <input type="text" placeholder="Digite seu nome" />
            <input type="text" placeholder="Digite seu email" />
          </div>
          <Button padding="10px 42px">enviar</Button>
        </div>
      </div>
      <div className="footerBottom">
        <span>Black Skull 2022. Todos os direitos reservados.</span>
        <div className="footerLogos">
          <figure>
            <img src={logoWicomm} alt="logo da Wicomm" />
          </figure>
          <figure>
            <img src={logoVtex} alt="logo da Vtex" />
          </figure>
        </div>
      </div>
    </FooterStyled>
  )
}

export default Footer