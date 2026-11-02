import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Dumbbell,
  Flame,
  HeartPulse,
  Timer,
  Users,
  Zap,
  Check,
} from "lucide-react";

const programs = [
  {
    number: "01",
    title: "Strength Training",
    description: "Build strength, improve performance and develop a stronger physique.",
    icon: Dumbbell,
  },
  {
    number: "02",
    title: "Personal Training",
    description: "Get individual guidance with training built around your goals.",
    icon: Users,
  },
  {
    number: "03",
    title: "Fitness & Conditioning",
    description: "Improve stamina, mobility and overall physical performance.",
    icon: HeartPulse,
  },
];

const plans = [
  {
    name: "STARTER",
    price: "₹999",
    period: "/ month",
    description: "For people beginning their fitness journey.",
    features: ["Gym access", "Basic equipment access", "Locker facilities"],
    featured: false,
  },
  {
    name: "PRO",
    price: "₹1,499",
    period: "/ month",
    description: "For people ready to take training seriously.",
    features: [
      "Full gym access",
      "Group training sessions",
      "Fitness assessment",
      "Progress tracking",
    ],
    featured: true,
  },
  {
    name: "ELITE",
    price: "₹2,499",
    period: "/ month",
    description: "For people looking for a more personalised experience.",
    features: [
      "All Pro benefits",
      "Personal training sessions",
      "Individual fitness guidance",
      "Priority support",
    ],
    featured: false,
  },
];

