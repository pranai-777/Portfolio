"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function AboutSection() {

  const cardRef = useRef(null);
  const imageRef = useRef(null);

  const handleMouseMove = (e) => {

    const card = cardRef.current;
    const image = imageRef.current;

    if (!card || !image) return;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY =
      ((x - centerX) / centerX) * 7;

    const rotateX =
      ((centerY - y) / centerY) * 7;

    gsap.to(card, {
      rotateX,
      rotateY,
      duration: 0.45,
      ease: "power3.out",
      transformPerspective: 1000,
    });

    gsap.to(image, {
      x: (x - centerX) * 0.025,
      y: (y - centerY) * 0.025,
      scale: 1.04,
      duration: 0.45,
      ease: "power3.out",
    });

  };


  const handleMouseLeave = () => {

    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.8,
      ease: "power3.out",
    });

    gsap.to(imageRef.current, {
      x: 0,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: "power3.out",
    });

  };


  return (

    <section
      id="about"
      className="about-stage"
    >

      <div className="about-parallax">


        {/* ================================
            LEFT
        ================================= */}

        <div className="about-copy">

          <span className="about-index">
            02 / ABOUT
          </span>


          <h2>

            DATA IS
            <br />

            NOT JUST
            <br />

            <span>
              NUMBERS.
            </span>

          </h2>


          <p className="about-lead">

            I transform complex data into
            intelligent systems that help
            businesses understand,
            predict and act with confidence.

          </p>


          <p className="about-text">

            My work combines machine learning,
            analytics, cloud engineering and
            automation to transform raw
            information into scalable,
            production-ready solutions.

          </p>


          <div className="about-capabilities">

            <span>
              DATA SCIENCE
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

          </div>

        </div>



        {/* ================================
            RIGHT — 3D PHOTO
        ================================= */}

        <div
          className="about-visual"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >

          <div
            ref={cardRef}
            className="about-card"
          >

            <div className="about-card-glow"></div>


            <div
              ref={imageRef}
              className="about-image"
            >

              <Image
  src="/images/pranai.png"
  alt="Pranai Teja Sabbe"
  fill
  priority
  sizes="(max-width: 600px) 82vw, (max-width: 1000px) 70vw, 34vw"
/>

            </div>


            <div className="about-card-overlay"></div>


            


            <div className="about-card-info">

              <span>
                PRANAI
              </span>



            </div>

          </div>

        </div>

      </div>



      {/* ================================
          LARGE STATEMENT
      ================================= */}

    <div className="about-statement">

  <span>
    THE DATA SCIENCE LOOP
  </span>

  <h3>
    DATA
    <br />
    <em>→ INSIGHT → IMPACT.</em>
  </h3>

  <p>
    I transform complex data into models,
    models into actionable insights, and
    insights into systems that create
    measurable business value.
  </p>

  <div className="about-flow">

    <div className="about-flow-item">
      <strong>01</strong>
      <span>DISCOVER</span>
      <small>
        Understand the data.
      </small>
    </div>

    <div className="about-flow-line"></div>

    <div className="about-flow-item">
      <strong>02</strong>
      <span>MODEL</span>
      <small>
        Build intelligent solutions.
      </small>
    </div>

    <div className="about-flow-line"></div>

    <div className="about-flow-item">
      <strong>03</strong>
      <span>DEPLOY</span>
      <small>
        Turn models into systems.
      </small>
    </div>

    <div className="about-flow-line"></div>

    <div className="about-flow-item">
      <strong>04</strong>
      <span>IMPACT</span>
      <small>
        Drive better decisions.
      </small>
    </div>

  </div>

</div>

    </section>

  );
}