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
        <h1>{recipe.label}</h1>
        <img src={recipe.image} alt={recipe.label} />
        <h4>Ingredients</h4>
        {recipe.ingredientLines.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </MainContainer>
    </div>
  );
};

const MainContainer = styled.div`
  padding-top: 60px;
`;

Details.propTypes = {
  match: PropTypes.object
};
export default Details;
