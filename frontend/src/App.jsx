import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainHeader from "./components/header";
import Register from "./pages/Register";
import Navbar from "./components/navbar";
import HomePage from "./pages/Home";
import Login from "./pages/Login";
import Footer from "./components/footer";
import AboutPage from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NoPage from "./pages/Nopage";
import News from "./pages/News";
import Shop from "./pages/Shop";

function App() {
  return (
    <BrowserRouter>
      <div className="h-screen p-2 relative">
        <MainHeader />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
