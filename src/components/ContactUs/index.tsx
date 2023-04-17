import { SlArrowUp } from "react-icons/sl"
import Button from "../Button"
import { ContactUsStyled } from "./style"
import { MdSpeakerNotes } from "react-icons/md"

const ContactsUs = () => {
  return (
    <ContactUsStyled>
      <Button
        padding="auto"
        width="56px"
        height="56px"
        position="fixed"
        top="559px"
        right="40px"
        zIndex="1"
        backgroundColor="var(--dark3)"
        hoverBackground="var(--orange1)"
        color="var(--gray1)"
        border="1px solid var(--gray1)"
      >
        <SlArrowUp />
      </Button>
      <Button
        textTransform="capitalize"
        font="var(--barlow14-700)"
        padding="auto"
        width="124px"
        height="40px"
        position="fixed"
        top="625px"
        right="40px"
        zIndex="1"
        backgroundColor="var(--orange1)"
        hoverBackground="var(--orange2)"
        color="var(--black1)"
        border="1px solid var(--dark3)"
      >
        <MdSpeakerNotes />
        <span>fale conosco</span>
      </Button>
    </ContactUsStyled>
  )
}

export default ContactsUs