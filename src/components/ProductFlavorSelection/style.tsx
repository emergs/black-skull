import styled from "styled-components";

export const ProductFlavorStyled = styled.div`
  .formTitle{
      text-align: center;
      font: var(--barlow14-700);
      color: var(--dark1);
      text-transform: uppercase;
      position: absolute;
      left: 116px;
      bottom: 150px;
    }

    .productFlavorSelection{
      position: absolute;
      height: 100px;
      width: 170px;
      height: 106px;
      left: 53px;
      bottom: 28px;
      display: flex;
      flex-wrap: wrap;
      gap: 10px;

      input{
        display: none;
      }

      .flavorOption{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80px;
        height: 32px;
        font:var(--barlow10-700);
        color: var(--gray1);
        text-transform: uppercase;
        border: 1px solid var(--gray1);
        border-radius: 4px;
        cursor: pointer;

        :hover{
          border-color: var(--black1);
          color: var(--black1);
          background-color: var(--background);
        }
      }
    }

`