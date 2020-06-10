import React from 'react';
import PropTypes from 'prop-types';

const IngredientInputs = ({ idx, ingredientState, handleIngredientChange }) => {
  return (
    <div key={`cat-${idx}`}>
      <label>{`Ingredient #${idx + 1}`}</label>
      <input
        type='text'
        value={ingredientState[idx].name}
        className='name'
        data-idx={idx}
        onChange={handleIngredientChange}
      />
    </div>
  );
};
IngredientInputs.propTypes = {
  idx: PropTypes.number,
  ingredientState: PropTypes.array,
  handleIngredientChange: PropTypes.func
};
export default IngredientInputs;
