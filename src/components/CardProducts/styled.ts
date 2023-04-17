import styled from "styled-components";
import { motion } from "framer-motion"

export const CardProductsStyled = styled(motion.li)`
  width:277px;
  height: 100%;
  border: 1px solid var(--background);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;

  figure{
    width: 165px;
    height: 165px;
    margin: 32px 56px 24px 56px;

    img{
      width: 100%;
      height: 100%;
    }
  }

  .productName, .productPrice, .productPortion{
    padding-left: 24px;
    padding-right: 71px;
  }

  .productName{
    font:var(--barlow12-600);
    color: var(--black1);
    text-transform: uppercase;
  }

  .productPrice{
    font: var(--barlow22-700);
    color:var(--orange1);
  }

  .productPortion{
    font: var(--barlow14-400);
    color:var(--dark3);
  }

  form{
    display: none;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60%;
    background-color: rgba(255, 255, 255, 0.95);

    Button{
      position: absolute;
      width: 100%;
      bottom: -50px;
    }
  }
  `