import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import Menu from '../components/menu/index';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Burger from '../components/Burger';
import MenuBar from '../components/MenuBar';
import { useOnClickOutside } from '../config/hooks';
import { motion } from 'framer-motion';

const MyDetails = props => {
  const [myIngredient, setMyIngredient] = useState([]);
  const [images, setImage] = useState([]);
  const [titres, setTitre] = useState([]);
  const element = props.match.params.index;
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = 'main-menu';
  useOnClickOutside(node, () => setOpen(false));

  useEffect(() => {
    async function fetchData() {
      const resultIngredient = await getResultIngredient();
      const resultImage = await getResultImage();
      const resultTitre = await getResultTitre();
      setMyIngredient(resultIngredient[element]);
      setImage(resultImage);
      setTitre(resultTitre);
    }
    fetchData();
  }, []);

  const getResultIngredient = () => {
    const result = JSON.parse(localStorage.getItem('ingredient'));
    return result;
  };
  const getResultImage = () => {
    const result = JSON.parse(localStorage.getItem('image'));
    return result;
  };
  const getResultTitre = () => {
    const result = JSON.parse(localStorage.getItem('titre'));
    return result;
  };

  return (
    <div>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
        <MenuBar open={open} setOpen={setOpen} id={menuId} />
      </div>
      <Menu></Menu>
      <MainContainer>
        <RecipesStyle>
          {
            <MainDiv whileHover={{ scale: 1.02 }}>
              <StyledLink to='null'>
                <h1>{titres[element]}</h1>
              </StyledLink>
              <ImageStyle src={images[element]} alt={images[element]} />
              <h4>Ingredients</h4>
              <ol>
                {myIngredient.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ol>
            </MainDiv>
          }
        </RecipesStyle>
      </MainContainer>
    </div>
  );
};
const StyledLink = styled(Link)`
  text-decoration: none;
  max-width: 19em;
  justify-content: center;
  color: ${props => props.theme.tileShadow};
`;
const ImageStyle = styled.img`
  border-radius: 3%;
  width: 300px;
  height: 300px;
`;

const MainDiv = styled(motion.div)`
  border-radius: 10px;
  padding: 5px;
  text-align: center;
  text-decoration: none;
  box-shadow: 0px 5px 5px;
  margin: 50px 5px 40px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-width: 20%;
  background-color: ${props => props.theme.tile};
  color: ${props => props.theme.tileShadow};
`;
const RecipesStyle = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const MainContainer = styled.div`
  padding: 50px 0 20px;
`;

MyDetails.propTypes = {
  match: PropTypes.object
};

export default MyDetails;
