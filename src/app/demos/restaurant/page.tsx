"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Clock,
  MapPin,
  Phone,
  Utensils,
  X,
  CheckCircle2,
} from "lucide-react";

const menuItems = [
  {
    id: 1,
    name: "Truffle Mushroom Pasta",
    category: "MAIN COURSE",
    type: "Main Course",
    price: 449,
    description: "Creamy mushroom sauce, parmesan and fresh herbs.",
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=700&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Classic Margherita",
    category: "PIZZA",
    type: "Pizza",
    price: 399,
    description: "Fresh mozzarella, basil and signature tomato sauce.",
    image:
      "https://images.unsplash.com/photo-1579751626657-72bc17010498?w=700&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Signature Burger",
    category: "MAIN COURSE",
    type: "Main Course",
    price: 349,
    description: "Grilled patty, fresh vegetables and house sauce.",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=700&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Chocolate Dessert",
    category: "DESSERT",
    type: "Dessert",
    price: 249,
    description: "Rich chocolate, smooth cream and a delicate finish.",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=700&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Fresh Garden Salad",
    category: "STARTER",
    type: "Starter",
    price: 279,
    description: "Seasonal greens, cherry tomatoes and house dressing.",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=700&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Cold Coffee",
    category: "BEVERAGE",
    type: "Beverage",
    price: 199,
    description: "Freshly brewed coffee served chilled.",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=700&auto=format&fit=crop",
  },
];

const filters = ["All", "Starter", "Main Course", "Pizza", "Dessert", "Beverage"];

