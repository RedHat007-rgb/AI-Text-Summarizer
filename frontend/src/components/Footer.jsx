import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../css/Footer.css";

const Footer = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts with a console log for debugging
    console.log("Component mounted, triggering animation");
    setAnimate(true);
  }, []);

  return (
    <footer>
      <div className="footer-left">
        <h2>
          <span>Summary</span>.AI
        </h2>
        <p>Empowering your daily tasks efficiently</p>
      </div>

      <div className="footer-center">
        <p className={`footer-animate-line ${animate ? "animate" : ""}`}>
          <span>AI that simplifies</span>
          <span>learns</span>
          <span>adapts</span>
          <span>summarizes</span>
        </p>
      </div>

      <div className="footer-right">
        <a href="mailto:support@example.com">support@example.com</a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" />
          GitHub
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="icon" />
          LinkedIn
        </a>
      </div>

      <div className="footer-bottom">© 2025 Summary.AI</div>
    </footer>
  );
};

export default Footer;
