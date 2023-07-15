import "./App.css";
import Contact from "./components/Contact";
import Films from "./components/Films";
import Footer from "./components/Footer";
import Navigation from "./components/Nav";
import FilmDetail from "./components/Detail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Films />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/detail/:index" element={<FilmDetail />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
