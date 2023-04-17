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
      align-items: center;
      gap: 10px;

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
  padding:0px 56px 0px 56px;

  figure{
    min-width: 166px;
    width: 166px;
    min-height: 32px;
    

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
    height: 100%;

    ul{
      width: 596px;
      height: 100%;
      display: flex;
      justify-content: space-between;

      li{
        width: 103px;
        display: flex;
        justify-content: center;
        align-items: center;
        
        :hover{
          background-color: var(--dark2);
          color:var(--white);
          transition: 0.4s;
        }
      }
    }
  }

  .inputSearch{
    width: 216px;
    min-width: 100px;
    height: 40px;

    input{
      width: 100%;
      height: 100%;
      border-radius: 4px;
      background-color: var(--dark1);
      border: 2px solid var(--dark3);

      ::placeholder{
        padding-left: 16px;
      }
    }
  }

  .navOptionsUser{
    ul{
      display: flex;
      gap: 20px;

      li, figure, img{
        width: 24px;
        height: 24px;
      }

      img{
        fill:red;
        
        :hover{
          fill: var(--white);
        }
      }
    }
  }

`