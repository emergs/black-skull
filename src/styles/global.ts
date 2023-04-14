import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
  :root{
    //colors
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

    //fonts
    --barlow10-500:500 10px 'Barlow', sans-serif;
    --barlow12-500:500 12px 'Barlow', sans-serif;
    --barlow12-600:600 12px 'Barlow', sans-serif;
    --barlow12-700:700 12px 'Barlow', sans-serif;
    --barlow14-400:400 14px 'Barlow', sans-serif;
    --barlow14-700:700 14px 'Barlow', sans-serif;
    --barlow16-400:400 16px 'Barlow', sans-serif;
    --barlow16-700:700 16px 'Barlow', sans-serif;
    --barlow18-700:700 18px 'Barlow', sans-serif;
    --barlow22-700:700 22px 'Barlow', sans-serif;
    --barlow14-700-italic:italic 700 14px 'Barlow', sans-serif;

    --roboto32-700:italic 700 32px 'Roboto Condensed', sans-serif;
    --roboto40-700:italic 700 40px 'Roboto Condensed', sans-serif;
    --roboto56-700:italic 700 56px 'Roboto Condensed', sans-serif;

  }

  body{
    background-color: aquamarine;
  }
`
export default GlobalStyle;
