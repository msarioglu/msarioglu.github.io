import styles from '@/styles/home.module.scss';
import Image from 'next/image';
import profileImage from '@/public/images/profile.jpg';
import backgroundImage from '@/public/images/background.jpg';
import ConsoleText from '../components/consoleText/consoleText';

export default function Home() {
    const titles = [
      "Software Engineer",
      "Test Engineer",
      "Software Architect",
      "DevOps Engineer",
      "Backend Developer",
      "Frontend Developer",
      "Full Stack Developer",
      "Web Developer",
      "System Administrator",
    ];

    return (
        <section id='home' className={styles['home-page']}>
            <ol>
                <Image
                    src={backgroundImage}
                    alt={'Background'}
                    className={styles['background-image']}
                    priority
                />
            </ol>

            <div className={styles['profile-container']} >
                <ol>
                    <Image
                        src={profileImage}
                        alt={'Profile photo'}
                        className={styles['profile-img']}
                    />
                </ol>
            </div>

            <h1 className={styles['title']}>
                <span className={styles['secondary-text']}>Muhammet </span>Sarıoğlu
            </h1>
            <h2 className={styles['sub-title']}>
                <span className={styles['secondary-text']}>I&apos;m a</span><ConsoleText words={titles}/>
            </h2>

            <div className={styles['social-media-container']}>
                <a className={`${styles['social-media-button']}`}
                    target="_blank" href="https://www.linkedin.com/in/muhammet-s-5105b27a/">
                    <i className={`fab fa-linkedin`}/>
                </a>
                <a className={styles['social-media-button']} target="_blank" href="https://github.com/msarioglu">
                    <i className={`fab fa-github`}/>
                </a>
                <a className={styles['social-media-button']} target="_blank" href="https://www.instagram.com/msrgl_61/">
                    <i className={`fab fa-instagram`}/>
                </a>
            </div>
        </section>
    )
}