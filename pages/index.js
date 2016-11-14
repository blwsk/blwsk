import {List, Map} from 'immutable';
import React from 'react';
import {connect, Provider} from 'react-redux';
import store, {dispatch} from '../state/store';
import Index from '../components/Index';

function getPosts() {
  return new Promise(res => setTimeout(() => {
    res(List([
      Map({title: 'One'}),
      Map({title: 'Two'})
    ]));
  }, 100));
}

async function createStore() {
  if (window && window.store) {
    return window.store;
  }

  const posts = await getPosts();
}

function getProps(context) {
  return new Promise(res => setTimeout(() => {
    res({
      blah: 1
    });
  }, 100));
}

export default class IndexPage extends React.Component {
  static async getInitialProps({req}) {
    if (req) {

    } else {

    }
    const store = await createStore();

    return {
      store
    };
  }

  constructor(props) {
    super(props);

    if (props.store && window && !window.store) {
      window.store = props.store;
    }
  }

  render() {
    const {
      store,
      ...others
    } = this.props;

    return (
      <Provider store={store}>
        <Index {...others} />
      </Provider>
    );
  }
}
