
"use client";

import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";

const WHATSAPP_NUMBER = "YOUR_WHATSAPP_NUMBER";

export default function ProjectEnquiry() {
  const [submitted, setSubmitted] = useState(false);
  const [connectionMissing, setConnectionMissing] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);

    const name = String(form.get("name"));
    const business = String(form.get("business"));
    const category = String(form.get("category"));
    const website = String(form.get("website"));
    const budget = String(form.get("budget") || "Not decided");
    const contact = String(form.get("contact"));
    const requirements = String(form.get("requirements") || "");

    const message = `Hello NEXORA Studio! I would like to discuss a website project.

Name: ${name}
Business: ${business}
Category: ${category}
Website required: ${website}
Budget: ${budget}
Contact: ${contact}

Requirements:
${requirements}`;

    if (WHATSAPP_NUMBER === "YOUR_WHATSAPP_NUMBER") {
      setConnectionMissing(true);
      return;
    }

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
    setConnectionMissing(false);
  }

  return (
    <div className="nexora-enquiry">
      {submitted ? (
        <div className="nexora-enquiry-success">
          <CheckCircle2 size={45} />
          <h3>Enquiry prepared!</h3>
          <p>
            Your WhatsApp enquiry has been opened.
            Send the message to contact NEXORA Studio.
          </p>
          <button onClick={() => setSubmitted(false)}>
            SEND ANOTHER ENQUIRY
          </button>
        </div>
      ) : (
        <>
          <div className="nexora-enquiry-heading">
            <span className="section-label">START A PROJECT</span>
            <h3>Tell us about your idea.</h3>
            <p>
              Share a few details about your business and
              the website you want to build.
            </p>
          </div>

          <form
            className="nexora-enquiry-form"
            onSubmit={handleSubmit}
          >
            <div className="nexora-form-row">
              <label>
                Your Name *
                <input
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </label>

              <label>
                Business Name *
                <input
                  name="business"
                  placeholder="Your business name"
                  required
                />
              </label>
            </div>

            <label>
              Business Category *
              <select name="category" defaultValue="" required>
                <option value="" disabled>
                  Select your industry
                </option>
                <option>Coaching Institute</option>
                <option>Gym / Fitness</option>
                <option>Clothing Store</option>
                <option>Restaurant / Cafe</option>
                <option>Local Business</option>
                <option>Content Creator</option>
                <option>Other</option>
              </select>
            </label>

            <label>
              What type of website do you need? *
              <select name="website" defaultValue="" required>
                <option value="" disabled>
                  Select website type
                </option>
                <option>Business Website</option>
                <option>Landing Page</option>
                <option>E-commerce Website</option>
                <option>Portfolio Website</option>
                <option>Custom Web Application</option>
                <option>Not Sure Yet</option>
              </select>
            </label>

            <label>
              Estimated Budget (Optional)
              <select name="budget" defaultValue="Not decided">
                <option value="Not decided">Not decided yet</option>
                <option value="Under ₹2,000">Under ₹2,000</option>
                <option value="₹2,000 – ₹5,000">₹2,000 – ₹5,000</option>
                <option value="₹5,000 – ₹10,000">₹5,000 – ₹10,000</option>
                <option value="₹10,000+">₹10,000+</option>
              </select>
            </label>

            <label>
              WhatsApp Number or Email *
              <input
                name="contact"
                placeholder="How can we reach you?"
                required
              />
            </label>

            <label>
              Tell us about your requirements
              <textarea
                name="requirements"
                rows={4}
                placeholder="Describe your business and what you want your website to do..."
              />
            </label>

            {connectionMissing && (
              <p className="nexora-form-warning">
                The enquiry form is ready, but WhatsApp
                isn't connected yet. Add your business
                WhatsApp number to enable submissions.
              </p>
            )}

            <button type="submit" className="nexora-enquiry-submit">
              Send Project Enquiry
              <ArrowRight size={18} />
            </button>

            <p className="nexora-form-privacy">
              Your details will only be used to discuss your project.
            </p>
          </form>
        </>
      )}
    </div>
  );
}
