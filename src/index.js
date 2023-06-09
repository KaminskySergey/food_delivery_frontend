import React from 'react';
import ReactDOM from 'react-dom/client';
import  App  from 'components/App';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { theme } from 'components/Theme/theme';
import { persistor, store } from './redux/store';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <ThemeProvider theme={theme}>

    <Provider  store={store}> 
    <PersistGate loading={null}
        persistor={persistor}>
    <BrowserRouter basename="food_delivery">
    <App />
    </BrowserRouter>
    </PersistGate>
    </Provider> 
    </ThemeProvider>
</React.StrictMode>
);
