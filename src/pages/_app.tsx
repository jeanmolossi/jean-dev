import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@assets/GlobalStyle';

const theme = {};

export default function App({ Component, pageProps }: any) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}