import "./About.css";
import My from "../../imges/landing-page.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({ duration: 1000, delay: 400, easing: "ease" });
function AboutMy() {
  return (
    <div className="">
      <div className="flex My section__padding">
        <div className="text">
          <h1 data-aos="fade-left">عن محمد انيس</h1>
          <p data-aos="fade-left" data-aos-delay="450">
            إلتق بمحمد أنيس، المصور الفوتوغرافي المتألق من عدن، يعيش في التواهي.
            مع شغف لا متناهي بالتقاط لحظات الحياة الساحرة، يتخصص محمد في تصوير
            الحفلات والمناسبات الخاصة، بالإضافة إلى الصور الشخصية التي تنبض
            بالحياة. يجلب معه خبرة غنية تمتد لأربع سنوات، محملًا بمهارات فنية
            رفيعة المستوى ونظرة فنية عميقة تمكنه من سرد قصص من خلال عدسته.
            <br />
            <br />
            خلال رحلته المهنية، لم يقتصر تركيز محمد على تطوير مهاراته التقنية في
            فن التصوير الفوتوغرافي فحسب، بل استثمر أيضًا في تعزيز قدرته على نقل
            الروايات البصرية بطريقة جذابة ومعبرة. تتميز مسيرته بالتزام قوي نحو
            التحسين المستمر والتكيف مع التغيرات المستمرة في عالم التصوير، مما
            جعله فنانًا متعدد الأوجه وديناميكيًا.
          </p>
        </div>
        <img src={My} alt="" data-aos="fade-right" />
      </div>
      <h1 className="My__title" data-aos="fade-left">
        خدماتي
      </h1>
      <div className="services section__padding flex">
        <div className="box">
          <div
            className="box-item flex "
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h1>01</h1>
            <p>تصوير وتعديل الألوان</p>
          </div>
        </div>
        <div className="box">
          <div
            className="box-item flex "
            data-aos="fade-up"
            data-aos-delay="450"
          >
            <h1>02</h1>
            <p> تصوير أفلام قصيرة</p>
          </div>
        </div>
        <div className="box">
          <div
            className="box-item flex "
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <h1>03</h1>
            <p>مونتاج سينمائي وإعلاني</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMy;
