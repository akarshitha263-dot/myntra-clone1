import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar({ search, setSearch }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav className="navbar">
      <div className="nav-top">
        <div className="nav-left">
          <Link to="/" className="nav-title-link" onClick={closeMenu}>
            <h1 className="nav-title">Myntra</h1>
          </Link>
        </div>

        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search for products, brands and more"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="nav-right">
          <div className="nav-icon-item">
            <span className="nav-icon">👤</span>
            <span className="nav-icon-label">Profile</span>
          </div>
          <div className="nav-icon-item">
            <span className="nav-icon">♡</span>
            <span className="nav-icon-label">Wishlist</span>
          </div>
          <div className="nav-icon-item">
            <span className="nav-icon">🛍️</span>
            <span className="nav-icon-label">Bag</span>
          </div>
        </div>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <NavLink to="/" className="nav-link" onClick={closeMenu} end>
          Home
        </NavLink>
        <NavLink to="/about" className="nav-link" onClick={closeMenu}>
          About Us
        </NavLink>
        <NavLink to="/contact" className="nav-link" onClick={closeMenu}>
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
