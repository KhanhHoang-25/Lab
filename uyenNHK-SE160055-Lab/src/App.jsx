import "./App.css";
import Films from "./components/Films";
import Footer from "./components/Footer";
import Navigation from "./components/Nav";
import { useContext } from "react";
import { ThemeContext } from "./components/ThemeContext";

function App() {
  return (
    <>
      <Navigation />
      <Films />
      <Footer />
    </>
  );
}

export default App;
