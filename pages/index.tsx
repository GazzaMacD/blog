/*
import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { getGuardianContent } from '../lib/guardianContent';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/pages/Home.module.scss';
*/
import utilStyles from '@/styles/utils.module.scss';
import { getSortedPostsData, IPost } from '../lib/posts';

interface IHomeProps {
  allPostsData: IPost[];
}

interface IStaticProps {
  props: IHomeProps;
}

export async function getStaticProps(): Promise<IStaticProps> {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }: IHomeProps): JSX.Element {
  return (
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2 className={utilStyles.headingLg}>Blog</h2>
      <ul className={utilStyles.list}>
        {allPostsData.map(({ id, date, title }) => (
          <li className={utilStyles.listItem} key={id}>
            {title}
            <br />
            {id}
            <br />
            {date}
          </li>
        ))}
      </ul>
    </section>
  );
}

/* . Guardian News Version l------
interface INews {
  id: string;
  type: string;
  sectionId: string;
  sectionName: string;
  webPublicationDate: string;
  webTitle: string;
  webUrl: string;
  apiUrl: string;
  isHosted: boolean;
  pillarId: string;
  pillarName: string;
}

type THomeProps = { news: INews[] };

type TStaticProps = {
  props: { news: INews[] | undefined };
};
interface TParams extends ParsedUrlQuery {
  slug: string;
}

export async function getStaticProps(): Promise<TStaticProps> {
  const content = await getGuardianContent();
  let news;
  if (content.response.status === 'ok') {
    news = content.response.results;
  } else {
    console.error(content.response.status);
  }
  return {
    props: { news },
  };
}

const Home: NextPage<THomeProps> = ({ news }) => {
  return (
    <>
      <Head>
        <title>Gareth&lsquo;s Blog</title>
      </Head>

      <h1 className={styles.title}>
        Read{' '}
        <Link href="/posts/first-post">
          <a>this page!</a>
        </Link>
      </h1>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {news.map(
            ({
              id,
              webTitle,
              webUrl,
            }: {
              id: string;
              webUrl: string;
              webTitle: string;
            }) => (
              <li className={utilStyles.listItem} key={id}>
                <a href={webUrl}>{webTitle}</a>
              </li>
            )
          )}
        </ul>
      </section>
    </>
  );
};

export default Home;

*/
