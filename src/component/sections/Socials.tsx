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
        aria-label="Visit Twitter profile"
      >
        <FaTwitter />
      </a>

      <a
        href="https://www.instagram.com/abdallhrakha/?hl=ar"
        className="icon"
        target="_blank"
        aria-label="Visit Instagram profile"
      >
        <FaInstagram />
      </a>

      <a
        href="https://www.facebook.com/profile.php?id=100007172563893"
        target="_blank"
        className="icon"
        aria-label="Visit Facebook profile"
      >
        <FaFacebook />
      </a>

      <a
        href="https://wa.me/+971562014403"
        className="icon"
        target="_blank"
        aria-label="Send a WhatsApp message"
      >
        <FaWhatsapp />
      </a>

      <a
        href="https://www.linkedin.com/in/abdallh-sabry-a654341a5"
        className="icon"
        target="_blank"
        aria-label="Visit LinkedIn profile"
      >
        <FaLinkedin />
      </a>

      <a
        href="https://github.com/Abdallh194"
        className="icon"
        target="_blank"
        aria-label="Visit GitHub profile"
      >
        <FaGithub />
      </a>
    </div>
  );
};

export default Socials;
