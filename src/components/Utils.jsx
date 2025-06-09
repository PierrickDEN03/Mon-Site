import { styled } from 'styled-components'
import { HashLink } from 'react-router-hash-link'

export const colors = {
      noir: '#05050C',
      blanc: '#F1F1F1',
      bleu: '#20225F',
      bleuNeon: '#2e368f',
      gris: '#212121',
      grisFonce: 'rgba(29, 27, 37, 0.8)',

      blancFonce: 'rgba(189,187,198,0.8)',
      grisClair: 'rgba(227, 228, 237, 0.37)',
      bleuFonce: '#0D0F24',
      bleuClair: '#EDF0FA',
}

export const Wrapper = styled.section`
      position: relative;
      width: 100%;
      min-height: 100vh;
      display: flex;
      overflow: hidden;
      z-index: 0;
      flex-direction: column;
      padding: 5%;
      padding-top: 9%;
      box-sizing: border-box;
      align-items: center;
      justify-content: center;
      color: ${({ $fontColor }) => $fontColor};
      overflow: hidden;
      /* Optionnel : limite la taille du contenu si nécessaire */
      margin-left: auto;
      margin-right: auto;
      gap: 20px;

      @media (max-width: 1024px) {
            min-height: 0px;
            gap: 20px;
            margin-bottom: 100px;
      }
`

export const StyledButton = styled(HashLink)`
      position: relative;
      cursor: pointer;
      overflow: hidden;
      min-width: 150px;
      max-width: 200px;
      height: 50px;
      padding: 5px 15px;
      color: ${({ $fontColor }) => $fontColor};
      background-color: ${({ $bgColor }) => $bgColor};
      border: none;
      border-radius: 50px;
      z-index: 0;

      display: flex;
      font-family: 'Poppins', sans-serif;
      font-size: ${({ $taille }) => $taille};
      align-items: center;
      justify-content: center;
      text-decoration: none;
      text-align: center;

      transition: background-color 0.4s ease, color 0.4s ease, font-size 1s ease;

      &::after {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: ${({ $bgHover }) => $bgHover};
            z-index: -1;
            transition: left 0.4s ease;
      }

      &:hover::after {
            left: 0;
      }

      &:hover {
            color: ${({ $texteHover }) => $texteHover};
      }

      &.active {
            background-color: ${({ $bgHover }) => $bgHover};
            color: ${({ $texteHover }) => $texteHover};
      }

      &.active::after {
            left: 0;
      }

      @media (max-width: 1024px) {
            min-width: 0px;
            font-size: 1rem;
      }
`

export const slideInRightDesktop = {
      hidden: { x: 400, opacity: 0 },
      visible: { x: 0, opacity: 1 },
}

export const slideInLeftDesktop = {
      hidden: { x: -400, opacity: 0 },
      visible: { x: 0, opacity: 1 },
}

export const slideInTopDesktop = {
      hidden: { y: -200, opacity: 0 },
      visible: { y: 0, opacity: 1 },
}

export const slideInBottomDesktop = {
      hidden: { y: 400, opacity: 0 },
      visible: { y: 0, opacity: 1 },
}

export const escapeInBottomDesktop = {
      hidden: { y: 0, opacity: 1 },
      exit: { y: 400, opacity: 0 },
      visible: { y: 0, opacity: 1 },
}

export const escapeInRightDesktop = {
      hidden: { x: 0, opacity: 1 },
      exit: { x: 400, opacity: 0 },
      visible: { x: 0, opacity: 1 },
}

export const slideInRightMobile = {
      hidden: { x: 100, opacity: 0 },
      visible: { x: 0, opacity: 1 },
}

export const slideInLeftMobile = {
      hidden: { x: -100, opacity: 0 },
      visible: { x: 0, opacity: 1 },
}

export const slideInTopMobile = {
      hidden: { y: -100, opacity: 0 },
      visible: { y: 0, opacity: 1 },
}

export const slideInBottomMobile = {
      hidden: { y: 100, opacity: 0 },
      visible: { y: 0, opacity: 1 },
}

export const escapeInBottomMobile = {
      hidden: { y: 0, opacity: 1 },
      exit: { y: 100, opacity: 0 },
      visible: { y: 0, opacity: 1 },
}

export const escapeInRightMobile = {
      hidden: { x: 0, opacity: 1 },
      exit: { x: 100, opacity: 0 },
      visible: { x: 0, opacity: 1 },
}
