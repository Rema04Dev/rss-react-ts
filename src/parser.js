import { nanoid } from '@reduxjs/toolkit';

export default (xml) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(xml, 'text/xml');
  const parseError = doc.querySelector('parsererror');
  if (parseError) {
    const error = new Error(parseError.textContent);
    error.isParsingError = true;
    throw error;
  }
  const feedTitle = doc.querySelector('title');
  const feedDescription = doc.querySelector('description');
  const feedItems = [...doc.querySelectorAll('item')];
  const feedId = nanoid();
  const posts = feedItems.map((post) => ({
    id: nanoid(),
    feedId,
    title: post.querySelector('title').textContent,
    description: post.querySelector('description').textContent,
    link: post.querySelector('link').textContent,
  }));
  return {
    feed: {
      id: feedId,
      title: feedTitle.textContent,
      description: feedDescription.textContent,
    },
    posts,
  };
};
