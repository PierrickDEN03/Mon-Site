import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { GlobalStyle } from '..'

import Home from '../pages/Home'

export default function App() {
      //State
      const [lightMode, setLightMode] = useState(() => localStorage.getItem('mode') || 'nuit')
      const [fontMode, setFontMode] = useState(() => localStorage.getItem('font') || 'normal')
      const [cursorMode, setCursorMode] = useState(() => localStorage.getItem('cursor') || 'normal')

      useEffect(() => {
            localStorage.setItem('mode', lightMode)
      }, [lightMode])
      useEffect(() => {
            localStorage.setItem('font', fontMode)
      }, [fontMode])
      useEffect(() => {
            localStorage.setItem('cursor', cursorMode)
      }, [cursorMode])

      return (
            <Router basename="/Mon-site">
                  <GlobalStyle $mode={lightMode} $taille={fontMode} $cursor={cursorMode} />
                  <Routes>
                        <Route
                              path="/"
                              element={
                                    <Home
                                          lightMode={lightMode}
                                          setLightMode={setLightMode}
                                          fontMode={fontMode}
                                          setFontMode={setFontMode}
                                          cursorMode={cursorMode}
                                          setCursorMode={setCursorMode}
                                    />
                              }
                        />
                        <Route
                              path="*"
                              element={
                                    <Home
                                          lightMode={lightMode}
                                          setLightMode={setLightMode}
                                          fontMode={fontMode}
                                          setFontMode={setFontMode}
                                          cursorMode={cursorMode}
                                          setCursorMode={setCursorMode}
                                    />
                              }
                        />
                  </Routes>
            </Router>
      )
}
