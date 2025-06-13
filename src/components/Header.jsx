import styled from 'styled-components'
import { StyledButton, colors } from './Utils'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
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
            padding: 0 20px;
            margin: 0;
            box-sizing: border-box;
      }
`

const DivBtn = styled.div`
      display: flex;
      flex-wrap: nowrap;
      gap: 20px;
      padding: 10px;
      align-items: center;
      justify-content: center;
      color: ${colors.blanc};
      overflow-x: auto;
      scrollbar-width: none; /* Firefox */
      -ms-overflow-style: none; /* IE 10+ */
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
      const [isOpen, setIsOpen] = useState(false)
      const location = useLocation()
      const { hash } = location

      // Les liens ne doivent contenir que la partie ancre
      const getLinkWithHash = (anchor) => anchor

      // Scroll smooth vers l'ancre quand le hash change
      useEffect(() => {
            if (hash) {
                  const id = hash.slice(1) // enlève le #
                  const element = document.getElementById(id)
                  if (element) {
                        element.scrollIntoView({ behavior: 'smooth' })
                  }
            }
      }, [hash])

      return (
            <DivMenu
                  $bgColor={lightMode === 'jour' ? colors.bleuClair : colors.grisFonce}
                  $borderColor={lightMode === 'jour' ? colors.noir : colors.grisClair}
                  $fontColor={lightMode === 'jour' ? colors.noir : colors.blanc}
            >
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
                        {['Accueil', 'Presentation', 'Formation', 'Projets', 'Contact'].map((section) => (
                              <StyledButton
                                    key={section}
                                    $bgColor={lightMode === 'jour' ? colors.bleu : colors.blanc}
                                    $fontColor={lightMode === 'jour' ? colors.blanc : colors.noir}
                                    $bgHover={lightMode === 'jour' ? colors.grisFonce : colors.bleu}
                                    $texteHover={colors.blanc}
                                    $taille={
                                          fontMode === 'petit' ? '0.8rem' : fontMode === 'normal' ? '1rem' : '1.5rem'
                                    }
                                    to={getLinkWithHash(`#${section}`)}
                                    className={
                                          hash === `#${section}` ||
                                          (section === 'Accueil' && (hash === '' || hash === '#'))
                                                ? 'active'
                                                : ''
                                    }
                              >
                                    {section === 'Projets'
                                          ? 'Mes projets'
                                          : section === 'Contact'
                                          ? 'Me contacter'
                                          : section}
                              </StyledButton>
                        ))}
                  </DivBtn>

                  <DivBtnMenu
                        $icon={
                              lightMode === 'jour'
                                    ? `${process.env.PUBLIC_URL}/assets/icons/menu_noir.png`
                                    : `${process.env.PUBLIC_URL}/assets/icons/menu_blanc.png`
                        }
                        onClick={() => setIsOpen(!isOpen)}
                  />
            </DivMenu>
      )
}
