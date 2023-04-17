import styled from "styled-components";

export const ContactUsStyled = styled.div`
  Button:first-child{
    :hover{
      color: var(--dark1);
      border: 1px solid var(--dark1);
    }

    svg{
      width: 30px;
      height: 20px;
    }
  }

  Button:last-child{
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    svg{
    width: 13px;
    height:15px;
  }
  }

  
`