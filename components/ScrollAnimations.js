"use client";

import { useEffect } from "react";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";


export default function ScrollAnimations() {

  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger);


    const ctx = gsap.context(() => {

      /* =====================================================
   NAVBAR — HIDE IMMEDIATELY ON SCROLL DOWN
   SHOW AGAIN WHEN SCROLLING UP
===================================================== */

const navbar = document.querySelector(".navbar");

if (navbar) {

  let lastScrollY = window.scrollY;
  let ticking = false;

  const handleNavbarScroll = () => {

    const currentScrollY = window.scrollY;
    const difference = currentScrollY - lastScrollY;

    /* -----------------------------------------------
       SCROLL DOWN
       Hide immediately
    ------------------------------------------------ */

    if (difference > 3 && currentScrollY > 10) {

      gsap.to(navbar, {
        y: -120,
        opacity: 0,
        duration: 0.35,
        ease: "power3.out",
        overwrite: true,
      });

    }


    /* -----------------------------------------------
       SCROLL UP
       Show navbar
    ------------------------------------------------ */

    else if (difference < -3) {

      gsap.to(navbar, {
        y: 0,
        opacity: 1,
        duration: 0.35,
        ease: "power3.out",
        overwrite: true,
      });

    }


    /* -----------------------------------------------
       TOP OF WEBSITE
       Always show navbar
    ------------------------------------------------ */

    if (currentScrollY <= 5) {

      gsap.to(navbar, {
        y: 0,
        opacity: 1,
        duration: 0.3,
        ease: "power3.out",
        overwrite: true,
      });

    }


    lastScrollY = currentScrollY;
    ticking = false;

  };


  const onScroll = () => {

    if (!ticking) {

      window.requestAnimationFrame(
        handleNavbarScroll
      );

      ticking = true;

    }

  };


  window.addEventListener(
    "scroll",
    onScroll,
    { passive: true }
  );


  /* -----------------------------------------------
     CLEANUP
  ------------------------------------------------ */

  return () => {

    window.removeEventListener(
      "scroll",
      onScroll
    );

  };

}


      /* =====================================================
         SECTION STACKING
      ===================================================== */

      const overlaySections = [
        document.querySelector("#home"),
        document.querySelector("#about"),
        document.querySelector("#experience"),
        document.querySelector("#projects"),
        document.querySelector("#contact"),
      ].filter(Boolean);


      overlaySections.forEach((section, index) => {

        gsap.set(section, {
          position: "relative",
          zIndex: index + 1,
        });

      });


      /* =====================================================
         ABOUT LABEL
      ===================================================== */

      const aboutLabel =
        document.querySelector(".about-index");


      if (aboutLabel) {

        gsap.from(aboutLabel, {

          x: -40,

          opacity: 0,

          duration: 0.8,

          ease: "power3.out",

          scrollTrigger: {

            trigger: ".about-stage",

            start: "top 80%",

            once: true,

          },

        });

      }


      /* =====================================================
         ABOUT HEADING
      ===================================================== */

      const aboutHeading =
        document.querySelector(".about-copy h2");


      if (aboutHeading) {

        gsap.from(aboutHeading, {

          y: 100,

          opacity: 0,

          duration: 1.2,

          ease: "power4.out",

          scrollTrigger: {

            trigger: aboutHeading,

            start: "top 82%",

            once: true,

          },

        });

      }


      /* =====================================================
         ABOUT LEAD
      ===================================================== */

      const aboutLead =
        document.querySelector(".about-lead");


      if (aboutLead) {

        gsap.from(aboutLead, {

          y: 50,

          opacity: 0,

          duration: 1,

          ease: "power3.out",

          scrollTrigger: {

            trigger: aboutLead,

            start: "top 88%",

            once: true,

          },

        });

      }


      /* =====================================================
         ABOUT TEXT
      ===================================================== */

      const aboutText =
        document.querySelector(".about-text");


      if (aboutText) {

        gsap.from(aboutText, {

          y: 40,

          opacity: 0,

          duration: 0.9,

          ease: "power3.out",

          scrollTrigger: {

            trigger: aboutText,

            start: "top 90%",

            once: true,

          },

        });

      }


      /* =====================================================
         ABOUT CAPABILITIES
      ===================================================== */

      const aboutCapabilities =
        document.querySelectorAll(
          ".about-capabilities span"
        );


      if (aboutCapabilities.length) {

        gsap.from(aboutCapabilities, {

          y: 25,

          opacity: 0,

          duration: 0.7,

          stagger: 0.1,

          ease: "power3.out",

          scrollTrigger: {

            trigger: ".about-capabilities",

            start: "top 90%",

            once: true,

          },

        });

      }


      /* =====================================================
         ABOUT PHOTO ENTRANCE
      ===================================================== */

      const aboutCard =
        document.querySelector(".about-card");


      if (aboutCard) {

        gsap.from(aboutCard, {

          y: 100,

          opacity: 0,

          rotateY: 8,

          duration: 1.4,

          ease: "power4.out",

          scrollTrigger: {

            trigger: ".about-visual",

            start: "top 85%",

            once: true,

          },

        });

      }


/* ============================================================
   ABOUT PHOTO — SMOOTH OVERLAY / PARALLAX
============================================================ */

const aboutVisual = document.querySelector(".about-visual");

if (aboutVisual) {

  gsap.fromTo(
    aboutVisual,
    {
      y: 80,
    },
    {
      y: -80,
      ease: "none",

      scrollTrigger: {
        trigger: ".about-stage",
        start: "top bottom",
        end: "bottom top",
        scrub: 1.2,
      },
    }
  );

}


      /* =====================================================
         ABOUT TEXT PARALLAX
      ===================================================== */

      const aboutCopy =
        document.querySelector(".about-copy");


      if (aboutCopy) {

        gsap.to(aboutCopy, {

          y: -50,

          ease: "none",

          scrollTrigger: {

            trigger: ".about-stage",

            start: "top bottom",

            end: "bottom top",

            scrub: 2,

          },

        });

      }


      /* =====================================================
         ABOUT STATEMENT
      ===================================================== */

      const aboutStatement =
        document.querySelector(".about-statement");


      if (aboutStatement) {

        gsap.from(aboutStatement, {

          y: 100,

          opacity: 0,

          ease: "none",

          scrollTrigger: {

            trigger: aboutStatement,

            start: "top 85%",

            end: "top 45%",

            scrub: 1,

          },

        });

      }


      /* =====================================================
         EXPERIENCE
      ===================================================== */

      const experience =
        document.querySelector(".experience-row");


      if (experience) {

        gsap.from(experience, {

          y: 80,

          opacity: 0,

          duration: 1.1,

          ease: "power4.out",

          scrollTrigger: {

            trigger: experience,

            start: "top 82%",

            once: true,

          },

        });

      }


/* =====================================================
   PROJECTS
===================================================== */

const projectHeading =
  document.querySelector(".projects-heading");

if (projectHeading) {

  gsap.from(projectHeading, {

    y: 90,

    opacity: 0,

    duration: 1.2,

    ease: "power4.out",

    scrollTrigger: {

      trigger: ".projects-section",

      start: "top 80%",

      once: true,

    },

  });

}


      /* =====================================================
         CONTACT
      ===================================================== */

      const contactHeading =
        document.querySelector(".contact h2");


      if (contactHeading) {

        gsap.from(contactHeading, {

          y: 90,

          opacity: 0,

          duration: 1.2,

          ease: "power4.out",

          scrollTrigger: {

            trigger: contactHeading,

            start: "top 82%",

            once: true,

          },

        });

      }


      /* =====================================================
         REFRESH
      ===================================================== */

      ScrollTrigger.refresh();

    });


    /* =====================================================
       CLEANUP
    ===================================================== */

    return () => {

      ctx.revert();

    };

  }, []);


  return null;

}