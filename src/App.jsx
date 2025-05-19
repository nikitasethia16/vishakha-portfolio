import CursorEffects from "./components/CursorEffects ";
import HeroSection from "./components/heroSection";

function App() {
  return (
    <div>
      <CursorEffects />
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
        <HeroSection />
      </div>
    </div>
  );
}

export default App;
