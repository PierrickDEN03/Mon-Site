import { styled } from 'styled-components'
import { StyledButton } from './Utils'
import { colors, slideInBottomDesktop, escapeInBottomDesktop } from './Utils'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

const Wrapper = styled(motion.div)`
      position: fixed;
      top: 0;
      left: 0;
      display: flex;
      height: 100vh;
      width: 100vw;
      align-items: center;
      justify-content: center;
      z-index: 999;

      &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            z-index: 1;
      }
`

const WrapperPopUp = styled(motion.div)`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 40%;
      width: 40%;
      gap: 30px;
      border-radius: 25px;
      background-color: ${colors.blanc};
      color: black;
      z-index: 2;
      padding: 2rem;
      @media (max-width: 1024px) {
            height: 50%;
            width: 50%;
      }
`

export default function Popup({ isOpen, setIsOpen, fontMode }) {
      useEffect(() => {
            if (isOpen) {
                  document.body.style.overflow = 'hidden'
            } else {
                  document.body.style.overflow = 'auto'
            }
            return () => {
                  document.body.style.overflow = 'auto'
            }
      }, [isOpen])

      const slideInBottom = slideInBottomDesktop
      const escapeInBottom = escapeInBottomDesktop

      return (
            <AnimatePresence>
                  {isOpen && (
                        <Wrapper
                              as={motion.div}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              onClick={() => setIsOpen(!isOpen)}
                        >
                              <WrapperPopUp
                                    variants={{
                                          hidden: slideInBottom.hidden,
                                          visible: slideInBottom.visible,
                                          exit: escapeInBottom.exit,
                                    }}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    transition={{ duration: 0.5, ease: 'easeOut' }}
                              >
                                    <img
                                          src={`${process.env.PUBLIC_URL}/assets/icons/check-mark.png`}
                                          alt="check-icon"
                                    />

                                    <p>
                                          Votre message a bien été envoyé.
                                          <br />
                                          Merci beaucoup de l'attention consacrée.
                                    </p>
                                    <StyledButton
                                          $bgColor={colors.bleu}
                                          $fontColor={colors.blanc}
                                          $bgHover={colors.gris}
                                          $taille={
                                                fontMode === 'petit'
                                                      ? '0.8rem'
                                                      : fontMode === 'normal'
                                                      ? '1rem'
                                                      : '1.5rem'
                                          }
                                          onClick={() => setIsOpen(false)}
                                    >
                                          Fermer
                                    </StyledButton>
                              </WrapperPopUp>
                        </Wrapper>
                  )}
            </AnimatePresence>
      )
}
