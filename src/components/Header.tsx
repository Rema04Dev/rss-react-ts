import styled from '@emotion/styled';
import { Typography, Box, Container } from '@mui/material';
import { PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';

// const MyThemeComponent = styled('div')(({ theme }) => ({
// color: theme.palette.primary.contrastText,
// backgroundColor: theme.palette.primary.main,
// padding: theme.spacing(1),
// borderRadius: theme.shape.borderRadius,
// }));

const Header: React.FC<PropsWithChildren> = (props) => {
  const { t } = useTranslation();
  const { children } = props;
  return (
    <>
      <Container sx={{ p: '48px', background: 'primary.dark' }}>
        <Typography variant="h1">{t('header.title')}</Typography>
        <Typography sx={{ mb: '1.5rem' }}>{t('header.subtitle')}</Typography>
        {children}
      </Container>
    </>
  );
};

export default Header;
