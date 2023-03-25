import styles from '@/styles/home.module.scss';
import Image from 'next/image';
import profileImage from '@/public/images/profile.jpeg';
import backgroundImage from '@/public/images/background.jpeg';

export default function Home() {
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
                <span className={styles['secondary-text']}>I&apos;m a </span>Software Engineer
            </h2>

            <div className={styles['social-media-container']}>
                <a className={styles['social-media-button']} href="https://www.facebook.com/sarioglumuhammed">
                    <i className={`fab fa-facebook`}></i>
                </a>
                <a className={styles['social-media-button']}
                    href="https://www.linkedin.com/in/muhammet-sarioglu-5105b27a/">
                    <i className={`fab fa-linkedin`}></i>
                </a>
                <a className={styles['social-media-button']} href="https://github.com/msarioglu">
                    <i className={`fab fa-github`}></i>
                </a>
            </div>
        </section>
    )
}