import ProjectEnquiry from "@/components/ProjectEnquiry";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Layers3,
  Palette,
  Sparkles,
  Check,
  Globe,
  MessageCircle,
  Monitor,
  Smartphone,
} from "lucide-react";

const projects = [
  {
    number: "01",
    name: "EduPrime",
    category: "EDUCATION",
    description:
      "A modern digital presence for coaching institutes and educators.",
    tags: ["Education", "Admissions"],
    background: "project-education",
    href: "/demos/coaching",
  },
  {
    number: "02",
    name: "IronPulse",
    category: "FITNESS",
    description:
      "A powerful online experience for gyms and fitness professionals.",
    tags: ["Fitness", "Membership"],
    background: "project-fitness",
    href: "/demos/gym",
  },
  {
    number: "03",
    name: "VELORA",
    category: "FASHION",
    description:
      "A minimal and premium shopping experience for fashion brands.",
    tags: ["Fashion", "E-commerce"],
    background: "project-fashion",
    href: "/demos/clothing",
  },
  {
    number: "04",
    name: "SAVOR",
    category: "FOOD & HOSPITALITY",
    description:
      "A beautiful digital storefront for restaurants and cafes.",
    tags: ["Restaurant", "Food"],
    background: "project-food",
    href: "/demos/restaurant",
  },
  {
    number: "05",
    name: "LOCALY",
    category: "LOCAL BUSINESS",
    description:
      "A professional online identity for growing local businesses.",
    tags: ["Business", "Services"],
    background: "project-local",
    href: "/demos/local-business",
  },
  {
    number: "06",
    name: "CREOVIBE",
    category: "CREATORS",
    description:
      "A personal portfolio built to showcase talent and attract collaborations.",
    tags: ["Portfolio", "Creators"],
    background: "project-creator",
    href: "/demos/creator",
  },
];

const services = [
  {
    icon: Code2,
    title: "Website Development",
    description:
      "Fast, responsive and functional websites built around your business goals.",
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    description:
      "Clean, modern interfaces that make your brand look professional.",
  },
  {
    icon: Layers3,
    title: "Web Applications",
    description:
      "Custom digital experiences, dashboards and business tools.",
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your business, audience, goals and requirements.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We create a visual direction that fits your brand and business.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "We turn the approved design into a responsive working website.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We test, refine and help get your website ready for the world.",
  },
];

