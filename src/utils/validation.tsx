import * as Yup from 'yup';

export const validate = (urls: string[]) => {
  return Yup.object({
    url: Yup.string().url('mustBeValid').notOneOf(urls, 'duplicate'),
  });
};
