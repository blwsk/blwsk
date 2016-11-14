import {createStore} from 'redux';
import reducer from './reducer';

const store = createStore(reducer);

export const dispatch = store.dispatch;

export const getState = store.getState;

export default store;
