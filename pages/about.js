import styles from "@/styles/about.module.scss";
import Image from "next/image";
import profileImage from "@/public/images/about-profile.jpg";

export default function About() {
  return (
    <section id="about" className={styles["about-page"]}>
      <div className={styles["header"]}>
        <i className={`${styles["title-icon"]} ${styles["header-icon"]}`} />
        <h2>About me</h2>
      </div>
      <div className={styles["container"]}>
        <div className={styles["row"]}>
          <Image
            src={profileImage}
            alt={"About profile photo"}
            className={styles["profile-image"]}
            priority
          />
          <div className={styles["column"]}>
            <p>
              I am a software engineer with a diverse range of experience in the
              field. I graduated from HAN University of Applied Sciences in
              2021, where I gained a solid foundation in software engineering
              principles such as UML, SCRUM, and SOLID.
            </p>
            <p>
              Throughout my career, I have worked extensively with a variety of
              programming languages, including Java, C#, SQL, Python, PHP, and
              JavaScript. I am particularly skilled in developing software
              applications that meet the needs of clients across a wide range of
              industries.
            </p>
            <p>
              In addition to my software engineering skills, I also have
              experience with DevOps practices, including continuous integration
              and continuous delivery. I am adept at using tools such as
              Jenkins, Docker, and Kubernetes to automate software deployment
              and testing processes.
            </p>
            <p>
              I am known for my ability to work collaboratively with teams to
              design and implement complex software solutions. I am adept at
              analyzing user requirements and creating innovative solutions that
              address their specific needs. I am also a strong advocate for
              software development best practices, including agile
              methodologies, continuous integration, and test-driven
              development.
            </p>
            <p>
              With my exceptional technical skills, attention to detail, and
              commitment to delivering high-quality software solutions, I am an
              asset to any organization I work with.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
