import About from "./About";
import ContactMe from "./ContactMe";
import LogoSlider from "./LogoSlider";
import Services from "./Services";
import WhyMe from "./WhyMe";

const RightComponent = () => {
  return (
    <>
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <LogoSlider />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="why-me">
        <WhyMe />
      </section>
       <section id="contact-me">
        <ContactMe />
      </section>
    </>
  );
};

export default RightComponent;
