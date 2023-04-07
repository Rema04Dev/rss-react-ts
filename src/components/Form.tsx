import { SubmitHandler, useForm } from 'react-hook-form';
import { Stack, TextField, Button, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import parser from '../parser';
import { validate } from '../utils/validation';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { addPosts, addFeed, addUrl } from '../store/dataSlice';
import { IData } from '../types';
const buildProxyURL = (url: any): any => {
  const resultUrl = new URL('https://allorigins.hexlet.app/get');
  // resultUrl.searchParams.set('disableCache', true);
  resultUrl.searchParams.set('url', url);
  return resultUrl;
};

const Form: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [parseError, setParseError] = useState(false);
  const dispatch = useDispatch();
  const urls = useSelector((state: any) => state.data.urls);
  const { t } = useTranslation();

  const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
    const { url } = data;
    try {
      setParseError(false);
      setLoading(true);

      const response = await axios.get(buildProxyURL(url));
      const resonseData: any = parser(response.data.contents);
      dispatch(addFeed(resonseData.feed));
      dispatch(addPosts(resonseData.posts));
      dispatch(addUrl(url));
      setLoading(false);
      resetField('url');
    } catch (err) {
      if (err.isParsingError) {
        setParseError('INVALID RSS');
        setLoading(false);
      }
    }
  };

  const schema = validate(urls);
  type FormData = Yup.InferType<typeof schema>;

  const {
    register,
    resetField,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack direction="row" sx={{ mt: '1rem' }}>
        <TextField
          error={Boolean(errors.url?.message)}
          {...register('url')}
          fullWidth
          disabled={loading}
          aria-label="url"
          label={t('form.label')}
          autoComplete="off"
          // InputProps={{
          //   style: {
          //     color: '#fff',
          //   },
          // }}
          // sx={{ '& input': { color: '#fff' } }}
          helperText={Boolean(errors.url?.message) && t(errors.url?.message)}
        />
        {/* <Button variant="contained" type="submit" aria-label="add">
          Добавить
        </Button> */}
        <LoadingButton
          type="submit"
          size="small"
          endIcon={<SendIcon />}
          loading={loading}
          loadingPosition="end"
          variant="contained"
        >
          <span>Send</span>
        </LoadingButton>
      </Stack>
      <Typography>{t('form.example')}</Typography>
      {/* STATUS */}
      {parseError && <Typography>{parseError}</Typography>}
    </form>
  );
};

export default Form;
