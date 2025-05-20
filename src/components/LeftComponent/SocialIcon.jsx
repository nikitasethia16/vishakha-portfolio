import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const SocialIcons = () => {
  const iconLinks = [
    { label: <FaInstagram />, href: "#instagram", title: "Instagram" },
    { label: <FaLinkedinIn />, href: "#linkedin", title: "Linkedin" },
    { label: <FaFacebook />, href: "#facebook", title: "Facebook" },
    { label: <SiGmail />, href: "https://mail.google.com/mail/?view=cm&to=Vishakhaj561@gmail.com", title: "Gmail" },
  ];

  return (
    <>
      {iconLinks.map((e, i) => (
        <a href={e.href} key={i} title={e.title} target="blank">
          <div className="border border-white text-white p-3 rounded-full hover:shadow-[inset_0_0_10px_white] transition-shadow duration-300">
            {e.label}
          </div>
        </a>
      ))}
    </>
  );
};

export default SocialIcons;
