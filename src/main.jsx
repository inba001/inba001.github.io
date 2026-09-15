import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const github = 'https://github.com/inba001';
const linkedin = 'https://www.linkedin.com/in/inbarasan-v-1b1717163/';
const email = 'mailto:inbarasanmechanical@gmail.com';

function App() {
  return (
    <div className="app">
      <nav className="nav">
        <a className="brand" href="#home">INBARASAN<span>.</span></a>
        <div className="navlinks">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <p className="eyebrow">SOFTWARE DEVELOPER · HEALTHCARE TECHNOLOGY</p>
            <h1>Building reliable web applications that solve real-world problems.</h1>
            <p className="lead">
              I'm Inbarasan V., a software developer with 4+ years of professional
              development experience, focused on PHP/Laravel, JavaScript, SQL and
              healthcare application development.
            </p>
            <div className="actions">
              <a className="button primary" href="#projects">View Projects</a>
              <a className="button secondary" href={linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="button secondary" href={github} target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
          <div className="hero-card">
            <div className="avatar">IV</div>
            <h2>Inbarasan V.</h2>
            <p>Software Developer</p>
            <div className="mini-grid">
              <span>PHP / Laravel</span><span>JavaScript</span>
              <span>SQL</span><span>Git / GitHub</span>
              <span>Docker</span><span>AI-assisted development</span>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <p className="eyebrow">ABOUT ME</p>
          <h2 className="section-title">Developer focused on practical, maintainable software.</h2>
          <div className="two-col">
            <p>
              I work on web application development for the SIMPLEX HIMES healthcare
              project at Intuit Micro Technology. My experience includes backend
              services, application logic, database changes, business workflows,
              frontend functionality, debugging and production-oriented fixes.
            </p>
            <p>
              I also explore modern development with React, NestJS, PostgreSQL,
              Prisma, microservices and AI-assisted coding workflows. I use tools
              such as Antigravity and structured prompting to accelerate development,
              debugging, refactoring and learning.
            </p>
          </div>
        </section>

        <section id="experience" className="section">
          <p className="eyebrow">EXPERIENCE</p>
          <h2 className="section-title">Professional journey</h2>
          <div className="timeline">
            <article className="timeline-item">
              <div className="dot"></div>
              <div>
                <span className="date">02 JAN 2023 — PRESENT</span>
                <h3>Software Developer · Intuit Micro Technology</h3>
                <p className="muted">Project: SIMPLEX HIMES</p>
                <ul>
                  <li>Develop and maintain healthcare web application features using PHP and Laravel.</li>
                  <li>Implement application logic, database migrations and business workflows.</li>
                  <li>Maintain JavaScript and Laravel Blade frontend functionality.</li>
                  <li>Debug application/database issues and trace root causes.</li>
                  <li>Use Git workflows including branching, cherry-picks and collaborative development.</li>
                  <li>Use AI-assisted development and structured prompting for analysis, coding, debugging and refactoring.</li>
                </ul>
              </div>
            </article>
            <article className="timeline-item">
              <div className="dot"></div>
              <div>
                <span className="date">06 JUN 2022 — JAN 2023</span>
                <h3>Software Developer Intern · Intuit Micro Technology</h3>
                <p className="muted">Project: SIMPLEX HIMES</p>
                <ul>
                  <li>Supported web application development, debugging and database changes.</li>
                  <li>Worked with the development team on assigned enhancements and fixes.</li>
                  <li>Built practical experience with Git and application development workflows.</li>
                </ul>
              </div>
            </article>
          </div>
        </section>

        <section id="projects" className="section">
          <p className="eyebrow">PROJECTS</p>
          <h2 className="section-title">Selected work & learning projects</h2>
          <div className="project-grid">
            <article className="project">
              <span className="project-number">01</span>
              <h3>SIMPLEX HIMES</h3>
              <p>
                Enterprise healthcare web application work involving patient
                documentation, patient visits, billing, dental workflows and related
                clinical/business processes.
              </p>
              <div className="tags"><span>PHP</span><span>Laravel</span><span>JavaScript</span><span>SQL</span></div>
            </article>
            <article className="project">
              <span className="project-number">02</span>
              <h3>Hospital Microservices Platform</h3>
              <p>
                Personal learning project exploring a modular hospital/patient
                management architecture with NestJS microservices, React,
                PostgreSQL and Prisma.
              </p>
              <div className="tags"><span>NestJS</span><span>React</span><span>PostgreSQL</span><span>Prisma</span></div>
            </article>
            <article className="project">
              <span className="project-number">03</span>
              <h3>ROTOSEED TILLER</h3>
              <p>
                Academic mechanical engineering project combining a rotovator and
                seed-sower mechanism to improve agricultural efficiency.
              </p>
              <div className="tags"><span>Mechanical</span><span>Agriculture</span><span>Design</span></div>
            </article>
            <article className="project">
              <span className="project-number">04</span>
              <h3>Fiber Reinforced Composite Study</h3>
              <p>
                Academic project evaluating dynamic mechanical properties of
                glass-fiber, aloe-vera-fiber and Roselle-fiber hybrid composites.
              </p>
              <div className="tags"><span>Research</span><span>Composites</span><span>Engineering</span></div>
            </article>
          </div>
        </section>

        <section id="skills" className="section">
          <p className="eyebrow">TECHNICAL SKILLS</p>
          <h2 className="section-title">Tools I work with</h2>
          <div className="skills">
            {[
              ['Languages', 'PHP · JavaScript · SQL · HTML · CSS'],
              ['Frameworks', 'Laravel · Blade · React · NestJS'],
              ['Databases', 'SQL Server · PostgreSQL · MySQL'],
              ['Development', 'REST APIs · Git · GitHub · Postman · VS Code'],
              ['DevOps', 'Docker · Linux · CI/CD fundamentals'],
              ['AI Development', 'Antigravity · AI coding agents · Prompt engineering · AI-assisted debugging']
            ].map(([title, text]) => (
              <div className="skill" key={title}>
                <h3>{title}</h3><p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section education">
          <p className="eyebrow">EDUCATION</p>
          <h2 className="section-title">Engineering background</h2>
          <div className="education-card">
            <div>
              <h3>B.E. Mechanical Engineering</h3>
              <p>VELTECH Engineering College, Chennai · Anna University</p>
            </div>
            <strong>2015 — 2019</strong>
          </div>
        </section>

        <section id="contact" className="section contact">
          <p className="eyebrow">LET'S CONNECT</p>
          <h2 className="section-title">Have a project or opportunity?</h2>
          <p className="lead">I'm open to software development opportunities and interesting projects.</p>
          <div className="actions">
            <a className="button primary" href={email}>Email Me</a>
            <a className="button secondary" href={linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="button secondary" href={github} target="_blank" rel="noreferrer">GitHub</a>
          </div>
          <p className="contact-email">inbarasanmechanical@gmail.com</p>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Inbarasan V.</span>
        <span>Built with React</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
