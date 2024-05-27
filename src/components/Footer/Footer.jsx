import "./Footer.css";
import { FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa6";
function Footer() {
  return (
    <div className="footer flex">
      <div className="icons">
        <a
          target="blank"
          href="https://www.instagram.com/moh_anis7?igsh=MW15bjduYTZqNWtwMQ=="
        >
          <FaInstagram />
        </a>
        <a
          target="blank"
          href="https://www.facebook.com/mohammed.anis.77920526?mibextid=ZbWKwL"
        >
          {" "}
          <FaFacebook />
        </a>
        <a href="https://wa.me/+967735873852" target="blank">
          {" "}
          <FaWhatsapp />
        </a>
      </div>
      <p>
        Designed by :
        <span>
          <a href="https://abdullah-proflie.web.app/" target="blank">
            Abdullah Mohammed
          </a>
        </span>
      </p>
    </div>
  );
}

export default Footer;
