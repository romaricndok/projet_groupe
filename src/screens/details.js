import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { getApiDetail } from '../utils/getApi';
import Menu from '../components/menu/index';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../utils/theme/global';
import { lightTheme, darkTheme } from '../utils/theme/theme';

const Details = props => {
  const [recipe, setRecipe] = useState({ ingredientLines: [] });
  const themeG = useSelector(state => state.themes.themeActuel);

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
      <Menu></Menu>
      <MainContainer>
        <div>details</div>
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
