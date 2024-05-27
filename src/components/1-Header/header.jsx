import "./header.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({ duration: 1000, delay: 400, easing: "ease" });
function Header() {
  return (
    <div className="header flex" data-aos="fade-down">
      <ul className="flex">
        <li>
          <Link to="/">الصفحة الرئيسية</Link>
        </li>
        <li>
          <Link to="/about">من أنا؟</Link>
        </li>
        <li>
          <Link to="/projects">إبداعاتي</Link>
        </li>
        <li>
          <Link to="/conecct">لنتواصل</Link>
        </li>
      </ul>
      <div className="logo">
        <h1>MohammedAnis</h1>
        <p>photographer</p>
      </div>
    </div>
  );
}

export default Header;
