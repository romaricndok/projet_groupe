import { CHANGER_THEME } from '../actions/themes';

const initialTheme = {
  themeActuel: 'light'
};

export default (state = initialTheme, action) => {
  switch (action.type) {
    case CHANGER_THEME:
      return {
        ...state,
        themeActuel: state.themeActuel === 'light' ? 'dark' : 'light'
      };

    default:
      return state;
  }
};
