import { partners } from "../../utils"

const Partners = () => {
  return (
    <section>
      <h2>Conheça a Tropa Black Skull</h2>
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
    </section>
  )
}

export default Partners