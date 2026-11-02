"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Play,
  Mail,
  Menu,
  X,
  Sparkles,
  Camera,
  Video,
  Users,
  CheckCircle2,
} from "lucide-react";

const creator = {
  name: "ALEX MORGAN",
  username: "@alexcreates",
  niche: "LIFESTYLE · FASHION · DIGITAL",
  instagram: "https://instagram.com/",
  youtube: "https://youtube.com/",
};

const stats = [
  { value: "125K+", label: "TOTAL FOLLOWERS" },
  { value: "2.4M+", label: "MONTHLY REACH" },
  { value: "8.5%", label: "ENGAGEMENT RATE" },
];

const content = [
  {
    title: "The Art of Everyday Style",
    category: "FASHION",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&auto=format&fit=crop",
  },
  {
    title: "Life Beyond the Ordinary",
    category: "LIFESTYLE",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&auto=format&fit=crop",
  },
  {
    title: "Creating My Own Story",
    category: "CREATIVE",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop",
  },
  {
    title: "Behind the Lens",
    category: "BEHIND THE SCENES",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&auto=format&fit=crop",
  },
];

const collaborations = [
  "Brand Campaigns",
  "Sponsored Content",
  "Product Photography",
  "Social Media Partnerships",
];

export default function CreatorPage() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [formSent, setFormSent] = useState(false);

  function handleContact(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);

    const name = String(form.get("name"));
    const email = String(form.get("email"));
    const brand = String(form.get("brand"));
    const type = String(form.get("type"));
    const message = String(form.get("message") || "");

    const subject = encodeURIComponent(`Collaboration enquiry - ${brand}`);

    const body = encodeURIComponent(
      `Hello Alex,

Name: ${name}
Email: ${email}
Brand: ${brand}
Collaboration Type: ${type}

Message:
${message}`
    );

    const emailAddress = "YOUR_EMAIL_ADDRESS";

    if (emailAddress === "YOUR_EMAIL_ADDRESS") {
      setFormSent(true);
      return;
    }

    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
    setFormSent(true);
  }

  return (
    <main className="creo-page">

      {/* DEMO BANNER */}
      <div className="creo-demo-banner">
        NEXORA STUDIO <span>/</span> CREATOR PORTFOLIO CONCEPT
      </div>

      {/* NAVBAR */}
      <header className="creo-navbar">
        <Link href="/#work" className="creo-logo">
          CREO<span>VIBE.</span>
        </Link>

        <nav className={`creo-nav ${mobileMenu ? "creo-nav-open" : ""}`}>
          <a href="#home" onClick={() => setMobileMenu(false)}>Home</a>
          <a href="#about" onClick={() => setMobileMenu(false)}>About</a>
          <a href="#content" onClick={() => setMobileMenu(false)}>Content</a>
          <a href="#collaborate" onClick={() => setMobileMenu(false)}>Collaborate</a>
        </nav>

        <a href="#contact" className="creo-nav-button">
          Let's Connect <ArrowUpRight size={16} />
        </a>

        <button
          className="creo-menu-toggle"
          onClick={() => setMobileMenu(!mobileMenu)}
          aria-label="Toggle menu"
        >
          {mobileMenu ? <X /> : <Menu />}
        </button>
      </header>

      {/* HERO */}
      <section className="creo-hero" id="home">
        <div className="creo-container creo-hero-grid">

          <div className="creo-hero-content">
            <div className="creo-hero-tag">
              <span /> CONTENT CREATOR & DIGITAL STORYTELLER
            </div>

            <h1>
              CREATING
              <br />
              <span>BEYOND</span>
              <br />
              THE ORDINARY.
            </h1>

            <p>
              I create visual stories, build meaningful connections
              and collaborate with brands that inspire the next generation.
            </p>

            <div className="creo-hero-actions">
              <a href="#content" className="creo-primary-button">
                Explore My Work <ArrowRight size={17} />
              </a>

              <a href="#contact" className="creo-secondary-button">
                Work With Me
              </a>
            </div>

            <div className="creo-social-links">
              <a href={creator.instagram} target="_blank" rel="noreferrer">
                <Camera size={18} />
              </a>
              <a href={creator.youtube} target="_blank" rel="noreferrer">
                <Play size={19} />
              </a>
                <span>FOLLOW THE JOURNEY</span>
            </div>
          </div>

          <div className="creo-hero-visual">
            <div className="creo-hero-image" />

            <div className="creo-image-label">
              <span>CREATIVE MIND.</span>
              <strong>LIMITLESS STORIES.</strong>
            </div>

            <div className="creo-image-index">01 / 04</div>
          </div>

        </div>

        <div className="creo-hero-bottom">
          <span>CREATIVITY</span>
          <span>AUTHENTICITY</span>
          <span>CONNECTION</span>
          <span>IMPACT</span>
        </div>
      </section>

      {/* STATS */}
      <section className="creo-stats">
        <div className="creo-container creo-stats-grid">
          {stats.map((stat) => (
            <div className="creo-stat" key={stat.label}>
              <h2>{stat.value}</h2>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
        <p className="creo-stats-note">
          Illustrative portfolio metrics — replace with verified creator analytics.
        </p>
      </section>

      {/* ABOUT */}
      <section className="creo-about" id="about">
        <div className="creo-container creo-about-grid">

          <div className="creo-about-image" />

          <div className="creo-about-content">
            <span className="creo-section-label">A LITTLE ABOUT ME</span>

            <h2>
              NOT JUST
              <br />
              CONTENT.
              <br />
              <span>IT'S A STORY.</span>
            </h2>

            <p>
              Hey, I'm Alex — a digital creator passionate about
              fashion, lifestyle and visual storytelling.
            </p>

            <p>
              My approach is simple: create content that feels
              authentic, connects with people and gives brands
              a meaningful way to communicate their story.
            </p>

            <div className="creo-about-tags">
              <span>Visual Storytelling</span>
              <span>Creative Direction</span>
              <span>Digital Culture</span>
            </div>

            <a href="#contact" className="creo-text-link">
              Let's create something <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="creo-content" id="content">
        <div className="creo-container">
          <div className="creo-content-heading">
            <div>
              <span className="creo-section-label">THE CREATIVE SPACE</span>
              <h2>
                SELECTED
                <br />
                <span>WORK.</span>
              </h2>
            </div>

            <p>
              A glimpse into the visual world I create —
              from everyday moments to carefully crafted stories.
            </p>
          </div>

          <div className="creo-content-grid">
            {content.map((item, index) => (
              <article className="creo-content-card" key={item.title}>
                <div
                  className="creo-content-image"
                  style={{ backgroundImage: `url("${item.image}")` }}
                >
                  <span className="creo-content-number">
                    0{index + 1}
                  </span>

                  <div className="creo-content-overlay">
                    <Play size={22} fill="currentColor" />
                  </div>
                </div>

                <div className="creo-content-details">
                  <span>{item.category}</span>
                  <h3>{item.title}</h3>
                </div>
              </article>
            ))}
          </div>

          <p className="creo-content-note">
            Sample creative concepts. These are portfolio previews,
            not published creator campaigns.
          </p>
        </div>
      </section>

      {/* CREATOR SERVICES */}
      <section className="creo-services">
        <div className="creo-container">
          <div className="creo-section-heading">
            <span className="creo-section-label">WHAT I BRING</span>
            <h2>
              LET'S MAKE
              <br />
              <span>AN IMPACT.</span>
            </h2>
          </div>

          <div className="creo-services-grid">
            <div>
              <Camera size={25} />
              <h3>Visual Content</h3>
              <p>Creative photography and visual storytelling for brands.</p>
            </div>

            <div>
              <Video size={25} />
              <h3>Video Campaigns</h3>
              <p>Engaging short-form videos and social media campaigns.</p>
            </div>

            <div>
              <Users size={25} />
              <h3>Brand Partnerships</h3>
              <p>Authentic partnerships built around shared audiences.</p>
            </div>

            <div>
              <Sparkles size={25} />
              <h3>Creative Direction</h3>
              <p>Concept development and creative campaign planning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* COLLABORATION */}
      <section className="creo-collaborate" id="collaborate">
        <div className="creo-container creo-collab-grid">

          <div className="creo-collab-content">
            <span className="creo-section-label">LET'S WORK TOGETHER</span>

            <h2>
              GOOD IDEAS.
              <br />
              <span>GREAT PARTNERSHIPS.</span>
            </h2>

            <p>
              Looking to introduce your brand to an engaged
              audience? Let's create something memorable together.
            </p>

            <div className="creo-collab-list">
              {collaborations.map((item) => (
                <div key={item}>
                  <CheckCircle2 size={17} />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="creo-collab-visual">
            <div className="creo-collab-image" />
            <span>LET'S CREATE SOMETHING DIFFERENT.</span>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="creo-contact" id="contact">
        <div className="creo-container creo-contact-grid">

          <div className="creo-contact-content">
            <span className="creo-section-label">HAVE A PROJECT IN MIND?</span>

            <h2>
              LET'S START
              <br />
              <span>A CONVERSATION.</span>
            </h2>

            <p>
              Have a collaboration idea or brand campaign?
              Send me a message and let's discuss it.
            </p>

            <div className="creo-contact-email">
              <Mail size={20} />
              <span>hello@example.com</span>
            </div>

            <div className="creo-contact-socials">
              <a href={creator.instagram} target="_blank" rel="noreferrer">
                Instagram <ArrowUpRight size={15} />
              </a>
              <a href={creator.youtube} target="_blank" rel="noreferrer">
                YouTube <ArrowUpRight size={15} />
              </a>
            </div>
          </div>

          <div className="creo-contact-form-card">
            {formSent ? (
              <div className="creo-form-success">
                <CheckCircle2 size={43} />
                <h3>Message prepared!</h3>
                <p>
                  This is a demonstration form. Connect a real email
                  address and backend to receive enquiries.
                </p>
                <button onClick={() => setFormSent(false)}>
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <>
                <h3>Collaboration Enquiry</h3>
                <p>Tell me about your project.</p>

                <form className="creo-form" onSubmit={handleContact}>
                  <label>
                    Your Name
                    <input
                      name="name"
                      placeholder="Enter your name"
                      required
                    />
                  </label>

                  <label>
                    Email Address
                    <input
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      required
                    />
                  </label>

                  <label>
                    Brand / Company
                    <input
                      name="brand"
                      placeholder="Your brand name"
                      required
                    />
                  </label>

                  <label>
                    Collaboration Type
                    <select name="type" defaultValue="" required>
                      <option value="" disabled>
                        Select collaboration
                      </option>
                      <option value="Sponsored Content">Sponsored Content</option>
                      <option value="Brand Campaign">Brand Campaign</option>
                      <option value="Product Photography">Product Photography</option>
                      <option value="Social Media Partnership">Social Media Partnership</option>
                      <option value="Other">Other</option>
                    </select>
                  </label>

                  <label>
                    Your Message
                    <textarea
                      name="message"
                      rows={3}
                      placeholder="Tell me about your idea..."
                    />
                  </label>

                  <button type="submit" className="creo-submit-button">
                    SEND ENQUIRY <ArrowRight size={17} />
                  </button>
                </form>
              </>
            )}
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="creo-final-cta">
        <div className="creo-container">
          <span className="creo-section-label">THE NEXT CHAPTER STARTS HERE</span>

          <h2>
            LET'S CREATE
            <br />
            <span>WHAT'S NEXT.</span>
          </h2>

          <a href="#contact" className="creo-primary-button">
            Start a Collaboration <ArrowUpRight size={17} />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="creo-footer">
        <div className="creo-container creo-footer-inner">
          <Link href="/#work" className="creo-logo">
            CREO<span>VIBE.</span>
          </Link>

          <p>Creating stories. Building connections.</p>

          <span>© 2026 CREOVIBE. Concept by NEXORA Studio.</span>
        </div>
      </footer>

    </main>
  );
}