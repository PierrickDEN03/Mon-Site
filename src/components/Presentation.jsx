import {
      Wrapper,
      slideInRightDesktop,
      slideInLeftDesktop,
      slideInRightMobile,
      slideInLeftMobile,
      colors,
} from './Utils'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Container = styled.div`
      display: flex;
      gap: 50px;
      align-items: center;
      @media (max-width: 1024px) {
            margin: 2%;
            flex-direction: column-reverse;
            box-sizing: border-box;
            max-width: 100%;
            overflow-x: hidden;
      }
`

const DivText = styled(motion.div)`
      display: flex;
      width: 60%;
      flex-direction: column;
      justify-content: center;
      color: ${({ $fontColor }) => $fontColor};
      background-color: ${({ $bgColor }) => $bgColor};
      border: 2px solid ${colors.bleuNeon};
      box-shadow: 0 0 5px ${colors.bleuNeon}, 0 0 10px ${colors.bleuNeon}, 0 0 20px ${colors.bleuNeon},
            0 0 40px ${colors.bleuNeon};
      border-radius: 25px;
      padding: 50px 30px;
      box-sizing: border-box;
      animation: neonGlow 2.5s ease-in-out infinite;
      transition: backgrond-color 1s ease, color 1s ease;

      @media (max-width: 1024px) {
            width: 100%;
            padding: 20px;
      }
`

const DivImage = styled(motion.div)`
      position: relative;
      width: 40%;
      aspect-ratio: 1;
      border-radius: 50%;
      overflow: visible;
      z-index: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      @media (max-width: 1024px) {
            width: 80%;
      }
`

const Image = styled.div`
      position: relative;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      animation: bouncing 5s ease-in-out infinite;
      display: flex;
      align-items: center;
      justify-content: center;

      &::before {
            content: '';
            position: absolute;
            inset: 0;
            padding: 15px;
            background: linear-gradient(120deg, #00ffd5, #a600ff, #00ffd5, #a600ff);
            background-size: 300% 300%;
            animation: auroraAnimation 8s ease infinite;
            border-radius: 50%;
            z-index: -2;
            -webkit-mask: radial-gradient(circle closest-side, transparent 94%, black 96%);
            mask: radial-gradient(circle closest-side, transparent 94%, black 96%);
      }

      &::after {
            content: '';
            position: absolute;
            inset: 8px;
            background-image: url(${({ $src }) => $src});
            background-size: cover;
            background-position: center;
            border-radius: 50%;
            z-index: -1;
      }
`

export default function Presentation({ lightMode }) {
      const isMobile = useMediaQuery({ maxWidth: 768 })

      const slideInLeft = isMobile ? slideInLeftMobile : slideInLeftDesktop
      const slideInRight = isMobile ? slideInRightMobile : slideInRightDesktop
      return (
            <Wrapper id="Presentation">
                  <Container>
                        <DivText
                              variants={slideInLeft}
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true, amount: 0.2 }}
                              transition={{ duration: 1.1, ease: 'easeOut' }}
                              $bgColor={lightMode === 'jour' ? colors.bleuClair : colors.blanc}
                              $fontColor={colors.noir}
                        >
                              <h2>Développeur en devenir, passionné par le web</h2>
                              <p>
                                    Je m'appelle Pierrick DENNEMONT, actuellement en Master Informatique. Depuis mes
                                    premiers projets, j’ai toujours été attiré par le développement web : concevoir,
                                    coder, tester et améliorer des interfaces pour les rendre fluides, accessibles et
                                    performantes. Curieux, rigoureux et motivé, je cherche sans cesse à progresser. Mon
                                    objectif : intégrer une entreprise en alternance pour l’année 2025-2026 afin de
                                    gagner en expérience et contribuer activement à des projets concrets.
                              </p>
                        </DivText>
                        <DivImage
                              variants={slideInRight}
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true, amount: 0.2 }}
                              transition={{ duration: 1.1, ease: 'easeOut' }}
                        >
                              <Image $src={`${process.env.PUBLIC_URL}/assets/moi.jpg`} />
                        </DivImage>
                  </Container>
            </Wrapper>
      )
}
