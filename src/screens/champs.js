import React from 'react';
import styled from 'styled-components';
import Form from '../components/form';
import Menu from '../components/menu/index';

const Champs = () => {
  return (
    <div>
      <Menu></Menu>
      <MainDiv>
        <HStyle>Créer votre recette</HStyle>
        <Form></Form>
      </MainDiv>
    </div>
  );
};

const HStyle = styled.h1`
  margin: 0px;
`;

const MainDiv = styled.div`
  border-radius: 10px;
  box-shadow: 0px 5px 20px;
  margin-top: 65px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-width: 40%;
  padding: 35px;
`;

export default Champs;
