import { Routes, Route } from "react-router-dom";
import HomePage from "./views/homePage/HomePage";
import Contactpage from "./views/contactPage/Contactpage";
import GalleryPage from "./views/galeryPage/GalleryPage";
import AboutPage from "./views/aboutPage/AboutPage";
import Header from "./components/layout/header/Header";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<Contactpage />} />
      </Routes>
    </div>
  );
};

export default App;
