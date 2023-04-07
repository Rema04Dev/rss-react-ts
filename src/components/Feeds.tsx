import {
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Paper,
  Badge,
} from '@mui/material';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import { useDispatch, useSelector } from 'react-redux';
import { IFeed, IState, IPost } from '../types';
import { setCurrentFeedId } from '../store/dataSlice';
const Feeds: React.FC = () => {
  const feeds: IFeed[] = useSelector((state: any) => state.data.feeds);
  const posts: IPost[] = useSelector((state: any) => state.data.posts);
  const currentFeedId = useSelector((state: any) => state.data.currentFeedId);
  const dispatch = useDispatch();

  return (
    <>
      <List>
        {feeds.length !== 0 && (
          <Paper key="all">
            <ListItemButton onClick={() => dispatch(setCurrentFeedId(null))}>
              {/* <ListItemIcon> */}
              <Badge badgeContent={posts.length} color="primary">
                <RssFeedIcon />
              </Badge>
              {/* </ListItemIcon> */}
              <ListItemText sx={{ ml: 5 }}>ALL</ListItemText>
            </ListItemButton>
          </Paper>
        )}
        {feeds.map((feed) => {
          const feedCSS = {
            // background: feed.id === currentFeedId && 'red',
            background: 'red',
          };
          const relatedPosts = posts.filter((post) => post.feedId === feed.id);
          return (
            <Paper key={feed.id}>
              <ListItemButton
                onClick={() => dispatch(setCurrentFeedId(feed.id))}
                sx={{ feedCSS }}
              >
                <ListItemIcon>
                  <Badge badgeContent={relatedPosts.length} color="primary">
                    <RssFeedIcon />
                  </Badge>
                </ListItemIcon>
                <ListItemText>{feed.title}</ListItemText>
                <ListItemText>{feed.description}</ListItemText>
              </ListItemButton>
            </Paper>
          );
        })}
      </List>
    </>
  );
};

export default Feeds;
