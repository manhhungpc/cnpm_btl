import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import Slide from "../components/Slide";
import styles1 from "../styles/Home.module.css";
import styles from "../styles/Hero.module.css";

export default function Home() {
  return (
    <div className={styles1.background}>
      <Navbar />
      <div className={styles.hero}>
        <Slide />
        {/* <img src={process.env.PUBLIC_URL+"Cover.jpg"} alt="Cover" className={styles.hero__image} /> */}
        <h1 className={styles.hero__title}>Helpy</h1>
        <h1 className={styles.hero__content}>
          <ul className={styles.list}>
            <li>Ở đâu bạn cần, Helpy có!</li>
            <li>Ở đâu bạn khó, có Helpy!</li>
          </ul>
        </h1>
      </div>
      <h2 className={styles.title} align="center">
        Helpy có những gì?
      </h2>
      {/* <Hero imageSrc={process.env.PUBLIC_URL+"TDHB.jpg"} /> */}
      <Slider
        imageSrc={process.env.PUBLIC_URL + "img_1.png"}
        title={"Helpyneed"}
        subtitle={
          "Helpyneed là những khách hàng sử dụng Helpy. Nếu bạn đang gặp các công việc khó khăn và có nhu cầu cần sự trợ giúp từ người khác, chỉ với vài cú click chuột, bạn sẽ đạt được điều mình mong muốn."
        }
      />
      <Slider
        imageSrc={process.env.PUBLIC_URL + "img_3.jpg"}
        title={"Helpyhelp"}
        subtitle={
          "Helpyhelp là những người sẽ giúp đỡ Helpyneed. Công việc dù có khó khăn, vất vả đến đâu cũng sẽ được họ giải quyết trọn vẹn. Mang đến niềm vui và sự hài lòng dành cho bạn."
        }
        flipped={true}
      />
      <Footer />
    </div>
  );
}
