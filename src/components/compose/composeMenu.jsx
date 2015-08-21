import React from 'react/addons';
import { Link } from 'react-router';

import Logo from 'babel!../logo.jsx';
import Icon from 'babel!../icon.jsx';
import Files from 'babel!./files.jsx';

const ComposeHeader = React.createClass({

  mixins: [React.addons.LinkedStateMixin],

  back() {
    window.history.back();
  },

  loadData() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', this.state.url, true);
    xhr.onload = function() {
      let data = JSON.parse(xhr.responseText);
      this.setState({
        fileData: data
      });
    }.bind(this);
    xhr.send();
  },

  changeTray() {
    this.setState({
      tray: !this.state.tray
    });
  },

  save() {
    this.props.saveFunc();
    this.setState({
      saved: true,
    });
  },

  publish() {
    this.props.publishFunc();
    this.setState({
      published: true,
    });
  },

  getInitialState() {
    return {
      fileData: [],
      url: '/api/items',
      tray: false,
      saved: this.props.saved,          // I know, anti-pattern
      published: this.props.published   // I know, anti-pattern
    };
  },

  componentDidMount() {
    this.loadData();
  },

  render() {

    // deal with save
    let currentSave = {
      txt: "Save",
      icon: <Icon type="pending" />
    };
    if (this.state.saved) {
      currentSave.txt = "Saved",
      currentSave.icon = <Icon type="save" />
    }

    // ... publish
    let currentPublish = {
      txt: "Publish",
      icon: <Icon type="pending" />
    };
    if (this.state.published) {
      currentPublish.txt = "Published",
      currentPublish.icon = <Icon type="publish" />
    }

    // tray
    let tray;
    if (this.state.tray) {
      tray = <Files fileData={this.state.fileData} />;
    }


    return (

      <div className="compose-wrapper dark">
        <div className="compose-menu menu">
          <nav className="nav">

            {/* LEFT */}
            <div className="logo left">
              <Link activeClassName="current" to="home">
                <Logo />
              </Link>
            </div>

            {/* RIGHT */}
            <div className="right">
              <ul>

                <li>
                  <a className="back" onClick={this.back}>
                    <span>Back</span><Icon type="back" />
                  </a>
                </li>

                <li>
                  <a className="files" onClick={this.changeTray}>
                    <span>Files</span>
                    <Icon type="files" />
                  </a>
                </li>

                <li>
                  <a className="save" onClick={this.save}>
                    <span>{currentSave.txt}</span>
                    {currentSave.icon}
                  </a>
                </li>

                <li>
                  <a className="publish" onClick={this.publish}>
                    <span>{currentPublish.txt}</span>
                    {currentPublish.icon}
                  </a>
                </li>

              </ul>
            </div>
          </nav>

          {tray}
          
        </div>
      </div>
    );
  }
});

module.exports = ComposeHeader;