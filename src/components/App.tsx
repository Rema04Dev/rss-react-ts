import {
  Button,
  TextField,
  Typography,
  Box,
  Stack,
  Container,
} from '@mui/material';

const App = () => {
  return (
    <main>
      <Container>
        <Typography variant="h2" component="h1">
          RSS агрегатор
        </Typography>
        <Typography>
          Начните читать RSS сегодня! Это легко, это красиво.
        </Typography>
        <form>
          <Stack direction="row" sx={{ mt: '1rem' }}>
            <TextField
              // error
              fullWidth
              id="url-input"
              name="url"
              aria-label="url"
              label="ссылка RSS"
              autoComplete="off"
              // helperText="Incorrect entry."
            />
            <Button variant="contained" type="submit" aria-label="add">
              Добавить
            </Button>
          </Stack>
        </form>
        <Typography>Пример: https://ru.hexlet.io/lessons.rss</Typography>
        <p className="feedback m-0 position-absolute small text-danger"></p>
      </Container>
    </main>
  );
};

export default App;