export default function Home() {
  return (
    <main>
      {/* NAVBAR */}
      <header className="navbar">
        <a href="#home" className="logo">
          NEXORA<span>.</span>
        </a>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#work">Our Work</a>
          <a href="#about">About</a>
        </nav>

        <a href="#contact" className="nav-cta">
          Let's Talk <ArrowUpRight size={16} />
        </a>
      </header>

      {/* HERO */}
      <section className="hero section-container" id="home">
        <div className="hero-content">
          <div className="eyebrow">
            <span className="status-dot" />
            DIGITAL DESIGN & DEVELOPMENT STUDIO
          </div>

          <h1>
            We build websites
            <br />
            that build <span>businesses.</span>
          </h1>

          <p className="hero-description">
            Your business deserves more than just an online presence.
            We create modern digital experiences that turn ideas into reality.
          </p>

          <div className="hero-actions">
            <a href="#work" className="primary-button">
              Explore Our Work <ArrowRight size={18} />
            </a>

            <a href="#services" className="secondary-button">
              What We Do
            </a>
          </div>

          <div className="hero-note">
            <Sparkles size={16} />
            Designed for ambitious businesses and brands.
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-glow" />

          <div className="browser-window">
            <div className="browser-top">
              <div className="browser-dots">
                <span />
                <span />
                <span />
              </div>
              <div className="browser-address">nexora.studio</div>
            </div>

            <div className="browser-content">
              <div className="mock-nav">
                <strong>
                  NEXORA<span>.</span>
                </strong>
                <div>HOME &nbsp; WORK &nbsp; ABOUT</div>
              </div>

              <div className="mock-hero">
                <span className="mock-label">
                  CREATIVE DIGITAL STUDIO
                </span>
                <h2>
                  Think.
                  <br />
                  Design.
                  <br />
                  <span>Build.</span>
                </h2>
                <div className="mock-line" />
                <p>
                  Turning ambitious ideas into digital experiences.
                </p>
                <div className="mock-button">
                  DISCOVER MORE ↗
                </div>
              </div>

              <div className="mock-bottom">
                <span>WEB DESIGN</span>
                <span>DEVELOPMENT</span>
                <span>CREATIVITY</span>
              </div>
            </div>
          </div>

          <div className="floating-card">
            <div className="floating-icon">
              <Globe size={20} />
            </div>
            <div>
              <strong>Digital presence</strong>
              <p>Built to make an impact.</p>
            </div>
          </div>

          <div className="visual-index">
            01 / DIGITAL EXPERIENCE
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats section-container">
        <div>
          <h3>06</h3>
          <p>Industry concepts</p>
        </div>
        <div>
          <h3>03</h3>
          <p>Core services</p>
        </div>
        <div>
          <h3>100%</h3>
          <p>Responsive approach</p>
        </div>
        <div>
          <h3>∞</h3>
          <p>Creative possibilities</p>
        </div>
      </section>

      {/* SERVICES */}
      <section
        className="section-container section-padding"
        id="services"
      >
        <div className="section-heading">
          <div>
            <span className="section-label">WHAT WE DO</span>
            <h2>
              Ideas into <span>digital reality.</span>
            </h2>
          </div>

          <p>
            From a simple business website to a custom web application,
            we help brands establish their digital identity.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div className="service-card" key={service.title}>
                <div className="service-top">
                  <div className="service-icon">
                    <Icon size={23} />
                  </div>
                  <span>0{index + 1}</span>
                </div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <ArrowUpRight
                  className="service-arrow"
                  size={20}
                />
              </div>
            );
          })}
        </div>
      </section>

      {/* PROJECTS */}
      <section
        className="section-container section-padding"
        id="work"
      >
        <div className="section-heading">
          <div>
            <span className="section-label">SELECTED CONCEPTS</span>
            <h2>
              Work that <span>speaks.</span>
            </h2>
          </div>

          <p>
            Explore our website concepts across six different industries.
            Each concept is designed around a different business need.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <a
              href={project.href}
              className="project-card-link"
              key={project.number}
              aria-label={`Explore ${project.name} website demo`}
            >
              <article className="project-card">
                <div
                  className={`project-preview ${project.background}`}
                >
                  <div className="preview-top">
                    <span>{project.name}</span>
                    <span>↗</span>
                  </div>

                  <div className="preview-center">
                    <span className="preview-category">
                      {project.category}
                    </span>
                    <h3>{project.name}</h3>
                    <div className="preview-line" />
                    <p>DESIGNED FOR WHAT'S NEXT.</p>
                  </div>

                  <div className="preview-bottom">
                    <span>CONCEPT WEBSITE</span>
                    <span>NEXORA STUDIO</span>
                  </div>
                </div>

                <div className="project-info">
                  <div>
                    <span className="project-number">
                      {project.number}
                    </span>
                    <h3>{project.name}</h3>
                  </div>

                  <ArrowUpRight size={21} />
                </div>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                  <span>Concept Demo</span>
                </div>

                <div className="project-view-link">
                  Explore Website <ArrowUpRight size={15} />
                </div>
              </article>
            </a>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="process-section section-padding" id="process">
        <div className="section-container">
          <div className="section-heading">
            <div>
              <span className="section-label">HOW WE WORK</span>
              <h2>
                From idea to <span>launch.</span>
              </h2>
            </div>
            <p>
              A straightforward process designed to keep your project
              clear, organised and moving forward.
            </p>
          </div>

          <div className="process-grid">
            {process.map((step) => (
              <div className="process-card" key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
{/* ABOUT */}
<section className="about-section" id="about">
  <div className="section-container about-inner">
    <div>
      <span className="section-label">WHY NEXORA</span>
      <h2>
        Your vision.
        <br />
        Our <span>execution.</span>
      </h2>
    </div>

    <div className="about-content">
      <p>
        We believe every business deserves a strong digital presence.
        Our focus is simple: thoughtful design, useful functionality
        and websites that work beautifully across devices.
      </p>

      <div className="about-points">
        <div><Check size={18} /> Modern and responsive design</div>
        <div><Check size={18} /> Business-focused functionality</div>
        <div><Check size={18} /> Clear and collaborative process</div>
        <div><Check size={18} /> Designs tailored to your brand</div>
      </div>
    </div>
  </div>

  {/* FOUNDER INTRODUCTION */}
  <div className="section-container founder-section">
    <div className="founder-label">
      <span className="section-label">BEHIND NEXORA</span>
      <h3>Built with purpose.<br />Driven by <span>ideas.</span></h3>
    </div>

    <div className="founder-content">
      <span className="founder-role">FOUNDER & WEB DEVELOPER</span>
      <h3>Dewansh</h3>
      <p>
        I'm the person behind NEXORA Studio. I build modern,
        responsive websites that help businesses establish
        their online presence and connect with more customers.
      </p>
      <p>
        My approach is simple: understand the business,
        create a thoughtful design, and build something useful.
      </p>
    </div>
  </div>
</section>


      {/* CONTACT / PROJECT ENQUIRY */}
<section
  className="section-container contact-section"
  id="contact"
>
  <div className="nexora-contact-heading">
    <span className="section-label">
      HAVE A PROJECT IN MIND?
    </span>

    <h2>
      Your next idea.
      <br />
      Our <span>next project.</span>
    </h2>

    <p>
      Whether you're starting a business or growing an existing one,
      let's build a digital presence that works for you.
    </p>
  </div>

  <div className="nexora-contact-layout">
    <div className="nexora-contact-info">
      <h3>Let's build something meaningful.</h3>

      <p>
        Tell us what you're looking for. We'll understand
        your requirements and discuss the best solution
        for your business.
      </p>

      <div className="nexora-contact-feature">
        <Check size={18} />
        Custom website solutions
      </div>

      <div className="nexora-contact-feature">
        <Check size={18} />
        Transparent project quotations
      </div>

      <div className="nexora-contact-feature">
        <Check size={18} />
        Responsive website development
      </div>

      <div className="nexora-contact-feature">
        <Check size={18} />
        Direct project communication
      </div>
    </div>

    <ProjectEnquiry />
  </div>
</section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="section-container footer-inner">
          <a href="#home" className="logo">
            NEXORA<span>.</span>
          </a>

          <p>Building digital experiences with purpose.</p>

          <span>© 2026 NEXORA Studio.</span>
        </div>
      </footer>
    </main>
  );
}
