import styles from '@/template/footer/index.module.scss'

export default function Footer() {
    return (
        <div className={styles['footer']}>
            <span className={styles['caption']}>Copyright © 2019 - 2023 Muhammet Sarıoğlu</span>
        </div>
    );
}