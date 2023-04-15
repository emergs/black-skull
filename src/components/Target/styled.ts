import styled from "styled-components";

export const TargetStyled = styled.section`
  height: 466px;

  h2{
    font: var(--roboto32-700);
    color:var(--dark1);
    margin-bottom: 24px;
    text-align: center;
    text-transform: uppercase;
  }

  ul{
    height: 340px;
    display: flex;
    justify-content: center;
    gap: 20px;

    li{
      width: 277px;
      height: 100%;
      position: relative;

      figcaption{
        position: absolute;
        bottom: 0;
        left: 0;
        font: var(--barlow14-700);
        background-color: var(--orange1);
        width: 212px;
        height: 40px;
        padding-left: 16px;
        padding-top: 12px;
        text-transform: uppercase;
      }
    }
  }
`