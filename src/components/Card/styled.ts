import styled from "styled-components";

export const CardStyled = styled.section`
  height: 280px;
  display: flex;
  justify-content: center;
  gap: 20px;

  .card{
    width: 475px;
    height: 280px;
    background: linear-gradient(213.8deg, #9A9A9A -17.86%, #0B0B0B 73%);
    display: flex;
    padding: 40px 20px 20px 40px;

    .cardInfo{
      h2{
        font: var(--roboto40-700);
        color: var(--white);
        text-transform: uppercase;
        margin-bottom: 24px;
        //width: 230px;

        em{
          color: var(--orange1);
        }
      }

    }

    .cardImage{
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
    }
  }

`