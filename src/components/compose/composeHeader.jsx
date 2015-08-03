var React = require('react/addons');
var Link = require('react-router').Link;

var Logo = require('babel!../logo.jsx');

var ComposeHeader = React.createClass({

  mixins: [React.addons.LinkedStateMixin],

  render() {
    var saveBtnClasses = "btn save";
    var saveBtnText = "Save";
    if (this.props.saved) {
      saveBtnClasses = "btn save saved";
      saveBtnText = "Saved";
    }
    else {
      saveBtnClasses = "btn save unsaved";
      saveBtnText = "Save";
    }

    return (
      <div className="compose-header">
        <div className="container">
          <div className="row">
            <div className="col col3">
              <Link to="home"><Logo /></Link>

              {/* buttons */}
              <button className="btn new" onClick={this.props.newPost}>New</button>
              <button className={saveBtnClasses} onClick={this.props.saveFunc}>{saveBtnText}</button>
              <button className="btn publish" onClick={this.props.publishFunc}>Publish</button>
            </div>

            <div className="col col9">
              <input type="text" valueLink={this.props.title} placeholder="Title" />
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ComposeHeader;