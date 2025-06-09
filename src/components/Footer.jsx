import styled from 'styled-components'
import { colors } from './Utils'

const Wrapper = styled.div`
      display: flex;
      flex-direction: column;
      color: ${({ $fontColor }) => $fontColor};
      box-shadow: 0 0 30px ${({ $borderColor }) => $borderColor};
      border: 2px solid ${({ $bgColor }) => $bgColor};
      background-color: ${({ $bgColor }) => $bgColor};
      gap: 30px;
      padding: 20px 0px;
      box-sizing: border-box;
      overflow-x: hidden;
`

const WrapperLink = styled.div`
      display: flex;
      width: 100%;
      justify-content: space-around;
      align-items: center;
      @media (max-width: 1024px) {
            flex-direction: column;
            gap: 30px;
      }
`

const DivLink = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
`

const ImgLink = styled.img`
      background-size: cover;
      background-position: center;
      background-repeat: 'no-repeat';
      width: 50px;
      height: 50px;
      transition: transform 0.5s ease;
      pointer: cursor;
      &:hover {
            transform: translateY(-20px);
      }
`

export default function Footer({ lightMode }) {
      return (
            <Wrapper
                  $fontColor={lightMode === 'jour' ? colors.noir : colors.blanc}
                  $bgColor={lightMode === 'jour' ? colors.blanc : colors.grisFonce}
                  $borderColor={lightMode === 'jour' ? colors.blancFonce : colors.grisClair}
            >
                  <WrapperLink>
                        <DivLink>
                              <a
                                    href="https://www.linkedin.com/in/pierrick-dennemont-a9473226a/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link"
                              >
                                    <ImgLink
                                          src={
                                                lightMode === 'nuit'
                                                      ? `${process.env.PUBLIC_URL}/assets/icons/linkedin_blanc.png`
                                                      : `${process.env.PUBLIC_URL}/assets/icons/linkedin_noir.png`
                                          }
                                    ></ImgLink>
                              </a>
                              <p>LinkedIn</p>
                        </DivLink>
                        <DivLink>
                              <a
                                    href="mailto:pierrick.dennemont@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link"
                              >
                                    <ImgLink
                                          src={
                                                lightMode === 'nuit'
                                                      ? `${process.env.PUBLIC_URL}/assets/icons/email_blanc.png`
                                                      : `${process.env.PUBLIC_URL}/assets/icons/email_noir.png`
                                          }
                                    ></ImgLink>
                              </a>
                              <p>pierrick.dennemont@gmail.com</p>
                        </DivLink>
                        <DivLink>
                              <a
                                    href="https://github.com/PierrickDEN03"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link"
                              >
                                    <ImgLink
                                          src={
                                                lightMode === 'nuit'
                                                      ? `${process.env.PUBLIC_URL}/assets/icons/github_blanc.png`
                                                      : `${process.env.PUBLIC_URL}/assets/icons/github_noir.png`
                                          }
                                    ></ImgLink>
                              </a>
                              <p>Github</p>
                        </DivLink>
                  </WrapperLink>
            </Wrapper>
      )
}
