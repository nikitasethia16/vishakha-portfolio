import { useEffect, useState } from "react";
import CursorEffects from "./components/CursorEffects ";
import HeroSection from "./components/heroSection";
import { Route, Routes } from "react-router-dom";
import ThankYou from "./components/RightComponent/Thankyou";

function App() {
    const [isDesktop, setIsDesktop] = useState(true);
     useEffect(() => {
    if (typeof window !== "undefined") {
      setIsDesktop(window.innerWidth >= 768);
    }
  }, []);
  return (
    <div>
      {isDesktop && <CursorEffects />}
      <Routes>
        <Route path="/" element={ <HeroSection />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>       
      </div>
  );
}

export default App;
