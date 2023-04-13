import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
  :root{
    --black1:#0B0B0B;
    --white: #FFFFFF;
    --gray1: #9A9A9A;
    --gray2: #CACACA;
    --orange1:#FF9601;
    --orange2:#FFC470;
    --dark1:#1C1C1E;
    --dark2:#2C2C2E;
    --dark3:#3A3A3C;
    --background:#F1F1F1;
  }

  body{
    background-color: aquamarine;
  }
`
export default GlobalStyle;
