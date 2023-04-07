import { Typography, Box, Container } from '@mui/material';
import { PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';

const Header: React.FC<PropsWithChildren> = (props) => {
  const { t } = useTranslation();
  const { children } = props;
  return (
    <>
      <Container sx={{ p: '48px' }}>
        <Typography variant="h1">{t('header.title')}</Typography>
        <Typography sx={{ mb: '1.5rem' }}>{t('header.subtitle')}</Typography>
        {children}
      </Container>
    </>
  );
};

export default Header;
