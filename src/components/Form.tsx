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
import { IData, IPost } from '../types';
import { nanoid } from '@reduxjs/toolkit';

const buildProxyURL = (url: any): any => {
  const resultUrl = new URL('https://allorigins.hexlet.app/get');
  // resultUrl.searchParams.set('disableCache', true);
  resultUrl.searchParams.set('url', url);
  return resultUrl;
};
const Form: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [parseError, setParseError] = useState('');
  const dispatch = useDispatch();
  const urls = useSelector((state: any) => state.data.urls);
  const { t } = useTranslation();

  const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
    const { url } = data;
    try {
      setParseError('');
      setLoading(true);

      const response = await axios.get(buildProxyURL(url));
      const resonseData: any = parser(response.data.contents);
      const { feed, posts } = resonseData;
      const feedId = nanoid();
      feed.id = feedId;
      posts.forEach((post: IPost) => {
        post.id = nanoid();
        post.feedId = feedId;
      });
      dispatch(addFeed(resonseData.feed));
      dispatch(addPosts(resonseData.posts));
      dispatch(addUrl(url));
      setLoading(false);
      resetField('url');
    } catch (err: any) {
      if (err.isParsingError) {
        setParseError('errors.invalidRSS');
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
          helperText={
            Boolean(errors.url?.message) && t(`errors.${errors.url?.message}`)
          }
        />
        <LoadingButton
          sx={{
            alignSelf: 'flex-start',
            height: '3.5rem',
          }}
          type="submit"
          size="large"
          endIcon={<SendIcon />}
          loading={loading}
          loadingPosition="end"
          variant="contained"
        >
          <span>{t('form.send')}</span>
        </LoadingButton>
      </Stack>
      <Typography>
        <span style={{ userSelect: 'none' }}>{t('form.example')} </span>
        https://ru.hexlet.io/lessons.rss
      </Typography>
      {parseError && (
        <Typography color="error">{t(`${parseError}`)}</Typography>
      )}
    </form>
  );
};

export default Form;
