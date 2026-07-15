import { useState } from "react";
import Card from "../Card.jsx";
import products from "../data.js";

const categories = ["All", "Men", "Women", "Kids", "Footwear", "Accessories"];

function Home({ search }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = products.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.brand.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || p.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <div className="category-bar">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-pill ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="container">
        {filtered.length > 0 ? (
          filtered.map((p) => <Card key={p.id} {...p} />)
        ) : (
          <p className="no-result">No products found.</p>
        )}
      </div>
    </>
  );
}

export default Home;
