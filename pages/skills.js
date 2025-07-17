import styles from '@/styles/skills.module.scss';

export default function Skills() {
    return (
      <section id="skills" className={styles["skills-page"]}>
        <div className={styles["header"]}>
          <i className={`${styles["title-icon"]} ${styles["skills-icon"]}`}/>
          <h2>Skills</h2>
        </div>
        <div className={styles["row"]}>
          <div className={styles["skills"]}>
            <h3>Programming Languages</h3>
            <div className={styles["skills-list"]}>
              <div className={`${styles["skill"]} ${styles["skill-primary"]}`}>Java</div>
              <div className={`${styles["skill"]} ${styles["skill-primary"]}`}>C#</div>
              <div className={`${styles["skill"]} ${styles["skill-primary"]}`}>C++</div>
              <div className={`${styles["skill"]} ${styles["skill-primary"]}`}>Python</div>
              <div className={`${styles["skill"]}`}>Rust</div>
              <div className={`${styles["skill"]}`}>VB6</div>
              <div className={`${styles["skill"]}`}>Swift</div>
              <div className={`${styles["skill"]}`}>SQL</div>
              <div className={`${styles["skill"]}`}>PHP</div>
              <div className={`${styles["skill"]}`}>HTML</div>
              <div className={`${styles["skill"]}`}>CSS</div>
              <div className={`${styles["skill"]}`}>TypeScript</div>
              <div className={`${styles["skill"]}`}>JavaScript</div>
              <div className={`${styles["skill"]}`}>Shellscript</div>
            </div>
          </div>
          <div className={styles["skills"]}>
            <h3>Development Tools</h3>
            <div className={styles["skills-list"]}>
              <div className={`${styles["skill"]} ${styles["skill-primary"]}`}>Git</div>
              <div className={`${styles["skill"]} ${styles["skill-primary"]}`}>Jenkins</div>
              <div className={`${styles["skill"]} ${styles["skill-primary"]}`}>Docker</div>
              <div className={`${styles["skill"]}`}>Kubernetes</div>
              <div className={`${styles["skill"]}`}>SonarQube</div>
              <div className={`${styles["skill"]}`}>Azure</div>
            </div>
          </div>
          <div className={styles["skills"]}>
            <h3>Other</h3>
            <div className={styles["skills-list"]}>
              <div className={`${styles["skill"]} ${styles["skill-primary"]}`}>UML</div>
              <div className={`${styles["skill"]} ${styles["skill-primary"]}`}>Agile</div>
              <div className={`${styles["skill"]} ${styles["skill-primary"]}`}>Linux</div>
              <div className={`${styles["skill"]} ${styles["skill-primary"]}`}>Windows</div>
              <div className={`${styles["skill"]}`}>MQTT</div>
              <div className={`${styles["skill"]}`}>Splunk</div>
            </div>
          </div>
        </div>
      </section>
    );
}