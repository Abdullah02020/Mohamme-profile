import "./Serv.css";
import {
  FaRegHandshake,
  FaUserGraduate,
  FaVideo,
  FaCameraRetro,
} from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({ duration: 1000, delay: 400, easing: "ease" });
function Serv() {
  return (
    <div className="serv section__padding">
      <h1 className="serv-itile" data-aos="fade-down" data-aos-delay="400">
        أبداعاتي البصرية
      </h1>
      <div className="serv-items flex">
        <div className="" data-aos="fade-up" data-aos-delay="400">
          {" "}
          <div className="box">
            <FaRegHandshake />
            <h1>تصوير الفعاليات</h1>
            <p>
              أحتفظ بذكريات مناسباتكم الثمينة، ملتقطًا كل دقيقة بتفاصيلها الغنية
              لتبقى للأبد.
            </p>
          </div>
        </div>

<div className=""data-aos="fade-up" data-aos-delay="450">    <div className="box" >
          <FaUserGraduate />
          <h1> جلسات شخصية </h1>
          <p>
            برز جوهرك الحقيقي من خلال جلسات تصوير تعكس شخصيتك بأسلوب فني وعميق.
          </p>
        </div></div>
    <div className=""data-aos="fade-up" data-aos-delay="500">    <div className="box" >
          <FaVideo />
          <h1>أفلام وثائقية وقصيرة</h1>
          <p>
            أخلق قصصًا بصرية مؤثرة تنقل قضايا ولحظات تستحق الرواية، بصيغة
            وثائقية أو قصيرة
          </p>
        </div></div>
    
      <div className=""data-aos="fade-up" data-aos-delay="500">  <div className="box" >
          <FaCameraRetro />
          <h1> تصوير إعلاني ومنتجات</h1>
          <p>
            أسلط الضوء على فرادة منتجاتك، مقدمًا صورًا إعلانية تجذب النظر وتعزز
            الهوية العلامة التجارية.
          </p>
        </div></div>
      </div>
    </div>
  );
}

export default Serv;
