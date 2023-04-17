import styled from "styled-components";

export const BlogStyled = styled.section`
  height: 540px;
  background: linear-gradient(180deg, #3A3A3C 0%, #0B0B0B 101.48%);
  margin-bottom: 64px;
  padding: 40px 56px 56px 56px;
  position: relative;

  svg{
    width: 70%;
    height: 100%;
  }

  div{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    h2{
      font: var(--roboto32-700);
      color: var(--white);
      text-transform: uppercase;
      margin-bottom: 25px;

      em{
        color:var(--orange1);
      }
    }
  }

  ul{
      height: 380px;
      display: flex;
      gap:20px;
    }
`