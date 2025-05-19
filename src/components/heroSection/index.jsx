import LeftComponent from "../LeftComponent";
import RightComponent from "../RightComponent";

const HeroSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-4 py-10 lg:py-30">
      <div className="lg:sticky lg:top-32 self-start">
        <LeftComponent />
      </div>
      <div>
      <RightComponent />
      </div>
    </div>
  );
};

export default HeroSection;
