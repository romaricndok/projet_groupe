import React from 'react';
import Routes from './config/routes';
import { Provider } from 'react-redux';
import { store } from './config/store';
import './config/translations';

const App = () => {
  console.log(store.getState().themes.themeActuel);
  return (
    <Provider store={store}>
      <Routes></Routes>
    </Provider>
  );
};

export default App;
