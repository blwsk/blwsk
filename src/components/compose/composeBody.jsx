import React from 'react/addons';

import DateString from '../../utils/dateString.js';
import Delete from 'babel!./delete.jsx';


let ComposeBody = React.createClass({

  mixins: [React.addons.LinkedStateMixin],

  askDelete() {
    console.log('Delete?');
  },

  changeDate(e) {
    this.props.changeDate(parseInt(e.target.value));
  },

  componentDidMount() {
    this.refs.textbox.getDOMNode().focus();
  },

  render() {

    return (
      <div className="compose-body dark">
        <div className="container">
          <div className="col">
            <ul>
              <li className="date left">
                Date text: {DateString(this.props.date)}
              </li>
              <li className="date">
                <input  type="text"
                        className="right"
                        onChange={this.changeDate}
                        value={this.props.date} />
              </li>
            </ul>

            <input  type="text"
                    className="text-input h1"
                    valueLink={this.props.title} />

            <textarea className="textbox"
                      ref="textbox"
                      onInput={this.props.unsave}
                      valueLink={this.props.content} />

            <Delete doDelete={this.props.delete} />

          </div>
        </div>
      </div>
    );
  }
});

module.exports = ComposeBody;
