import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Preloader from "./components/Preloader";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Testimonials from "./pages/Testimonials";
// import Companies from "./pages/Companies";
import Contacts from "./Pages/Contacts";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* Preloader - shows on initial load and page refresh */}
      <AnimatePresence mode="wait">
        {loading && <Preloader onLoaded={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Main app content - fades in smoothly after preloader */}
      <div className={loading ? "opacity-0" : "opacity-100 transition-opacity duration-1000"}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/testimonials" element={<Testimonials />} />
            {/* <Route path="/companies" element={<Companies />} /> */}
            <Route path="/contacts" element={<Contacts />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;