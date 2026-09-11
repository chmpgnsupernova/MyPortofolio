import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RedlineProvider } from "./hooks/RedlineProvider";
import { Nav } from "./components/sections/Nav";
import { Footer } from "./components/sections/Footer";
import Home from "./pages/Home";
import CaseStudy from "./pages/CaseStudy";

export default function App() {
  return (
    <BrowserRouter>
      <RedlineProvider>
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work/:slug" element={<CaseStudy />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </RedlineProvider>
    </BrowserRouter>
  );
}
