import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Recipes from '../components/recipes';
import { getApi } from '../utils/getApi';
import Pagination from '../components/pagination';
import Menu from '../components/menu/index';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const addFavorite = (
  index,
  titre,
  image,
  query,
  currentFavorite,
  setCurrentFavorite,
  setIsFavorite,
  checkIsPresent
) => {
  const recipeFav = { index, titre, image, query };

  const isPresent = checkIsPresent(currentFavorite, titre);

  if (isPresent === false) {
    setIsFavorite(true);
    console.log('current 2', currentFavorite);
    setCurrentFavorite([...currentFavorite, recipeFav]);
    console.log('ajoute');

    toast.success(
      'You added ' + recipeFav.titre + ' to favorite Successfully!',
      { position: toast.POSITION.TOP_CENTER }
    );
  } else {
    const filteredRecipes = currentFavorite.filter(
      recipe => recipe.image !== recipeFav.image
    );
    //console.log(recipeFav);
    setIsFavorite(false);
    setCurrentFavorite(filteredRecipes);
    console.log('filteredRecipes', filteredRecipes);
    console.log('enlève');
    toast.warning(
      'You removed ' + recipeFav.titre + ' to favorite Successfully!',
      { position: toast.POSITION.TOP_CENTER }
    );
  }
};

const Home = () => {
  const themeG = useSelector(state => state.themes.themeActuel);
<<<<<<< HEAD
  const [errorMessage, setErrorMessage] = useState('');
  const [currentFavorite, setCurrentFavorite] = useState(
    JSON.parse(localStorage.getItem('favorite'))
      ? JSON.parse(localStorage.getItem('favorite'))
      : []
  );
  useEffect(() => {
    // console.log('current ', currentFavorite);
    localStorage.setItem('favorite', JSON.stringify(currentFavorite));
  }, [currentFavorite]);
=======
>>>>>>> e1fd22a9e954b16df78e79035bffb7c2c20c639b

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await getApi(query, currentPage);
      console.log(response);
<<<<<<< HEAD
      if (response.hits) {
        setRecipes(response.hits);
        response.count === 0 ? setTotal(0) : setTotal(50);
      } else {
        setErrorMessage('Erreur : Vérifier votre connexion');
      }
=======
      setRecipes(response.hits);
      response.count === 0 ? setTotal(0) : setTotal(50);
>>>>>>> e1fd22a9e954b16df78e79035bffb7c2c20c639b
    }
    fetchData();
  }, [query, currentPage]);

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
    <div>
      <Menu></Menu>
      <MainContainer>
        <FormStyle onSubmit={getSearch}>
          <InputStyle type='text' value={search} onChange={updateSearch} />
          <ButtonStyle type='submit'>Search</ButtonStyle>
        </FormStyle>
        <RecipesStyle>
          {recipes.map((recipe, index) => (
            <Recipes
              addFavorite={addFavorite}
<<<<<<< HEAD
              currentFavorite={currentFavorite}
              setCurrentFavorite={setCurrentFavorite}
=======
>>>>>>> e1fd22a9e954b16df78e79035bffb7c2c20c639b
              key={recipe.recipe.label}
              titre={recipe.recipe.label}
              image={recipe.recipe.image}
              index={index}
              query={query}
            />
          ))}
        </RecipesStyle>
        <Pagination total={total} setCurrentPage={setCurrentPage}></Pagination>
<<<<<<< HEAD
        <SpanStyle>{errorMessage}</SpanStyle>
=======
>>>>>>> e1fd22a9e954b16df78e79035bffb7c2c20c639b
      </MainContainer>
    </div>
  );
};

const RecipesStyle = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

<<<<<<< HEAD
const SpanStyle = styled.span`
  display: flex;
  justify-content: center;
  color: red;
`;
=======
>>>>>>> e1fd22a9e954b16df78e79035bffb7c2c20c639b
const ButtonStyle = styled.button`
  border: none;
  padding: 10px 20px;
`;

const InputStyle = styled.input`
  width: 50%;
  border: none;
  padding: 10px;
`;

const FormStyle = styled.form`
  min-height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainContainer = styled.div`
  padding: 50px 0 20px;
`;

Home.propTypes = {
  titre: PropTypes.string,
  click: PropTypes.func,
  checkIsPresent: PropTypes.func,
  image: PropTypes.string,
  index: PropTypes.number,
  query: PropTypes.string,
  addFavorite: PropTypes.func
};

export default Home;
