"use client";

import { useEffect } from "react";

import HeroAnimation from "../components/HeroAnimation";
import ScrollAnimations from "../components/ScrollAnimations";
import ProjectsShowcase from "../components/ProjectsShowcase";
import AboutSection from "../components/AboutSection";
import ExperienceSection from "../components/ExperienceSection";
import CustomCursor from "../components/CustomCursor";

export default function Home() {

  /*
  ============================================================
  PREVENT BROWSER FROM RESTORING OLD SCROLL POSITION
  ============================================================
  */

  useEffect(() => {

    // Prevent browser from remembering previous scroll position
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Always start homepage from the top
    window.scrollTo(0, 0);

    // Remove old URL hash such as:
    // #contact
    // #about
    // #projects
    // #experience
    //
    // This prevents the browser from reopening the page
    // at the previous section.
    if (window.location.hash) {
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search
      );
    }

    // Make sure the page is at the top after the browser
    // has completed its initial rendering.
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);

      requestAnimationFrame(() => {
        window.scrollTo(0, 0);
      });
    });

  }, []);


  return (
    <main>

      <CustomCursor />

      {/* =====================================================
          GLOBAL ANIMATIONS
      ===================================================== */}

      <HeroAnimation />
      <ScrollAnimations />


      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <nav className="navbar">

        <a
          href="#home"
          className="logo"
        >
          PT
        </a>


        <div className="nav-center">

          <a href="#about">
            ABOUT
          </a>

          <a href="#experience">
            EXPERIENCE
          </a>

          <a href="#skills">
            SKILLS
          </a>

          <a href="#projects">
            WORK
          </a>

          <a href="#contact">
            CONTACT
          </a>

        </div>


        <a
          href="mailto:pranaitejasabbe7@gmail.com"
          className="nav-contact"
        >
          LET&apos;S TALK
          <span>↗</span>
        </a>

      </nav>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        id="home"
        className="hero"
      >

        {/* =================================================
            TOP INFORMATION
        ================================================= */}

        <div className="hero-top">

          <span className="eyebrow">
            DATA SCIENTIST
          </span>

          

        </div>


        {/* =================================================
            MAIN HERO
        ================================================= */}

        <div className="hero-content">


          {/* ================================================
              LEFT — TYPOGRAPHY
          ================================================ */}

          <div className="hero-copy">

            <span className="hero-index">
              01
            </span>


            <h1>

              I BUILD

              <span>
                INTELLIGENT
              </span>

              SYSTEMS.

            </h1>


            <p className="hero-intro">

              I design data-driven systems that turn
              complex information into intelligent,
              scalable and production-ready solutions.

              <br />
              <br />

              My work connects machine learning,
              analytics and cloud engineering to
              solve real-world problems — from
              model development and automation
              to deployment and business intelligence.

            </p>


            {/* ============================================
                CAPABILITIES
            ============================================ */}

            <div className="hero-capabilities">

              <span>
                DATA SCIENTIST
              </span>

              <span>
                AI ENGINEERING
              </span>

              <span>
                CLOUD ENGINEERING
              </span>

            </div>


            {/* ============================================
                BUTTONS
            ============================================ */}

            <div className="hero-actions">

              <a
                href="#projects"
                className="hero-button"
              >

                <span>
                  EXPLORE MY WORK
                </span>

                <span className="button-arrow">
                  ↗
                </span>

              </a>


              <a
                href="/Pranai-Teja-Sabbe-Resume.pdf"
                className="hero-button"
                download
              >

                <span>
                  DOWNLOAD RESUME
                </span>

                <span className="button-arrow">
                  ↓
                </span>

              </a>

            </div>


            

          </div>


          {/* ================================================
              RIGHT — WALKING VIDEO
          ================================================ */}

          <div className="hero-person">

            <div className="hero-person-glow"></div>


            <div className="hero-video">

              <video
                src="/videos/pranai-walk.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              />

            </div>


            <div className="hero-person-label">

              <span>
                Pranai Teja Sabbe
              </span>

              <span>
                Data Scientist
              </span>

            </div>

          </div>

        </div>


        {/* =================================================
            BOTTOM LINE
        ================================================= */}

        <div className="hero-footer">

          <span>
            DATA SCIENCE
          </span>

          <span>
            AI / MACHINE LEARNING
          </span>

          <span>
            CLOUD ENGINEERING
          </span>

          <span>
            ANALYTICS
          </span>

          <span>
            ↓ SCROLL TO EXPLORE
          </span>

        </div>

      </section>

      {/* =====================================================
          ABOUT
      ===================================================== */}
      <AboutSection />


      {/* =====================================================
          EXPERIENCE
      ===================================================== */}
      
      <ExperienceSection />


      {/* =====================================================
    SKILLS
===================================================== */}

<section id="skills" className="skills-section">

  <div className="skills-bg-number">
    04
  </div>

  <div className="skills-header">

    <div className="skills-index">
      04 / SKILLS
    </div>

    <div className="skills-header-content">

      <span className="skills-eyebrow">
        TECHNICAL CAPABILITIES
      </span>

      <h2>
        BUILT FOR
        <br />
        <em>DATA.</em>
      </h2>

      <p>
        A multidisciplinary toolkit spanning data science,
        machine learning, analytics, engineering and cloud
        technologies — designed to turn complex data into
        intelligent, production-ready solutions.
      </p>

    </div>

  </div>


  <div className="skills-grid">


    {/* DATA SCIENCE */}

    <article className="skill-card">

      <div className="skill-card-top">
        <span>01</span>
        <span>FOUNDATION</span>
      </div>

      <h3>
        DATA
        <br />
        SCIENCE
      </h3>

      <p>
        Turning raw datasets into structured insights
        through statistical analysis, experimentation
        and predictive thinking.
      </p>

      <div className="skill-list">
        <span>Python</span>
        <span>Pandas</span>
        <span>NumPy</span>
        <span>SciPy</span>
        <span>Statistics</span>
        <span>EDA</span>
        <span>Feature Engineering</span>
        <span>Data Cleaning</span>
      </div>

    </article>


    {/* MACHINE LEARNING */}

    <article className="skill-card">

      <div className="skill-card-top">
        <span>02</span>
        <span>INTELLIGENCE</span>
      </div>

      <h3>
        MACHINE
        <br />
        LEARNING
      </h3>

      <p>
        Building, evaluating and optimizing predictive
        models for classification, regression and
        real-world decision systems.
      </p>

      <div className="skill-list">
        <span>Scikit-learn</span>
        <span>XGBoost</span>
        <span>Random Forest</span>
        <span>Regression</span>
        <span>Classification</span>
        <span>Clustering</span>
        <span>Model Evaluation</span>
        <span>Hyperparameter Tuning</span>
      </div>

    </article>


    {/* DEEP LEARNING */}

    <article className="skill-card">

      <div className="skill-card-top">
        <span>03</span>
        <span>AI SYSTEMS</span>
      </div>

      <h3>
        DEEP
        <br />
        LEARNING
      </h3>

      <p>
        Developing neural-network based systems for
        computer vision, intelligent classification and
        modern AI applications.
      </p>

      <div className="skill-list">
        <span>TensorFlow</span>
        <span>Keras</span>
        <span>PyTorch</span>
        <span>CNN</span>
        <span>Transfer Learning</span>
        <span>Computer Vision</span>
        <span>NLP</span>
        <span>Neural Networks</span>
      </div>

    </article>


    {/* ANALYTICS */}

    <article className="skill-card">

      <div className="skill-card-top">
        <span>04</span>
        <span>DECISION</span>
      </div>

      <h3>
        DATA
        <br />
        ANALYTICS
      </h3>

      <p>
        Translating analytical results into dashboards,
        KPIs and visual narratives that support
        business decisions.
      </p>

      <div className="skill-list">
        <span>Power BI</span>
        <span>Excel</span>
        <span>DAX</span>
        <span>Dashboard Design</span>
        <span>KPI Analysis</span>
        <span>Data Storytelling</span>
        <span>Reporting</span>
      </div>

    </article>


    {/* DATA ENGINEERING */}

    <article className="skill-card">

      <div className="skill-card-top">
        <span>05</span>
        <span>INFRASTRUCTURE</span>
      </div>

      <h3>
        DATA
        <br />
        ENGINEERING
      </h3>

      <p>
        Designing reliable pipelines and scalable data
        workflows that move information from source
        systems to analytical platforms.
      </p>

      <div className="skill-list">
        <span>SQL</span>
        <span>ETL / ELT</span>
        <span>PySpark</span>
        <span>Apache Spark</span>
        <span>Databricks</span>
        <span>Azure Data Factory</span>
        <span>Data Warehousing</span>
      </div>

    </article>


    {/* AWS */}

    <article className="skill-card skill-card-cloud">

      <div className="skill-card-top">
        <span>06</span>
        <span>CLOUD</span>
      </div>

      <h3>
        AWS
        <br />
        CLOUD
      </h3>

      <p>
        Applying cloud technologies to build scalable
        data platforms, serverless workflows and
        production-oriented analytical systems.
      </p>

      <div className="skill-list">
        <span>AWS</span>
        <span>S3</span>
        <span>EC2</span>
        <span>Lambda</span>
        <span>Glue</span>
        <span>Athena</span>
        <span>Redshift</span>
      </div>

    </article>


    {/* DATABASES */}

    <article className="skill-card">

      <div className="skill-card-top">
        <span>07</span>
        <span>STORAGE</span>
      </div>

      <h3>
        DATABASES
        <br />
        & SQL
      </h3>

      <p>
        Working with structured and semi-structured data
        through relational databases, modeling and
        performance-focused querying.
      </p>

      <div className="skill-list">
        <span>PostgreSQL</span>
        <span>MySQL</span>
        <span>SQL Server</span>
        <span>MongoDB</span>
        <span>Data Modeling</span>
        <span>Query Optimization</span>
      </div>

    </article>


    {/* MLOPS */}

    <article className="skill-card">

      <div className="skill-card-top">
        <span>08</span>
        <span>DELIVERY</span>
      </div>

      <h3>
        MLOPS
        <br />
        & DEV
      </h3>

      <p>
        Taking analytical and machine-learning solutions
        from experimentation toward reproducible,
        deployable applications.
      </p>

      <div className="skill-list">
        <span>Git</span>
        <span>GitHub</span>
        <span>Docker</span>
        <span>Streamlit</span>
        <span>Jupyter</span>
        <span>REST APIs</span>
        <span>Model Deployment</span>
        <span>CI/CD</span>
      </div>

    </article>

  </div>


  <div className="skills-footer">

    <span>
      DATA SCIENCE
    </span>

    <span>
      MACHINE LEARNING
    </span>

    <span>
      CLOUD COMPUTING
    </span>

    <span>
      DATA ENGINEERING
    </span>

  </div>

</section>

      {/* =====================================================
          SELECTED PROJECTS
      ===================================================== */}

      <ProjectsShowcase />


{/* =====================================================
    PREMIUM CONTACT / CONNECT
===================================================== */}

<section
  id="contact"
  className="contact-premium"
>

  {/* Ambient background */}

  <div className="contact-orb contact-orb-one"></div>
  <div className="contact-orb contact-orb-two"></div>


  {/* Giant background number */}

  <div className="contact-background-number">
    06
  </div>


  {/* =================================================
      HEADER
  ================================================= */}

  <div className="contact-premium-header">

    <span className="contact-section-number">
      06 / CONNECT
    </span>

    <span className="contact-status">
      AVAILABLE FOR OPPORTUNITIES
    </span>

  </div>


  {/* =================================================
      MAIN MESSAGE
  ================================================= */}

  <div className="contact-premium-main">

    <div className="contact-kicker">
      DATA SCIENTIST × AI ENGINEER × DATA ENGINEERING × DATA ANALYST 
    </div>


    <h2>

      LET&apos;S TURN

      <br />

      <span>
        DATA INTO
      </span>

      <br />

      IMPACT.

    </h2>


    <p className="contact-premium-description">

      I&apos;m always interested in building intelligent
      systems, solving meaningful problems and
      collaborating on ideas where technology can
      create measurable impact.

    </p>

  </div>


  {/* =================================================
      CONTACT CHANNELS
  ================================================= */}

  <div className="contact-channels">


    {/* EMAIL */}

    <a
      href="mailto:pranaitejasabbe77@gmail.com"
      className="contact-channel"
      aria-label="Send email"
    >

      <div className="contact-channel-number">
        01
      </div>


      <div className="contact-icon contact-icon-email">
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      d="M3 5.5h18v13H3z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />

    <path
      d="m3.5 6.5 8.5 6.2 8.5-6.2"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</div>


      <div className="contact-channel-info">

        <span>
          EMAIL
        </span>

        <strong>
          START A CONVERSATION
        </strong>

      </div>


      <span className="contact-channel-arrow">
        ↗
      </span>

    </a>


    {/* LINKEDIN */}

    <a
      href="https://www.linkedin.com/in/sabbe-pranai-teja/"
      target="_blank"
      rel="noopener noreferrer"
      className="contact-channel"
      aria-label="Open LinkedIn profile"
    >

      <div className="contact-channel-number">
        02
      </div>


      <div className="contact-icon contact-icon-linkedin">
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="2"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    />

    <path
      d="M7 10v7"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />

    <circle
      cx="7"
      cy="7"
      r="1"
      fill="currentColor"
    />

    <path
      d="M11 17v-4a3 3 0 0 1 6 0v4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />

    <path
      d="M11 10v7"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
</div>


      <div className="contact-channel-info">

        <span>
          LINKEDIN
        </span>

        <strong>
          CONNECT PROFESSIONALLY
        </strong>

      </div>


      <span className="contact-channel-arrow">
        ↗
      </span>

    </a>


    {/* GITHUB */}

    <a
      href="https://github.com/pranai-777"
      target="_blank"
      rel="noopener noreferrer"
      className="contact-channel"
      aria-label="Open GitHub profile"
    >

      <div className="contact-channel-number">
        03
      </div>


<div className="contact-icon contact-icon-github">
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      d="M12 2.5a9.5 9.5 0 0 0-3 18.5c.48.09.65-.21.65-.46v-1.67c-2.65.58-3.21-1.13-3.21-1.13-.44-1.12-1.07-1.42-1.07-1.42-.87-.6.07-.59.07-.59.96.07 1.47.99 1.47.99.86 1.47 2.25 1.05 2.8.8.09-.62.34-1.05.61-1.29-2.12-.24-4.35-1.06-4.35-4.72 0-1.04.37-1.89.98-2.56-.1-.24-.43-1.21.09-2.52 0 0 .8-.26 2.62.98a9.1 9.1 0 0 1 4.77 0c1.82-1.24 2.62-.98 2.62-.98.52 1.31.19 2.28.09 2.52.61.67.98 1.52.98 2.56 0 3.67-2.23 4.48-4.36 4.72.35.3.66.88.66 1.77v2.62c0 .25.17.55.66.46A9.5 9.5 0 0 0 12 2.5Z"
      fill="currentColor"
    />
  </svg>
</div>


      <div className="contact-channel-info">

        <span>
          GITHUB
        </span>

        <strong>
          EXPLORE MY WORK
        </strong>

      </div>


      <span className="contact-channel-arrow">
        ↗
      </span>

    </a>

  </div>


  {/* =================================================
      FINAL CTA
  ================================================= */}

  <div className="contact-final-line">

    <span>
      HAVE AN IDEA?
    </span>

    <a
      href="mailto:pranaitejasabbe77@gmail.com"
    >
      LET&apos;S BUILD SOMETHING INTELLIGENT
      <span>↗</span>
    </a>

  </div>


  {/* =================================================
      FOOTER SIGNATURE
  ================================================= */}

  <div className="contact-signature">

    <div>

      <strong>
        PRANAI TEJA SABBE
      </strong>

      <span>
        DATA SCIENTIST
      </span>

    </div>


    <span>
      BERLIN / GERMANY
    </span>

  </div>

</section>



    </main>
  );
}