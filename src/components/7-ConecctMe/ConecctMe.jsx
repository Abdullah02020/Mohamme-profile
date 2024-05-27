import "./ConecctMe.css";
import { FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({ duration: 1000, delay: 400, easing: "ease" });
function ConecctMe() {
  return (
    <div className="section__padding">
      <div className="text-con">
        <h1 data-aos="fade-down" data-aos-delay="500">
          تواصل معي
        </h1>
        <p data-aos="fade-down" data-aos-delay="550">
          أنا هنا للإجابة على أي استفسارات قد تكون لديك ولمساعدتك على الاستمتاع
          بتجربة لا تُنسى. يمكنك الوصول إليّ عبر منصات التواصل الاجتماعي أو
          الواتساب للحصول على مزيد من المعلومات حول خدماتي، الحجوزات، أو لمشاركة
          تجاربك وآرائك. دائمًا متحمس للتواصل معك!
        </p>
      </div>

      <div className="flex link" data-aos="fade-up">
        <a
          href="https://www.facebook.com/mohammed.anis.77920526?mibextid=ZbWKwL"
          target="blank"
          className="flex"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/moh_anis7?igsh=MW15bjduYTZqNWtwMQ=="
          target="blank"
          className="flex"
        >
          <FaInstagram />
        </a>
        <a href="https://wa.me/+967735873852" target="blank" className="flex">
          <FaWhatsapp />
        </a>
      </div>
    </div>
  );
}

export default ConecctMe;
