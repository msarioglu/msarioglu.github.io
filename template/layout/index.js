import Head from 'next/head';
import styles from '@/template/layout/index.module.scss';
import Navigation from '@/template/navigation';
import Footer from "@/template/footer";

export default function Layout({ children }) {
    const title = 'Portfolio of Muhammet Sarıoğlu';
    const description = 'An online portfolio of Muhammet Sarıoğlu';

    return (
        <div className={styles['container']}>

            <Head>
                <meta charSet='utf-8' />
                <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
                <title>{title}</title>
                <meta name='description' content={`${description}`} />
                <link rel="icon" type="image/x-icon" href="icons/favicon.ico" />
                <link rel="apple-touch-icon" sizes="57x57" href="icons/apple-icon-57x57.png" />
                <link rel="apple-touch-icon" sizes="60x60" href="icons/apple-icon-60x60.png" />
                <link rel="apple-touch-icon" sizes="72x72" href="icons/apple-icon-72x72.png" />
                <link rel="apple-touch-icon" sizes="76x76" href="icons/apple-icon-76x76.png" />
                <link rel="apple-touch-icon" sizes="114x114" href="icons/apple-icon-114x114.png" />
                <link rel="apple-touch-icon" sizes="120x120" href="icons/apple-icon-120x120.png" />
                <link rel="apple-touch-icon" sizes="144x144" href="icons/apple-icon-144x144.png" />
                <link rel="apple-touch-icon" sizes="152x152" href="icons/apple-icon-152x152.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="icons/apple-icon-180x180.png" />
                <link rel="icon" type="image/png" sizes="192x192" href="icons/android-icon-192x192.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="icons/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="96x96" href="icons/favicon-96x96.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="icons/favicon-16x16.png" />
                <link rel="manifest" href="icons/manifest.json" />
                <meta name="msapplication-TileColor" content="#081b3d" />
                <meta name="msapplication-TileImage" content="icons/ms-icon-144x144.png" />
                <meta name="theme-color" content="#081b3d" />
            </Head>

            <nav className={styles['navbar']}
                role='navigation' aria-label='main navigation'>
                <Navigation />
            </nav>

            <main className={styles['main']}>
                {children}
            </main>

            <footer className={styles['footer']}>
                <Footer />
            </footer>
        </div>
    )
}
