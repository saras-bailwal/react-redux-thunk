import { combineReducers } from 'redux';

const app = (state = {}, action) => {
  switch (action.type) {
    case 'form-submiting':
      return {
        ...state,
        isSubmiting: action.isSubmiting,
      };
    case 'form-errSubmiting':
      return {
        ...state,
        errSubmiting: action.errSubmiting,
      };
    case 'submitted':
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default combineReducers({
  app,
});