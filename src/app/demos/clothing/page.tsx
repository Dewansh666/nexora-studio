"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  ShoppingBag,
  Menu,
  X,
  Plus,
  Minus,
  Check,
} from "lucide-react";

type Product = {
  id: number;
  name: string;
  category: "Men" | "Women";
  price: number;
  oldPrice: number;
  image: string;
  tag: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Classic Oversized Shirt",
    category: "Men",
    price: 1499,
    oldPrice: 1999,
    image:
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=700&auto=format&fit=crop",
    tag: "BESTSELLER",
  },
  {
    id: 2,
    name: "Minimal Summer Dress",
    category: "Women",
    price: 1899,
    oldPrice: 2499,
    image:
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=700&auto=format&fit=crop",
    tag: "NEW ARRIVAL",
  },
  {
    id: 3,
    name: "Essential Beige T-Shirt",
    category: "Men",
    price: 899,
    oldPrice: 1199,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=700&auto=format&fit=crop",
    tag: "POPULAR",
  },
  {
    id: 4,
    name: "Everyday Elegance",
    category: "Women",
    price: 2199,
    oldPrice: 2799,
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=700&auto=format&fit=crop",
    tag: "NEW ARRIVAL",
  },
  {
    id: 5,
    name: "Premium Linen Shirt",
    category: "Men",
    price: 1699,
    oldPrice: 2199,
    image:
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=700&auto=format&fit=crop",
    tag: "TRENDING",
  },
  {
    id: 6,
    name: "Modern Neutral Outfit",
    category: "Women",
    price: 2499,
    oldPrice: 3199,
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=700&auto=format&fit=crop",
    tag: "BESTSELLER",
  },
];

