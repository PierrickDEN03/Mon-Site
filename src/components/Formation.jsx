import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import { slideInBottomDesktop, slideInTopDesktop, slideInBottomMobile, slideInTopMobile } from './Utils'
import { colors, Wrapper } from './Utils'
import { motion } from 'framer-motion'

const WrapperFormation = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      @media (max-width: 1024px) {
            flex-direction: column;
            gap: 60px;
      }
`

const DivFormation = styled(motion.div)`
      padding: 50px 20px;
      width: 45%;
      box-shadow: 0 0 5px ${colors.bleuNeon}, 0 0 10px ${colors.bleuNeon}, 0 0 20px ${colors.bleuNeon},
            0 0 40px ${colors.bleuNeon};
      background-color: ${({ $bgColor }) => $bgColor};
      box-sizing: border-box;
      gap: 30px;
      border-radius: 25px;
      display: flex;
      flex-direction: column;
      transition: background-color 1s ease;
      animation: neonGlow 2.5s ease-in-out infinite;
      @media (max-width: 1024px) {
            width: 100%;
      }
`

export default function Formation({ lightMode }) {
      const isMobile = useMediaQuery({ maxWidth: 1024 })

      const slideInTop = isMobile ? slideInTopMobile : slideInTopDesktop
      const slideInBottom = isMobile ? slideInBottomMobile : slideInBottomDesktop
      return (
            <Wrapper id="Formation">
                  <motion.h2
                        variants={slideInTop}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1.1, ease: 'easeOut' }}
                  >
                        Mes formations <br />
                        Un parcours polyvalent
                  </motion.h2>

                  <WrapperFormation>
                        <DivFormation
                              variants={slideInBottom}
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true, amount: 0 }}
                              transition={{ duration: 1.1, ease: 'easeOut' }}
                              $bgColor={lightMode === 'jour' ? colors.bleuClair : colors.bleuFonce}
                        >
                              <h3>Licence MIASHS - Université Lumière Lyon 2 (2021-2024)</h3>
                              <p style={{ color: lightMode === 'jour' ? colors.noir : colors.blanc }}>
                                    Cette licence, étant pluridisciplinaire, m'a appris la polyvalence sans pour autant
                                    négliger la qualité des compétences acquises. La diversité des matières enseignées
                                    (informatique, statistiques ou encore sciences sociales) m'encourage en permanence à
                                    rester curieux et à développer de nouveaux savoirs. C’est grâce à la licence MIASHS
                                    que j’ai développé pour la première fois des logiciels informatiques, notamment avec
                                    l’apprentissage de HTML et PHP, mais aussi d’autres langages comme Python et R,
                                    largement utilisés dans le domaine des statistiques.
                              </p>
                        </DivFormation>
                        <DivFormation
                              variants={slideInBottom}
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true, amount: 0 }}
                              transition={{ duration: 1.1, ease: 'easeOut' }}
                              $bgColor={lightMode === 'jour' ? colors.bleuClair : colors.bleuFonce}
                        >
                              <h3>Master Informatique - Université Lumière Lyon 2 (2025 - ...)</h3>
                              <p style={{ color: lightMode === 'jour' ? colors.noir : colors.blanc }}>
                                    Ayant désormais validé ma première année de Master, on peut également la qualifier
                                    de pluridisciplinaire. En effet, les compétences acquises sont nombreuses et
                                    couvrent de nombreux domaines de l'informatique : bases de données avancées (avec
                                    PostgreSQL, XPath et XQuery), sécurité, design, architecture réseau, développement
                                    web, et d'autres encore. Cette année m’a permis de renforcer mes compétences
                                    globales en informatique, même si je ne me suis pas encore spécialisé dans un
                                    domaine en particulier. C’est donc avec enthousiasme que j’intègre le Master CIM,
                                    conçu pour le Web.
                              </p>
                        </DivFormation>
                  </WrapperFormation>
            </Wrapper>
      )
}
