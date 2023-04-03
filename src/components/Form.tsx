import { SubmitHandler, useForm } from 'react-hook-form';
import { Box, Stack, TextField, Button, Typography } from '@mui/material';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
const schema = Yup.object({
  url: Yup.string().url('Invalid URL').required('Required field'),
});

type FormData = Yup.InferType<typeof schema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: FormData) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack direction="row" sx={{ mt: '1rem' }}>
        <TextField
          // error
          {...register('url')}
          fullWidth
          id="url-input"
          aria-label="url"
          label="ссылка RSS"
          autoComplete="off"
          //   helperText={errors.url ? 'OOOPS' : ''}
        />
        <Button variant="contained" type="submit" aria-label="add">
          Добавить
        </Button>
      </Stack>
      <Typography>Пример: https://ru.hexlet.io/lessons.rss</Typography>
      {errors.url && <Typography>{errors.url?.message || 'Oops'}</Typography>}
    </form>
  );
};

export default Form;
