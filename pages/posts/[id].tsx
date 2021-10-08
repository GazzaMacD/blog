import { getPostData, getAllPostIds } from '@/lib/posts';
import { IPost, IPostId } from '@/common/types';

import { GetStaticPathsResult, GetStaticPropsResult } from 'next';

type IParams = { params: { id: string } };
type IPostData = {
  postData: IPost;
};

export default function Post({ postData }: IPostData): JSX.Element {
  return (
    <>
      <h1>{postData.title}</h1>
      <p>{postData.date}</p>
      <p>{postData.id}</p>
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
}: IParams): Promise<GetStaticPropsResult<IPostData>> {
  // Return a list of possible values for id
  const id = params?.id;
  const postData: IPost = getPostData(id);
  return {
    props: {
      postData,
    },
  };
}
