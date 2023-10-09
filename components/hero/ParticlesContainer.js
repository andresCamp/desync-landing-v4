'use client'
import React, { useCallback } from 'react'
import {loadFull} from 'tsparticles'
import  Particles  from 'react-tsparticles'

const ParticlesContainer = () => {

    const particlesInit = useCallback(async (engine) => {
         await loadFull(engine);
    }, []);

    const particleLoaded = useCallback(async () => {
    }, [])

  return (
      <Particles
        className='absolute w-full h-full z-0'
        id='tsparticles' 
        init={particlesInit} 
        loaded={particleLoaded}
        options={particlesConfig}
      />
  )
}

export default ParticlesContainer


const particlesConfig = {
    fps_limit: 32,
    fullScreen: {enable: false},
    interactivity: {
      detect_on: "canvas",
      events: {
        onclick: { enable: true, mode: "push" },
        onhover: {
          enable: true,
          mode: "attract",
          parallax: { enable: false, force: 75, smooth: 10 }
        },
        resize: true
      },
      modes: {
        push: { quantity: 4 },
        attract: { distance: 300, duration: 0.4, factor: 11 }
      }
    },
    particles: {
      color: { value: "#000000" },
      line_linked: {
        color: "#000000",
        distance: 150,
        enable: true,
        opacity: 0.4,
        width: 7
      },
      move: {
        attract: { enable: true, rotateX: 600, rotateY: 1200 },
        bounce: false,
        direction: "none",
        enable: true,
        out_mode: "out",
        random: false,
        speed: 1.5,
        straight: false
      },
      number: { density: { enable: true, value_area: 1000 }, value: 60 },
      opacity: {
        anim: { enable: false, opacity_min: 0.1, speed: 1, sync: false },
        random: false,
        value: 0.5
      },
    //   shape: {
    //     // character: {
    //     //   fill: false,
    //     //   font: "Verdana",
    //     //   style: "",
    //     //   value: "*",
    //     //   weight: "400"
    //     // },
    //     // image: {
    //     //   height: 100,
    //     //   replace_color: true,
    //     //   src: "images/github.svg",
    //     //   width: 100
    //     // },
    //     polygon: { nb_sides: 5 },
    //     stroke: { color: "#000000", width: 0 },
    //     type: "circle"
    //   },
      size: {
        anim: { enable: false, size_min: 0.1, speed: 40, sync: false },
        random: true,
        value: 10
      }
    },
    polygon: {
      draw: { enable: false, lineColor: "#ffffff", lineWidth: 0.5 },
      move: { radius: 10 },
      scale: 1,
      type: "none",
      url: ""
    },
    retina_detect: true
  }



