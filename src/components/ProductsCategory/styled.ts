import styled from "styled-components";

export const ProductsCategoryStyled = styled.section`
  height: 330px;
  background-color: var(--white);
  position: relative;
  display: flex;
  justify-content: center;

  svg{
    width: 70%;
    height: 100%;
  }

  ul{
    max-width: 1280px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap:30px;
    padding:56px;
    padding-bottom: 64px;
    overflow-x: auto;
    scroll-behavior: smooth;

    ::-webkit-scrollbar{
      display: none;
    }

    li, figure{
      width: 178px;
      height: 210px;

      div{
        width: 100%;
        height: 178px;
        background: var(--background);
        border-radius: 50%;
        position: relative;
        z-index: 0;

        ::before{
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
          width: 0%;
          height: 0%;
          transition: 0.5s ease;
          background-color: var(--orange1);
          outline: 5px solid var(--orange2);
          z-index: -1;
        }

        :hover::before{
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }

        img{
          width: 100%;
          height: 100%;
          z-index: 1;
          padding: 35px;

          :hover{
            transform: scale(1.5);
            transition: 0.5s ease;
          }
        }
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