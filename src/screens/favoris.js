import React, { useState, useEffect, useRef } from 'react';
import Menu from '../components/menu/index';
import styled from 'styled-components';
import Recipes from '../components/recipes';
import Burger from '../components/Burger';
import MenuBar from '../components/MenuBar';
import { useOnClickOutside } from '../config/hooks';

const Favoris = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  const menuId = 'main-menu';
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
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
        <MenuBar open={open} setOpen={setOpen} id={menuId} />
      </div>
      <Menu></Menu>
      <MainContainer>
        <Titre>La liste des favoris</Titre>
        <RecipesStyle>
          {fav.map(recipe => (
            <Recipes
              key={recipe.titre}
              titre={recipe.titre}
              image={recipe.image}
              index={recipe.index}
              query={recipe.query}
            />
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

export default Favoris;
