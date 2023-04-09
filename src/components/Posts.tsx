import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Link,
} from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { IPost, IState } from '../types';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPostId, addVisitedPost, setOpen } from '../store/dataSlice';

const Posts: React.FC = () => {
  const posts: IPost[] = useSelector((state: any) => state.data.posts);
  const visitedPostsIds = useSelector(
    (state: any) => state.data.visitedPostsIds
  );
  const currentFeedId = useSelector((state: any) => state.data.currentFeedId);

  const relatedPosts =
    currentFeedId === 'all'
      ? posts
      : posts.filter((post) => post.feedId === currentFeedId);
  const dispatch = useDispatch();
  const handleOpen = () => dispatch(setOpen(true));
  const visitedCSS = {
    color: 'red',
    textDecoration: 'none',
  };
  return (
    <List>
      {relatedPosts.map((post) => {
        if (visitedPostsIds.includes(post.id)) {
          return (
            <ListItemButton key={post.id}>
              <ListItemIcon
                onClick={() => {
                  dispatch(setCurrentPostId(post.id));
                  dispatch(addVisitedPost(post.id));
                  handleOpen();
                }}
              >
                <OpenInNewIcon />
              </ListItemIcon>
              <ListItemText>
                <Link
                  sx={visitedCSS}
                  component="a"
                  target="_blank"
                  href={post.link}
                >
                  {post.title}
                </Link>
              </ListItemText>
            </ListItemButton>
          );
        }
        return (
          <>
            <ListItemButton key={post.id}>
              <ListItemIcon
                onClick={() => {
                  dispatch(setCurrentPostId(post.id));
                  dispatch(addVisitedPost(post.id));
                  handleOpen();
                }}
              >
                <OpenInNewIcon />
              </ListItemIcon>
              <ListItemText>
                <Link
                  onClick={() => {
                    dispatch(setCurrentPostId(post.id));
                    dispatch(addVisitedPost(post.id));
                  }}
                  component="a"
                  target="_blank"
                  href={post.link}
                >
                  {post.title}
                </Link>
              </ListItemText>
            </ListItemButton>
          </>
        );
      })}
    </List>
  );
};

export default Posts;
