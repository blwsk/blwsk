import initialState from './state';

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case 'hello':
      return state.set('hello', action.payload);

    default:
      return state;
  }
};
