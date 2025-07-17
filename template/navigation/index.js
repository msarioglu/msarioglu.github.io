import react from "react";
import Image from "next/image";
import styles from "@/template/navigation/index.module.scss";
import Footer from "@/template/footer";
import brandImage from "@/public/images/logo.png";

export default function Navigation() {
  const [isUnfolded, setIsUnfolded] = react.useState(false);
  const navbarToggle = isUnfolded ? styles["is-unfolded"] : "";

  const onPress = (e) => {
    e.preventDefault();
    const target = window.document.getElementById(
      e.currentTarget.href.split("#")[1]
    );
    if (target) {
      let topPadding = 0;
      let elementPosition = target.getBoundingClientRect().top + window.scrollY;

      if (window.innerWidth < 1024) {
        topPadding = 216;
        setIsUnfolded(false);
      }
      let offsetPosition = elementPosition - topPadding;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["navbar-brand"]}>
        <Image
          src={brandImage}
          alt={"logo"}
          className={styles["brand-image"]}
          priority
        />
        <button
          onClick={() => setIsUnfolded(!isUnfolded)}
          className={styles["navbar-burger"]}
        />
      </div>

      <div className={`${styles["navbar-menu"]} ${navbarToggle}`}>
        <ul className={`${styles["navbar-items"]}`}>
          <li
            className={`${styles["navbar-item"]}`}
            data-to-scrollspy-id="home"
          >
            <a href={"#home"} onClick={(e) => onPress(e)}>
              Home
            </a>
          </li>
          <li
            className={`${styles["navbar-item"]}`}
            data-to-scrollspy-id="about"
          >
            <a href={"#about"} onClick={(e) => onPress(e)}>
              About
            </a>
          </li>
          <li
            className={`${styles["navbar-item"]}`}
            data-to-scrollspy-id="skills"
          >
            <a href={"#skills"} onClick={(e) => onPress(e)}>
              Skills
            </a>
          </li>
          <li
            className={`${styles["navbar-item"]}`}
            data-to-scrollspy-id="projects"
          >
            <a href="#projects" onClick={(e) => onPress(e)}>
              Projects
            </a>
          </li>
        </ul>
      </div>

      <div className={`${styles["navbar-footer"]}`}>
        <Footer />
      </div>
    </div>
  );
}
