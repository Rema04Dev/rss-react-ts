import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './store/store';
import i18next from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import resources from './locales/index';
import { ThemeProvider, createTheme, styled } from '@mui/material';

import theme from './theme';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const i18n = i18next.createInstance();
i18n.use(initReactI18next).init({
  resources,
  lng: 'ru',
});

root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>
    </I18nextProvider>
  </React.StrictMode>
);