export default function GymPage() {
  return (
    <main className="iron-page">
      <div className="iron-demo-banner">
        NEXORA STUDIO <span> / </span> IRONPULSE CONCEPT WEBSITE
      </div>

      {/* NAVIGATION */}
      <header className="iron-navbar">
        <Link href="/#work" className="iron-logo">
          <span>IRON</span>PULSE<span className="iron-dot">.</span>
        </Link>

        <nav className="iron-nav-links">
          <a href="#home">Home</a>
          <a href="#programs">Programs</a>
          <a href="#about">About</a>
          <a href="#membership">Membership</a>
        </nav>

        <a href="#contact" className="iron-nav-button">
          Join Now <ArrowUpRight size={16} />
        </a>
      </header>

      {/* HERO */}
      <section className="iron-hero" id="home">
        <div className="iron-hero-background" />

        <div className="iron-container iron-hero-content">
          <div className="iron-eyebrow">
            <span /> BUILT THROUGH DISCIPLINE
          </div>

          <h1>
            NO EXCUSES.
            <br />
            <span>JUST RESULTS.</span>
          </h1>

          <p>
            Train with purpose. Push your limits. Build a stronger
            version of yourself with a fitness experience designed
            around performance and consistency.
          </p>

          <div className="iron-hero-actions">
            <a href="#membership" className="iron-primary-button">
              Explore Membership <ArrowRight size={18} />
            </a>

            <a href="#programs" className="iron-outline-button">
              Explore Programs
            </a>
          </div>

          <div className="iron-hero-bottom">
            <span>STRENGTH</span>
            <span>DISCIPLINE</span>
            <span>PERFORMANCE</span>
          </div>
        </div>

        <div className="iron-vertical-text">TRAIN HARDER. BECOME STRONGER.</div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="iron-highlights">
        <div className="iron-container iron-highlight-grid">
          <div>
            <Dumbbell size={23} />
            <span>Modern Equipment</span>
          </div>
          <div>
            <Users size={23} />
            <span>Expert Guidance</span>
          </div>
          <div>
            <Zap size={23} />
            <span>Goal-Based Training</span>
          </div>
          <div>
            <Timer size={23} />
            <span>Flexible Memberships</span>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="iron-section iron-container" id="programs">
        <div className="iron-section-heading">
          <div>
            <span className="iron-label">WHAT WE OFFER</span>
            <h2>
              TRAIN WITH
              <br />
              <span>INTENTION.</span>
            </h2>
          </div>

          <p>
            Different goals require different approaches.
            Find a training program that works for you.
          </p>
        </div>

        <div className="iron-program-grid">
          {programs.map((program) => {
            const Icon = program.icon;

            return (
              <article className="iron-program-card" key={program.number}>
                <div className="iron-program-top">
                  <span>{program.number}</span>
                  <Icon size={27} />
                </div>

                <h3>{program.title}</h3>
                <p>{program.description}</p>

                <a href="#contact" aria-label={`Enquire about ${program.title}`}>
                  Learn More <ArrowUpRight size={17} />
                </a>
              </article>
            );
          })}
        </div>
      </section>

      {/* ABOUT */}
      <section className="iron-about" id="about">
        <div className="iron-container iron-about-grid">
          <div className="iron-about-image">
            <div className="iron-image-caption">
              <span>THE IRONPULSE MINDSET</span>
              <h3>DISCIPLINE OVER MOTIVATION.</h3>
            </div>
          </div>

          <div className="iron-about-content">
            <span className="iron-label">MORE THAN A GYM</span>

            <h2>
              STRONGER
              <br />
              EVERY <span>DAY.</span>
            </h2>

            <p>
              Fitness is not about overnight transformations.
              It's about showing up, working consistently and
              making progress one session at a time.
            </p>

            <div className="iron-about-points">
              <div><Check size={17} /> Training for every experience level</div>
              <div><Check size={17} /> Structured fitness programs</div>
              <div><Check size={17} /> A supportive training environment</div>
            </div>

            <a href="#membership" className="iron-primary-button">
              Find Your Plan <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* MEMBERSHIP */}
      <section className="iron-section iron-container" id="membership">
        <div className="iron-section-heading iron-centered">
          <div>
            <span className="iron-label">MEMBERSHIP OPTIONS</span>
            <h2>
              INVEST IN
              <br />
              <span>YOURSELF.</span>
            </h2>
          </div>

          <p>
            Choose a membership that fits your goals.
            Sample pricing is shown for demonstration.
          </p>
        </div>

        <div className="iron-plan-grid">
          {plans.map((plan) => (
            <article
              className={`iron-plan-card ${plan.featured ? "iron-featured-plan" : ""}`}
              key={plan.name}
            >
              {plan.featured && (
                <span className="iron-popular">MOST POPULAR</span>
              )}

              <span className="iron-plan-name">{plan.name}</span>

              <h3>
                {plan.price}
                <small>{plan.period}</small>
              </h3>

              <p>{plan.description}</p>

              <div className="iron-plan-features">
                {plan.features.map((feature) => (
                  <div key={feature}>
                    <Check size={16} /> {feature}
                  </div>
                ))}
              </div>

              <a href="#contact" className="iron-plan-button">
                Choose Plan <ArrowRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="iron-cta" id="contact">
        <div className="iron-container">
          <Flame size={34} />
          <span className="iron-label">YOUR NEXT CHAPTER STARTS HERE</span>

          <h2>
            STOP WAITING.
            <br />
            <span>START TRAINING.</span>
          </h2>

          <p>
            Take the first step towards your fitness goals.
            Enquire about memberships and training options.
          </p>

          <a href="mailto:YOUR_EMAIL_HERE" className="iron-primary-button">
            Get Started <ArrowUpRight size={18} />
          </a>

          <small>Sample gym contact details — customise for the actual business.</small>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="iron-footer">
        <div className="iron-container iron-footer-inner">
          <Link href="/#work" className="iron-logo">
            <span>IRON</span>PULSE<span className="iron-dot">.</span>
          </Link>

          <p>Built on discipline. Driven by progress.</p>

          <div className="iron-social">
  <a href="#contact" aria-label="Social media">
    <ArrowUpRight size={19} />
  </a>
</div>

          <span>© 2026 IronPulse. Concept by NEXORA Studio.</span>
        </div>
      </footer>
    </main>
  );
}