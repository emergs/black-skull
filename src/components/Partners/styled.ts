import styled from "styled-components";
import backgroundPartners from "../../assets/images/backgroundPartners.svg"

export const PartnerStyled = styled.section`
  height: 461px;
  background-image: url(${backgroundPartners});
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

      figure{
        position: relative;

        img{
          width: 100%;
          height: 100%;
        }

        .infoPartners{
          display: flex;
          flex-direction: column;
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 30%;
          background-color: var(--dark1);
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          padding-left:16px ;
          
          h4{
            font: var(--roboto16-700);
            color: var(--orange1);
            text-transform: uppercase;
          }
          
          a{
            font: var(--barlow12-700);
            color: var(--white);
            text-transform: uppercase;
            display: flex;
            align-items: center;
            gap: 5px;
          }

          svg{
            width: 20px;
            height: 20px;
          }
        }
      }
    }
  }

  div{
    margin-top: 32px;
    display: flex;
    justify-content: center;
  }

`