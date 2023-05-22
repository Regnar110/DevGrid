import React from 'react'
import { animated, useSpring } from '@react-spring/web'
const SpeakerSVGPart = () => {

    const animateSpeakerProps = useSpring({
        from: {transform:"rotate(0deg)"},
        to: async (next) => {
            while (true) {
              await next({ transform: 'rotate(1deg)' });
              await next({ transform: 'rotate(0deg)' });
            }
          },
        config: {duration:500},
        loop:true,
        reset:true
    })
  return (
    <animated.g style={animateSpeakerProps}>
        <animated.path fill-rule="evenodd" clip-rule="evenodd" d="M105 503L150 475C151 474 153 474 154 476L191 536C192 538 192 539 190 540L145 569C144 569 142 569 141 568L104 507C103 506 104 504 105 503Z" fill="#292929"/>
        <animated.path fill-rule="evenodd" clip-rule="evenodd" d="M187 542L181 557L211 606L216 607L219 612C222 615 220 616 216 619L199 631C197 632 196 632 195 630L162 578C156 576 151 572 146 568L187 542Z" fill="#FF7300"/>
        <animated.path fill-rule="evenodd" clip-rule="evenodd" d="M236 370L242 367C244 366 246 366 247 368L330 508C331 510 330 513 329 514L323 517C321 518 319 517 318 516L235 376C234 374 234 371 236 370Z" fill="#292929"/>
        <animated.path fill-rule="evenodd" clip-rule="evenodd" d="M157 481C189 458 218 429 237 379L316 512C272 507 230 516 189 534L157 481ZM139 563C106 572 89 533 107 512L139 563Z" fill="#FF7300"/>
        <animated.path fill-rule="evenodd" clip-rule="evenodd" d="M284 416C299 414 312 424 314 438C316 448 311 458 304 464L277 419C279 418 282 417 284 416Z" fill="#01AFEF"/>
        <animated.path fill-rule="evenodd" clip-rule="evenodd" d="M314 354C315 354 316 356 315 358L301 392C301 393 299 394 297 394C296 393 295 391 296 390L310 355C310 354 312 353 314 354ZM379 454C379 455 377 457 376 457L339 459C337 459 336 458 335 456C335 454 337 453 338 453L375 451C377 451 378 452 379 454ZM370 419C371 420 370 422 368 422L333 433C331 433 329 432 329 431C328 429 329 427 331 427L366 416C368 416 370 417 370 419ZM348 381C349 382 349 384 348 385L322 412C321 413 319 413 317 412C316 410 316 408 317 407L344 381C345 380 347 380 348 381Z" fill="#01AFEF"/>
    </animated.g>
  )
}

export default SpeakerSVGPart
