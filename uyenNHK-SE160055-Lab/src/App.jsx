import "./App.css";
import Films from "./components/Films";
import Footer from "./components/Footer";
import Navigation from "./components/Nav";
import { useContext } from "react";
import { ThemeContext } from "./components/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="App" style={{ backgroundColor: theme.backgroundColorAll }}>
      <Navigation />
      <Films />
      <Footer />
    </div>
  );
}

export default App;
