import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./styles/index.css";
import "./styles/App.css";

// Componentes
import Header from "./components/Header/Header";
import LandingPage from "./pages/LandingPage";
import LandingCTA from "./components/LandingCTA/LandingCTA";
import Features from "./components/Features/Features";
import Testimonials from "./components/Testimonials/Testimonials";
import FAQAndCTA from "./components/FAQAndCTA/FAQAndCTA";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <LandingPage />
        <LandingCTA />
        <Features />
        <Testimonials />
        <FAQAndCTA />
      </main>
    </div>
  );
}

export default App;
