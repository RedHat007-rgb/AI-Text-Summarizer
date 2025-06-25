import { Link } from "react-router-dom";
import "../App.css";

const Header = () => {
  return (
    <header className="modern-header">
      {/* Logo */}
      <div className="logo">
        SUMMARY<span>.AI</span>
      </div>

      {/* Center animated text */}
      <div className="minimal-fade-text">
        <span className="word fade-in">Simplify.</span>
        <span className="word fade-in">Summarize.</span>
        <span className="word fade-in">Supercharge.</span>
      </div>

      {/* Navigation */}
      <div className="nav-links">
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Sign In</Link>
        <Link to="/about-us">About Us</Link>
      </div>
    </header>
  );
};

export default Header;
