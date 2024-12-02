import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
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
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductsDetail";
import Checkout from "./pages/Checkout";
import OrderPlaced from "./pages/OrderPlaced";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
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
          <Route path="/shop/:categoryId" element={<Shop />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/order" element={<OrderPlaced />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
