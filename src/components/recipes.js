import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

const checkIsPresent = (currentFavorite, titre) => {
  const result = currentFavorite.map(e => e.titre).indexOf(titre);
  if (result >= 0) {
    return true;
  } else {
    return false;
  }
};

const Recipes = ({
  addFavorite,
  titre,
  image,
  index,
  query,
  currentFavorite,
  setCurrentFavorite
}) => {
  const [isFavorite, setIsFavorite] = useState(
    checkIsPresent(currentFavorite, titre)
  );

  return (
    <MainDiv whileHover={{ scale: 1.02 }}>
      <Icon
        onClick={() =>
          addFavorite(
            index,
            titre,
            image,
            query,
            currentFavorite,
            setCurrentFavorite,
            setIsFavorite,
            checkIsPresent
          )
        }
        whileTap={{ scale: 1.5 }}
      >
        <FaHeart color={isFavorite ? 'red' : '#7f8c8d'} size='auto' />
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
  max-width: 19em;
  justify-content: center;
  color: ${props => props.theme.body};
`;
const MainDiv = styled(motion.div)`
  border-radius: 10px;
  padding: 5px;
  text-align: center;
  text-decoration: none;
  box-shadow: 0px 5px 5px;
  margin: 10px 5px 40px 0px;
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
  query: PropTypes.string,
  addFavorite: PropTypes.func,
  currentFavorite: PropTypes.object,
  setCurrentFavorite: PropTypes.func
};

export default Recipes;
