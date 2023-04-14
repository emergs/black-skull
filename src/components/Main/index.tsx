import About from "../About"
import Blog from "../Blog"
import Entrance from "../Entrance"
import OptionsUser from "../OptionsUser"
import Partners from "../Partners"
import ProductsCategory from "../ProductsCategory"
import ShowCase from "../ShowCase"
import Target from "../Target"

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
      <OptionsUser />
      <About />
    </main>
  )
}

export default Main