export default function ClothingPage() {
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState<Record<number, number>>({});
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [addedProduct, setAddedProduct] = useState<number | null>(null);

  const filteredProducts = useMemo(
    () =>
      category === "All"
        ? products
        : products.filter((product) => product.category === category),
    [category]
  );

  const cartItems = products.filter((product) => cart[product.id] > 0);

  const cartCount = Object.values(cart).reduce(
    (total, quantity) => total + quantity,
    0
  );

  const cartTotal = cartItems.reduce(
    (total, product) => total + product.price * cart[product.id],
    0
  );

  function addToCart(id: number) {
    setCart((previous) => ({
      ...previous,
      [id]: (previous[id] || 0) + 1,
    }));

    setAddedProduct(id);
    window.setTimeout(() => setAddedProduct(null), 1200);
  }

  function changeQuantity(id: number, amount: number) {
    setCart((previous) => {
      const nextQuantity = (previous[id] || 0) + amount;
      const updated = { ...previous };

      if (nextQuantity <= 0) {
        delete updated[id];
      } else {
        updated[id] = nextQuantity;
      }

      return updated;
    });
  }

  function orderOnWhatsApp() {
    const phone = "YOUR_WHATSAPP_NUMBER";

    const message = cartItems
      .map(
        (product) =>
          `${product.name} x ${cart[product.id]} - ₹${product.price * cart[product.id]}`
      )
      .join("\n");

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(
      `Hello VELORA! I would like to enquire about these products:\n\n${message}\n\nTotal: ₹${cartTotal}`
    )}`;

    window.open(url, "_blank");
  }

  return (
    <main className="velora-page">
      {/* ANNOUNCEMENT */}
      <div className="velora-announcement">
        COMPLIMENTARY SHIPPING ON ORDERS ABOVE ₹2,999
      </div>

      {/* NAVBAR */}
      <header className="velora-navbar">
        <button
          className="velora-mobile-toggle"
          onClick={() => setMobileMenu(!mobileMenu)}
          aria-label="Toggle navigation"
        >
          {mobileMenu ? <X /> : <Menu />}
        </button>

        <nav className={`velora-nav-left ${mobileMenu ? "is-open" : ""}`}>
          <a href="#home" onClick={() => setMobileMenu(false)}>Home</a>
          <a href="#collection" onClick={() => setMobileMenu(false)}>Collection</a>
          <a href="#story" onClick={() => setMobileMenu(false)}>Our Story</a>
        </nav>

        <Link href="/#work" className="velora-logo">
          VELORA<span>.</span>
        </Link>

        <button
          className="velora-cart-button"
          onClick={() => setCartOpen(true)}
          aria-label="Open shopping cart"
        >
          <ShoppingBag size={19} />
          <span>Bag ({cartCount})</span>
        </button>
      </header>

      {/* HERO */}
      <section className="velora-hero" id="home">
        <div className="velora-hero-image" />

        <div className="velora-hero-content">
          <span className="velora-overline">
            THE NEW WAY OF EVERYDAY STYLE
          </span>

          <h1>
            LESS, BUT
            <br />
            <em>BETTER.</em>
          </h1>

          <p>
            Thoughtfully selected essentials.
            Timeless silhouettes. A wardrobe
            that speaks without saying too much.
          </p>

          <a href="#collection" className="velora-primary-button">
            Explore Collection <ArrowRight size={17} />
          </a>
        </div>

        <div className="velora-hero-caption">
          COLLECTION 2026 — EVERYDAY ESSENTIALS
        </div>
      </section>

      {/* BRAND STRIP */}
      <section className="velora-brand-strip">
        <span>TIMELESS DESIGN</span>
        <span>✳</span>
        <span>THOUGHTFUL DETAILS</span>
        <span>✳</span>
        <span>EVERYDAY LUXURY</span>
      </section>

      {/* COLLECTION */}
      <section className="velora-collection" id="collection">
        <div className="velora-container">
          <div className="velora-collection-heading">
            <div>
              <span className="velora-overline">CURATED FOR YOU</span>
              <h2>THE COLLECTION</h2>
              <p>Pieces that make everyday dressing effortless.</p>
            </div>

            <div className="velora-filters">
              {["All", "Men", "Women"].map((item) => (
                <button
                  key={item}
                  onClick={() => setCategory(item)}
                  className={category === item ? "active" : ""}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="velora-product-grid">
            {filteredProducts.map((product) => (
              <article className="velora-product-card" key={product.id}>
                <div
                  className="velora-product-image"
                  style={{ backgroundImage: `url("${product.image}")` }}
                >
                  <span className="velora-product-tag">{product.tag}</span>

                  <button
                    className="velora-quick-add"
                    onClick={() => addToCart(product.id)}
                  >
                    {addedProduct === product.id ? (
                      <>
                        <Check size={15} /> ADDED
                      </>
                    ) : (
                      <>
                        <Plus size={15} /> QUICK ADD
                      </>
                    )}
                  </button>
                </div>

                <div className="velora-product-details">
                  <div>
                    <span className="velora-product-category">
                      {product.category}
                    </span>
                    <h3>{product.name}</h3>
                  </div>

                  <div className="velora-product-price">
                    <strong>₹{product.price.toLocaleString("en-IN")}</strong>
                    <del>₹{product.oldPrice.toLocaleString("en-IN")}</del>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="velora-view-all">
            <span>SHOWING {filteredProducts.length} CURATED PIECES</span>
          </div>
        </div>
      </section>

      {/* BRAND STORY */}
      <section className="velora-story" id="story">
        <div className="velora-story-image" />

        <div className="velora-story-content">
          <span className="velora-overline">THE VELORA PHILOSOPHY</span>

          <h2>
            STYLE IS
            <br />
            <em>SIMPLICITY.</em>
          </h2>

          <p>
            We believe great style doesn't need to be complicated.
            VELORA is a concept built around timeless essentials,
            thoughtful design and effortless everyday dressing.
          </p>

          <a href="#collection" className="velora-text-link">
            Discover the collection <ArrowUpRight size={17} />
          </a>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="velora-newsletter">
        <span className="velora-overline">STAY IN THE LOOP</span>
        <h2>A LITTLE MORE VELORA.</h2>
        <p>
          Get updates about new collections, launches and style inspiration.
        </p>

        <form
          className="velora-newsletter-form"
          onSubmit={(event) => {
            event.preventDefault();
            alert("Thank you for your interest! Newsletter integration is coming soon.");
          }}
        >
          <input
            type="email"
            placeholder="Enter your email address"
            required
          />
          <button type="submit" aria-label="Subscribe">
            JOIN <ArrowRight size={17} />
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="velora-footer">
        <div className="velora-container velora-footer-inner">
          <Link href="/#work" className="velora-logo">
            VELORA<span>.</span>
          </Link>

          <p>Everyday style. Timeless expression.</p>

          <span>© 2026 VELORA. Concept by NEXORA Studio.</span>
        </div>
      </footer>

      {/* CART DRAWER */}
      {cartOpen && (
        <div
          className="velora-cart-backdrop"
          onClick={() => setCartOpen(false)}
        >
          <aside
            className="velora-cart-drawer"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="velora-cart-heading">
              <div>
                <span className="velora-overline">YOUR SELECTION</span>
                <h2>Shopping Bag ({cartCount})</h2>
              </div>

              <button
                onClick={() => setCartOpen(false)}
                aria-label="Close cart"
              >
                <X size={22} />
              </button>
            </div>

            {cartItems.length === 0 ? (
              <div className="velora-empty-cart">
                <ShoppingBag size={35} />
                <h3>Your bag is empty.</h3>
                <p>Explore the collection and find your next favourite piece.</p>
                <button onClick={() => setCartOpen(false)}>
                  CONTINUE SHOPPING
                </button>
              </div>
            ) : (
              <>
                <div className="velora-cart-items">
                  {cartItems.map((product) => (
                    <div className="velora-cart-item" key={product.id}>
                      <div
                        className="velora-cart-image"
                        style={{ backgroundImage: `url("${product.image}")` }}
                      />

                      <div className="velora-cart-item-info">
                        <h3>{product.name}</h3>
                        <strong>₹{product.price.toLocaleString("en-IN")}</strong>

                        <div className="velora-quantity">
                          <button
                            onClick={() => changeQuantity(product.id, -1)}
                            aria-label="Decrease quantity"
                          >
                            <Minus size={13} />
                          </button>

                          <span>{cart[product.id]}</span>

                          <button
                            onClick={() => changeQuantity(product.id, 1)}
                            aria-label="Increase quantity"
                          >
                            <Plus size={13} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="velora-cart-bottom">
                  <div>
                    <span>Subtotal</span>
                    <strong>₹{cartTotal.toLocaleString("en-IN")}</strong>
                  </div>

                  <p>Shipping and other charges can be confirmed during order enquiry.</p>

                  <button
                    className="velora-checkout-button"
                    onClick={orderOnWhatsApp}
                  >
                    ENQUIRE ON WHATSAPP <ArrowUpRight size={17} />
                  </button>
                </div>
              </>
            )}
          </aside>
        </div>
      )}
    </main>
  );
}