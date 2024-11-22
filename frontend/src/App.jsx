import { Routes, Route, BrowserRouter } from "react-router-dom";
// import Login from "./pages/Login";
import MainHeader from "./components/header";
import Register from "./pages/Register";
import Navbar from "./components/navbar";
import HomePage from "./pages/Home";
import Login from "./pages/Login";
import Footer from "./components/footer";

function App() {
  return (
    <BrowserRouter>
      <div className="h-screen p-2 relative">
        <MainHeader />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Simple route for Login */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>

    // <Routes>
    //     <Route path="/" element={<Home />}>
    //       <Route index element={<AllTasks />} />
    //       <Route path="/importantTasks" element={<ImportantTask />} />
    //       <Route path="/completedTasks" element={<CompletedTask />} />
    //       <Route path="/incompletedTasks" element={<IncompletedTask />} />
    //     </Route>
    //     <Route path="/signup" element={<Signup />} />
    //     <Route path="/login" element={<Login />} />
    //   </Routes>
  );
}

export default App;
