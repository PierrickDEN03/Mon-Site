import Header from '../../components/Header'
import Accueil from '../../components/Accueil'
import Presentation from '../../components/Presentation'
import Formation from '../../components/Formation'
import Projets from '../../components/Projets'
import Contact from '../../components/Contact'
import Footer from '../../components/Footer'
import Curseur from '../../components/Curseur'

export default function Home({ lightMode, setLightMode, fontMode, setFontMode, cursorMode, setCursorMode }) {
      return (
            <div>
                  <Curseur lightMode={lightMode} cursorMode={cursorMode}></Curseur>
                  <Header
                        lightMode={lightMode}
                        setLightMode={setLightMode}
                        fontMode={fontMode}
                        setFontMode={setFontMode}
                        cursorMode={cursorMode}
                        setCursorMode={setCursorMode}
                  />
                  <Accueil lightMode={lightMode} fontMode={fontMode} />
                  <Presentation lightMode={lightMode} />
                  <Formation lightMode={lightMode} />
                  <Projets lightMode={lightMode} />
                  <Contact lightMode={lightMode} fontMode={fontMode} />
                  <Footer lightMode={lightMode} />
            </div>
      )
}
