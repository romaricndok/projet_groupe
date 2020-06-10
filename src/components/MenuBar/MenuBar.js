import React from 'react';
import { bool } from 'prop-types';
import { StyledMenuBar } from './MenuBar.styled';
import ButtonTheme from '../menu/buttonTheme';
import styled from 'styled-components';

const MenuBar = ({ open }) => {
  return (
    <StyledMenuBar open={open}>
      <a href='/'>
        <span role='img' aria-label='House'>
          🏠
        </span>
        Acceuil
      </a>
      <a href='/favoris'>
        <span role='img' aria-label='love'>
          ❤️
        </span>
        Favoris
      </a>
      <a href='/myRecipe'>
        <span role='img' aria-label='spoon'>
          🍳
        </span>
        Mes Recettes
      </a>
      <ButtonContain>
        <ButtonTheme></ButtonTheme>
      </ButtonContain>
    </StyledMenuBar>
  );
};
const ButtonContain = styled.div`
  display: flex;
  flex-direction: space-around;
  justify-content: center;
  margin-top: 20px;
  @media (max-width: 463px) {
    display: show;
  }
`;

MenuBar.propTypes = {
  open: bool.isRequired
};
export default MenuBar;
