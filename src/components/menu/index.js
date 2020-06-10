import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ButtonTheme from './buttonTheme';
import Buttondeco from './buttondeco';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

const Menu = () => {
  const history = useHistory();
  const { t, i18n } = useTranslation();
  const disconnect = () => {
    localStorage.removeItem('token');
    history.push('/');
  };
  return (
    <MenuContainer>
      <LinkContainer>
        <ListContainer>
          <List>
            <StyledLink to='/'>
              <Titre>{t('HOME')}</Titre>
            </StyledLink>
          </List>
          <List>
            <StyledLink to='/create'>
              <Titre>{t('CREATE')}</Titre>
            </StyledLink>
          </List>
          <List>
            <StyledLink to='/favoris'>
              <Titre>{t('FAVORITES')}</Titre>
            </StyledLink>
          </List>
          <List>
            <StyledLink to='/myRecipe'>
              <Titre>{t('MES RECETTES')}</Titre>
            </StyledLink>
          </List>
        </ListContainer>
      </LinkContainer>
      <FakeLinkContainer>
        <ListContainer>
          <List>
            <Link>
              <Titre>{t('HOME')}</Titre>
            </Link>
          </List>
          <List>
            <Link>
              <Titre>{t('CREATE')}</Titre>
            </Link>
          </List>
          <List>
            <Link>
              <Titre>{t('FAVORITES')}</Titre>
            </Link>
          </List>
          <List>
            <Link>
              <Titre>{t('MES RECETTES')}</Titre>
            </Link>
          </List>
        </ListContainer>
      </FakeLinkContainer>
      <RightContainer>
        <ButtonEn onClick={() => i18n.changeLanguage('fr')}>EN</ButtonEn>
        <ButtonFr onClick={() => i18n.changeLanguage('en')}>FR</ButtonFr>
        <Buttondeco disconnect={disconnect} label='Deconnexion'></Buttondeco>
        <ButtonContain>
          <ButtonTheme></ButtonTheme>
        </ButtonContain>
      </RightContainer>
    </MenuContainer>
  );
};
const RightContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Titre = styled.h4`
  font-weight: bold;
  font-family: sans-serif;
  text-decoration: none;
  color: ${props => props.theme.title};
`;

const MenuContainer = styled.div`
  height: 2rem;
  background-color: ${props => props.theme.text};
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
const ButtonFr = styled.button`
   justify-content: right;
  border: solid 2px;
  border-radius: 5px;
  margin: 3.7vh 1vh 3.7vh 0.5vh;
  width: 40px;
  padding: 6px;

  @media (max-width: 1485px) {

margin: 0vh 0.2vh 0 0vh;
}
  
  }
`;
const ButtonEn = styled.button`
  border: solid 2px;
  border-radius: 5px;
  margin-right: 12px;
  width: 40px;
  padding: 6px;
`;

const ButtonContain = styled.div`
  justify-content: right;
  padding: 1rem;
  margin: 3.7vh 1vh;
  @media (max-width: 885px) {
    display: none;
  }
`;

const LinkContainer = styled.div`
  justify-content: left;

  @media (max-width: 885px) {
    display: none;
  }
`;
const FakeLinkContainer = styled.div`
  justify-content: left;

  @media (min-width: 886px) {
    display: none;
  }
  @media (max-width: 885px) {
    display: show;
    opacity: 0;
    width: 50%;
  }
`;

const ListContainer = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  text-decoration: none;
  list-style: none;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.tileText};
`;
const List = styled.li`
  padding: 18px;
`;

Menu.propTypes = {
  themeG: PropTypes.string,
  changerTheme: PropTypes.func
};

export default Menu;
