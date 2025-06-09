import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import { colors } from './components/Utils'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
      html {
            scroll-behavior: smooth;
      }

    * {
      margin:0;
      padding:0;
    }
      body {
      background-color: ${({ $mode }) => ($mode === 'jour' ? colors.blanc : colors.noir)};
      transition:background-color 1s ease;
      cursor:${({ $cursor }) => ($cursor === 'normal' ? 'auto' : 'none')};
      transition : cursor 1s ease;
      }
      @media (max-width: 1024px) {
            body{
                  margin-top:120px;
            }
      }

      h1{
            text-align:center;
            font-family: 'Poppins', sans-serif;
            font-size:${({ $taille }) => ($taille === 'petit' ? '3rem' : $taille === 'normal' ? '5rem' : '6rem')};
            line-height:${({ $taille }) => ($taille === 'petit' ? '2rem' : $taille === 'normal' ? '4rem' : '5rem')};
            color:${({ $mode }) => ($mode === 'jour' ? colors.noir : colors.blanc)};
            transition:color 1s ease, font-size 1s ease;
            background: linear-gradient(
            120deg,
            #00ffd5,
            #a600ff,
            #00ffd5,
            #a600ff
            );
            background-size: 300% 300%;
            color: transparent;
            background-clip: text;
            -webkit-background-clip: text;
            animation: auroraAnimation 8s ease infinite;
      }

      h2 {
      text-align: center;
      font-family: 'Poppins', sans-serif;
      line-height:${({ $taille }) => ($taille === 'petit' ? '2rem' : $taille === 'normal' ? '3rem' : '4rem')};
      font-weight: bold;
      margin: 30px 0 ;
      transition: all 1s ease;
      position: relative;
      font-size:${({ $taille }) => ($taille === 'petit' ? '2rem' : $taille === 'normal' ? '3rem' : '4rem')};
      
      /* Couleurs adaptatives */
      ${({ $mode }) =>
            $mode === 'jour'
                  ? `
                  color: ${colors.bleu};
                  text-shadow: 
                  2px 2px 4px rgba(189, 187, 198, 0.6),
                  0px 0px 15px rgba(189, 187, 198, 0.3),
                  1px 1px 2px rgba(33, 33, 33, 0.2);
            `
                  : `
                  color: ${colors.blanc};
                  text-shadow: 
                  6px 5px 15px #050C35,
                  0px 0px 25px rgba(46, 54, 143, 0.4),
                  2px 2px 8px rgba(5, 5, 12, 0.6);
            `}
      
      /* Effet de bordure subtile en mode jour */
      ${({ $mode }) =>
            $mode === 'jour' &&
            `
            -webkit-text-stroke: 0.5px rgba(32, 34, 95, 0.1);
            text-stroke: 0.5px rgba(32, 34, 95, 0.1);
      `}
      
      /* Pseudo-element pour un effet de profondeur en mode jour */
      ${({ $mode }) =>
            $mode === 'jour' &&
            `
            &::before {
                  content: attr(data-text);
                  position: absolute;
                  top: 32px;
                  left: 32px;
                  z-index: -1;
                  color: rgba(237, 240, 250, 0.7);
                  font-size: 3rem;
                  font-weight: bold;
                  font-family: 'Poppins', sans-serif;
            }
      `}
      
      &:hover {
            transform: translateY(-3px);
            
            ${({ $mode }) =>
                  $mode === 'jour'
                        ? `
                  color: ${colors.bleuNeon};
                  text-shadow: 
                        3px 3px 6px rgba(189, 187, 198, 0.8),
                        0px 0px 20px rgba(189, 187, 198, 0.5),
                        1px 1px 3px rgba(33, 33, 33, 0.3);
                  `
                        : `
                  color: ${colors.blancFonce};
                  text-shadow: 
                        8px 7px 20px #050C35,
                        0px 0px 35px rgba(46, 54, 143, 0.6),
                        3px 3px 12px rgba(5, 5, 12, 0.8);
                  `}
            }
      }

      a.link{
      color: ${({ $mode }) => ($mode === 'jour' ? colors.noir : colors.blanc)};
      }

      a.link:hover {
      color: ${colors.bleu};
      text-decoration: underline;
      }

      a.link:visited {
      color: ${({ $mode }) => ($mode === 'jour' ? colors.bleu : colors.blanc)};
      }

      /* Click */
      a.link:active {
      color: ${colors.bleu};
      }

      @keyframes auroraAnimation {
            0% {
            background-position: 0% 50%;
            }
            50% {
            background-position: 100% 50%;
            }
            100% {
            background-position: 0% 50%;
            }
      }

      @keyframes neonGlow {
            0%, 100% {
            box-shadow:
                  0 0 5px ${colors.bleuNeon},
                  0 0 10px ${colors.bleuNeon},
                  0 0 20px ${colors.bleuNeon},
                  0 0 40px ${colors.bleuNeon};
            }
            50% {
            box-shadow:
                  0 0 10px ${colors.bleuNeon},
                  0 0 20px ${colors.bleuNeon},
                  0 0 30px ${colors.bleuNeon},
                  0 0 50px ${colors.bleuNeon};
            }
      }

      @keyframes bouncing {
            0%, 100% {
            transform : translateY(0px);
            }
            50% {
            transform : translateY(-10px);
            }
      }


      @keyframes slideInLeft{
            from{
                  opacity:0;
                  transform:translateX(-100%);}
            to{
            opacity:1;
                  transform:translateX(0);}
      }

      @keyframes slideInRight{
            from{
                  opacity:0;
                  transform:translateX(100%);}
            to{
            opacity:1;
                  transform:translateX(0);}
      }
       
       @keyframes slideInBottom{
            from{
                  opacity:0;
                  transform:translateY(100%);}
            to{
            opacity:1;
                  transform:translateY(0);}
      }

      @keyframes slideInTop{
            from{
                  opacity:0;
                  transform:translateY(-100%);}
            to{
            opacity:1;
                  transform:translateY(0);}
      }

      
      h3{
            text-align:center;
            font-family: 'Poppins', sans-serif;
            font-size:${({ $taille }) => ($taille === 'petit' ? '1rem' : $taille === 'normal' ? '2rem' : '3rem')};
            line-height:${({ $taille }) => ($taille === 'petit' ? '1rem' : $taille === 'normal' ? '2rem' : '3rem')};
            color:${({ $mode }) => ($mode === 'jour' ? colors.noir : colors.blanc)};
            transition:color 1s ease, font-size 1s ease;
      }  

      p{
            text-align:center;
            font-family: 'Poppins', sans-serif;
            font-size:${({ $taille }) => ($taille === 'petit' ? '0.8rem' : $taille === 'normal' ? '1.2rem' : '1.6rem')};
            line-height:${({ $taille }) => ($taille === 'petit' ? '1.2rem' : $taille === 'normal' ? '2rem' : '2.2rem')};
            margin:10px;
            transition:color 1s ease, font-size 1s ease;
      }  
            

`

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
      <React.StrictMode>
            <App />
      </React.StrictMode>
)
