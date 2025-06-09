import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { colors } from './Utils'

const CursorDot = styled.div`
      width: ${({ $taille }) => $taille}px;
      height: ${({ $taille }) => $taille}px;
      background-color: ${({ $color }) => $color};
      position: fixed;
      top: 0;
      left: 0;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      z-index: 1000;
      pointer-events: none;
      transition: background-color 1s ease, left 0.15s ease, top 0.15s ease, width 0.2s ease, height 0.2s ease;
`
const CursorOutLine = styled.div`
      width: ${({ $taille }) => $taille}px;
      height: ${({ $taille }) => $taille}px;
      border: 3px solid ${({ $color }) => $color};
      position: fixed;
      top: 0;
      left: 0;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      z-index: 1000;
      pointer-events: none;
      transition: left 0.3s ease, top 0.3s ease, border-color 0.5s ease, width 0.2s ease, height 0.2s ease;
`

export default function Curseur({ lightMode, cursorMode }) {
      //States pour le fait d'être au hover d'un élément, la position et le click
      const [isClicking, setIsClicking] = useState(false)
      const [isHoverLink, setIsHoverLink] = useState(false)
      const [position, setPosition] = useState({ x: 0, y: 0 })
      //Tous initialisés à false au rafraichissement de page, en enlevant à chaque foisles listeners pour éviter les conflits
      useEffect(() => {
            const move = (event) => {
                  setPosition({ x: event.clientX, y: event.clientY })
            }
            window.addEventListener('mousemove', move)
            return () => {
                  window.removeEventListener('mousemove', move)
            }
      }, [])
      useEffect(() => {
            const mouseDown = (event) => {
                  setIsClicking(true)
            }
            const mouseUp = (event) => {
                  setIsClicking(false)
            }
            window.addEventListener('mousedown', mouseDown)
            window.addEventListener('mouseup', mouseUp)
            return () => {
                  window.removeEventListener('mousedown', mouseDown)
                  window.removeEventListener('mouseup', mouseUp)
            }
      }, [])
      useEffect(() => {
            const handleMouseOver = (e) => {
                  if (e.target.closest('a, button')) {
                        setIsHoverLink(true)
                  }
            }

            const handleMouseOut = (e) => {
                  if (e.target.closest('a, button')) {
                        setIsHoverLink(false)
                  }
            }

            document.addEventListener('mouseover', handleMouseOver)
            document.addEventListener('mouseout', handleMouseOut)

            return () => {
                  document.removeEventListener('mouseover', handleMouseOver)
                  document.removeEventListener('mouseout', handleMouseOut)
            }
      }, [])

      const tailleDot = isClicking
            ? 7 // plus petit pendant le clic
            : isHoverLink
            ? 25 // plus grand sur hover
            : 12 // taille normale
      const tailleOutLine = isClicking
            ? 30 // plus petit pendant le clic
            : isHoverLink
            ? 60 // plus grand sur hover
            : 45 // taille normale

      return cursorMode === 'custom' ? (
            <div>
                  <CursorDot
                        style={{ left: `${position.x}px`, top: `${position.y}px` }}
                        $color={lightMode === 'jour' ? colors.bleu : colors.blanc}
                        $taille={tailleDot}
                  />
                  <CursorOutLine
                        style={{ left: `${position.x}px`, top: `${position.y}px` }}
                        $color={lightMode === 'jour' ? colors.bleu : colors.blanc}
                        $taille={tailleOutLine}
                  />
            </div>
      ) : null
}
