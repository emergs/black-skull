import { targets } from "../../utils"

const Target = () => {
  return (
    <section>
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
    </section>
  )
}

export default Target