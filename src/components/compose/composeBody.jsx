var React = require('react/addons');
var Link = require('react-router').Link;

var ComposeBody = React.createClass({

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
                <li className="date">{this.props.date}</li>
                <li>Tags</li>
              </ul>
            </div>

            <div className="col col9">
              <h1>{this.props.title}</h1>

              <textarea className="textbox"
                        ref="textbox" 
                        onInput={this.props.unsave} 
                        valueLink={this.props.contentString}></textarea>

            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ComposeBody;