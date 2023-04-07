import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IState, IFeed, IPost } from '../types';

const initialState: IState = {
  feeds: [],
  posts: [],
  urls: [],
  currentPostId: null,
  currentFeedId: null,
  visitedPostsIds: [],
  isOpen: false,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    addFeed: (state, action: PayloadAction<IFeed>) => {
      state.feeds = [action.payload, ...state.feeds];
    },
    addPosts: (state, action: PayloadAction<IPost[]>) => {
      state.posts = [...action.payload, ...state.posts];
    },
    addUrl: (state, action) => {
      state.urls = [...state.urls, action.payload];
    },
    //
    setCurrentPostId: (state, action) => {
      state.currentPostId = action.payload;
    },
    setCurrentFeedId: (state, action) => {
      state.currentFeedId = action.payload;
    },
    addVisitedPost: (state, action) => {
      state.visitedPostsIds = [...state.visitedPostsIds, action.payload];
    },
    setOpen: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export default dataSlice.reducer;
export const {
  addFeed,
  addPosts,
  addUrl,
  setCurrentPostId,
  setCurrentFeedId,
  addVisitedPost,
  setOpen,
} = dataSlice.actions;
