// @ts-nocheck
import { useState } from "react";
import "./MainAR.css";
import { myProjects } from "./myProjects";
import { AnimatePresence, motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";

Aos.init({});

function MainAR() {
  const [currentActive, setcurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);

  return (
    <main className="flex">
      <div className="main-header" data-aos="fade-down">
        <h1>أعمال التصوير الفوتوغرافي</h1>
      </div>
      <section className="flex left-section" data-aos="fade-up">
        {/* أزرار الفلترة */}
        <button
          onClick={() => {
            setcurrentActive("all");
            const newArr = myProjects;
            setArr(newArr);
          }}
          className={currentActive === "all" ? "active" : null}
        >
          الجميع
        </button>
        <button
          onClick={() => {
            setcurrentActive("css");
            const newArr = myProjects.filter((item) => item.cat === "css");
            setArr(newArr);
          }}
          className={currentActive === "css" ? "active" : null}
        >
          التراث
        </button>
        <button
          onClick={() => {
            setcurrentActive("js");
            const newArr = myProjects.filter((item) => item.cat === "js");
            setArr(newArr);
          }}
          className={currentActive === "js" ? "active" : null}
        >
          شخصي
        </button>
        <button
          onClick={() => {
            setcurrentActive("react");
            const newArr = myProjects.filter((item) => item.cat === "react");
            setArr(newArr);
          }}
          className={currentActive === "react" ? "active" : null}
        >
          تخرج
        </button>
      </section>
      <section className="flex right-section">
        <>
          {arr.map((item) => (
            <article
              layout
              initial={{ transform: "scale(0.4)" }}
              animate={{ transform: "scale(1)" }}
              transition={{ type: "spring", damping: 8, stiffness: 50 }}
              key={item.imgPath}
              className="card"
            >
              <img src={item.imgPath} alt="" />
            </article>
          ))}
        </>
      </section>
    </main>
  );
}

export default MainAR;
