import "./Talk.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({ duration: 1000, delay: 400, easing: "ease" });
function Talk() {
  return (
    <div className="talk section__padding">
      <h1 data-aos="fade-left">هل تحلم بلقطة تخطف الأنفاس؟</h1>
      <p data-aos="fade-left" data-aos-delay="500">
        دعونا ننسج معًا أحلامكم بعدسة الإبداع لنحول الخيال إلى واقع بصري يفوق
        التوقعات. تواصل معنا اليوم، وابدأ
        <br /> رحلتك نحو ترك بصمة لا تُنسى في عالم العلامات التجارية.
      </p>
      <div className="text" data-aos="flip-up" data-aos-delay="500">
        <a href="conecct" className="cont">
          لنبدأ الآن
        </a>
      </div>
    </div>
  );
}

export default Talk;
