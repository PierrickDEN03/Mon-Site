import { styled } from 'styled-components'
import { useState } from 'react'
import { Wrapper } from './Utils'
import { useMediaQuery } from 'react-responsive'
import {
      colors,
      slideInTopDesktop,
      slideInLeftDesktop,
      slideInRightDesktop,
      slideInTopMobile,
      slideInLeftMobile,
      slideInRightMobile,
} from './Utils'
import { motion } from 'framer-motion'
import Popup from './Popup'

const WrapperForm = styled(motion.div)`
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 50px;
      @media (max-width: 1024px) {
            gap: 0;
            margin: 0;
            flex-direction: flex;
            box-sizing: border-box;
      }
`

const DivText = styled(motion.div)`
      display: flex;
      flex-direction: column;
      width: 60%;
      gap: 50px;
      @media (max-width: 1024px) {
            width: 100%;
      }
`

const ParagrapheDesktop = styled.p`
      color: ${({ lightMode }) => (lightMode === 'jour' ? colors.noir : colors.blanc)};

      @media (max-width: 1024px) {
            display: none;
      }
`

const ParagrapheMobile = styled.p`
      display: none;
      color: ${({ lightMode }) => (lightMode === 'jour' ? colors.noir : colors.blanc)};

      @media (max-width: 1024px) {
            display: block;
      }
`

const Form = styled.form`
      min-height: 100%;
      box-shadow: 0 0 5px ${colors.bleuNeon}, 0 0 10px ${colors.bleuNeon}, 0 0 20px ${colors.bleuNeon},
            0 0 40px ${colors.bleuNeon};
      background-color: ${({ $bgColor }) => $bgColor};
      border-radius: 25px;
      animation: neonGlow 2.5s ease-in-out infinite;
      padding: 20px;
      color: ${({ $fontColor }) => $fontColor};
      transition: background-color 1s ease, color 1s ease;

      input[type='text'],
      input[type='email'] {
            border-radius: 25px;
            min-height: 30px;
            width: 60%;
            padding: 5px 5px 5px 10px;
            font-family: 'Poppins', sans-serif;
            font-size: ${({ $taille }) => $taille};
            line-height: ${({ $tailleHeight }) => $tailleHeight};
            transition: font-size 1s ease, line-height 1s ease;
      }

      label {
            font-family: 'Poppins', sans-serif;
            font-size: ${({ $taille }) => $taille};
            line-height: ${({ $tailleHeight }) => $tailleHeight};
      }
      transition: font-size 1s ease, line-height 1s ease;

      textarea {
            font-family: 'Poppins', sans-serif;
            font-size: ${({ $taille }) => $taille};
            line-height: ${({ $tailleHeight }) => $tailleHeight};
            min-width: 60%;
            min-height: 100px;
            border-radius: 25px;
            padding: 25px;
            resize: none;
            transition: font-size 1s ease, line-height 1s ease;
      }

      button[type='submit'] {
            position: relative;
            cursor: pointer;
            overflow: hidden;
            min-width: 150px;
            height: 50px;
            padding: 5px 15px;
            color: ${({ $fontButtonColor }) => $fontButtonColor};
            background-color: ${({ $bgButtonColor }) => $bgButtonColor};
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
            transition: color 0.4s ease, font-size 1s ease, line-height 1s ease;
      }

      button[type='submit']::after {
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

      button[type='submit']:hover::after {
            left: 0;
      }

      button[type='submit']:hover {
            color: ${colors.blanc};
      }

      @media (max-width: 1024px) {
            width: auto;
            input[type='text'],
            input[type='email'],
            textarea {
                  width: 85%;
            }
      }
`

const InputBox = styled.div`
      margin: 30px 0 30px 0;
      padding: 0 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      @media (max-width: 1024px) {
            flex-direction: column;
            align-items: center;
            justify-content: center;
      }
`

const DivImg = styled(motion.div)`
      margin: 50px;
      cursor: pointer;
      height: 100vh;
      width: 40%;
      display: flex;
      background-image: url(${({ $src }) => $src});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      border-radius: 8px;
      @media (max-width: 1400px) {
            display: none;
      }
`

const H3Desktop = styled.h3`
      @media (max-width: 1024px) {
            display: none;
      }
`

