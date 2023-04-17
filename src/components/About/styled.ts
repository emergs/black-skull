import styled from "styled-components";

export const AboutStyled = styled.article`
  height: 406px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  img{
    width: 150.4px;
    height: 150.4px;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    bottom: 185px;
    opacity: 0.05;
  }

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