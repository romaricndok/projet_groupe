import React from 'react';
import styled from 'styled-components';
import Form from '../components/form';
import Menu from '../components/menu/index';
import { motion } from 'framer-motion';

const Champs = () => {
  return (
    <div>
      <Menu></Menu>
      <MainDiv whileHover={{ scale: 1.02 }}>
        <HStyle>Créer votre recette</HStyle>
        <Form></Form>
      </MainDiv>
    </div>
  );
};

const HStyle = styled.h1`
  margin: 0px;
`;

const MainDiv = styled(motion.div)`
  border-radius: 10px;
  padding: 30px 30px;
  text-align: center;
  text-decoration: none;
  box-shadow: 0px 5px 5px;
  margin: 100px 30px 30px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-width: 40%;
  background-color: ${props => props.theme.tile};
  color: ${props => props.theme.tileShadow};
`;

export default Champs;
