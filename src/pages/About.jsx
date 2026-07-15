import "./StaticPage.css";

function About() {
  return (
    <div className="static-page">
      <div className="static-hero">
        <h1>About Us</h1>
        <p>Fashion for everyone, delivered with care.</p>
      </div>

      <div className="static-content">
        <section className="static-section">
          <h2>Who We Are</h2>
          <p>
            Myntra Clone is a demo shopping platform built to showcase modern
            web fashion retail. We bring together clothing, footwear and
            accessories from a wide range of brands, all in one simple and
            easy to use store.
          </p>
        </section>

        <section className="static-section">
          <h2>Our Mission</h2>
          <p>
            We want shopping to feel effortless. From browsing by category to
            checking out your favourite picks, our goal is to keep the
            experience clean, fast and enjoyable on any device, desktop or
            mobile.
          </p>
        </section>

        <div className="static-grid">
          <div className="static-card">
            <span className="static-icon">🚚</span>
            <h3>Fast Delivery</h3>
            <p>Quick and reliable shipping across the country.</p>
          </div>
          <div className="static-card">
            <span className="static-icon">🔄</span>
            <h3>Easy Returns</h3>
            <p>Hassle free return and exchange policy.</p>
          </div>
          <div className="static-card">
            <span className="static-icon">✅</span>
            <h3>Trusted Brands</h3>
            <p>Only genuine products from verified sellers.</p>
          </div>
          <div className="static-card">
            <span className="static-icon">💬</span>
            <h3>Support</h3>
            <p>Friendly customer support whenever you need us.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
