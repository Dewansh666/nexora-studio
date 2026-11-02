"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  MapPin,
  Phone,
  ShieldCheck,
  Star,
  Wrench,
  Zap,
  Paintbrush,
  Sparkles,
  Menu,
  X,
} from "lucide-react";

const services = [
  {
    title: "Home Cleaning",
    description: "Professional cleaning solutions for a fresher, cleaner home.",
    price: "From ₹499",
    icon: Sparkles,
  },
  {
    title: "Electrical Services",
    description: "Reliable electrical repairs, installations and maintenance.",
    price: "From ₹299",
    icon: Zap,
  },
  {
    title: "Plumbing Services",
    description: "Quick solutions for leaks, fittings and plumbing problems.",
    price: "From ₹399",
    icon: Wrench,
  },
  {
    title: "Interior Solutions",
    description: "Give your living space a fresh and thoughtful makeover.",
    price: "Request a quote",
    icon: Paintbrush,
  },
];

const benefits = [
  "Verified service professionals",
  "Transparent pricing",
  "Convenient appointment requests",
  "Customer-focused support",
];

const testimonials = [
  {
    name: "Aarav Sharma",
    location: "Sample customer · Your City",
    review:
      "The booking process was simple and the service experience was smooth.",
  },
  {
    name: "Meera Patel",
    location: "Sample customer · Your City",
    review:
      "A convenient way to find help for everyday home maintenance needs.",
  },
  {
    name: "Rohan Verma",
    location: "Sample customer · Your City",
    review:
      "Professional communication and a straightforward service enquiry process.",
  },
];

