import Header from './Header';
import Form from './Form';

import { Typography, Container } from '@mui/material';

const App = () => {
  return (
    <main>
      <Container>
        <Header>
          <Form />
        </Header>
      </Container>
    </main>
  );
};

export default App;
