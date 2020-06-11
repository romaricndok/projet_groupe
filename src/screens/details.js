import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { getApiDetail } from '../utils/getApi';
import Menu from '../components/menu/index';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../utils/theme/global';
import { lightTheme, darkTheme } from '../utils/theme/theme';
import Burger from '../components/Burger';
import MenuBar from '../components/MenuBar';
import { useOnClickOutside } from '../config/hooks';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Details = props => {
  const [recipe, setRecipe] = useState({ ingredientLines: [] });
  const themeG = useSelector(state => state.themes.themeActuel);
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  const menuId = 'main-menu';
  console.log(props);
  useEffect(() => {
    async function fetchData() {
      const response = await getApiDetail(
        props.match.params.query,
        props.match.params.index
      );
      setRecipe(response[0].recipe);
    }
    fetchData();
  }, []);

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
                <h1>{recipe.label}</h1>
              </StyledLink>
              <ImageStyle src={recipe.image} alt={recipe.label} />
              <h4>Ingredients</h4>
              {recipe.ingredientLines.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
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
  color: ${props => props.theme.body};
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
  color: ${props => props.theme.body};
`;
const RecipesStyle = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const MainContainer = styled.div`
  padding: 50px 0 20px;
`;
Details.propTypes = {
  match: PropTypes.object
};
export default Details;
