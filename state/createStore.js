import {createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';
import initialState from './state';

export default function ({
  reducer = rootReducer,
  state = initialState,
  middleware = thunk
}, isServer) {
  if (isServer) {
    return createStore(reducer, state, middleware);
  }

  if (window && window.initialState) {
    store = createStore(reducer, window.initialState, middleware);
    return store;
  }
}
