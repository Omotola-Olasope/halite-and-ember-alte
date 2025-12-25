import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import UKBranch from "./pages/UKBranch";
import NigerianBranch from "./pages/NigerianBranch";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL || ""}>
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/uk-branch" element={<UKBranch />} />
            <Route path="/nigerian-branch" element={<NigerianBranch />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
