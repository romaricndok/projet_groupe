import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Menu from '../components/menu/index';
import { Link } from 'react-router-dom';
import Burger from '../components/Burger';
import MenuBar from '../components/MenuBar';
import { useOnClickOutside } from '../config/hooks';
import { motion } from 'framer-motion';

const MyRecipe = () => {
  const history = useHistory();
  const [ingredients, setIngredient] = useState([]);
  const [images, setImage] = useState([]);
  const [titres, setTitre] = useState([]);
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = 'main-menu';
  useOnClickOutside(node, () => setOpen(false));

  useEffect(() => {
    async function fetchData() {
      const resultIngredient = await getResultIngredient();
      const resultImage = await getResultImage();
      const resultTitre = await getResultTitre();
      if (resultImage) {
        setIngredient(resultIngredient);
        setImage(resultImage);
        setTitre(resultTitre);
      }
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

  const afficheImage = images.map((image, idx) => (
    <StyledLink key={`image-${idx}`} to={`/myDetails/${idx}`}>
      <MainDiv whileHover={{ scale: 1.02 }}>
        <h1>{titres[idx]}</h1>
        <ImageStyle src={image} />
      </MainDiv>
    </StyledLink>
  ));

  return (
    <div>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
        <MenuBar open={open} setOpen={setOpen} id={menuId} />
      </div>
      <Menu></Menu>
      <MainContainer>
        <RecipesStyle>{afficheImage}</RecipesStyle>
        <ButtonStyle onClick={() => history.push('/Champs')}>
          Ajouter une recette
        </ButtonStyle>
      </MainContainer>
    </div>
  );
};

const StyledLink = styled(Link)`
  text-decoration: none;
  max-width: 19em;
  justify-content: center;
  font-weight: 50em;
`;

const ImageStyle = styled.img`
  border-radius: 3%;
  width: 250px;
  height: 250px;
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
  font-family: 'Segoe UI', 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const ButtonStyle = styled.button`
  display: block;
  border: none;
  padding: 10px 20px;
  margin: auto;
`;

const MainContainer = styled.div`
  padding: 50px 0 20px;
`;

export default MyRecipe;