export default function LocalBusinessPage() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [formSent, setFormSent] = useState(false);

  function handleEnquiry(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);

    const name = String(form.get("name"));
    const phone = String(form.get("phone"));
    const service = String(form.get("service"));
    const message = String(form.get("message") || "");

    const whatsappNumber = "YOUR_WHATSAPP_NUMBER";

    const enquiry = `Hello LOCALY! I would like to enquire about your services.

Name: ${name}
Phone: ${phone}
Service: ${service}
Message: ${message}`;

    if (whatsappNumber === "YOUR_WHATSAPP_NUMBER") {
      setFormSent(true);
      return;
    }

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(enquiry)}`,
      "_blank"
    );

    setFormSent(true);
  }

  return (
    <main className="localy-page">
      {/* DEMO BANNER */}
      <div className="localy-demo-banner">
        NEXORA STUDIO <span>/</span> LOCALY BUSINESS WEBSITE CONCEPT
      </div>

      {/* NAVIGATION */}
      <header className="localy-navbar">
        <Link href="/#work" className="localy-logo">
          <span className="localy-logo-icon">
            <Wrench size={20} />
          </span>
          LOCALY<span className="localy-logo-dot">.</span>
        </Link>

        <nav className={`localy-nav ${mobileMenu ? "localy-nav-open" : ""}`}>
          <a href="#home" onClick={() => setMobileMenu(false)}>Home</a>
          <a href="#services" onClick={() => setMobileMenu(false)}>Services</a>
          <a href="#about" onClick={() => setMobileMenu(false)}>About Us</a>
          <a href="#reviews" onClick={() => setMobileMenu(false)}>Reviews</a>
          <a href="#contact" onClick={() => setMobileMenu(false)}>Contact</a>
        </nav>

        <a href="#contact" className="localy-nav-button">
          Get a Quote <ArrowUpRight size={16} />
        </a>

        <button
          className="localy-mobile-button"
          onClick={() => setMobileMenu(!mobileMenu)}
          aria-label="Toggle navigation"
        >
          {mobileMenu ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {/* HERO */}
      <section className="localy-hero" id="home">
        <div className="localy-hero-background" />

        <div className="localy-container localy-hero-grid">
          <div className="localy-hero-content">
            <div className="localy-eyebrow">
              <span /> YOUR LOCAL SERVICE PARTNER
            </div>

            <h1>
              Your home.
              <br />
              Your comfort.
              <br />
              <span>Our priority.</span>
            </h1>

            <p>
              From everyday repairs to home improvements,
              find convenient service solutions for the
              things that matter most.
            </p>

            <div className="localy-hero-actions">
              <a href="#services" className="localy-primary-button">
                Explore Services <ArrowRight size={17} />
              </a>

              <a href="#contact" className="localy-secondary-button">
                Request a Service
              </a>
            </div>

            <div className="localy-hero-trust">
              <ShieldCheck size={19} />
              <span>Convenient. Reliable. Customer-focused.</span>
            </div>
          </div>

          <div className="localy-hero-visual">
            <div className="localy-hero-photo" />

            <div className="localy-floating-card">
              <div className="localy-floating-icon">
                <CheckCircle2 size={22} />
              </div>
              <div>
                <strong>Service made simple</strong>
                <span>One enquiry. Multiple solutions.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="localy-trust-bar">
        <div className="localy-container localy-trust-grid">
          <div>
            <ShieldCheck size={22} />
            <span>Professional Service</span>
          </div>

          <div>
            <Clock size={22} />
            <span>Convenient Scheduling</span>
          </div>

          <div>
            <Star size={22} />
            <span>Customer Focused</span>
          </div>

          <div>
            <MapPin size={22} />
            <span>Local Service Coverage</span>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="localy-services localy-container" id="services">
        <div className="localy-section-heading">
          <span className="localy-section-label">WHAT WE DO</span>
          <h2>
            SERVICES THAT
            <br />
            <span>MAKE LIFE EASIER.</span>
          </h2>
          <p>
            Everyday solutions for your home, delivered through
            a simple and convenient service experience.
          </p>
        </div>

        <div className="localy-service-grid">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article className="localy-service-card" key={service.title}>
                <div className="localy-service-top">
                  <div className="localy-service-icon">
                    <Icon size={25} />
                  </div>
                  <span>0{index + 1}</span>
                </div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <div className="localy-service-footer">
                  <span>{service.price}</span>
                  <a
                    href="#contact"
                    aria-label={`Enquire about ${service.title}`}
                  >
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ABOUT */}
      <section className="localy-about" id="about">
        <div className="localy-container localy-about-grid">
          <div className="localy-about-visual">
            <div className="localy-about-photo" />
            <div className="localy-about-photo-caption">
              <span>THE LOCALY APPROACH</span>
              <strong>YOUR HOME, IN GOOD HANDS.</strong>
            </div>
          </div>

          <div className="localy-about-content">
            <span className="localy-section-label">WHY LOCALY?</span>

            <h2>
              GOOD SERVICE
              <br />
              STARTS WITH
              <br />
              <span>GOOD PEOPLE.</span>
            </h2>

            <p>
              Managing a home comes with enough responsibilities.
              Our goal is to make finding and requesting everyday
              home services simpler and more convenient.
            </p>

            <div className="localy-benefits">
              {benefits.map((benefit) => (
                <div key={benefit}>
                  <CheckCircle2 size={18} />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="localy-primary-button">
              Talk to Our Team <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="localy-process localy-container">
        <div className="localy-section-heading">
          <span className="localy-section-label">SIMPLE PROCESS</span>
          <h2>
            THREE STEPS.
            <br />
            <span>ONE EASY EXPERIENCE.</span>
          </h2>
        </div>

        <div className="localy-process-grid">
          <div className="localy-process-card">
            <span>01</span>
            <h3>Choose a Service</h3>
            <p>Explore the services and select what you need.</p>
          </div>

          <div className="localy-process-card">
            <span>02</span>
            <h3>Send an Enquiry</h3>
            <p>Share your requirements and contact information.</p>
          </div>

          <div className="localy-process-card">
            <span>03</span>
            <h3>Get Connected</h3>
            <p>Discuss scheduling and service details with the team.</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="localy-reviews" id="reviews">
        <div className="localy-container">
          <div className="localy-section-heading">
            <span className="localy-section-label">CUSTOMER STORIES</span>
            <h2>
              TRUST BUILT
              <br />
              <span>THROUGH SERVICE.</span>
            </h2>
          </div>

          <div className="localy-review-grid">
            {testimonials.map((review) => (
              <article className="localy-review-card" key={review.name}>
                <div className="localy-stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={14} fill="currentColor" />
                  ))}
                </div>

                <p>"{review.review}"</p>

                <div className="localy-review-author">
                  <div>{review.name.charAt(0)}</div>
                  <span>
                    <strong>{review.name}</strong>
                    <small>{review.location}</small>
                  </span>
                </div>
              </article>
            ))}
          </div>

          <p className="localy-review-disclaimer">
            Illustrative testimonials for this portfolio concept, not verified customer reviews.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="localy-contact" id="contact">
        <div className="localy-container localy-contact-grid">
          <div className="localy-contact-content">
            <span className="localy-section-label">LET'S GET STARTED</span>

            <h2>
              TELL US WHAT
              <br />
              <span>YOU NEED.</span>
            </h2>

            <p>
              Tell us a little about your requirements.
              Our team can help you discuss the right service.
            </p>

            <div className="localy-contact-details">
              <div>
                <Phone size={19} />
                <span>+91 XXXXX XXXXX</span>
              </div>

              <div>
                <MapPin size={19} />
                <span>Your City, India</span>
              </div>

              <div>
                <Clock size={19} />
                <span>Monday – Saturday, 9 AM – 7 PM</span>
              </div>
            </div>
          </div>

          <div className="localy-contact-form-card">
            {formSent ? (
              <div className="localy-form-success">
                <CheckCircle2 size={42} />
                <h3>Thank you!</h3>
                <p>
                  Your demo enquiry has been prepared.
                  Connect a real business WhatsApp number
                  to enable live enquiries.
                </p>
                <button onClick={() => setFormSent(false)}>
                  SEND ANOTHER ENQUIRY
                </button>
              </div>
            ) : (
              <>
                <h3>Request a Service</h3>
                <p>Fill in your details to get started.</p>

                <form
                  className="localy-form"
                  onSubmit={handleEnquiry}
                >
                  <label>
                    Your Name
                    <input
                      name="name"
                      placeholder="Enter your name"
                      required
                    />
                  </label>

                  <label>
                    Phone Number
                    <input
                      name="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      pattern="[0-9+\-\s]{8,15}"
                      required
                    />
                  </label>

                  <label>
                    Select Service
                    <select name="service" defaultValue="" required>
                      <option value="" disabled>
                        Choose a service
                      </option>
                      {services.map((service) => (
                        <option key={service.title} value={service.title}>
                          {service.title}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label>
                    Additional Details
                    <textarea
                      name="message"
                      rows={3}
                      placeholder="Tell us what you need..."
                    />
                  </label>

                  <button type="submit" className="localy-submit-button">
                    SEND ENQUIRY <ArrowRight size={17} />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="localy-cta">
        <div className="localy-container">
          <span className="localy-section-label">YOUR LOCAL SERVICE PARTNER</span>
          <h2>
            LET'S MAKE
            <br />
            <span>HOME EASIER.</span>
          </h2>

          <a href="#contact" className="localy-cta-button">
            Get Started <ArrowUpRight size={17} />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="localy-footer">
        <div className="localy-container localy-footer-inner">
          <Link href="/#work" className="localy-logo">
            <span className="localy-logo-icon">
              <Wrench size={18} />
            </span>
            LOCALY<span className="localy-logo-dot">.</span>
          </Link>

          <p>Local solutions. Better living.</p>

          <span>© 2026 LOCALY. Concept by NEXORA Studio.</span>
        </div>
      </footer>
    </main>
  );
}