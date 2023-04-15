import styled from "styled-components";

export const AboutStyled = styled.article`
  height: 406px;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* h2, p{
    text-align: center;
  } */

  h2{
    margin-top: 160px;
    font: var(--roboto32-700);
    color: var(--dark1);
    text-transform: uppercase;
  }

  p{
    margin-top: 24px;
    margin-bottom: 64px;
    font:var(--barlow16-400);
    color: var(--dark3);
    line-height: 20px;
    width:643px;
    text-align: center;
  }
`