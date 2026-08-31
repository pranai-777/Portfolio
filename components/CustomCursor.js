"use client";

import { useEffect } from "react";
import gsap from "gsap";

export default function CustomCursor() {

  useEffect(() => {

    // Disable custom cursor on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const cursor = document.createElement("div");
    const dot = document.createElement("div");

    cursor.className = "custom-cursor";
    dot.className = "custom-cursor-dot";

    document.body.appendChild(cursor);
    document.body.appendChild(dot);


    /* =====================================================
       MOUSE MOVEMENT
    ===================================================== */

    const moveCursor = (e) => {

      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.45,
        ease: "power3.out",
      });

      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.08,
        ease: "power2.out",
      });

    };


    /* =====================================================
       INTERACTIVE ELEMENTS
    ===================================================== */

    const interactiveElements = document.querySelectorAll(
      "a, button, .hero-button, .about-card, .project-card"
    );


    const handleEnter = () => {

      cursor.classList.add("cursor-hover");

      gsap.to(cursor, {
        scale: 1.7,
        duration: 0.35,
        ease: "power3.out",
      });

      gsap.to(dot, {
        scale: 0.55,
        duration: 0.25,
      });

    };


    const handleLeave = () => {

      cursor.classList.remove("cursor-hover");

      gsap.to(cursor, {
        scale: 1,
        duration: 0.35,
        ease: "power3.out",
      });

      gsap.to(dot, {
        scale: 1,
        duration: 0.25,
      });

    };


    /* =====================================================
       CLICK EFFECT
    ===================================================== */

    const handleMouseDown = () => {

      gsap.to(cursor, {
        scale: 0.7,
        duration: 0.15,
      });

    };


    const handleMouseUp = () => {

      gsap.to(cursor, {
        scale: 1,
        duration: 0.25,
        ease: "back.out(2)",
      });

    };


    /* =====================================================
       LISTENERS
    ===================================================== */

    window.addEventListener(
      "mousemove",
      moveCursor
    );

    window.addEventListener(
      "mousedown",
      handleMouseDown
    );

    window.addEventListener(
      "mouseup",
      handleMouseUp
    );


    interactiveElements.forEach((element) => {

      element.addEventListener(
        "mouseenter",
        handleEnter
      );

      element.addEventListener(
        "mouseleave",
        handleLeave
      );

    });


    /* =====================================================
       CLEANUP
    ===================================================== */

    return () => {

      window.removeEventListener(
        "mousemove",
        moveCursor
      );

      window.removeEventListener(
        "mousedown",
        handleMouseDown
      );

      window.removeEventListener(
        "mouseup",
        handleMouseUp
      );


      interactiveElements.forEach((element) => {

        element.removeEventListener(
          "mouseenter",
          handleEnter
        );

        element.removeEventListener(
          "mouseleave",
          handleLeave
        );

      });


      cursor.remove();
      dot.remove();

    };

  }, []);


  return null;
}