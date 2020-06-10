import React, { useState, useEffect } from 'react';
import Menu from '../components/menu/index';
import styled from 'styled-components';
import Recipes from '../components/recipes';

const Favoris = () => {
  const [fav, setFav] = useState(
    JSON.parse(localStorage.getItem('favorite'))
      ? JSON.parse(localStorage.getItem('favorite'))
      : []
  );
  useEffect(() => {
    console.log('favorite', fav);
  });
  return (
    <div>
      <Menu></Menu>
      <MainContainer>
        <Titre>La liste des favoris</Titre>
        <RecipesStyle>
          {fav.map(recipe => (
<<<<<<< HEAD
            <MainDiv key={recipe.titre}>
              <p>{recipe.titre}</p>
              <img src={recipe.image} />
            </MainDiv>
=======
            <Recipes
              key={recipe.titre}
              titre={recipe.titre}
              image={recipe.image}
              index={recipe.index}
              query={recipe.query}
            />
>>>>>>> e1fd22a9e954b16df78e79035bffb7c2c20c639b
          ))}
        </RecipesStyle>
      </MainContainer>
    </div>
  );
};

const RecipesStyle = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Titre = styled.h1`
  padding: 20px;
  margin: 20px;
  text-align: center;
  font-weight: bold;
  font-family: system-ui;
`;

const MainContainer = styled.div`
  padding: 50px 0 20px;
`;
<<<<<<< HEAD
const MainDiv = styled.div`
  border-radius: 10px;
  box-shadow: 0px 5px 20px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-width: 20%;
`;
=======
>>>>>>> e1fd22a9e954b16df78e79035bffb7c2c20c639b

export default Favoris;
