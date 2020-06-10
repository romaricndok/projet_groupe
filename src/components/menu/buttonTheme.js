import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { changerTheme } from '../../actions/themes';
import { ReactComponent as MoonIcon } from '../../assets/moon.svg';
import { ReactComponent as SunIcon } from '../../assets/sun.svg';

const ButtonTheme = () => {
  const isLight = useSelector(state => state.themes.themeActuel) === 'light';
  const dispatch = useDispatch();

  return (
    <ButtonContainer onClick={() => dispatch(changerTheme())} isLight={isLight}>
      <SunIcon />
      <MoonIcon />
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: right;
  margin: 24px;
  overflow: hidden;

  position: relative;
  width: 5rem;
  float: right;

  svg {
    height: auto;
    width: 1.5rem;
    transition: all 0.3s linear;

    // sun icon
    &:first-child {
      transform: ${({ isLight }) =>
        isLight ? 'translateY(0)' : 'translateY(100px)'};
    }

    // moon icon
    &:last-child {
      transform: ${({ isLight }) =>
        isLight ? 'translateY(-100px)' : 'translateY(0)'};
    }
  }
`;

ButtonTheme.propTypes = {
  themeG: PropTypes.string,
  changerTheme: PropTypes.func
};

export default ButtonTheme;
