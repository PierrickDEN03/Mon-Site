import { Wrapper } from './Utils'
import { StyledButton } from './Utils'
import { colors } from './Utils'
import { BackgroundBeams } from './ui/BackgroundAccueil/background-beams'
import styled from 'styled-components'

export const Div = styled.div`
      display: flex;
      align-item: center;
      justify-content: center;
      margin-top: 40px;
`

export default function Accueil({ lightMode, fontMode }) {
      return (
            <Wrapper id="Accueil">
                  {/* Fond animé en arrière-plan - prend tout l'espace du Wrapper, repris sur Aceternity UI */}
                  <BackgroundBeams />

                  {/* Contenu visible au premier plan */}
                  <div className="relative text-center p-8" style={{ zIndex: 10 }}>
                        <h1>Accueil</h1>
                        <h2>Bienvenue sur mon site</h2>
                        <p style={{ color: lightMode === 'jour' ? colors.noir : colors.blanc }}>
                              Étudiant en Master Informatique, je vous invite à découvrir mon parcours, mes projets et
                              mes aspirations. À travers ce portfolio, je partage ma passion pour le développement web
                              et mon envie de construire des solutions utiles et modernes.
                        </p>

                        <Div>
                              <StyledButton
                                    $bgColor={lightMode === 'jour' ? colors.bleu : colors.blanc}
                                    $fontColor={lightMode === 'jour' ? colors.blanc : colors.noir}
                                    $bgHover={lightMode === 'jour' ? colors.grisFonce : colors.bleu}
                                    $texteHover={lightMode === 'jour' ? colors.blanc : colors.blanc}
                                    $taille={
                                          fontMode === 'petit' ? '0.8rem' : fontMode === 'normal' ? '1rem' : '1.5rem'
                                    }
                                    to="#Presentation"
                              >
                                    Démarrer la navigation
                              </StyledButton>
                        </Div>
                  </div>
            </Wrapper>
      )
}
