import React from 'react/addons';
import Router from 'react-router';
import { Link } from 'react-router';

const Delete = module.exports = React.createClass({

  askDelete() {
    this.setState({
      asked: !this.state.asked
    });
  },

  getInitialState() {
    return {
      asked: false
    };
  },

  render() {
    let deleteNode;
    
    if (this.state.asked) {
      deleteNode = (
        <input    className="delete"
                  type="button"
                  onClick={this.props.doDelete}
                  value="Click here." />
      );
    }
    
    return (
      <div>
        <input    className="delete"
                  type="button"
                  onClick={this.askDelete}
                  value="Delete?" />

        {deleteNode}
      </div>
    );
  }
});
