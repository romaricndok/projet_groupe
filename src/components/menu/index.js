import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ButtonTheme from './buttonTheme';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Menu = () => {
  const { t, i18n } = useTranslation();
  return (
    <MenuContainer>
      <LinkContainer>
        <ListContainer>
          <List>
            <Link to='/'>
              <Titre>{t('HOME')}</Titre>
            </Link>
          </List>
          <List>
            <Link to='/create'>
              <Titre>{t('CREATE')}</Titre>
            </Link>
          </List>
          <List>
            <Link to='/favoris'>
              <Titre>{t('FAVORITES')}</Titre>
            </Link>
          </List>
        </ListContainer>
      </LinkContainer>
      <ButtonContain>
        <ButtonTheme></ButtonTheme>
        <ButtonEn onClick={() => i18n.changeLanguage('fr')}>FR</ButtonEn>
        <ButtonEn onClick={() => i18n.changeLanguage('en')}>EN</ButtonEn>
      </ButtonContain>
    </MenuContainer>
  );
};

const Titre = styled.h4`
  font-weight: bold;
  font-family: sans-serif;
`;

const MenuContainer = styled.div`
  height: 2rem;
  background-color: teal;
  position: fixed;
  width: auto;
  top: 0;
  right: 0;
  left: 0;
  bottom: 20px;
  align-items: center;
  justify-content: space-between;
  display: flex;
  padding: 10px;
`;

const ButtonEn = styled.button`
  border-radius: 30px;
  display: inline-block;
  margin: 20px;
  position: relative;
  width: 2rem;
  padding: 10px;
  float: right;
`;

const ButtonContain = styled.div`
  justify-content: right;
  padding: 20px;
  margin: 40px;
`;

const LinkContainer = styled.div`
  justify-content: left;
`;

const ListContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
`;

const List = styled.li`
  padding: 18px;
`;

Menu.propTypes = {
  themeG: PropTypes.string,
  changerTheme: PropTypes.func
};

export default Menu;
