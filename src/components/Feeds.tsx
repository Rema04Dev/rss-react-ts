import {
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Paper,
  Badge,
  Divider,
} from '@mui/material';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import { useDispatch, useSelector } from 'react-redux';
import { IFeed, IState, IPost } from '../types';
import { setCurrentFeedId } from '../store/dataSlice';
import { useTranslation } from 'react-i18next';

const Feeds: React.FC = () => {
  const feeds: IFeed[] = useSelector((state: any) => state.data.feeds);
  const posts: IPost[] = useSelector((state: any) => state.data.posts);
  const currentFeedId = useSelector((state: any) => state.data.currentFeedId);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const allFeedsButtonCSS = {
    background: currentFeedId === 'all' ? 'green' : null,
  };
  return (
    <>
      <List>
        {feeds.length > 1 && (
          <Paper key="all">
            <ListItemButton
              sx={allFeedsButtonCSS}
              onClick={() => dispatch(setCurrentFeedId('all'))}
            >
              <Badge badgeContent={posts.length} color="primary">
                <RssFeedIcon />
              </Badge>
              <ListItemText sx={{ ml: 5 }}>{t('feeds.all')}</ListItemText>
            </ListItemButton>
            <Divider />
          </Paper>
        )}
        {feeds.map((feed) => {
          const relatedPosts = posts.filter((post) => post.feedId === feed.id);
          const feedCSS = {
            background:
              feeds.length > 1 && feed.id === currentFeedId ? 'red' : null,
          };
          return (
            <Paper key={feed.id}>
              <ListItemButton
                onClick={() => dispatch(setCurrentFeedId(feed.id))}
                sx={{
                  ...feedCSS,
                  '&: hover': '#a44',
                }}
              >
                <ListItemIcon>
                  <Badge badgeContent={relatedPosts.length} color="primary">
                    <RssFeedIcon />
                  </Badge>
                </ListItemIcon>
                <ListItemText>{feed.title}</ListItemText>
                <ListItemText>{feed.description}</ListItemText>
              </ListItemButton>
              <Divider />
            </Paper>
          );
        })}
      </List>
    </>
  );
};

export default Feeds;
