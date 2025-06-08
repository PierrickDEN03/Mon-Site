import { projets } from '../datas/projets'
import { useState, useEffect } from 'react'
import { ProjetItem } from './ProjetItem'
import { useMediaQuery } from 'react-responsive'
import {
      Wrapper,
      colors,
      slideInLeftDesktop,
      slideInRightDesktop,
      slideInLeftMobile,
      slideInRightMobile,
} from './Utils'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const ImgSkill = styled.div`
      height: 110px;
      width: 110px;
      background-image: url(${(props) => props.$src});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      border-radius: 25px;
      opacity: ${(props) => (props.$isActive ? '1;' : '0.5;')});
      border: 3px solid ${colors.bleu};
      transform: ${(props) => (props.$isActive ? 'scale(1.1)' : 'scale(1)')};

      transition : opacity 0.3s ease, transform 0.3s ease;

      &:hover {
            transform: scale(1.1)
      }

      @media (max-width: 1024px) {
            height: 60px;
            width: 60px;
      }
`

const WrapperSkills = styled(motion.div)`
      display: flex;
      width: 100%;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-evenly;
      @media (max-width: 1024px) {
            gap: 10px;
      }
`

const WrapperProjects = styled.div`
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 50px;
`

export default function Projets({ lightMode }) {
      function handleClick(skillName) {
            //Changement de isActive, si cliqué alors on inverse
            const updatedList = ListSkills.map((skill) =>
                  skill.nom === skillName ? { ...skill, isActive: !skill.isActive } : skill
            )
            setListSkills(updatedList)
      }

      //State
      const [ListSkills, setListSkills] = useState([])
      var isSomeActive = ListSkills.some((skill) => skill.isActive === true)

      useEffect(() => {
            //Iniatlise au chargement de la page tous les skills à false (pas actif)
            const tabSkills = []
            projets.forEach((projet) => {
                  projet.langages.forEach((langage) => {
                        if (!tabSkills.some((s) => s.nom === langage)) {
                              tabSkills.push({ nom: langage, isActive: false })
                        }
                  })
            })
            setListSkills(tabSkills)
      }, [])

      const isMobile = useMediaQuery({ maxWidth: 1024 })

      const slideInLeft = isMobile ? slideInLeftMobile : slideInLeftDesktop
      const slideInRight = isMobile ? slideInRightMobile : slideInRightDesktop

      return (
            <Wrapper id="Projets">
                  <motion.h2
                        variants={slideInLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 1.1, ease: 'easeOut' }}
                  >
                        Mes projets
                  </motion.h2>
                  <p style={{ color: lightMode === 'jour' ? colors.noir : colors.blanc }}>
                        Veuillez retrouver ci-dessous mes différents projets réalisés. Pour plus d'informations
                        concernant l'aspect technique, vous pouvez retrouver mon GitHub ici :{' '}
                        <a
                              href="https://github.com/PierrickDEN03"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="link"
                        >
                              Mon profil
                        </a>
                  </p>
                  <WrapperSkills
                        variants={slideInRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 1.1, ease: 'easeOut' }}
                  >
                        {ListSkills.map((skill) => (
                              <ImgSkill
                                    key={skill.nom}
                                    onClick={() => handleClick(skill.nom)}
                                    $isActive={skill.isActive}
                                    $src={`/assets/logos/${skill.nom}.jpg`}
                              />
                        ))}
                  </WrapperSkills>
                  <WrapperProjects>
                        {/*On filtre les projets en fonction des langages sélectionnés */}
                        {/*Au moins un langage trouvé*/}
                        {/*Si rienn actif, on affiche tout*/}
                        {isSomeActive === false
                              ? projets.map((projet, i) => (
                                      <ProjetItem
                                            lightMode={lightMode}
                                            key={projet.nom_projet}
                                            url={projet.url}
                                            titre={projet.nom_projet}
                                            text={projet.description}
                                            annee={projet.annee}
                                            listLangage={projet.langages}
                                            isPair={i % 2 === 0}
                                      />
                                ))
                              : projets
                                      .filter((projet) =>
                                            projet.langages.some((langage) =>
                                                  ListSkills.find(
                                                        (skill) => skill.nom === langage && skill.isActive === true
                                                  )
                                            )
                                      )
                                      .map((projet, i) => (
                                            <ProjetItem
                                                  lightMode={lightMode}
                                                  key={projet.nom_projet}
                                                  titre={projet.nom_projet}
                                                  text={projet.description}
                                                  annee={projet.annee}
                                                  listLangage={projet.langages}
                                                  isPair={i % 2 === 0}
                                            />
                                      ))}
                  </WrapperProjects>
            </Wrapper>
      )
}
