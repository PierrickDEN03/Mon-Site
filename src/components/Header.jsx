import styled from 'styled-components'
import { StyledButton, colors } from './Utils'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import Menu from './Menu'

const DivMenu = styled.div`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      padding: 0 20px;
      width: 100%;
      height: 120px;
      position: fixed;
      top: 0;
      left: 0;
      gap: 10px;
      color: ${({ $fontColor }) => $fontColor};
      background-color: ${({ $bgColor }) => $bgColor};
      backdrop-filter: blur(30px);
      box-sizing: border-box;
      box-shadow: 0 0 30px ${({ $borderColor }) => $borderColor};
      border: 2px solid ${({ $bgColor }) => $bgColor};
      z-index: 100;
      transition: color 1s ease, background-color 1s ease, border 1s ease;
      @media (max-width: 1024px) {
            justify-content: space-between;
            padding-right: 20px;
            margin: 0;
            box-sizing: border-box;
      }
`

const DivBtn = styled.div`
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      padding: 10px;
      align-items: center;
      justify-content: center;
      color: ${colors.blanc};
      flex-wrap: nowrap;
      overflow-x: auto;
      scrollbar-width: none; /* Firefox */
      -ms-overflow-style: none; /* Internet Explorer 10+ */
      &::-webkit-scrollbar {
            display: none; /* Chrome, Safari, Opera */
      }

      @media (max-width: 1400px) {
            display: none;
      }
`

const DivBtnMenu = styled.div`
      height: 50px;
      width: 50px;
      background-image: url(${({ $icon }) => $icon});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
`

export default function Header({ lightMode, setLightMode, fontMode, setFontMode, cursorMode, setCursorMode }) {
      //State
      const [isOpen, setIsOpen] = useState(false)

      //assigning location variable
      const location = useLocation()

      //destructuring pathname from location
      const { hash } = location

      return (
            <DivMenu
                  $bgColor={lightMode === 'jour' ? colors.bleuClair : colors.grisFonce}
                  $borderColor={lightMode === 'jour' ? colors.noir : colors.grisClair}
                  $fontColor={lightMode === 'jour' ? colors.noir : colors.blanc}
            >
                  {/*Menu qui s'ouvre*/}
                  <Menu
                        lightMode={lightMode}
                        setLightMode={setLightMode}
                        isOpen={isOpen}
                        fontMode={fontMode}
                        setFontMode={setFontMode}
                        cursorMode={cursorMode}
                        setCursorMode={setCursorMode}
                  />
                  <div>
                        <h2>Bienvenue</h2>
                  </div>
                  <DivBtn>
                        <StyledButton
                              $bgColor={lightMode === 'jour' ? colors.bleu : colors.blanc}
                              $fontColor={lightMode === 'jour' ? colors.blanc : colors.noir}
                              $bgHover={lightMode === 'jour' ? colors.grisFonce : colors.bleu}
                              $texteHover={lightMode === 'jour' ? colors.blanc : colors.blanc}
                              $taille={fontMode === 'petit' ? '0.8rem' : fontMode === 'normal' ? '1rem' : '1.5rem'}
                              to="/#Accueil"
                              className={hash === '' || hash === '#Accueil' ? 'active' : ''}
                        >
                              Accueil
                        </StyledButton>
                        <StyledButton
                              $bgColor={lightMode === 'jour' ? colors.bleu : colors.blanc}
                              $fontColor={lightMode === 'jour' ? colors.blanc : colors.noir}
                              $bgHover={lightMode === 'jour' ? colors.grisFonce : colors.bleu}
                              $texteHover={lightMode === 'jour' ? colors.blanc : colors.blanc}
                              $taille={fontMode === 'petit' ? '0.8rem' : fontMode === 'normal' ? '1rem' : '1.5rem'}
                              to="/#Presentation"
                              className={hash === '#Presentation' ? 'active' : ''}
                        >
                              Presentation
                        </StyledButton>
                        <StyledButton
                              $bgColor={lightMode === 'jour' ? colors.bleu : colors.blanc}
                              $fontColor={lightMode === 'jour' ? colors.blanc : colors.noir}
                              $bgHover={lightMode === 'jour' ? colors.grisFonce : colors.bleu}
                              $texteHover={lightMode === 'jour' ? colors.blanc : colors.blanc}
                              $taille={fontMode === 'petit' ? '0.8rem' : fontMode === 'normal' ? '1rem' : '1.5rem'}
                              to="/#Formation"
                              className={hash === '#Formation' ? 'active' : ''}
                        >
                              Formation
                        </StyledButton>
                        <StyledButton
                              $bgColor={lightMode === 'jour' ? colors.bleu : colors.blanc}
                              $fontColor={lightMode === 'jour' ? colors.blanc : colors.noir}
                              $bgHover={lightMode === 'jour' ? colors.grisFonce : colors.bleu}
                              $texteHover={lightMode === 'jour' ? colors.blanc : colors.blanc}
                              $taille={fontMode === 'petit' ? '0.8rem' : fontMode === 'normal' ? '1rem' : '1.5rem'}
                              to="/#Projets"
                              className={hash === '#Projets' ? 'active' : ''}
                        >
                              Mes projets
                        </StyledButton>
                        <StyledButton
                              $bgColor={lightMode === 'jour' ? colors.bleu : colors.blanc}
                              $fontColor={lightMode === 'jour' ? colors.blanc : colors.noir}
                              $bgHover={lightMode === 'jour' ? colors.grisFonce : colors.bleu}
                              $texteHover={lightMode === 'jour' ? colors.blanc : colors.blanc}
                              $taille={fontMode === 'petit' ? '0.8rem' : fontMode === 'normal' ? '1rem' : '1.5rem'}
                              to="/#Contact"
                              className={hash === '#Contact' ? 'active' : ''}
                        >
                              Me contacter
                        </StyledButton>
                  </DivBtn>
                  <DivBtnMenu
                        $icon={lightMode === 'jour' ? '/assets/icons/menu_noir.png' : '/assets/icons/menu_blanc.png'}
                        onClick={() => {
                              setIsOpen(!isOpen)
                        }}
                  ></DivBtnMenu>
            </DivMenu>
      )
}
