import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const checkIsPresent = (currentFavorite, titre) => {
  const result = currentFavorite.map(e => e.titre).indexOf(titre);
  /* console.log('result :', result);
  console.log('currentFavorite',currentFavorite)
  console.log('titre',titre) */
  if (result >= 0) {
    return true;
  } else {
    return false;
  }
};

const Recipes = ({ titre, image, index, query }) => {
  const [currentFavorite, setCurrentFavorite] = useState(
    JSON.parse(localStorage.getItem('favorite'))
      ? JSON.parse(localStorage.getItem('favorite'))
      : []
  );
  useEffect(() => {
    localStorage.setItem('favorite', JSON.stringify(currentFavorite));
  }, [currentFavorite]);

  const [isFavorite, setIsFavorite] = useState(
    checkIsPresent(currentFavorite, titre)
  );

  /*  useEffect(() => {
    console.log('isFavorite', isFavorite);
  }, []); */

  const addFavorite = (index, titre, image, query) => {
    const recipeFav = { index, titre, image, query };
    //console.log('recipeFav',recipeFav);

    const isPresent = checkIsPresent(currentFavorite, titre);

    if (isPresent === false) {
      setIsFavorite(true);
      setCurrentFavorite([...currentFavorite, recipeFav]);

      toast.success(
        'You added ' + recipeFav.titre + ' to favorite Successfully!',
        { position: toast.POSITION.TOP_CENTER }
      );
    } else {
      const filteredRecipes = currentFavorite.filter(
        recipe => recipe.titre !== recipeFav.titre
      );
      setIsFavorite(false);
      setCurrentFavorite(filteredRecipes);
      toast.warning(
        'You removed ' + recipeFav.titre + ' to favorite Successfully!',
        { position: toast.POSITION.TOP_CENTER, autoClose: false }
      );
    }
  };

  return (
    <MainDiv whileHover={{ scale: 1.02 }}>
      <Icon
        onClick={() => addFavorite(index, titre, image, query)}
        whileTap={{ scale: 1.5 }}
      >
        <FaHeart color={isFavorite ? 'red' : 'gray'} size='auto' />
      </Icon>
      <StyledLink to={`/details/${index}/${query}`}>
        <h1>{titre}</h1>
        <ImageStyle src={image} />
      </StyledLink>
    </MainDiv>
  );
};

const ImageStyle = styled.img`
  border-bottom-left-radius: 3%;
  border-bottom-right-radius: 3%;
`;

const Icon = styled(motion.div)`
  height: 50px;
  width: 30px;
  margin: 10px;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.tileText};
`;
const MainDiv = styled(motion.div)`
  border-radius: 10px;
  padding: 5px;
  text-align: center;
  text-decoration: none;
  box-shadow: 0px 5px 20px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-width: 20%;
  background-color: ${props => props.theme.tile};
  color: ${props => props.theme.tileShadow};
`;

Recipes.propTypes = {
  titre: PropTypes.string,
  click: PropTypes.func,
  image: PropTypes.string,
  index: PropTypes.number,
  query: PropTypes.string
};

export default Recipes;
