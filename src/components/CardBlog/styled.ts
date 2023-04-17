import styled from "styled-components";

export const CardBlogStyled = styled.li`
  height: 100%;
  width: 376px;
  border: 1px solid var(--dark3);
  overflow: hidden;

  .blog-image{
    height: 200px;
    overflow: hidden;
  }

  .blog-info{
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

    .blog-button-card{
      position: relative;
      height: 100%;
      display: flex;
      align-items: center;

      img{
        position: absolute;
        left: 0;
        top:15px;
      }
    }
  }
`