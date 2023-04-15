import styled from "styled-components";

export const FooterStyled = styled.footer`
  background-color: var(--black1);
  display: flex;
  flex-direction: column;

  .footerTop{
    height: 500px;
    display: flex;

    .footerLinks{
      width: 927px;

      .footerSocialMedias{

      }
      .footerLists{

      }
    }

    .footerForm{
      width: 353px;
      border-left: 1px solid var(--dark3);
      padding: 64px 43px 86px 44px;

      h2{
        font: var(--roboto32-700);
        color:var(--white);
        text-transform: uppercase;
        margin-bottom: 16px;

        em{
          color:var(--orange1);
        }
      }

      span{
        font: var(--barlow14-400);
        color:var(--gray1);
      }

      .footerInputs{
        margin-top: 32px;
        margin-bottom: 24px;

        input{
          width: 266px;
          height: 56px;
          background-color: var(--dark3);
          gap:16px;
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