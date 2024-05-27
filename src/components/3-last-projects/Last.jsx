import "./Last.css";
import p1 from "../../imges/hofadrown.jpg";
import p2 from "../../imges/p-2.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({ duration: 1000, delay: 400, easing: "ease" });
function Last() {
  return (
    <div className="Lpro section__padding">
      <h1 className="Lpro-header" data-aos="fade-down">
        لمساتي الأخيرة
      </h1>
      <div className="box flex">
        <div className="text">
          <h1 data-aos="fade-left">سمفونية حوف: لوحة طبيعية من الأعالي</h1>
          <p data-aos="fade-left" data-aos-delay="500">
            استكشاف عن قرب، من خلال عيون السماء، لمديرية حوف الأخاذة بجمالها
            الطبيعي الفاتن. هنا، حيث تلتقي الأرض بالسماء في تناغم مثالي، تكشف
            لنا الدرونات عن روائع خلق لا مثيل لها، وتسرد قصة هذه الجنة الأرضية
            بلغة الصورة الخلابة.
          </p>
          <div className="" data-aos="fade-left" data-aos-delay="550">
            <a href="projects" className="cont">
              مشاريعنا المبتكرة
            </a>
          </div>
        </div>
        <img src={p1} alt="" data-aos="fade-right" />
      </div>
      <div className="box flex">
        <div className="text">
          {" "}
          <h1 data-aos="fade-left">تخرج الأطباء</h1>
          <p data-aos="fade-left" data-aos-delay="500">
            نحتفي بلحظة التحول الباهرة في حياة دفعة الطب 23، معبرين عن فرحة
            الإنجاز وأمل الغد المشرق. لحظات تخلد في الذاكرة، توثق انطلاقة أجيال
            جديدة نحو عالم ملؤه العطاء والتفاني في مهنة الإنسانية.
          </p>
          <div className="" data-aos="fade-left" data-aos-delay="550">
            <a href="projects" className="cont">
              مشاريعنا المبتكرة
            </a>
          </div>
        </div>
        <img src={p2} alt="" data-aos="fade-right" />
      </div>
      <div className="text" style={{ width: "100%", textAlign: "center" }}>
        <a href="projects" className="cont">
          معرض الإبداعات
        </a>
      </div>
    </div>
  );
}

export default Last;
