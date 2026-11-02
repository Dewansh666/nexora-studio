import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  GraduationCap,
  Menu,
  Microscope,
  Trophy,
  Users,
} from "lucide-react";

const courses = [
  {
    title: "JEE Main + Advanced",
    description: "Structured preparation for engineering entrance examinations.",
    icon: GraduationCap,
    duration: "Class 11 & 12",
  },
  {
    title: "NEET Preparation",
    description: "Focused preparation for medical entrance examinations.",
    icon: Microscope,
    duration: "Class 11 & 12",
  },
  {
    title: "Foundation Program",
    description: "Build strong fundamentals in science and mathematics.",
    icon: BookOpen,
    duration: "Class 8–10",
  },
];

const features = [
  "Concept-focused teaching",
  "Regular practice sessions",
  "Structured study material",
  "Doubt-solving support",
];

export default function CoachingPage() {
  return (
    <main className="edu-page">
      <div className="edu-demo-banner">
        NEXORA STUDIO PRESENTS
        <span>EDUPRIME — CONCEPT WEBSITE DEMO</span>
      </div>

      {/* NAVBAR */}
      <header className="edu-navbar">
        <Link href="/#work" className="edu-brand">
          <span className="edu-brand-icon">
            <GraduationCap size={23} />
          </span>
          EduPrime<span className="edu-brand-dot">.</span>
        </Link>

        <nav className="edu-nav-links">
          <a href="#home">Home</a>
          <a href="#courses">Courses</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="edu-nav-button">
          Enquire Now <ArrowUpRight size={16} />
        </a>
      </header>

      {/* HERO */}
      <section className="edu-hero" id="home">
        <div className="edu-container edu-hero-grid">
          <div className="edu-hero-content">
            <div className="edu-eyebrow">
              <span />
              LEARN WITH PURPOSE. GROW WITH CONFIDENCE.
            </div>

            <h1>
              Your journey to
              <br />
              <span>greatness</span>
              <br />
              starts here.
            </h1>

            <p>
              Build strong concepts, develop problem-solving skills
              and prepare for your next academic milestone with
              structured guidance.
            </p>

            <div className="edu-hero-actions">
              <a href="#courses" className="edu-primary-button">
                Explore Courses <ArrowRight size={18} />
              </a>

              <a href="#about" className="edu-secondary-button">
                Discover EduPrime
              </a>
            </div>

            <div className="edu-hero-trust">
              <div className="edu-trust-icon">
                <CheckCircle2 size={19} />
              </div>
              <span>Focused learning. Stronger fundamentals.</span>
            </div>
          </div>

          <div className="edu-hero-visual">
            <div className="edu-visual-decoration" />

            <div className="edu-hero-image">
              <div className="edu-image-overlay">
                <span>YOUR FUTURE STARTS TODAY</span>
                <h2>Dream big. Study smart.</h2>
                <p>Every concept brings you one step forward.</p>
              </div>
            </div>

            <div className="edu-floating-card">
              <div className="edu-floating-icon">
                <Trophy size={22} />
              </div>
              <div>
                <strong>Excellence in learning</strong>
                <span>A better way to prepare</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="edu-trust-strip">
        <div className="edu-container edu-trust-grid">
          <div>
            <GraduationCap size={23} />
            <span>Expert Guidance</span>
          </div>
          <div>
            <BookOpen size={23} />
            <span>Structured Learning</span>
          </div>
          <div>
            <Users size={23} />
            <span>Student Support</span>
          </div>
          <div>
            <Trophy size={23} />
            <span>Goal-Oriented Preparation</span>
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section className="edu-section edu-container" id="courses">
        <div className="edu-section-heading">
          <span className="edu-section-label">OUR PROGRAMS</span>
          <h2>
            Find the right path
            <br />
            for your <span>ambitions.</span>
          </h2>
          <p>
            Carefully structured learning programs designed
            around different academic goals.
          </p>
        </div>

        <div className="edu-course-grid">
          {courses.map((course, index) => {
            const Icon = course.icon;

            return (
              <article className="edu-course-card" key={course.title}>
                <div className="edu-course-icon">
                  <Icon size={27} />
                </div>

                <span className="edu-course-number">
                  PROGRAM 0{index + 1}
                </span>

                <h3>{course.title}</h3>
                <p>{course.description}</p>

                <div className="edu-course-footer">
                  <span>{course.duration}</span>
                  <a href="#contact" aria-label={`Enquire about ${course.title}`}>
                    <ArrowUpRight size={19} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ABOUT */}
      <section className="edu-about" id="about">
        <div className="edu-container edu-about-grid">
          <div className="edu-about-visual">
            <div className="edu-about-card">
              <span>THE EDUPRIME APPROACH</span>
              <h3>
                Understand
                <br />
                more. Memorize
                <br />
                less.
              </h3>
              <div className="edu-about-line" />
              <p>Learning starts with understanding the why.</p>
            </div>
          </div>

          <div className="edu-about-content">
            <span className="edu-section-label">ABOUT EDUPRIME</span>
            <h2>
              Education that
              <br />
              builds <span>confidence.</span>
            </h2>

            <p>
              EduPrime is a concept for a modern coaching institute
              focused on helping students build strong academic
              foundations and approach examinations with confidence.
            </p>

            <div className="edu-feature-list">
              {features.map((feature) => (
                <div key={feature}>
                  <CheckCircle2 size={19} />
                  {feature}
                </div>
              ))}
            </div>

            <a href="#contact" className="edu-primary-button">
              Talk to Our Team <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="edu-contact" id="contact">
        <div className="edu-container edu-contact-inner">
          <span>TAKE THE FIRST STEP</span>
          <h2>
            Your next chapter
            <br />
            begins <strong>with a decision.</strong>
          </h2>
          <p>
            Have questions about our programs? Get in touch
            to discuss the right learning path.
          </p>

          <a href="mailto:YOUR_EMAIL_HERE" className="edu-primary-button">
            Request Information <ArrowUpRight size={18} />
          </a>

          <small>Replace this demo contact with the institute's actual details.</small>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="edu-footer">
        <div className="edu-container edu-footer-inner">
          <Link href="/#work" className="edu-brand">
            <span className="edu-brand-icon">
              <GraduationCap size={21} />
            </span>
            EduPrime<span className="edu-brand-dot">.</span>
          </Link>

          <p>Learning today. Leading tomorrow.</p>

          <span>© 2026 EduPrime. Concept demo by NEXORA Studio.</span>
        </div>
      </footer>
    </main>
  );
}