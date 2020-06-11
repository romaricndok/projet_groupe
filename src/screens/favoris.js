import React, { useState, useEffect, useRef } from 'react';
import Menu from '../components/menu/index';
import styled from 'styled-components';
import Recipes from '../components/recipes';
import Burger from '../components/Burger';
import MenuBar from '../components/MenuBar';
import { useOnClickOutside } from '../config/hooks';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Favoris = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = 'main-menu';
  useOnClickOutside(node, () => setOpen(false));
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
            <StyledLink
              key={recipe.titre}
              to={`/details/${recipe.index}/${recipe.query}`}
            >
              <MainDiv whileHover={{ scale: 1.02 }}>
                <FaHeart color='red' size='3vh' />
                <p>{recipe.titre}</p>
                <ImageStyle src={recipe.image} />
              </MainDiv>
            </StyledLink>
          ))}
        </RecipesStyle>
      </MainContainer>
    </div>
  );
};

const ImageStyle = styled.img`
  border-radius: 3%;
  width: 250px;
  height: 250px;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  max-width: 19em;
  justify-content: center;
  color: ${props => props.theme.body};
`;
const RecipesStyle = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 20px;
  text-decoration: none;
  font-family: 'Segoe UI', 'Open Sans', 'Helvetica Neue', sans-serif;
  padding: 0px 50px;
`;
const MainDiv = styled(motion.div)`
  border-radius: 10px;
  padding: 30px 30px;
  text-align: center;
  text-decoration: none;
  box-shadow: 0px 5px 5px;
  margin: 10px 30px 30px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-width: 40%;
  background-color: ${props => props.theme.tile};
  color: ${props => props.theme.tileShadow};
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
