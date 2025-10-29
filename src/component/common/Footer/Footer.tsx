import { FaLink } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="contact" id="Contact">
      <div className="head">
        Ready To Take <span className="bg-linner">Your digital presence </span>{" "}
        <div>to the next level?</div>
      </div>
      <div className="desc">
        You can contact me at any time via email and I will be able to help at
        any time, God willing
      </div>
      <a
        href="mailto:AbdallhSabry194@gmail.com"
        className="contactbtn bg-linner"
      >
        Contact Me <FaLink />
      </a>
    </div>
  );
};

export default Footer;
