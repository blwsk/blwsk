import React from 'react/addons';

import DateString from '../../utils/dateString.js';

let ComposeBody = React.createClass({

  mixins: [React.addons.LinkedStateMixin],

  componentDidMount() {
    this.refs.textbox.getDOMNode().focus();
  },

  render() {

    return (
      <div className="compose-body">
        <div className="container">
          <div className="row">
            <div className="col col3">
              <ul>
                <li className="date">{DateString(this.props.date)}</li>
              </ul>
            </div>

            <div className="col col9">
              <input    type="text"
                        className="text-input h1"
                        valueLink={this.props.title} />

              <textarea className="textbox"
                        ref="textbox" 
                        onInput={this.props.unsave} 
                        valueLink={this.props.content}></textarea>

            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ComposeBody;