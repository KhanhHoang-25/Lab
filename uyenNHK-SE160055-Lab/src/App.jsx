import "./App.css";
import Contact from "./components/Contact";
import Films from "./components/Films";
import Footer from "./components/Footer";
import Navigation from "./components/Nav";
<<<<<<< Updated upstream
import FilmDetail from "./components/Detail";
=======
>>>>>>> Stashed changes
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Films />}></Route>
<<<<<<< Updated upstream
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/detail/:index" element={<FilmDetail />}></Route>
=======
>>>>>>> Stashed changes
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
