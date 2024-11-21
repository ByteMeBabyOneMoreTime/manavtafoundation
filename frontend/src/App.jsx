import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import MainHeader from "./components/header";
import Register from "./pages/Register";
import Navbar from "./components/navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="h-screen p-2 relative">
        <MainHeader />
        <Navbar />
        <Routes>
          <Route path="/" element={<Register />} />{" "}
          {/* Simple route for Login */}
          {/* <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
