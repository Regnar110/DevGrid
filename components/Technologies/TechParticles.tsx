import React from 'react'
import { useCallback } from "react";
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { loadPolygonMaskPlugin } from "tsparticles-plugin-polygon-mask";

const TechParticles = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
        await loadPolygonMaskPlugin(engine);
      }, []);
      const options = {
        fullScreen: {
            enable:false
        },
        name: "Polygon Mask",
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push"
            },
            onDiv: {
              elementId: "repulse-div",
              enable: false,
              mode: "repulse"
            },
            onHover: {
              enable: true,
              mode: "bubble",
              parallax: {
                enable: false,
                force: 2,
                smooth: 10
              }
            }
          },
          modes: {
            bubble: {
              distance: 40,
              duration: 2,
              opacity: 8,
              size: 6
            },
            connect: {
              distance: 80,
              links: {
                opacity: 0.5
              },
              radius: 60
            },
            grab: {
              distance: 400,
              links: {
                opacity: 1
              }
            },
            push: {
              quantity: 4
            },
            remove: {
              quantity: 2
            },
            repulse: {
              distance: 200,
              duration: 0.4
            },
            slow: {
              active: false,
              radius: 0,
              factor: 1
            }
          }
        },
        particles: {
          color: {
            value: "#FF7400"
          },
          links: {
            blink: false,
            color: "#FF7400",
            consent: false,
            distance: 50,
            enable: true,
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            outModes: "bounce",
            speed: 1
          },
          number: {
            limit: 0,
            value: 200
          },
          opacity: {
            animation: {
              enable: true,
              speed: 2,
              sync: true
            },
            value: {
              min: 0.05,
              max: 0.4
            }
          },
          shape: {
            type: "triangle"
          },
          size: {
            value: 1
          }
        },
        polygon: {
          draw: {
            enable: true,
            lineColor: "#44454849",
            lineWidth: 0.8
          },
          enable: true,
          move: {
            radius: 10
          },
          inline: {
            arrangement: "equidistant"
          },
          scale: 0.5,
          type: "inline",
          url: "https://upload.wikimedia.org/wikipedia/commons/3/33/Human-brain.SVG"
        },
        background: {
          color: "#fff",
          image: "",
          position: "50% 50%",
          repeat: "no-repeat",
          size: "cover"
        }
    }



  return <Particles id="tsparticles" className='h-[400px] w-full bg-[#44454849]' options={options} init={particlesInit} />
}

export default TechParticles
