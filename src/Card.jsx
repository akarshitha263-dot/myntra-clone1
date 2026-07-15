import { useState } from "react";
import "./Card.css";

function Card({ name, brand, category, price, originalPrice, rating, logo }) {
  const [saved, setSaved] = useState(false);
  const discount = Math.round(((originalPrice - price) / originalPrice) * 100);

  return (
    <div className="card">
      <div className="card-image">
        <span className="brand-logo">{logo}</span>
        <button
          className={`save-btn ${saved ? "saved" : ""}`}
          onClick={() => setSaved(!saved)}
          aria-label="Save to wishlist"
        >
          {saved ? "♥" : "♡"}
        </button>
      </div>

      <div className="card-body">
        <p className="brand-name">{brand}</p>
        <h3 className="product-name">{name}</h3>
        <span className="category-tag">{category}</span>

        <div className="price-row">
          <span className="price">₹{price.toLocaleString("en-IN")}</span>
          <span className="original-price">
            ₹{originalPrice.toLocaleString("en-IN")}
          </span>
          <span className="discount">({discount}% OFF)</span>
        </div>

        <div className="rating-row">
          <span className="rating-badge">
            {rating} <span className="star">★</span>
          </span>
        </div>

        <button className="add-btn">ADD TO BAG</button>
      </div>
    </div>
  );
}

export default Card;
