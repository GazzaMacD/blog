import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import utilStyles from '@/styles/utils.module.scss';
import styles from './BaseLayout.module.scss';

interface ILayoutProps {
  children: React.ReactNode;
}

const name = 'Gareth';

const siteTitle = "Gareth's Next Blog";

function BaseLayout({ children }: ILayoutProps): JSX.Element {
  return (
    <div className={styles.Container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="My Personal Blog" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.Header}>
        <Image
          priority
          src="/img/profile.jpg"
          className={utilStyles.BorderCircle}
          height={144}
          width={144}
          alt={name}
        />
        <h1 className={utilStyles.Heading2Xl}>{name}</h1>
      </header>
      <main>{children}</main>
      <footer>
        <div className={styles.BackToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      </footer>
    </div>
  );
}

export { BaseLayout };
