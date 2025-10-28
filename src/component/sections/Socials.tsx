import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
const Socials = () => {
  return (
    <div className="socials">
      <a
        href="https://twitter.com/AbdallhSabry9"
        className="icon"
        target="_blank"
      >
        <FaTwitter />
      </a>
      <a
        href="https://www.instagram.com/abdallhrakha/?hl=ar"
        className="icon"
        target="_blank"
      >
        <FaInstagram />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100007172563893"
        target="_blank"
        className="icon"
      >
        <FaFacebook />
      </a>
      <a href="https://wa.me/+971562014403" className="icon" target="_blank">
        <FaWhatsapp />
      </a>
      <a
        href="www.linkedin.com/in/abdallh-sabry-a654341a5"
        className="icon"
        target="_blank"
      >
        <FaLinkedin />
      </a>
      <a href="https://github.com/Abdallh194" className="icon" target="_blank">
        <FaGithub />
      </a>
    </div>
  );
};

export default Socials;
