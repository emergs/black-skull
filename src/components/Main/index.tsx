import About from "../About"
import Blog from "../Blog"
import Entrance from "../Entrance"
import Partners from "../Partners"
import ProductsCategory from "../ProductsCategory"
import ShowCase from "../ShowCase"
import Target from "../Target"
import Card from "../Card"
import Button from "../Button"
import { BsArrowLeft } from "react-icons/bs"

const Main = () => {
  return (
    <main style={{ position: 'relative' }}>
      <Entrance />
      <ProductsCategory />
      <ShowCase title="Lançamentos" />
      <Partners />
      <ShowCase title="Promoções" />
      <Blog />
      <Target />
      <Card />
      <About />
      {/* <Button
        padding="auto"
        width="56px"
        height="56px"
        position="fixed"
        top="455px"
        right="40px"
        zIndex="1"
        backgroundColor="var(--gray1)"
        hoverBackground="var(--orange1)"
      >
        <BsArrowLeft />
      </Button> <Button
        padding="auto"
        width="32px"
        height="32px"
        position="absolute"
        top="521px"
        right="40px"
        zIndex="1"
        backgroundColor="var(--gray2)"
        hoverBackground="var(--orange2)"
      >
        <BsArrowLeft />
      </Button> */}
    </main>
  )
}

export default Main