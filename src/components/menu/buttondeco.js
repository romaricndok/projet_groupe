import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Buttondeco = ({ disconnect, label }) => {
  const isLight = useSelector(state => state.themes.themeActuel) === 'light';

  return (
    <ButtonDeco onClick={disconnect} isLight={isLight}>
      <p>{label}</p>
    </ButtonDeco>
  );
};

const ButtonDeco = styled.button`
  background: ${props => props.theme.primary};
  border-radius: 30px;
  border-color: white;
  cursor: pointer;
  display: flex;
  font-size: 0.7rem;
  justify-content: center;
  margin: 0vh 0vh 0 0vh;
  height: 2.3rem;
  position: relative;
  width: 5rem;
  float: right;
`;

export default Buttondeco;
