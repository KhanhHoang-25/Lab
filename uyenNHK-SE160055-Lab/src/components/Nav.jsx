import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Navigation() {
  const { theme, dark, toggle } = useContext(ThemeContext);

  return (
    <div id="nav">
      <nav
        style={{
          backgroundColor: theme.backgroundColor,
        }}
      >
        <ul className="ulnav">
          <li>
            <a className="active" href="#home" style={{ color: theme.color }}>
              Home
            </a>
          </li>
          <li>
            <a href="#news" style={{ color: theme.color }}>
              News
            </a>
          </li>
          <li>
            <a href="#about" style={{ color: theme.color }}>
              About
            </a>
          </li>
          <li>
            <a href="#contact" style={{ color: theme.color }}>
              Contact
            </a>
          </li>
          <li>
            <a href="#" onClick={toggle} style={{ color: theme.color }}>
              Switch {dark ? "light" : "dark"} mode
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
