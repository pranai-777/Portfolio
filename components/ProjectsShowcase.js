"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ProjectsShowcase() {
  const sectionRef = useRef(null);

  const projects = [
    {
      number: "01",
      category: "AI / MACHINE LEARNING",
      title: "AI DIET\nRECOMMENDATION\nSYSTEM",
      description:
        "An intelligent food-analysis and recommendation platform that combines computer vision with nutritional data to transform food images into personalized dietary insights.",
      technologies: [
        "PYTHON",
        "TENSORFLOW",
        "EFFICIENTNETB0",
        "USDA FOODDATA",
        "STREAMLIT",
      ],
      type: "LIVE DEMO",
      link: "https://pranai-7.streamlit.app/",
    },

    {
      number: "02",
      category: "DATA ANALYTICS / BUSINESS INTELLIGENCE",
      title: "HR ANALYTICS\nDASHBOARD",
      description:
        "An interactive workforce analytics solution that transforms HR data into actionable insights, helping decision-makers understand employee trends, workforce patterns and key organizational metrics.",
      technologies: [
        "PYTHON",
        "PANDAS",
        "SQL",
        "POWER BI",
        "DATA VISUALIZATION",
      ],
      type: "GITHUB",
      link: "https://github.com/pranai-777/HR-Analytics-Dashboard",
    },

    {
      number: "03",
      category: "DATA ANALYTICS / PREDICTIVE INSIGHTS",
      title: "BIKE SHARING\nDEMAND\nDASHBOARD",
      description:
        "An interactive analysis of bike-sharing demand that explores rental behavior and identifies patterns across time, weather conditions and user activity through data-driven visualizations.",
      technologies: [
        "PYTHON",
        "PANDAS",
        "MATPLOTLIB",
        "SEABORN",
        "STREAMLIT",
      ],
      type: "GITHUB",
      link: "https://github.com/pranai-777/bike-sharing-streamlit",
    },

    {
      number: "04",
      category: "DATA ANALYTICS / MARKET INTELLIGENCE",
      title: "GLOBAL AI JOB\nMARKET & SKILLS\nDEMAND",
      description:
        "An interactive analysis of the global AI job market, exploring salaries, experience levels, hiring locations, industries and in-demand skills to reveal patterns across the evolving AI employment landscape.",
      technologies: [
        "PYTHON",
        "PANDAS",
        "STREAMLIT",
        "DATA VISUALIZATION",
        "ANALYTICS",
      ],
      type: "GITHUB",
      link: "https://github.com/pranai-777/Global-Job-Market-Dashboard",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".project-overlay-card");

      if (!cards.length) return;

      /* ---------------------------------------------
         CARD ENTRANCE
      --------------------------------------------- */

      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            y: 100,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              once: true,
            },
          }
        );

        /* ---------------------------------------------
           INDIVIDUAL CARD PARALLAX
        --------------------------------------------- */

        gsap.to(card, {
          y: index % 2 === 0 ? -35 : -20,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      });

      /* ---------------------------------------------
         SECTION HEADING
      --------------------------------------------- */

      gsap.from(".projects-heading", {
        y: 90,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".projects-section",
          start: "top 75%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="projects-section"
    >
      {/* ============================================
          SECTION HEADER
      ============================================ */}

      <div className="projects-heading">

        <div className="projects-section-number">
          05
        </div>

        <div>
          <span className="projects-eyebrow">
            SELECTED WORK
          </span>

          <h2>
            PROJECTS THAT
            <br />
            <em>TURN DATA INTO IMPACT.</em>
          </h2>

          <p>
            A selection of data science, machine learning
            and analytics systems built to solve practical
            problems through intelligent use of data.
          </p>
        </div>

      </div>


      {/* ============================================
          OVERLAY PROJECT STACK
      ============================================ */}

      <div className="projects-stack">

        {projects.map((project, index) => (

          <article
            className="project-overlay-card"
            key={project.number}
            style={{
              "--project-index": index,
            }}
          >

            {/* LEFT NUMBER */}

            <div className="project-card-number">
              {project.number}
            </div>


            {/* MAIN CONTENT */}

            <div className="project-card-content">

              <span className="project-card-category">
                {project.category}
              </span>

              <h3>
                {project.title.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </h3>

              <p>
                {project.description}
              </p>


              {/* TECHNOLOGIES */}

              <div className="project-technologies">

                {project.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}

              </div>

            </div>


            {/* RIGHT SIDE */}

            <div className="project-card-side">

              <div className="project-card-index">
                PROJECT
                <strong>
                  {project.number}
                </strong>
              </div>


              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-view-button"
              >
                <span>
                  {project.type}
                </span>

                <strong>
                  ↗
                </strong>
              </a>

            </div>

          </article>

        ))}

      </div>


      {/* ============================================
          BOTTOM STATEMENT
      ============================================ */}

      <div className="projects-footer">

        <span>
          DATA
        </span>

        <span>
          AI / ML
        </span>

        <span>
          CLOUD
        </span>

        <span>
          ANALYTICS
        </span>

        <span>
          BUILDING WITH PURPOSE ↓
        </span>

      </div>

    </section>
  );
}