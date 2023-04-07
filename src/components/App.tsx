import Header from './Header';
import Form from './Form';
import Feeds from './Feeds';
import Posts from './Posts';

import { Container, Grid, Paper } from '@mui/material';
import Modal from './Modal';
import { useSelector } from 'react-redux';
import { IPost } from '../types';
const App: React.FC = () => {
  const { currentPostId, posts } = useSelector((state: any) => state.data);
  const currentPost = posts.find((post: IPost) => post.id === currentPostId);
  return (
    <main>
      <Paper>
        <Header>
          <Container>
            <Form />
          </Container>
        </Header>
        <Container>
          <Grid container>
            <Grid item xs={4}>
              <Feeds />
            </Grid>
            <Grid xs={8}>
              <Posts />
            </Grid>
          </Grid>
        </Container>
      </Paper>
      {currentPost && <Modal post={currentPost} />}
    </main>
  );
};

export default App;
