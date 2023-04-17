import styled from "styled-components";
import background from "../../assets/images/imageMain.svg"

export const EntranceStyled = styled.section`
  height: 548px;
  padding-top:130px;
  margin-top: 104px;
  padding-left: 155px;
  background-color: gray;
  background-image: url(${background});
  background-size: cover;

  div{
    width: 551px;
    max-width: 551px;

    h1{
      font:var(--roboto56-700);
      text-transform: uppercase;
      color: var(--white);
      margin-bottom: 16px;

      em{
        color: var(--orange1);
      }
    }

    p{
      color:var(--white);
      font: var(--barlow16-400);
      max-width: 349px;
      margin-bottom: 32px;
    }
  }
`