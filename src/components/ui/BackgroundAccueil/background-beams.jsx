'use client'
import React from 'react'
import { motion } from 'motion/react'
import { cn } from './lib/utils'

export const BackgroundBeams = React.memo(({ className }) => {
      const paths = [
            'M-2000 -1000 Q-1000 500 0 200 T 2000 1000',
            'M-1900 -900 Q-950 450 50 250 T 1900 950',
            'M-1800 -800 Q-900 400 100 300 T 1800 900',
            'M-1700 -700 Q-850 350 150 350 T 1700 850',
            'M-1600 -600 Q-800 300 200 400 T 1600 800',
            'M-1500 -500 Q-750 250 250 450 T 1500 750',
            'M-1400 -400 Q-700 200 300 500 T 1400 700',
            'M-1300 -300 Q-650 150 350 550 T 1300 650',
            'M-1200 -200 Q-600 100 400 600 T 1200 600',
            'M-1100 -100 Q-550 50 450 650 T 1100 550',
            'M-1000 0 Q-500 0 500 700 T 1000 500',
            'M-900 100 Q-450 -50 550 750 T 900 450',
            'M-800 200 Q-400 -100 600 800 T 800 400',
            'M-700 300 Q-350 -150 650 850 T 700 350',
            'M-600 400 Q-300 -200 700 900 T 600 300',
            'M-500 500 Q-250 -250 750 950 T 500 250',
            'M-400 600 Q-200 -300 800 1000 T 400 200',
            'M-300 700 Q-150 -350 850 1050 T 300 150',
            'M-200 800 Q-100 -400 900 1100 T 200 100',
            'M-100 900 Q-50 -450 950 1150 T 100 50',
            'M0 1000 Q0 -500 1000 1200 T 0 0',
            'M100 1100 Q50 -550 1050 1250 T -100 -50',
            'M200 1200 Q100 -600 1100 1300 T -200 -100',
            'M300 1300 Q150 -650 1150 1350 T -300 -150',
            'M400 1400 Q200 -700 1200 1400 T -400 -200',
      ]

      return (
            <div
                  className={cn('fixed inset-0 w-full h-full', className)}
                  style={{
                        zIndex: -1,
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        position: 'absolute',
                  }}
            >
                  <svg
                        className="w-full h-full"
                        style={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              width: '100%',
                              height: '100%',
                              pointerEvents: 'none',
                        }}
                        xmlns="http://www.w3.org/2000/svg"
                  >
                        {paths.map((path, index) => (
                              <motion.path
                                    key={`path-${index}`}
                                    d={path}
                                    stroke={`url(#linearGradient-${index})`}
                                    strokeOpacity="0.4"
                                    strokeWidth="2"
                                    fill="none"
                                    vectorEffect="non-scaling-stroke"
                              />
                        ))}

                        <defs>
                              {paths.map((path, index) => (
                                    <motion.linearGradient
                                          id={`linearGradient-${index}`}
                                          key={`gradient-${index}`}
                                          initial={{
                                                x1: '0%',
                                                x2: '0%',
                                                y1: '0%',
                                                y2: '0%',
                                          }}
                                          animate={{
                                                x1: ['0%', '100%'],
                                                x2: ['0%', '95%'],
                                                y1: ['0%', '100%'],
                                                y2: ['0%', `${93 + Math.random() * 8}%`],
                                          }}
                                          transition={{
                                                duration: Math.random() * 15 + 15,
                                                ease: 'easeInOut',
                                                repeat: Infinity,
                                                delay: Math.random() * 5,
                                          }}
                                    >
                                          <stop stopColor="#18CCFC" stopOpacity="0" />
                                          <stop stopColor="#18CCFC" />
                                          <stop offset="32.5%" stopColor="#6344F5" />
                                          <stop offset="100%" stopColor="#AE48FF" stopOpacity="0" />
                                    </motion.linearGradient>
                              ))}
                        </defs>
                  </svg>
            </div>
      )
})

BackgroundBeams.displayName = 'BackgroundBeams'
