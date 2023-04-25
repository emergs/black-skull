import styled from "styled-components";

export const ShowCaseStyled = styled.section`
  height: 544px;
  position: relative;

  svg{
    width: 70%;
    height: 100%;
  }

  h2{
    text-transform: uppercase;
  }

  h2{
    font:var(--roboto32-700);
    color:var(--dark1);
    text-align: center;
    margin-bottom: 24px;
  }

  nav{
    display: flex;
    justify-content: center;
    overflow-x: scroll;
  }

  ul{
    display: flex;
    justify-content: center;
    gap: 20px;
    height: 361px;
    margin-bottom: 143px;
    padding-left:56px;
    padding-right: 56px;
    scroll-behavior: smooth;
    max-width: 900px;

    ::-webkit-scrollbar{
      display: none;
    }
  }
`