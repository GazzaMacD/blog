import { getPostData, getAllPostIds } from '@/lib/posts';
import { IPost, IPostId } from '@/common/types';

import { GetStaticPathsResult, GetStaticPropsResult } from 'next';

type IParams = { params: { id: string } };

export default function Post({
  title,
  date,
  id,
  contentHtml,
}: IPost): JSX.Element {
  return (
    <>
      <h1>{title}</h1>
      <p>{date}</p>
      <p>{id}</p>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </>
  );
}

// Get Paths
export async function getStaticPaths(): Promise<GetStaticPathsResult<IPostId>> {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
  // Return a list of possible values for id
}

// Get data for blogs using params.id
export async function getStaticProps({
  params,
}: IParams): Promise<GetStaticPropsResult<IPost>> {
  // Return a list of possible values for id
  const id = params?.id;
  const postData: IPost = await getPostData(id);
  return {
    props: {
      ...postData,
    },
  };
}
