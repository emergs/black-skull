import styled from "styled-components";

export const ProductsCategoryStyled = styled.section`
  height: 330px;
  background-color: var(--white);

  ul{
    display: flex;
    justify-content: space-between;
    padding:56px;
    padding-bottom: 64px;

    li{
      width: 178px;
      height: 210px;

      div{
        width: 100%;
        height: 178px;
        background: var(--background);
        border-radius: 50%;
        padding: 35px;
      }

      img{
        width: 108px;
        height: 108px;
      }

      figcaption{
        margin-top: 16px;
        font:var(--barlow12-700);
        color: var(--dark1);
        text-align: center;
        text-transform: uppercase;
      }
    }
  }
`