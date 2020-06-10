import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Menu from '../components/menu/index';
import { Link } from 'react-router-dom';
import Burger from '../components/Burger';
import MenuBar from '../components/MenuBar';
import { useOnClickOutside } from '../config/hooks';

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
    <Link key={`image-${idx}`} to={`/myDetails/${idx}`}>
      <MainDiv>
        <h1>{titres[idx]}</h1>
        <ImageStyle src={image} />
      </MainDiv>
    </Link>
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

const ImageStyle = styled.img`
  border-bottom-left-radius: 15%;
  border-bottom-right-radius: 15%;
  width: 300px;
  height: 300px;
`;

const MainDiv = styled.div`
  border-radius: 10px;
  box-shadow: 0px 5px 20px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-width: 40%;
`;
const RecipesStyle = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
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
