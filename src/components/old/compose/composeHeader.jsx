import React from 'react/addons';
import { Link } from 'react-router';

import Logo from 'babel!../logo.jsx';

let ComposeHeader = React.createClass({

  mixins: [React.addons.LinkedStateMixin],

  loadData() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '/api', true);
    xhr.onload = function() {
      let data = JSON.parse(xhr.responseText);
      this.setState({
        data: data
      });
    }.bind(this);
    xhr.send();
  },

  files() {
    if (this.state.filesText == 'Files') {
      this.setState({
        filesText: 'Close'
      });
      this.addFilesNodes();
    }
    else {
      this.setState({
        filesText: 'Files',
        filesNodes: []
      });
    }
  },

  addFilesNodes() {
    let data = this.state.data;

    let linksPub = [];
    let linksSav = [];

    data.map( function(datum) {
      if (datum.published)
        linksPub.push( <li key={datum.id}><a href="#">{datum.title}</a></li> );
      else
        linksSav.push( <li key={datum.id}><a href="#">{datum.title}</a></li> );
    });

    let nodes = (
      <div className="row">
        <div className="col col3 files">
          <ul>
            <li className="list-subheading">Published</li>
            {linksPub}
          </ul>
          <ul>
            <li className="list-subheading">Saved</li>
            {linksSav}
          </ul>
        </div>
      </div>
    );

    this.setState({
      filesNodes: nodes
    });
  },

  getInitialState() {
    return {
      filesText: 'Files',
      filesNodes: []
    };
  },

  componentDidMount() {
    this.loadData();
  },

  render() {
    // saved?
    let saveBtnClasses = "btn save";
    let saveBtnText = "Save";
    if (this.props.saved) {
      saveBtnClasses = "btn save saved";
      saveBtnText = "Saved";
    }
    else {
      saveBtnClasses = "btn save unsaved";
      saveBtnText = "Save";
    }

    // published?
    let publishBtnClasses = "btn publish";
    let publishBtnTxt = "Publish";
    if (this.props.published) {
      publishBtnClasses = "btn publish published";
      publishBtnTxt = "Published";
    }
    else {
      publishBtnClasses = "btn publish unpublished";
      publishBtnTxt = "Publish";
    }

    return (
      <div className="compose-header">
        <div className="container">
          <div className="row">
            <div className="col col12">
              <Link to="home"><Logo /></Link>

              <button className="btn" onClick={this.files}>{this.state.filesText}</button>
              <button className={saveBtnClasses} onClick={this.props.saveFunc}>{saveBtnText}</button>
              <button className={publishBtnClasses} onClick={this.props.publishFunc}>{publishBtnTxt}</button>
            </div>
          </div>
          {this.state.filesNodes}
        </div>
      </div>
    );
  }
});

module.exports = ComposeHeader;