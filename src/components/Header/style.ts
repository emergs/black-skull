import styled from "styled-components";

export const HeaderStyled = styled.header`
  height: 104px;
  a, span, li{
      text-transform: uppercase;
  }
`

export const TopContent = styled.div`
    height: 32px;
    background-color: var(--dark1);
    display: flex;
    justify-content: space-between;
    padding: 9px 56px;

    a{
      font: var(--barlow12-700);
      color:var(--orange1);
    }

    div{
      display: flex;

      span{
        color: var(--white);
        font: var(--barlow10-500);
      }
    }

`

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 72px;
  background-color: var(--black1);
  padding:16px 56px;

  figure{
    width: 166px;
    height: 32px;

    img{
      width: 100%;
      height: 100%;
    }
  }

  nav{
    display: flex;
    color: var(--gray1);
  }
  
  .navCategories{
    font: var(--barlow14-700);

    ul{
      width: 596px;
      display: flex;
      justify-content: space-between;
    }
  }

  .inputSearch{
    width: 216px;
    height: 40px;

    input{
      width: 100%;
      height: 100%;
    }
  }

  .navOptionsUser{

  }

`