import React from 'react'
import { animated, to, useSpring } from '@react-spring/web'

const HearthSVGPart = () => {

    // const hearthAnimationSvgProps = useSpring({
    //     from:"translateX(-20px) translateY(-20px)",
    //     to: async (next) => {
    //         while(true) {
    //             await next({transform: "translateX(40px) translateY(-20px)"})
    //             await next({transform: "translateX(-20px) translateY(-20px)"})
    //         }
    //     },
    //     config: { duration: 1000 },
    //     loop:true,
    //     reset:true
    // })
    const groupSpringValues = useSpring({
        from: {
          transform: 'translateX(0) translateY(0px)',
        },
        to: async (next) => {
          while (true) {
            await next({ transform: 'translateX(-10px) translateY(15px)'});
            await next({ transform: 'translateX(-5px) translateY(7px)'});
            await next({ transform: 'translateX(0px) translateY(0px)'})
          }
        },
        config: { duration: 1000 },
        loop:true,
        reset:true

      });

      const hearthBeat = useSpring({
        from: { transform: 'scale(1.01)' },
        to: async (next) => {
          while (true) {
            await next({ transform: 'scale(1)' });
            await next({ transform: 'scale(1.01)' });
          }
        },
        config: { tension: 120, friction: 14, duration: 300 },
        reset: true,
        loop: true,
      });
  return (
    <animated.g style={groupSpringValues}>
        <animated.path fill-rule="evenodd" clip-rule="evenodd" d="M393 51L459 39C461 38 463 40 463 42L475 106C475 107 474 109 472 110L451 113L442 128L428 118L407 122C405 122 403 121 403 119L391 55C390 53 392 51 393 51Z" fill="#15BFFD"/>
        <animated.path style={hearthBeat} d="M431 70C433 65 435 63 440 62C446 61 451 64 452 69C454 78 445 89 436 100C424 93 412 85 411 76C410 71 414 67 419 65C424 65 427 66 431 70Z" fill="#FF0000"/>
    </animated.g>
  )
}

export default HearthSVGPart
