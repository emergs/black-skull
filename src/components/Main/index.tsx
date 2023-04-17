import About from "../About"
import Blog from "../Blog"
import Entrance from "../Entrance"
import Partners from "../Partners"
import ProductsCategory from "../ProductsCategory"
import ShowCase from "../ShowCase"
import Target from "../Target"
import Card from "../Card"

const Main = () => {
  return (
    <main>
      <Entrance />
      <ProductsCategory />
      <ShowCase title="Lançamentos" />
      <Partners />
      <ShowCase title="Promoções" />
      <Blog />
      <Target />
      <Card />
      <About />
    </main>
  )
}

export default Main