import styles from '@/styles/projects.module.scss';
import Image from 'next/image';
import calculatorIcon from '@/public/images/projects/ios-calculator.png';

export default function Projects() {
    
    return (
        <section id='projects' className={styles['projects-page']}>
            <div className={styles['header']}>
                <i className={styles['header-icon']}></i>
                <h2>Projects</h2>
            </div>
            <div className={styles['container']}>
                <div className={styles['row']}>
                    <div className={styles['project-item']}>
                        <h3>iOS - Calculator</h3>
                        <Image
                            src={calculatorIcon}
                            alt={'CalculatorIcon'}
                            className={styles['project-icon']}
                        />
                        <p className={styles['project-description']}>
                            A basic iOS themed calculator build with Ionic.
                        </p>
                        <a href="https://github.com/msarioglu/iOS-Calculator" className={styles['git-button']}>Git
                            <i className={styles['git-icon']}></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}