import React from 'react'
import ReactDOM from 'react-dom/client'

import  GlobalStyle  from './styles/global';

import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

import { Home } from './pages/Home';
import { SingIn } from './pages/SingIn/index';
import { SingUp } from './pages/SingUp/index';
import { MoviePreview } from './pages/MoviePreview';
import { CreateMovie } from './pages/CreateMovie';
import { Profile } from './pages/Profile';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Profile/>
    </ThemeProvider>

  </React.StrictMode>,
)