export default function Contact({ lightMode, fontMode }) {
      //State pour la popup
      const [isOpen, setIsOpen] = useState(false)
      //State pour formulaire
      const [nomPrenom, setNomPrenom] = useState('')
      const [mail, setMail] = useState('')
      const [demande, setDemande] = useState('')
      const [message, setMessage] = useState('')

      //Fonction envoie de mail avec API W3F
      const onSubmit = async (event) => {
            event.preventDefault()
            const formData = new FormData(event.target)

            formData.append('access_key', '52da219a-672b-47b8-948d-6b72e38d0132')

            const object = Object.fromEntries(formData)
            const json = JSON.stringify(object)

            const res = await fetch('https://api.web3forms.com/submit', {
                  method: 'POST',
                  headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                  },
                  body: json,
            }).then((res) => res.json())

            if (res.success) {
                  //On enlève toutes les données renseignées et on ouvre la PopUp
                  setNomPrenom('')
                  setMail('')
                  setDemande('')
                  setMessage('')
                  setIsOpen(!isOpen)
            }
      }

      const isMobile = useMediaQuery({ maxWidth: 768 })

      const slideInTop = isMobile ? slideInTopMobile : slideInTopDesktop
      const slideInLeft = isMobile ? slideInLeftMobile : slideInLeftDesktop
      const slideInRight = isMobile ? slideInRightMobile : slideInRightDesktop

      return (
            <Wrapper id="Contact">
                  <Popup isOpen={isOpen} setIsOpen={setIsOpen} fontMode={fontMode} />
                  <motion.div
                        variants={slideInTop}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 1.1, ease: 'easeOut' }}
                  >
                        <h2>Une idée, une question ou une opportunité ?</h2>
                        <p style={{ color: lightMode === 'jour' ? colors.noir : colors.blanc }}>
                              Je suis disponible pour échanger sur vos projets ou opportunités d’alternance dans le
                              développement web. N’hésitez pas à me laisser un message via le formulaire ou à me
                              contacter directement. Je répondrai rapidement avec plaisir.
                        </p>
                        `
                  </motion.div>
                  <WrapperForm>
                        <DivText
                              variants={slideInLeft}
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true, amount: 0.1 }}
                              transition={{ duration: 1.1, ease: 'easeOut' }}
                        >
                              <div>
                                    <H3Desktop>
                                          Un commentaire ? <br />
                                          Une amélioration à suggérer ?
                                    </H3Desktop>
                                    <ParagrapheDesktop>Veuillez compléter le formulaire ci-dessous :</ParagrapheDesktop>
                                    <ParagrapheMobile
                                          style={{ color: lightMode === 'jour' ? colors.noir : colors.blanc }}
                                    >
                                          Pour plus d'informations, vous pouvez retrouver mon CV sur le lien suivant :{' '}
                                          <a
                                                href="/assets/CV_Alternance_2025.pdf"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="link"
                                          >
                                                mon CV
                                          </a>
                                    </ParagrapheMobile>
                              </div>

                              <Form
                                    onSubmit={onSubmit}
                                    $bgColor={lightMode === 'jour' ? colors.bleuClair : colors.bleuFonce}
                                    $fontColor={lightMode === 'jour' ? colors.noir : colors.blanc}
                                    $bgButtonColor={lightMode === 'jour' ? colors.bleu : colors.blanc}
                                    $fontButtonColor={lightMode === 'jour' ? colors.blanc : colors.noir}
                                    $bgHover={lightMode === 'jour' ? colors.grisFonce : colors.bleu}
                                    $texteHover={lightMode === 'jour' ? colors.blanc : colors.blanc}
                                    $taille={
                                          fontMode === 'petit' ? '0.8rem' : fontMode === 'normal' ? '1rem' : '1.2rem'
                                    }
                                    $tailleHeight={
                                          fontMode === 'petit' ? '1rem' : fontMode === 'normal' ? '1.5rem' : '2rem'
                                    }
                              >
                                    <InputBox>
                                          <label>Nom Prénom</label>
                                          <input
                                                type="text"
                                                placeholder="Saisir votre Nom - Prénom"
                                                required
                                                className="nom"
                                                name="Nom"
                                                value={nomPrenom}
                                                onChange={(e) => setNomPrenom(e.target.value)}
                                          ></input>
                                    </InputBox>
                                    <InputBox>
                                          <label>E-Mail</label>
                                          <input
                                                type="email"
                                                placeholder="Saisir un E-mail"
                                                required
                                                name="E-mail"
                                                value={mail}
                                                onChange={(e) => setMail(e.target.value)}
                                          ></input>
                                    </InputBox>
                                    <InputBox>
                                          <label>Type de demande</label>
                                          <input
                                                type="text"
                                                placeholder="Saisir le motif de votre demande"
                                                required
                                                name="Type de demande"
                                                value={demande}
                                                onChange={(e) => setDemande(e.target.value)}
                                          ></input>
                                    </InputBox>
                                    <InputBox>
                                          <label>Votre message</label>
                                          <textarea
                                                placeholder="Veuillez rajouter une brève description"
                                                required
                                                name="Message"
                                                value={message}
                                                onChange={(e) => setMessage(e.target.value)}
                                          ></textarea>
                                    </InputBox>
                                    <InputBox>
                                          <button type="submit" value="Envoyer">
                                                Envoyer
                                          </button>
                                    </InputBox>
                              </Form>
                        </DivText>

                        <DivImg
                              onClick={() => {
                                    window.open('/assets/CV_Alternance_2025.pdf', '_blank')
                              }}
                              variants={slideInRight}
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true, amount: 0.1 }}
                              transition={{ duration: 1.1, ease: 'easeOut' }}
                              $src={`${process.env.PUBLIC_URL}/assets/CV_Alternance_2025_PNG.png`}
                        />
                  </WrapperForm>
            </Wrapper>
      )
}