export default function RestaurantPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [reservationOpen, setReservationOpen] = useState(false);
  const [reservationSent, setReservationSent] = useState(false);

  const filteredItems =
    activeFilter === "All"
      ? menuItems
      : menuItems.filter((item) => item.type === activeFilter);

  function handleReservation(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);

    const name = String(form.get("name"));
    const phone = String(form.get("phone"));
    const date = String(form.get("date"));
    const time = String(form.get("time"));
    const guests = String(form.get("guests"));

    const message = `Hello SAVOR! I would like to request a table reservation.

Name: ${name}
Phone: ${phone}
Date: ${date}
Time: ${time}
Guests: ${guests}`;

    const whatsappNumber = "YOUR_WHATSAPP_NUMBER";

    if (whatsappNumber === "YOUR_WHATSAPP_NUMBER") {
      setReservationSent(true);
      return;
    }

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    setReservationSent(true);
  }

  return (
    <main className="savor-page">
      {/* DEMO NOTICE */}
      <div className="savor-demo-banner">
        NEXORA STUDIO <span> / </span> SAVOR RESTAURANT CONCEPT
      </div>

      {/* NAVBAR */}
      <header className="savor-navbar">
        <Link href="/#work" className="savor-logo">
          SAVOR<span>.</span>
        </Link>

        <nav className="savor-nav">
          <a href="#home">Home</a>
          <a href="#story">Our Story</a>
          <a href="#menu">Menu</a>
          <a href="#visit">Visit Us</a>
        </nav>

        <button
          className="savor-nav-button"
          onClick={() => {
            setReservationSent(false);
            setReservationOpen(true);
          }}
        >
          Reserve a Table <ArrowUpRight size={16} />
        </button>
      </header>

      {/* HERO */}
      <section className="savor-hero" id="home">
        <div className="savor-hero-image" />

        <div className="savor-hero-content savor-container">
          <span className="savor-overline">
            A PLACE TO GATHER. A REASON TO STAY.
          </span>

          <h1>
            GOOD FOOD.
            <br />
            <em>GREAT MOMENTS.</em>
          </h1>

          <p>
            Thoughtfully prepared dishes, carefully selected ingredients
            and an atmosphere made for unforgettable moments.
          </p>

          <div className="savor-hero-actions">
            <a href="#menu" className="savor-primary-button">
              Explore Our Menu <ArrowRight size={17} />
            </a>

            <button
              className="savor-outline-button"
              onClick={() => {
                setReservationSent(false);
                setReservationOpen(true);
              }}
            >
              Reserve a Table
            </button>
          </div>
        </div>

        <div className="savor-hero-bottom">
          <span>CRAFTED WITH CARE</span>
          <span>FRESH INGREDIENTS</span>
          <span>MADE TO BE SHARED</span>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="savor-intro savor-container" id="story">
        <div className="savor-intro-label">
          <span className="savor-overline">WELCOME TO SAVOR</span>
          <span className="savor-intro-number">EST. 2026</span>
        </div>

        <h2>
          More than a meal.
          <br />
          <em>It's an experience.</em>
        </h2>

        <p>
          We believe the best memories are often made around a table.
          SAVOR brings together thoughtfully prepared food, welcoming
          hospitality and an atmosphere worth returning to.
        </p>

        <a href="#visit" className="savor-text-link">
          Discover our story <ArrowUpRight size={16} />
        </a>
      </section>

      {/* EXPERIENCE */}
      <section className="savor-experience">
        <div className="savor-experience-image" />

        <div className="savor-experience-content">
          <span className="savor-overline">THE SAVOR EXPERIENCE</span>

          <h2>
            MADE WITH
            <br />
            <em>INTENTION.</em>
          </h2>

          <p>
            Every detail matters. From the first ingredient to the final
            presentation, we believe good food deserves thoughtful care.
          </p>

          <div className="savor-experience-points">
            <div>
              <span>01</span>
              Fresh Ingredients
            </div>
            <div>
              <span>02</span>
              Thoughtful Preparation
            </div>
            <div>
              <span>03</span>
              Warm Hospitality
            </div>
          </div>
        </div>
      </section>

      {/* MENU */}
      <section className="savor-menu savor-container" id="menu">
        <div className="savor-section-heading">
          <span className="savor-overline">A TASTE OF SAVOR</span>
          <h2>OUR <em>MENU.</em></h2>
          <p>
            A selection of signature dishes made to be enjoyed.
          </p>
        </div>

        <div className="savor-filters">
          {filters.map((filter) => (
            <button
              key={filter}
              className={activeFilter === filter ? "active" : ""}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="savor-menu-grid">
          {filteredItems.map((item) => (
            <article className="savor-menu-card" key={item.id}>
              <div
                className="savor-menu-image"
                style={{ backgroundImage: `url("${item.image}")` }}
              >
                <span>{item.category}</span>
              </div>

              <div className="savor-menu-details">
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>

                <strong>₹{item.price}</strong>
              </div>
            </article>
          ))}
        </div>

        <p className="savor-menu-note">
          Sample menu and prices for demonstration purposes.
        </p>
      </section>

      {/* GALLERY */}
      <section className="savor-gallery">
        <div className="savor-gallery-heading">
          <span className="savor-overline">A FEAST FOR THE EYES</span>
          <h2>THE ART OF <em>DINING.</em></h2>
        </div>

        <div className="savor-gallery-grid">
          <div className="savor-gallery-image gallery-one" />
          <div className="savor-gallery-image gallery-two" />
          <div className="savor-gallery-image gallery-three" />
          <div className="savor-gallery-image gallery-four" />
        </div>
      </section>

      {/* VISIT */}
      <section className="savor-visit savor-container" id="visit">
        <div className="savor-visit-content">
          <span className="savor-overline">COME ON IN</span>
          <h2>
            YOUR TABLE
            <br />
            <em>IS WAITING.</em>
          </h2>

          <p>
            Join us for a relaxed lunch, an evening with friends
            or a special occasion worth celebrating.
          </p>

          <div className="savor-visit-details">
            <div>
              <MapPin size={19} />
              <span>123 Sample Street, Your City, India</span>
            </div>

            <div>
              <Clock size={19} />
              <span>Monday – Sunday · 11 AM – 11 PM</span>
            </div>

            <div>
              <Phone size={19} />
              <span>+91 XXXXX XXXXX</span>
            </div>
          </div>

          <button
            className="savor-primary-button"
            onClick={() => {
              setReservationSent(false);
              setReservationOpen(true);
            }}
          >
            Book Your Table <ArrowRight size={17} />
          </button>
        </div>

        <div className="savor-visit-image" />
      </section>

      {/* CTA */}
      <section className="savor-cta">
        <div className="savor-container">
          <Utensils size={29} />
          <span className="savor-overline">GOOD FOOD BRINGS US TOGETHER</span>
          <h2>
            MAKE ROOM FOR
            <br />
            <em>GREAT MOMENTS.</em>
          </h2>

          <button
            className="savor-light-button"
            onClick={() => {
              setReservationSent(false);
              setReservationOpen(true);
            }}
          >
            Reserve Your Experience <ArrowUpRight size={17} />
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="savor-footer">
        <div className="savor-container savor-footer-inner">
          <Link href="/#work" className="savor-logo">
            SAVOR<span>.</span>
          </Link>

          <p>Good food. Great moments.</p>

          <span>© 2026 SAVOR. Concept by NEXORA Studio.</span>
        </div>
      </footer>

      {/* RESERVATION MODAL */}
      {reservationOpen && (
        <div
          className="savor-modal-backdrop"
          onClick={() => setReservationOpen(false)}
        >
          <div
            className="savor-reservation-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="savor-modal-close"
              onClick={() => setReservationOpen(false)}
              aria-label="Close reservation form"
            >
              <X size={22} />
            </button>

            {reservationSent ? (
              <div className="savor-reservation-success">
                <CheckCircle2 size={43} />
                <h2>Thank you!</h2>
                <p>
                  Your demo reservation enquiry has been prepared.
                  Connect a real WhatsApp number to enable live enquiries.
                </p>
                <button onClick={() => setReservationOpen(false)}>
                  CLOSE
                </button>
              </div>
            ) : (
              <>
                <span className="savor-overline">PLAN YOUR VISIT</span>
                <h2>Reserve a Table</h2>
                <p className="savor-modal-description">
                  Share your details and preferred dining time.
                </p>

                <form
                  className="savor-reservation-form"
                  onSubmit={handleReservation}
                >
                  <label>
                    Full Name
                    <input name="name" placeholder="Your name" required />
                  </label>

                  <label>
                    Phone Number
                    <input
                      name="phone"
                      type="tel"
                      placeholder="Your phone number"
                      pattern="[0-9+\-\s]{8,15}"
                      required
                    />
                  </label>

                  <div className="savor-form-row">
                    <label>
                      Date
                      <input
                        name="date"
                        type="date"
                        min={new Date().toLocaleDateString("en-CA")}
                        required
                      />
                    </label>

                    <label>
                      Time
                      <select name="time" defaultValue="19:00" required>
                        <option value="12:00">12:00 PM</option>
                        <option value="13:00">1:00 PM</option>
                        <option value="14:00">2:00 PM</option>
                        <option value="18:00">6:00 PM</option>
                        <option value="19:00">7:00 PM</option>
                        <option value="20:00">8:00 PM</option>
                        <option value="21:00">9:00 PM</option>
                      </select>
                    </label>
                  </div>

                  <label>
                    Number of Guests
                    <select name="guests" defaultValue="2" required>
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5">5 Guests</option>
                      <option value="6">6 Guests</option>
                    </select>
                  </label>

                  <button type="submit" className="savor-submit-button">
                    SEND RESERVATION ENQUIRY <ArrowRight size={17} />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </main>
  );
}