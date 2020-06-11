import React, { useState } from 'react';
import styled from 'styled-components';
import IngredientInputs from './ingredientInputs';
import FileUpload from './fileUpload';
import { useHistory } from 'react-router-dom';

const Form = () => {
  const history = useHistory();
  const ingredients = [];
  const titres = [];
  const [titre, setTitre] = useState([]);
  const blankIngredient = '';
  const [ingredientState, setIngredientState] = useState([
    { ...blankIngredient }
  ]);

  const addIngredient = () => {
    setIngredientState([...ingredientState, { ...blankIngredient }]);
  };

  const handleIngredientChange = e => {
    const updatedIngredients = [...ingredientState];
    updatedIngredients[e.target.dataset.idx] = e.target.value;
    setIngredientState(updatedIngredients);
  };

  const handleTitreChange = e => {
    setTitre(e.target.value);
  };

  const envoyerResult = () => {
    titres.push(titre);

    ingredientState.map(val => {
      ingredients.push(val);
    });
    const itemIngredient = JSON.parse(localStorage.getItem('ingredient'));
    const arrayIngredients = [];

    const itemTitre = JSON.parse(localStorage.getItem('titre'));
    const arrayTitres = [];

    if (itemTitre) {
      itemTitre.map(titre => arrayTitres.push(titre));
      arrayTitres.push(titres);
      localStorage.setItem('titre', JSON.stringify(arrayTitres));

      itemIngredient.map(ingredient => arrayIngredients.push(ingredient));
      arrayIngredients.push(ingredients);
      localStorage.setItem('ingredient', JSON.stringify(arrayIngredients));
    } else {
      arrayTitres.push(titres);
      localStorage.setItem('titre', JSON.stringify(arrayTitres));
      arrayIngredients.push(ingredients);
      localStorage.setItem('ingredient', JSON.stringify(arrayIngredients));
    }

    history.push('/myRecipe');
  };

  return (
    <div>
      <MainContainer>
        <FormStyle onSubmit={envoyerResult}>
          <TitleContainer>
            <label>Titre : </label>
            <InputTitle type='text' onChange={handleTitreChange} />
          </TitleContainer>

          <InputButton
            type='button'
            value='Ajouter un ingredient'
            onClick={addIngredient}
          />

          {ingredientState.map((val, idx) => {
            return (
              <div key={`ingredient-${idx}`}>
                <Spacer></Spacer>
                <IngredientInputs
                  idx={idx}
                  ingredientState={ingredientState}
                  handleIngredientChange={handleIngredientChange}
                ></IngredientInputs>
              </div>
            );
          })}

          <FileUpload></FileUpload>
          <br />
          <InputButton type='submit' value='Submit' />
        </FormStyle>
      </MainContainer>
    </div>
  );
};

const FormStyle = styled.form``;

const Spacer = styled.form`
  margin: 10px;
`;

const InputTitle = styled.input`
  margin-left: 50px;
  display: flex;
  flex-direction: column;
`;

const InputButton = styled.input`
  display: block;
  padding: 5px 10px;
  margin: 15px 35%;
`;

const MainContainer = styled.div`
  padding: 20px 0 20px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  margin: 11px 0;
`;

export default Form;
