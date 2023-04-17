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

  ul{
    display: flex;
    justify-content: center;
    gap: 20px;
    height: 341px;
    margin-bottom: 143px;
    padding-left:56px;
    padding-right: 56px;
  }
`