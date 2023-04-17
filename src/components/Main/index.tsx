import About from "../About"
import Blog from "../Blog"
import Entrance from "../Entrance"
import Partners from "../Partners"
import ProductsCategory from "../ProductsCategory"
import ShowCase from "../ShowCase"
import Target from "../Target"
import Card from "../Card"
import Button from "../Button"
import { SlArrowUp } from "react-icons/sl"
import { GrContact } from "react-icons/gr"
import { MdSpeakerNotes } from "react-icons/md"
import ContactsUs from "../ContactUs"

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
      <ContactsUs />
    </main>
  )
}

export default Main