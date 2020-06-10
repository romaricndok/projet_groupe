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
<<<<<<< HEAD
import Champs from '../screens/champs';
import MyRecipe from '../screens/myRecipes';
import MyDetails from '../screens/myDetails';
=======
<<<<<<< HEAD
import Champs from '../screens/champs';
import MyRecipe from '../screens/myRecipes';
import MyDetails from '../screens/myDetails';
=======
import RecipesForm from '../screens/recipesForm';
>>>>>>> e1fd22a9e954b16df78e79035bffb7c2c20c639b
>>>>>>> 9e6ac0a0cd65dcc9100e1c3cdec115df9da70610

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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 9e6ac0a0cd65dcc9100e1c3cdec115df9da70610
          <PrivateRoute path='/details/:index/:query' component={Details} />
          <PrivateRoute path='/favoris' component={Favoris} />
          <PrivateRoute path='/champs' component={Champs} />
          <PrivateRoute path='/myDetails/:index' component={MyDetails} />
          <PrivateRoute path='/myRecipe' component={MyRecipe} />
<<<<<<< HEAD
=======
=======
          <Route path='/details/:index/:query' component={Details} />
          <Route path='/favoris' component={Favoris} />
          <Route path='/create' component={RecipesForm} />
>>>>>>> e1fd22a9e954b16df78e79035bffb7c2c20c639b
>>>>>>> 9e6ac0a0cd65dcc9100e1c3cdec115df9da70610
          <Redirect to='/'></Redirect>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default Routes;
