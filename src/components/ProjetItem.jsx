import styled from 'styled-components'
import { colors } from './Utils'
import { motion } from 'framer-motion'

const Container = styled(motion.div)`
      display: flex;
      flex-direction: ${({ $isPair }) => ($isPair ? 'row' : 'row-reverse')};
      gap: 2%;
      justify-content: space-between;
      padding: 30px 0 30px 0;
      @media (max-width: 1024px) {
            justify-content: center;
      }
`

const DivText = styled.div`
      width: fit-content;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 25px;
      border: 2px solid ${colors.bleuNeon};
      box-shadow: 0 0 5px ${colors.bleuNeon}, 0 0 10px ${colors.bleuNeon}, 0 0 20px ${colors.bleuNeon},
            0 0 40px ${colors.bleuNeon};
      animation: neonGlow 2.5s ease-in-out infinite;
      background-color: ${({ $bgColor }) => $bgColor};
      color: ${({ $fontColor }) => $fontColor};
      padding: 20px;
      box-sizing: border-box;
      @media (max-width: 1024px) {
            width: 100%;
      }
      @media (min-width: 1024px) {
            min-width: 300px; // pour éviter qu'elle soit trop petite
            max-width: 40%; // pour limiter sur grands écrans
      }
`

const ImgLangage = styled.img`
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      width: 50px;
      height: 50px;
      margin-right: 10px;
      border-radius: 8px;
      border: 1px solid ${colors.bleu};
      transition: transform 0.5s ease;
      &:hover {
            transform: scale(1.1);
      }
`

const WrapperImgLangage = styled.div`
      display: flex;
`

const DivImg = styled.div`
      padding: 10% 50px;
      width: 500px;
      height: 600px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;

      @media (max-width: 1024px) {
            display: none;
      }
`

const Video = styled.video`
      width: 100%;
      height: 100%;
      border-radius: 25px;
      object-fit: fill;
      display: block;
      @media (max-width: 1024px) {
            display: none;
      }
`

export function ProjetItem({ lightMode, url, titre, text, annee, listLangage, isPair }) {
      const videoSrc = `${process.env.PUBLIC_URL}/assets/photos_projets/${url}.mp4`

      return (
            <Container
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  $isPair={isPair}
            >
                  <DivText $fontColor={colors.noir} $bgColor={lightMode === 'jour' ? colors.bleuClair : colors.blanc}>
                        <p>
                              <u>Projet :</u> {titre}
                        </p>
                        <p>
                              <u>Description :</u> {text}
                        </p>
                        <p>
                              <u>Année de réalisation :</u> {annee}
                        </p>
                        <p>
                              <u>Langage(s) utilisé(s) : </u>
                        </p>
                        <WrapperImgLangage>
                              {listLangage.map((langage) => (
                                    <ImgLangage
                                          key={langage}
                                          src={`${process.env.PUBLIC_URL}/assets/logos/${langage}.jpg`}
                                          alt={langage}
                                    />
                              ))}
                        </WrapperImgLangage>
                  </DivText>

                  <DivImg>
                        <Video
                              autoPlay
                              loop
                              muted
                              playsInline
                              poster={`${process.env.PUBLIC_URL}/assets/photos_projets/default_projet.png`}
                              onError={(e) => {
                                    // Fallback si la vidéo ne charge pas
                                    e.target.style.display = 'none'
                              }}
                        >
                              <source src={videoSrc} type="video/mp4" />
                              Votre navigateur ne supporte pas la lecture de vidéos.
                        </Video>
                  </DivImg>
            </Container>
      )
}
