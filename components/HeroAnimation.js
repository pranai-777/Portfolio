"use client";

import { useEffect } from "react";
import gsap from "gsap";

export default function HeroAnimation() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      /* =====================================================
         3D GOLD CURSOR SHADOW
      ===================================================== */

      const person = document.querySelector(".hero-person");
      const aboutCard = document.querySelector(".about-card");

      

      const handleMouseMove = (e) => {
        if (!person) return;

        const rect = person.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        person.style.setProperty("--mouse-x", `${x}px`);
        person.style.setProperty("--mouse-y", `${y}px`);
      };

      const handleMouseLeave = () => {
        if (!person) return;

        person.style.setProperty("--mouse-x", "50%");
        person.style.setProperty("--mouse-y", "50%");
      };

      if (person) {
        person.addEventListener("mousemove", handleMouseMove);
        person.addEventListener("mouseleave", handleMouseLeave);
      }

      /* =====================================================
         INITIAL STATE
      ===================================================== */

      gsap.set(
        [
          ".navbar",
          ".hero-top",
          ".hero-index",
          ".hero-copy h1",
          ".hero-intro",
          ".hero-capabilities",
          ".hero-actions",
          ".hero-person",
          ".hero-footer",
        ],
        {
          opacity: 0,
        }
      );

      gsap.set(".hero-copy h1", {
        y: 100,
      });

      gsap.set(".hero-person", {
        x: 50,
      });

      gsap.set(".hero-index", {
        x: -25,
      });

      gsap.set(".hero-intro", {
        y: 30,
      });

      gsap.set(".hero-capabilities", {
        y: 25,
      });

      gsap.set(".hero-actions", {
        y: 25,
      });

      gsap.set(".hero-footer", {
        y: 25,
      });

      /* =====================================================
         NAVIGATION
      ===================================================== */

      tl.to(".navbar", {
        opacity: 1,
        duration: 0.8,
      });

      /* =====================================================
         TOP INFORMATION
      ===================================================== */

      tl.to(
        ".hero-top",
        {
          opacity: 1,
          duration: 0.7,
        },
        "-=0.4"
      );

      /* =====================================================
         HERO NUMBER
      ===================================================== */

      tl.to(
        ".hero-index",
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
        },
        "-=0.4"
      );

      /* =====================================================
         MAIN TITLE
      ===================================================== */

      tl.to(
        ".hero-copy h1",
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
        },
        "-=0.35"
      );

      /* =====================================================
         INTRO
      ===================================================== */

      tl.to(
        ".hero-intro",
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        },
        "-=0.7"
      );

      /* =====================================================
         CAPABILITIES
      ===================================================== */

      tl.to(
        ".hero-capabilities",
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
        },
        "-=0.55"
      );

      /* =====================================================
         BUTTONS
      ===================================================== */

      tl.to(
        ".hero-actions",
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
        },
        "-=0.5"
      );

      /* =====================================================
         PERSON / VIDEO
      ===================================================== */

      tl.to(
        ".hero-person",
        {
          opacity: 1,
          x: 0,
          duration: 1.1,
        },
        "-=0.9"
      );

      /* =====================================================
         FOOTER
      ===================================================== */

      tl.to(
        ".hero-footer",
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
        },
        "-=0.6"
      );

      /* =====================================================
         ORBITS
      ===================================================== */

      gsap.to(".orbit-a", {
        rotation: 360,
        duration: 40,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".orbit-b", {
        rotation: -360,
        duration: 28,
        repeat: -1,
        ease: "none",
      });

      /* =====================================================
         DATA NODES
      ===================================================== */

      gsap.to(".node-a", {
        y: -25,
        x: 15,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".node-b", {
        y: 20,
        x: -15,
        duration: 3.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".node-c", {
        y: -18,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* =====================================================
         CLEANUP
      ===================================================== */

      return () => {
        if (person) {
          person.removeEventListener(
            "mousemove",
            handleMouseMove
          );

          person.removeEventListener(
            "mouseleave",
            handleMouseLeave
          );
        }

        tl.kill();
      };
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return null;
}