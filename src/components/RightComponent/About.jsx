import { MdOutlineArrowOutward } from "react-icons/md";
import pdfFile from "/src/assets/Vishakha_Jain.jpg";
import media from "/src/assets/media1.jpg";

const About = () => {
  return (
    <div className="text-slate-400">
      <img
        src={media}
        alt="social-media"
        className="mb-4 rounded"
        onLoad={() => {
          window.dispatchEvent(new Event("scroll"));
        }}
      />
      <p className="mb-4 ">
        I'm Vishakha Jain, a dedicated and passionate social media strategist
        focused on helping individuals and businesses grow their digital
        presence. With a deep understanding of content trends and platform
        algorithms, I specialize in creating strategies that not only boost
        engagement but also drive meaningful results. Whether you're a startup
        looking to build your brand from the ground up or an established
        business aiming to connect more deeply with your audience, I bring a
        blend of creativity and data-driven strategy to every project.
      </p>
      <div className="flex gap-1 items-center text-slate-50 hover:text-[rgb(152,243,151)] transition-colors duration-200 group cursor-pointer">
        <a
          href={pdfFile}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1"
        >
          View Full Résumé
          <MdOutlineArrowOutward className="transition-transform duration-200 transform group-hover:translate-x-2" />
        </a>
      </div>
    </div>
  );
};

export default About;
