import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { IPost, IPostParams } from '@/common/types';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData(): IPost[] {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    /*const data: { date: string; title: string } = matterResult.data;*/
    const date = matterResult.data.date;
    const title = matterResult.data.title;

    return {
      id,
      date,
      title,
    };
  });
  // Sort posts by date
  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}

export function getAllPostIds(): IPostParams[] {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export function getPostData(id: string): IPost {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  // Use matter to parse metadata
  const matterResult = matter(fileContents);
  const date = matterResult.data.date;
  const title = matterResult.data.title;
  return {
    id,
    date,
    title,
  };
}
