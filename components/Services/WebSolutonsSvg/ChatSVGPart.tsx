import { animated, useSpring } from '@react-spring/web'
import React from 'react'

const ChatSVGPart = () => {
    
    const groupSpringValues = useSpring({
        from: {
          transform: 'translateX(0) translateY(0)',
        },
        to: async (next) => {
          while (true) {
            await next({ transform: 'translateX(-20px) translateY(5px)'});
            await next({ transform: 'translateX(0px) translateY(0px)'})
          }
        },
        config: { duration: 1000 },
        loop:true,
        reset:true

      });

      const dotsSpringValues = useSpring({
        from : {
            transform: 'translateY(0px)'
        },
        to: async ( next ) => {
            while(true) {
                await next({transform: 'translateY(10px)'});
                await next({transform: 'translateY(0px)'})
            }
        },
        config: {
            duration:500
        },
        loop:true,
        reset:true
      })
  return (
    <animated.g style={groupSpringValues}>
        <animated.path fill-rule="evenodd" clip-rule="evenodd" d="M635 229H675L722 231H745C768 231 786 250 786 273C786 296 767 314 744 314L722 313L685 312L652 343V312H634C623 311 614 302 614 291V249C615 238 624 229 635 229Z" fill="#FF7300"/>
        <animated.path style={dotsSpringValues} fill-rule="evenodd" clip-rule="evenodd" d="M662 262C666 261 670 264 670 268C671 272 668 275 664 276C661 276 657 274 656 270C656 266 658 262 662 262ZM733 264C737 263 740 266 741 270C741 273 739 277 735 278C731 278 728 276 727 272C726 268 729 264 733 264ZM698 263C701 263 705 265 706 269C706 273 703 277 700 277C696 278 692 275 692 271C691 268 694 264 698 263Z" fill="#fff"/>
    </animated.g>
  )
}

export default ChatSVGPart
