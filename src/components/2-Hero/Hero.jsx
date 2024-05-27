import "./Hero.css";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import hero from "../../imges/landing-page.jpg";

function Hero() {
  return (
    <div className="section__padding flex hero">
      <div className="text">
        <div className="icons" data-aos="fade-left" data-aos-delay="400">
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
        <h1 data-aos="fade-left">محمد انيس</h1>
        <p data-aos="fade-left" data-aos-delay="500">
          إذا كنت تسعى لجعل لحظاتك الخاصة تدوم إلى الأبد، فأنا هنا لذلك! سواء
          كانت لحظة احتفالية أو جلسة تصوير شخصية، أتطلع لإضافة لمسة فنية تليق
          بذكرياتك. تواصل معي لنخلق معًا ذكريات لا تُنسى.
        </p>
        <div className="" data-aos="fade-left" data-aos-delay="550">
          {" "}
          <Link to="/conecct" className="cont">
            تواصل الان
          </Link>
        </div>
      </div>
      <img src={hero} alt="" data-aos="fade-right" data-aos-delay="400" />
    </div>
  );
}

export default Hero;
