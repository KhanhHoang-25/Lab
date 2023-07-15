import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Navigation() {
  const { theme, dark, toggle } = useContext(ThemeContext);
  return (
    <div id="nav">
      <nav
        style={{ backgroundColor: theme.backgroundColor, position: "relative" }}
      >
        <ul className="ulnav">
          <li>
<<<<<<< Updated upstream
            <a href="/" style={{ color: theme.color }}>
              Home
            </a>
          </li>
          <li>
            <a href="/news" style={{ color: theme.color }}>
              News
            </a>
          </li>
          <li>
            <a href="/about" style={{ color: theme.color }}>
              About
            </a>
          </li>
          <li>
            <a href="/contact" style={{ color: theme.color }}>
              Contact
            </a>
          </li>
          <li
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              bottom: 0,
              height: "100%",
              width: "150px",
            }}
          >
            <a href="#" onClick={toggle} style={{ color: theme.color }}>
              Switch {dark ? "light" : "dark"} mode
            </a>
=======
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/news">News</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
>>>>>>> Stashed changes
          </li>
        </ul>
      </nav>
    </div>
  );
}
