import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Menu from '../components/menu/index';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MyDetails = props => {
  const [myIngredient, setMyIngredient] = useState([]);
  const [images, setImage] = useState([]);
  const [titres, setTitre] = useState([]);
  const element = props.match.params.index;

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
      <Menu></Menu>
      <MainContainer>
        <RecipesStyle>
          {
            <MainDiv>
              <Link to='null'>
                <h1>{titres[element]}</h1>
              </Link>
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

const MainContainer = styled.div`
  padding: 50px 0 20px;
`;

MyDetails.propTypes = {
  match: PropTypes.object
};

export default MyDetails;
