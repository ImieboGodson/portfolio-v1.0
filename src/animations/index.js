import { gsap } from "gsap";

// Declare a general timeline to use in all the animation functions.

const tl = gsap.timeline();

// Preloader Animation
export const preLoaderAnim = () => {
  tl.to("body", {
    duration: 0.1,
    css: { overflowY: "hidden" },
    ease: "power3.inOut",
  })
    // .to(".landing", {
    //   duration: 0.05,
    //   css: { overflowY: "hidden", height: "90vh" },
    // })
    .to(".texts-container", {
      duration: 0,
      opacity: 1,
      ease: "Power3.easeOut",
    })
    .from(".texts-container span", {
      duration: 1.5,
      delay: 1,
      y: 70,
      skewY: 10,
      stagger: 0.4,
      ease: "Power3.easeOut",
    })
    .to(".texts-container span", {
      duration: 1,
      y: 70,
      skewY: -20,
      stagger: 0.2,
      ease: "Power3.easeOut",
    })

    // .to(".landing", {
    //   duration: 0.05,
    //   css: { overflowY: "hidden", height: "unset" },
    // })
    .to("body", {
      duration: 0.1,
      css: { overflowY: "scroll" },
      ease: "power3.inOut",
    })
    // .from(".landing__top .sub", {
    //   duration: 1,
    //   opacity: 0,
    //   y: 80,
    //   ease: "expo.easeOut",
    // })
    .to(
      ".preloader",
      {
        duration: 1.5,
        height: "0vh",
        ease: "Power3.easeOut",
      },
      "-=2"
    )
    // .from(".landing__main .text", {
    //   duration: 2,
    //   // scale: 0,
    //   y: 10,
    //   opacity: 0,
    //   stagger: {
    //     amount: 2,
    //   },
    //   ease: "power3.easeInOut",
    // })
    // .from(".links .item", {
    //   duration: 0.5,
    //   opacity: 0,
    //   delay: window.innerWidth < 763 ? -3 : -0.6,
    //   // y: 80,
    //   stagger: {
    //     amount: 0.5,
    //   },
    //   ease: "expo.easeOut",
    // })
    // .from(".main-circle", {
    //   duration: 1,
    //   opacity: 0,
    //   ease: "power3.easeInOut",
    // })
    // .from(".shapes .shape", {
    //   duration: 1,
    //   opacity: 0,
    //   delay: -1,
    //   ease: "power3.easeInOut",
    //   stagger: 1,
    // })
    .to(".preloader", {
      duration: 0,
      css: { display: "none" },
    });
};
