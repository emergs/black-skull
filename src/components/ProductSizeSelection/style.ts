import styled from "styled-components";

export const ProductSizeStyled = styled.div`
  .formTitle{
    text-align: center;
    font: var(--barlow14-700);
    color: var(--dark1);
    text-transform: uppercase;
    position: absolute;
    left: 116px;
    bottom: 150px;
    padding-bottom: 10px;
  }

  .productSizeSelection, .productColorSelection{
    position: absolute;
    width: 170px;
    display: flex;
    gap: 10px;
    align-content: center;
    justify-content: space-between;

    input{
      display: none;
    }

    .sizeOption{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 32px;
      cursor: pointer;
    }
  }

  .productSizeSelection{
    height: 122px;
    left: 54px;
    bottom: 40px;
    flex-wrap: wrap;

    .sizeOption{
      width: 50px;
      font:var(--barlow10-700);
      color: var(--gray1);
      text-transform: uppercase;
      border: 1px solid var(--gray1);
      border-radius: 4px;

      :hover{
        border-color: var(--black1);
        color: var(--black1);
        background-color: var(--background);
      }
    }
  }

  .productColorSelection{
    height: 40px;
    left: 54px;
    bottom: 0px;

    .sizeOption{
      width: 35px;
      height: 35px;
      border-radius: 50%;

      span{
        width: 32px;
        height: 32px;
        border-radius: 50%;
      }
    }
    .red{
      background-color: #CD3232;
    }
    .violet{
      background-color: #596DB3;
    }
    .green{
      background-color: #66CA64;
    }
    .yellow{
      background-color: #ECBD17;
    }

    .red:hover,.violet:hover,.green:hover,.yellow:hover{
      width: 34px;
      height: 34px;
      outline: 1.5px solid var(--dark1);
      border-radius: 50%;
    }
  }
`