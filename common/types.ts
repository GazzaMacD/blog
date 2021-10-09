// Post Types
export interface IPostId {
  [id: string]: string;
}
export interface IPostParams {
  params: IPostId;
}
export interface IPostData {
  id: string;
  title: string;
  date: string;
}

export interface IPost extends IPostData {
  contentHtml: string;
}
