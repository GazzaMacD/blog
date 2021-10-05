import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

export default function FirstPost(): JSX.Element {
  const img = '/img/home/blog-1200x600-former-ex.jpg';
  const title = 'My First Post';
  return (
    <>
      <Head>
        <title>{title ? `${title} | Blog` : 'Blog'}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>First Post</h1>
      <Image src={img} height={600} width={1200} alt="ex image" />
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}
