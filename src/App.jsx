function App() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    })
  }

  const projects = [
    {
      number: "01",
      title: "CAREER TWIN AI",
      category: "AI / MACHINE LEARNING",
      description:
        "AI-powered career guidance concept focused on career direction, skill gaps, and personalized learning paths.",
      tech: "AI/ML • PYTHON • GENERATIVE AI",
      github: "#",
    },
    {
      number: "02",
      title: "SALES & CUSTOMER ANALYSIS",
      category: "DATA ANALYTICS",
      description:
        "Analyzed sales, profit, customers, products, regions, and segments using Excel and Pivot Tables.",
      tech: "EXCEL • PIVOT TABLES • DATA ANALYSIS",
      github: "https://github.com/Bhawanabora04/Flipkart-Sales-Performance-Dashboard",
    },
    {
      number: "03",
      title: "SPAM MESSAGE CLASSIFICATION",
      category: "PYTHON & MACHINE LEARNING",
      description:
        "Built a Spam/Ham classifier using text preprocessing, TF-IDF, and Logistic Regression.",
      tech: "PYTHON • SCIKIT-LEARN • NLP • TF-IDF",
      github: "https://github.com/Bhawanabora04/Machine-Learning-based-SMS-Spam-Classification",
    },
    {
      number: "04",
      title: "GLOBAL SUPERSTORE ANALYTICS",
      category: "POWER BI",
      description:
        "Interactive dashboard analyzing sales, revenue, profit, customers, products, trends, and segments.",
      tech: "POWER BI • DATA VISUALIZATION • DASHBOARD",
      github: "https://github.com/Bhawanabora04/Global-Store-Analytics-Dashboard",
    },
    {
      number: "05",
      title: "TESLA STOCK SALES ANALYSIS",
      category: "POWER BI",
      description:
        "Dashboard analyzing Tesla models, pricing, and state-wise sales using KPIs and interactive charts.",
      tech: "POWER BI • KPIs • DATA VISUALIZATION",
      github: "https://github.com/Bhawanabora04/Tesla-Stock-Sales-Analysis-Dashboard",
    },
    {
      number: "06",
      title: "MACHINE LEARNING MODEL PRACTICE",
      category: "PYTHON & SCIKIT-LEARN",
      description:
        "Implemented hiring, salary, and candidate-clustering models using multiple machine learning algorithms.",
      tech:
        "DECISION TREE • LOGISTIC REGRESSION • LINEAR REGRESSION • K-MEANS",
      github: "https://github.com/Bhawanabora04/Machine-Learning-Projects",
    },
  ]

  return (
    <div className="portfolio">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">

        <div className="logo">
          BHAWANA.
        </div>

        <div className="nav-links">

          <button onClick={() => scrollToSection("about")}>
            ABOUT
          </button>

          <button onClick={() => scrollToSection("work")}>
            WORK
          </button>

          <button onClick={() => scrollToSection("resume")}>
            RESUME
          </button>

          <button onClick={() => scrollToSection("contact")}>
            CONTACT
          </button>

        </div>

      </nav>


      {/* ================= HERO ================= */}

      <section className="hero">

        <div className="hero-background-text">
          AI
        </div>

        <div className="hero-content">

          <div className="hero-text">

            <p className="eyebrow">
              B.TECH • ARTIFICIAL INTELLIGENCE & MACHINE LEARNING
            </p>

            <h1>
              HI, I'M
              <br />
              <span>BHAWANA.</span>
            </h1>

            <p className="hero-description">
              AI / ML • DATA • TECHNOLOGY
            </p>

            <button
              className="explore-button"
              onClick={() => scrollToSection("about")}
            >
              SCROLL TO EXPLORE ↓
            </button>

          </div>


          <div className="hero-image-container">

            <div className="image-number">
              01
            </div>

            <img
              src="/bhawana.jpg"
              alt="Bhawana"
              className="hero-image"
            />

            <div className="image-caption">
              <span>AI / ML</span>
              <span>DATA ANALYTICS</span>
            </div>

          </div>

        </div>

        <div className="scroll-indicator">
          SCROLL
          <span>↓</span>
        </div>

      </section>


      {/* ================= ABOUT ================= */}

      <section className="section about-section" id="about">

        <div className="section-number">
          01 / ABOUT
        </div>

        <div className="about-grid">

          <div>

            <p className="section-label">
              WHO I AM
            </p>

            <h2>
              CURIOUS.
              <br />
              CREATIVE.
              <br />
              <span>TECH-DRIVEN.</span>
            </h2>

          </div>


          <div className="about-text">

            <p>
              I'm Bhawana, a B.Tech student specializing in
              Artificial Intelligence and Machine Learning.
              I have a strong interest in AI/ML, Data Analytics,
              and technology-driven problem solving.
            </p>

            <p>
              I enjoy working with data, exploring patterns,
              building practical projects, and learning how
              technology can be used to solve real-world problems.
            </p>

            <p>
              My current focus is on developing practical skills
              in AI/ML and Data Analytics while building projects
              that reflect both technical knowledge and business
              understanding.
            </p>


            <div className="about-details">

              <div>
                <strong>B.TECH</strong>
                <span>
                  Artificial Intelligence & Machine Learning
                </span>
              </div>

              <div>
                <strong>FOCUS</strong>
                <span>
                  AI/ML • Data Analytics
                </span>
              </div>

              <div>
                <strong>GOAL</strong>
                <span>
                  Building practical technology solutions
                </span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= WHAT I DO ================= */}

      <section className="section services-section">

        <div className="section-number">
          02 / WHAT I DO
        </div>

        <div className="section-heading">

          <p className="section-label">
            MY EXPERTISE
          </p>

          <h2>
            WHAT
            <br />
            <span>I DO.</span>
          </h2>

        </div>


        <div className="services-grid">

          <div className="service-card">

            <span className="card-number">
              01
            </span>

            <h3>
              AI / MACHINE
              <br />
              LEARNING
            </h3>

            <p>
              Exploring machine learning concepts, data
              preprocessing, model building, and AI-based
              solutions.
            </p>

            <span className="card-arrow">
              ↗
            </span>

          </div>


          <div className="service-card">

            <span className="card-number">
              02
            </span>

            <h3>
              DATA
              <br />
              ANALYTICS
            </h3>

            <p>
              Turning raw data into meaningful insights through
              data cleaning, analysis, visualization, and
              business-focused reporting.
            </p>

            <span className="card-arrow">
              ↗
            </span>

          </div>


          <div className="service-card">

            <span className="card-number">
              03
            </span>

            <h3>
              WEB
              <br />
              DEVELOPMENT
            </h3>

            <p>
              Building responsive and user-friendly web
              interfaces using modern development tools
              and technologies.
            </p>

            <span className="card-arrow">
              ↗
            </span>

          </div>


          <div className="service-card">

            <span className="card-number">
              04
            </span>

            <h3>
              PROBLEM
              <br />
              SOLVING
            </h3>

            <p>
              Combining analytical thinking and technology
              to approach real-world problems and create
              practical solutions.
            </p>

            <span className="card-arrow">
              ↗
            </span>

          </div>

        </div>

      </section>


      {/* ================= SKILLS ================= */}

      <section className="section skills-section">

        <div className="section-number">
          03 / SKILLS
        </div>

        <div className="section-heading">

          <p className="section-label">
            TECHNOLOGIES I WORK WITH
          </p>

          <h2>
            MY
            <br />
            <span>SKILLS.</span>
          </h2>

        </div>


        <div className="skills-container">

          <div className="skill-category">

            <h3>
              PROGRAMMING
            </h3>

            <div className="skill-list line-skills">
              <span>PYTHON</span>
              <span>JAVASCRIPT</span>
              <span>HTML</span>
              <span>CSS</span>
            </div>

          </div>


          <div className="skill-category">

            <h3>
              AI / MACHINE LEARNING
            </h3>

            <div className="skill-list line-skills">
              <span>MACHINE LEARNING</span>
              <span>DATA PREPROCESSING</span>
              <span>MODEL BUILDING</span>
              <span>GENERATIVE AI</span>
            </div>

          </div>


          <div className="skill-category">

            <h3>
              DATA ANALYTICS
            </h3>

            <div className="skill-list line-skills">
              <span>MICROSOFT EXCEL</span>
              <span>SQL</span>
              <span>DATA CLEANING</span>
              <span>DATA VISUALIZATION</span>
              <span>EDA</span>
            </div>

          </div>


          <div className="skill-category">

            <h3>
              TOOLS & FRAMEWORKS
            </h3>

            <div className="skill-list line-skills">
              <span>GIT</span>
              <span>GITHUB</span>
              <span>VS CODE</span>
              <span>REACT</span>
              <span>POWER BI</span>
              <span>SCIKIT-LEARN</span>
            </div>

          </div>

        </div>

      </section>


      {/* ================= FEATURED WORK ================= */}

      <section className="section projects-section" id="work">

        <div className="section-number">
          04 / FEATURED WORK
        </div>

        <div className="section-heading">

          <p className="section-label">
            SELECTED PROJECTS
          </p>

          <h2>
            FEATURED
            <br />
            <span>WORK.</span>
          </h2>

        </div>


        <div className="projects-list">

          {projects.map((project) => (

            <article
              className="project-card"
              key={project.number}
            >

              <div className="project-card-number">
                {project.number}
              </div>


              <div className="project-card-content">

                <p className="project-type">
                  {project.category}
                </p>

                <h3>
                  {project.title}
                </h3>

                <p className="project-description">
                  {project.description}
                </p>

                <p className="project-tech">
                  {project.tech}
                </p>

                {project.status && (
                  <span className="project-status">
                    {project.status}
                  </span>
                )}

              </div>


              <div className="project-card-action">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="github-button"
                  onClick={(e) => {
                    if (project.github === "#") {
                      e.preventDefault()
                    }
                  }}
                >
                  GITHUB ↗
                </a>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* ================= EDUCATION ================= */}

      <section className="section education-section">

        <div className="section-number">
          05 / EDUCATION
        </div>

        <div className="education-content">

          <p className="section-label">
            ACADEMIC BACKGROUND
          </p>

          <h2>
            B.TECH
            <br />
            <span>AIML.</span>
          </h2>

          <p className="education-description">
            Currently pursuing B.Tech with a focus on
            Artificial Intelligence, Machine Learning,
            Data Analytics, and technology-driven
            problem solving.
          </p>

          <div className="education-line">

            <div>
              <strong>DEGREE</strong>

              <span>
                B.Tech — Artificial Intelligence & Machine Learning
              </span>
            </div>

            <div>
              <strong>FOCUS</strong>

              <span>
                AI • ML • Data • Technology
              </span>
            </div>

          </div>

        </div>

      </section>


      {/* ================= RESUME ================= */}

      <section
        className="section resume-section"
        id="resume"
      >

        <div className="resume-box">

          <p className="section-label">
            WANT TO KNOW MORE?
          </p>

          <h2>
            MY
            <br />
            <span>RESUME.</span>
          </h2>

          <p>
            Explore my education, technical skills,
            projects, experience, and professional journey.
          </p>

          <a
            href="/Bhawana_Bora_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="outline-button"
          >
            VIEW RESUME ↗
          </a>

        </div>

      </section>


      {/* ================= CONTACT ================= */}

      <section
        className="contact-section"
        id="contact"
      >

        <div className="contact-content">

          <p className="section-label">
            HAVE AN OPPORTUNITY?
          </p>

          <h2>
            LET'S
            <br />
            <span>CONNECT.</span>
          </h2>

          <p className="contact-description">
            I'm open to learning, collaborating, and exploring
            opportunities in AI, Machine Learning, Data Analytics,
            and technology.
          </p>


          <a
            href="mailto:bhawana05bora@gmail.com"
            className="email-link"
          >
            bhawana05bora@gmail.com
          </a>


          <div className="social-links">

            <a
              href="https://github.com/Bhawanabora04"
              target="_blank"
              rel="noreferrer"
            >
              GITHUB ↗
            </a>

            <a
              href="https://www.linkedin.com/in/bhawana-bora-1bb888285"
              target="_blank"
              rel="noreferrer"
            >
              LINKEDIN ↗
            </a>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer>

        <div className="footer-logo">
          BHAWANA.
        </div>

        <p>
          AI / ML • DATA • TECHNOLOGY
        </p>

        <span>
          © 2026 BHAWANA. ALL RIGHTS RESERVED.
        </span>

      </footer>

    </div>
  )
}

export default App