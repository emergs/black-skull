import styled from "styled-components";
import { IDivLists } from "../../interfaces";

export const FooterStyled = styled.footer`
  background-color: var(--black1);
  display: flex;
  flex-direction: column;

  .footerTop{
    height: 500px;
    display: flex;

    .footerLinks{
      width: 927px;
      padding: 40px 40px 78px 56px;
      display: flex;

      .footerSocialMedias{
        width: 245px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        img{
          width: 100%;
          height: 72px;
          margin-bottom: 32px;
        }
        span{
          font: var(--barlow14-400);
          color:var(--white);
          text-align: center;
          margin-bottom: 16px;
        }

        ul{
          display: flex;
          justify-content: center;
          gap:20px;

          li{
            width: 24px;
            height: 24px;

            img{
              width: 100%;
              height: 100%;
            }
          }

        }
      }
      .footerLists{
        margin-left: 40px;
        display: flex;
        flex-direction: column;
        gap: 44px;
        font: var(--barlow14-400);
        color: var(--gray1);

        h3{
          font: var(--barlow16-700);
          color: var(--white);
          text-transform: uppercase;
        }

        .footerListsTop{
          display: flex;
          justify-content: space-between;
          gap: 40px;
          font: var(--barlow14-400);
        }

        .footerListsBottom{
          display: flex;
          gap: 48px;

          div{
            width: 202px;
          }

          h3{
            margin-bottom: 24px;
          }

          ul{
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
          }

          
        }
      }
    }

    .footerForm{
      width: 353px;
      border-left: 1px solid var(--dark3);
      padding: 64px 43px 86px 44px;
      display: flex;
      flex-direction: column;
      align-items: center;

      h2{
        font: var(--roboto32-700);
        color:var(--white);
        text-transform: uppercase;
        margin-bottom: 16px;
        width: 250px;
        text-align: center;

        em{
          color:var(--orange1);
        }
      }

      span{
        font: var(--barlow14-400);
        color:var(--gray1);
        text-align: center;
      }

      .footerInputs{
        margin-top: 32px;
        margin-bottom: 24px;
        height: 126px;
        
        input:first-child{
          margin-bottom: 16px;
        }

        input{
          width: 266px;
          height: 56px;
          background-color: var(--dark1);
          border: 1px solid var(--dark3);
          border-radius: 4px;
          padding-left: 16px;

          ::placeholder{
            padding-top: 21px;
            font: var(--barlow12-500);
            color: var(--gray1)
          }

          :hover{
            background-color: var(--dark2);
          }
        }

      }
    }
  }

  .footerBottom{
    height: 88px;
    display: flex;
    justify-content: space-between;
    padding: 35px 56px 34px 56px;
    border-top: 1px solid var(--dark3);

    span{
      font: var(--barlow16-400);
      color: var(--white);
    }

    .footerLogos{
      display: flex;
      gap: 40.05px;
    }
  }

`

export const DivLists = styled.div<IDivLists>`
  word-break: normal;
  max-width: ${props => props.width}px;

  h3{
    margin-bottom: 20px;
  }

  ul{
    gap: 14px;
    display: flex;
    flex-direction: column;
  }
`