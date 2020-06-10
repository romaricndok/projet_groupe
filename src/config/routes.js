import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch
} from 'react-router-dom';

import PrivateRoute from '../utils/privateRoute';
import Home from '../screens/home';
import Login from '../screens/login';
import Details from '../screens/details';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../utils/theme/global';
import { lightTheme, darkTheme } from '../utils/theme/theme';
import { useSelector } from 'react-redux';
import Favoris from '../screens/favoris';
import RecipesForm from '../screens/recipesForm';
// import MyRecipe from '../screens/myRecipe';
//  add to switch  <PrivateRoute path='/myRepice' component={MyRecipe} />

const Routes = () => {
  const themeG = useSelector(state => state.themes.themeActuel);

  return (
    <ThemeProvider theme={`${themeG}` === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/login' component={Login} />
          <PrivateRoute path='/home' component={Home} />
          <Route path='/details/:index/:query' component={Details} />
          <PrivateRoute path='/favoris' component={Favoris} />
          <PrivateRoute path='/create' component={RecipesForm} />

          <Redirect to='/'></Redirect>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default Routes;
