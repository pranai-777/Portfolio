"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ExperienceSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const section = sectionRef.current;

      if (!section) return;

      /* =====================================================
         INITIAL STATES
      ===================================================== */

      gsap.set(".experience-eyebrow", {
        opacity: 0,
        y: 30,
      });

      gsap.set(".experience-heading", {
        opacity: 0,
        y: 70,
      });

      gsap.set(".experience-intro", {
        opacity: 0,
        y: 40,
      });

      gsap.set(".experience-timeline-line", {
        scaleY: 0,
        transformOrigin: "top center",
      });

      gsap.set(".experience-item", {
        opacity: 0,
        y: 70,
      });

      gsap.set(".experience-date", {
        opacity: 0,
        x: -30,
      });

      gsap.set(".experience-dot", {
        scale: 0,
      });

      /* =====================================================
         SECTION HEADER
      ===================================================== */

      gsap.to(".experience-eyebrow", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",

        scrollTrigger: {
          trigger: section,
          start: "top 78%",
          once: true,
        },
      });

      gsap.to(".experience-heading", {
        opacity: 1,
        y: 0,
        duration: 1.1,
        ease: "power4.out",

        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          once: true,
        },
      });

      gsap.to(".experience-intro", {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",

        scrollTrigger: {
          trigger: ".experience-header",
          start: "top 70%",
          once: true,
        },
      });

      /* =====================================================
         TIMELINE LINE
      ===================================================== */

      gsap.to(".experience-timeline-line", {
        scaleY: 1,
        duration: 2.2,
        ease: "power2.out",

        scrollTrigger: {
          trigger: ".experience-timeline",
          start: "top 72%",
          end: "bottom 70%",
          scrub: 1,
        },
      });

      /* =====================================================
         EXPERIENCE ITEMS
      ===================================================== */

      gsap.utils.toArray(".experience-item").forEach((item) => {
        const date = item.querySelector(".experience-date");
        const dot = item.querySelector(".experience-dot");

        gsap.to(item, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power4.out",

          scrollTrigger: {
            trigger: item,
            start: "top 82%",
            once: true,
          },
        });

        if (date) {
          gsap.to(date, {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",

            scrollTrigger: {
              trigger: item,
              start: "top 82%",
              once: true,
            },
          });
        }

        if (dot) {
          gsap.to(dot, {
            scale: 1,
            duration: 0.7,
            ease: "back.out(1.7)",

            scrollTrigger: {
              trigger: item,
              start: "top 82%",
              once: true,
            },
          });
        }
      });

      /* =====================================================
         ACTIVE DOT GLOW
      ===================================================== */

      gsap.utils.toArray(".experience-dot").forEach((dot) => {
        gsap.to(dot, {
          boxShadow:
            "0 0 10px rgba(213, 175, 91, 0.8), 0 0 28px rgba(213, 175, 91, 0.45)",
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      /* =====================================================
         OVERLAY / PARALLAX EFFECT
      ===================================================== */

      gsap.to(".experience-content", {
        y: -60,
        ease: "none",

        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      /* =====================================================
         BACKGROUND NUMBER
      ===================================================== */

      gsap.to(".experience-number", {
        y: -120,
        opacity: 0.08,
        ease: "none",

        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="experience-section"
    >
      {/* =====================================================
          BACKGROUND NUMBER
      ===================================================== */}

      <div className="experience-number">
        03
      </div>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="experience-content">

        {/* ===================================================
            HEADER
        =================================================== */}

        <div className="experience-header">

          <div className="experience-eyebrow">
            EXPERIENCE
          </div>

          <h2 className="experience-heading">
            MY PROFESSIONAL
            <br />
            <span>JOURNEY.</span>
          </h2>

          <div className="experience-heading-line"></div>

          <p className="experience-intro">
            A timeline of my growth, learning and impact
            across data science, analytics, machine learning
            and engineering.
          </p>

        </div>


        {/* ===================================================
            TIMELINE
        =================================================== */}

        <div className="experience-timeline">

          <div className="experience-timeline-line"></div>


          {/* =================================================
              01 — MASTER
          ================================================= */}

          <article className="experience-item">

            <div className="experience-date">
              <span>
                MAR 2025
              </span>

              <span>
                PRESENT
              </span>

             
            </div>


            <div className="experience-marker">

              <div className="experience-dot"></div>

            </div>


            <div className="experience-details">

              <div className="experience-category">
                EDUCATION
              </div>

              <h3>
                MASTER IN
                <br />
                DATA SCIENCE
              </h3>

              <div className="experience-meta">
                March 2025 — Present
                <span>•</span>
                University of Europe for Applied Sciences
              </div>

              <p>
                Advanced studies focused on machine learning,
                data engineering, analytics and cloud computing.
                Developing scalable data solutions and intelligent
                systems through applied projects, research and
                real-world problem solving.
              </p>

              <div className="experience-tags">
                <span>DATA SCIENCE</span>
                <span>MACHINE LEARNING</span>
                <span>CLOUD</span>
              </div>

            </div>

          </article>


          {/* =================================================
              02 — DATA SCIENTIST
          ================================================= */}

          <article className="experience-item">

            <div className="experience-date">
              <span>
                DEC 2023
              </span>

              <span>
                MAR 2025
              </span>
            </div>


            <div className="experience-marker">

              <div className="experience-dot"></div>

            </div>


            <div className="experience-details">

              <div className="experience-category">
                PROFESSIONAL EXPERIENCE
              </div>

              <h3>
                DATA
                <br />
                SCIENTIST
              </h3>

              <div className="experience-meta">
                December 2023 — March 2025
              </div>

              <p>
                Designed and developed data-driven solutions
                that transformed datasets into actionable
                business insights. Worked across predictive
                modelling, data preparation, automation and
                analytics while translating technical results
                into measurable business outcomes.
              </p>

              <div className="experience-tags">
                <span>PYTHON</span>
                <span>SQL</span>
                <span>MACHINE LEARNING</span>
                <span>ANALYTICS</span>
              </div>

            </div>

          </article>


          {/* =================================================
              03 — TRAINEE
          ================================================= */}

          <article className="experience-item">

            <div className="experience-date">
              <span>
                DEC 2022
              </span>

              <span>
                DEC 2023
              </span>
            </div>


            <div className="experience-marker">

              <div className="experience-dot"></div>

            </div>


            <div className="experience-details">

              <div className="experience-category">
                PROFESSIONAL EXPERIENCE
              </div>

              <h3>
                DATA SCIENTIST
                <br />
                TRAINEE
              </h3>

              <div className="experience-meta">
                December 2022 — December 2023
              </div>

              <p>
                Built a strong foundation in data science by
                working with real-world datasets, exploratory
                analysis and reporting. Developed dashboards,
                supported model development and automation, and
                learned to apply analytical methods to practical
                business problems.
              </p>

              <div className="experience-tags">
                <span>PYTHON</span>
                <span>SQL</span>
                <span>POWER BI</span>
                <span>DATA ANALYSIS</span>
              </div>

            </div>

          </article>


          {/* =================================================
              04 — INTERN
          ================================================= */}

          <article className="experience-item">

            <div className="experience-date">
              <span>
                FEB 2022
              </span>

              <span>
                OCT 2022
              </span>
            </div>


            <div className="experience-marker">

              <div className="experience-dot"></div>

            </div>


            <div className="experience-details">

              <div className="experience-category">
                PROFESSIONAL EXPERIENCE
              </div>

              <h3>
                DATA SCIENTIST
                <br />
                INTERN
              </h3>

              <div className="experience-meta">
                February 2022 — October 2022
              </div>

              <p>
                Started my professional data journey by working
                with data collection, cleaning, exploratory
                analysis and visualization. Created reports,
                supported analytical workflows and gained
                practical experience turning raw information
                into meaningful insights.
              </p>

              <div className="experience-tags">
                <span>DATA CLEANING</span>
                <span>EXCEL</span>
                <span>SQL</span>
                <span>VISUALIZATION</span>
              </div>

            </div>

          </article>

        </div>


        {/* ===================================================
            RESUME BUTTON
        =================================================== */}

        <div className="experience-resume">

          <a
            href="/Pranai-Teja-Sabbe-Resume.pdf"
            download
            className="experience-resume-button"
          >
            <span>
              DOWNLOAD RESUME
            </span>

            <span>
              ↓
            </span>
          </a>

        </div>

      </div>
    </section>
  );
}
