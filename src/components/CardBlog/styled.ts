import styled from "styled-components";

export const CardBlogStyled = styled.li`
  height: 100%;
  width: 376px;
  border: 1px solid var(--dark3);

  img{
    height: 200px;
  }

  .infoBlog{
    padding: 15px 32px 24px 24px;
    height: 180px;
    display: flex;
    flex-direction:column;
    justify-content:flex-start;
    
    span{
      font: var(--barlow14-400);
      color:var(--gray2);
      margin-bottom: 16px;
    }

    figcaption{
      font: var(--barlow18-700);
      color:var(--white);
      margin-bottom: 24px;
      text-transform: uppercase;
    }
  }
`