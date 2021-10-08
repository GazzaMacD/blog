// Post Types
export interface IPostId {
  [id: string]: string;
}
export interface IPostParams {
  params: IPostId;
}
export interface IPost {
  id: string;
  title: string;
  date: string;
}
