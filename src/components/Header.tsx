import { Typography, Box } from '@mui/material';
const Header = (props: any) => {
  return (
    <>
      <Box>
        <Typography variant="h2" component="h1">
          RSS агрегатор
        </Typography>
        <Typography>
          Начните читать RSS сегодня! Это легко, это красиво.
        </Typography>
        {props.children}
      </Box>
    </>
  );
};

export default Header;
