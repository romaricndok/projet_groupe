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

<<<<<<< HEAD
const Recipes = ({
  addFavorite,
  titre,
  image,
  index,
  query,
  currentFavorite,
  setCurrentFavorite
}) => {
=======
const Recipes = ({ addFavorite, titre, image, index, query }) => {
  const [currentFavorite, setCurrentFavorite] = useState(
    JSON.parse(localStorage.getItem('favorite'))
      ? JSON.parse(localStorage.getItem('favorite'))
      : []
  );
  useEffect(() => {
    console.log('current ', currentFavorite);
    localStorage.setItem('favorite', JSON.stringify(currentFavorite));
  }, [currentFavorite]);

>>>>>>> e1fd22a9e954b16df78e79035bffb7c2c20c639b
  const [isFavorite, setIsFavorite] = useState(
    checkIsPresent(currentFavorite, titre)
  );

  return (
    <MainDiv whileHover={{ scale: 1.05 }}>
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
        <FaHeart color={isFavorite ? 'red' : 'gray'} size='auto' />
      </Icon>
      <Link to={`/details/${index}/${query}`}>
        <h1>{titre}</h1>
        <ImageStyle src={image} />
      </Link>
    </MainDiv>
  );
};

const ImageStyle = styled.img`
  border-bottom-left-radius: 15%;
  border-bottom-right-radius: 15%;
`;

const Icon = styled(motion.div)`
  height: 50px;
  width: 30px;
  margin: 10px;
`;

const MainDiv = styled(motion.div)`
  border-radius: 10px;
  box-shadow: 0px 5px 20px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-width: 20%;
`;

Recipes.propTypes = {
  titre: PropTypes.string,
  click: PropTypes.func,
  image: PropTypes.string,
  index: PropTypes.number,
  query: PropTypes.string,
  addFavorite: PropTypes.func
};

export default Recipes;
