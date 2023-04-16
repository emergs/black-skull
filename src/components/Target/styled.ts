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
      overflow: hidden;

      figcaption{
        position: absolute;
        bottom: 12px;
        left: 16px;
        font: var(--barlow14-700);
        text-transform: uppercase;
        z-index: 1;
      }

      .rectangleMain{
        position: absolute;
        bottom: 0;
        left: 0;
      }

      .rectangle1{
        position: absolute;
        bottom: 0;
        left: 180px;
      }

      .rectangle2{
        position: absolute;
        bottom: 0;
        left: 180px;
      }
    }


    
  }
`