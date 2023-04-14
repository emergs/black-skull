import styled from "styled-components";

export const PartnerStyled = styled.section`
  height: 461px;
  background-color: gray;
  padding: 40px 205px 56px 205px;
  margin-bottom: 88px;

  h2{
    font: var(--roboto40-700);
    color: var(--white);
    text-transform: uppercase;
    margin-bottom: 24px;

    em{
      color: var(--orange1);
    }
  }

  ul{
    display: flex;
    gap: 20px;

    li{
      width: 277px;
      height: 294px;

      img{
        width: 100%;
        height: 100%;
      }
    }
  }

  div{
    margin-top: 32px;
    display: flex;
    justify-content: center;
  }

`