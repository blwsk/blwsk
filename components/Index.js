import React from 'react';
import {connect} from 'react-redux';

class Index extends React.Component {
  render() {
    return (
      <div>Index layout, {this.props.hello}</div>
    );
  }
}

export default connect(state => {
  debugger
  return {
    hello: state.get('hello')
  };
})(Index);
