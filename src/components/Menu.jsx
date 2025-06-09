import styled from 'styled-components'
import { slideInRightDesktop, escapeInRightDesktop } from './Utils'
import { colors } from './Utils'
import { motion, AnimatePresence } from 'framer-motion'

const Wrapper = styled(motion.div)`
      position: fixed;
      top: 118px; /*Correspondant au header */
      right: 0;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-auto-rows: 1fr;
      padding: 10px;
      gap: 10px;
      width: 30%;
      box-sizing: border-box;
      height: calc(100vh - 120px);
      overflow-y: auto;
      overflow-x: hidden;
      background-color: ${({ $bgColor }) => $bgColor};
      border: solid 3px ${({ $borderColor }) => $borderColor};
      border-radius: 10px;
      gap: 10px;
      transition: background-color 1s ease, border-color 1s ease;

      @media (max-width: 1024px) {
            grid-template-columns: 1fr;
            width: 100vw;
            max-width: 100vw;
      }
`

const ItemDiv = styled.div`
      height: 100%;
      border: solid 3px ${({ $borderColor }) => $borderColor};
      color: ${({ $fontColor }) => $fontColor};
      display: flex;
      padding: 5px;
      border-radius: 10px;
      box-sizing: border-box;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      transition: background-color 0.8s ease, border-color 1s ease, color 1s ease;
      &:hover {
            background-color: gray;
      }
      &:hover .icon {
            transform: ${({ $transition }) => $transition || 'none'};
      }
`

const ImgIcon = styled.img`
      color: white;
      background-size: cover;
      background-position: center;
      background-repeat: 'no-repeat';
      width: 50px;
      height: 50px;
      transition: transform 0.8s ease;
`

export default function Menu({ lightMode, setLightMode, isOpen, fontMode, setFontMode, cursorMode, setCursorMode }) {
      function handleModeJour() {
            setLightMode((mode) => (mode === 'jour' ? 'nuit' : 'jour'))
      }
      function handleModeFont() {
            switch (fontMode) {
                  case 'petit':
                        setFontMode('normal')
                        break
                  case 'normal':
                        setFontMode('grand')
                        break
                  default:
                        setFontMode('petit')
            }
      }
      function handleModeCursor() {
            setCursorMode((mode) => (mode === 'normal' ? 'custom' : 'normal'))
      }

      const slideInRight = slideInRightDesktop
      const escapeInRight = escapeInRightDesktop

      return (
            <AnimatePresence mode="wait">
                  {isOpen && (
                        <Wrapper
                              variants={{
                                    hidden: slideInRight.hidden,
                                    visible: slideInRight.visible,
                                    exit: escapeInRight.exit,
                              }}
                              initial="hidden"
                              animate="visible"
                              exit="exit"
                              transition={{ duration: 1 }}
                              $bgColor={lightMode === 'jour' ? colors.bleuClair : colors.grisFonce}
                              $borderColor={lightMode === 'jour' ? colors.gris : colors.blanc}
                        >
                              <ItemDiv
                                    $borderColor={lightMode === 'jour' ? colors.gris : colors.blanc}
                                    $fontColor={lightMode === 'jour' ? colors.noir : colors.blanc}
                                    $transition="rotate(180deg)"
                                    onClick={handleModeJour}
                              >
                                    <ImgIcon
                                          className="icon"
                                          src={
                                                lightMode === 'jour'
                                                      ? `${process.env.PUBLIC_URL}/assets/icons/sun_noir.png`
                                                      : `${process.env.PUBLIC_URL}/assets/icons/sun_blanc.png`
                                          }
                                    />
                                    <p>{lightMode === 'jour' ? 'Mode nuit' : 'Mode jour'}</p>
                              </ItemDiv>
                              <ItemDiv
                                    $borderColor={lightMode === 'jour' ? colors.gris : colors.blanc}
                                    $fontColor={lightMode === 'jour' ? colors.noir : colors.blanc}
                                    $transition="scale(1.8)"
                                    onClick={handleModeFont}
                              >
                                    <ImgIcon
                                          className="icon"
                                          src={
                                                lightMode === 'jour'
                                                      ? `${process.env.PUBLIC_URL}/assets/icons/font_noir.png`
                                                      : `${process.env.PUBLIC_URL}/assets/icons/font_blanc.png`
                                          }
                                    />
                                    <p>Réglage taille texte : {fontMode}</p>
                              </ItemDiv>
                              <ItemDiv
                                    $borderColor={lightMode === 'jour' ? colors.gris : colors.blanc}
                                    $fontColor={lightMode === 'jour' ? colors.noir : colors.blanc}
                                    $transition="translateY(-10px) translateX(-10px) scale(0.9)"
                                    onClick={handleModeCursor}
                              >
                                    <ImgIcon
                                          className="icon"
                                          src={
                                                lightMode === 'jour'
                                                      ? `${process.env.PUBLIC_URL}/assets/icons/click_noir.png`
                                                      : `${process.env.PUBLIC_URL}/assets/icons/click_blanc.png`
                                          }
                                    />
                                    <p>Mode focus ({cursorMode})</p>
                              </ItemDiv>
                              <ItemDiv
                                    $borderColor={lightMode === 'jour' ? colors.gris : colors.blanc}
                                    $fontColor={lightMode === 'jour' ? colors.noir : colors.blanc}
                              >
                                    <ImgIcon
                                          className="icon"
                                          src={
                                                lightMode === 'jour'
                                                      ? `${process.env.PUBLIC_URL}/assets/icons/more_noir.png`
                                                      : `${process.env.PUBLIC_URL}/assets/icons/more_blanc.png`
                                          }
                                    />
                                    <p>Et d'autres</p>
                              </ItemDiv>
                        </Wrapper>
                  )}
            </AnimatePresence>
      )
}
