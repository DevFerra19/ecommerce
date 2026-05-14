import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import {
  FiMenu,
  FiSearch,
  FiHeart,
  FiShoppingBag,
  FiUser,
  FiX,
} from "react-icons/fi";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to close mobile menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container top-bar-container">
          <div className="top-bar-left">
            {/* <Link to="/" className="brand-name" onClick={closeMenu}>
              NOVA
            </Link> */}
            <div className="top-links">
              <a href="#">Find a Store</a>
              <a href="#">Help</a>
              <a href="#">Join Us</a>
            </div>
          </div>

          <Link to="/account" className="sign-in-link" onClick={closeMenu}>
            <FiUser className="nav-icon" />
            <span>Sign In</span>
          </Link>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="main-nav">
        <div className="container nav-container">
          {/* LEFT */}
          <div className="nav-left">
            <button
              className="menu-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FiX /> : <FiMenu />}
            </button>

            <Link to="/" className="logo" onClick={closeMenu}>
              𝖋𝖊𝖗𝖗𝖆
            </Link>

            <div className="search-box">
              <FiSearch />
              <span>Search</span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="nav-right">
            <nav
              className="nav-menu"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "42px",
                margin: "0 auto",
              }}
            >
              <NavLink
                to="/shop"
                onClick={closeMenu}
                style={({ isActive }) => ({
                  position: "relative",
                  textDecoration: "none",
                  color: isActive ? "#10B981" : "#111827",
                  fontWeight: "500",
                  paddingBottom: "5px",
                })}
                className="nav-link"
              >
                Shop
              </NavLink>

              <NavLink
                to="/men"
                onClick={closeMenu}
                style={({ isActive }) => ({
                  position: "relative",
                  textDecoration: "none",
                  color: isActive ? "#10B981" : "#111827",
                  fontWeight: "500",
                  paddingBottom: "5px",
                })}
                className="nav-link"
              >
                Men
              </NavLink>

              <NavLink
                to="/women"
                onClick={closeMenu}
                style={({ isActive }) => ({
                  position: "relative",
                  textDecoration: "none",
                  color: isActive ? "#10B981" : "#111827",
                  fontWeight: "500",
                  paddingBottom: "5px",
                })}
                className="nav-link"
              >
                Women
              </NavLink>

              <NavLink
                to="/about"
                onClick={closeMenu}
                style={({ isActive }) => ({
                  position: "relative",
                  textDecoration: "none",
                  color: isActive ? "#10B981" : "#111827",
                  fontWeight: "500",
                  paddingBottom: "5px",
                })}
                className="nav-link"
              >
                About
              </NavLink>
            </nav>

            <FiHeart className="nav-icon" />

            <Link to="/cart" className="cart-link" onClick={closeMenu}>
              <FiShoppingBag className="nav-icon" />
              <span className="cart-count">7</span>
            </Link>

            <FiUser className="nav-icon user-icon" onClick={closeMenu} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-content">
            <NavLink to="/shop" onClick={closeMenu}>
              Shop
            </NavLink>
            <NavLink to="/men" onClick={closeMenu}>
              Men
            </NavLink>
            <NavLink to="/women" onClick={closeMenu}>
              Women
            </NavLink>
            <NavLink to="/about" onClick={closeMenu}>
              About
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
