import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import './Header.css'
export default function Header({ onSearch, cartCount }) {
    const [query, setQuery] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim()) {
            onSearch(query.trim());
        }
    };

    return (
        <>
        {/* <div style={{ background: "yellow", padding: "1rem" }}>Header Test</div>; */}
        <div className="header-extras">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search books..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div className="extras-buttons">
        <button>Login</button>
        <button>Register</button>
        <div className="cart-icon">
          <FaShoppingCart size={22} />
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </div>
      </div>
    </div>
</>
    )
}
