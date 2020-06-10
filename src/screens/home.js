import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Recipes from '../components/recipes';
import { getApi } from '../utils/getApi';
import Pagination from '../components/pagination';
import Menu from '../components/menu/index';
import Burger from '../components/Burger';
import MenuBar from '../components/MenuBar';
import { useOnClickOutside } from '../config/hooks';

const Home = () => {
  const themeG = useSelector(state => state.themes.themeActuel);
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  const menuId = 'main-menu';
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('couscous');

  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await getApi(query, currentPage);
      console.log(response);
      setRecipes(response.hits);
      response.count === 0 ? setTotal(0) : setTotal(50);
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
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
        <MenuBar open={open} setOpen={setOpen} id={menuId} />
      </div>
      <Menu></Menu>

      <MainContainer>
        <FormStyle onSubmit={getSearch}>
          <InputStyle type='text' value={search} onChange={updateSearch} />
          <ButtonStyle type='submit'>Search</ButtonStyle>
        </FormStyle>
        <RecipesStyle>
          {recipes.map((recipe, index) => (
            <Recipes
              key={recipe.recipe.label}
              titre={recipe.recipe.label}
              image={recipe.recipe.image}
              index={index}
              query={query}
            />
          ))}
        </RecipesStyle>
        <Pagination total={total} setCurrentPage={setCurrentPage}></Pagination>
      </MainContainer>
    </div>
  );
};

const RecipesStyle = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 20px;
  text-decoration: none;
  font-family: 'Segoe UI', 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const ButtonStyle = styled.button`
  border: none;
  padding: 10px 20px;
`;

const InputStyle = styled.input`
  width: 50%;
  padding: 10px;
`;

const FormStyle = styled.form`
  min-height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const MainContainer = styled.div`
  padding: 50px 0 20px;
`;

export default Home;
