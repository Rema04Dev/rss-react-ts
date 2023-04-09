export interface IPost {
  id: string;
  feedId: string;
  title: string;
  description: string;
  link: string;
}

export interface IFeed {
  id: string;
  title: string;
  description: string;
}

export interface IData {
  feed: IFeed;
  posts: Array<IPost>;
}

export interface IState {
  feeds: Array<IFeed>;
  posts: Array<IPost>;
  urls: Array<string>;
  currentPostId: number | null;
  currentFeedId: number | string;
  visitedPostsIds: string[];
  isOpen: boolean;
}
