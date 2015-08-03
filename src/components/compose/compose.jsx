var React = require('react/addons');
var Link = require('react-router').Link;

var ComposeHeader = require('babel!./composeHeader.jsx');
var ComposeBody = require('babel!./composeBody.jsx');

var Compose = React.createClass({

  mixins: [React.addons.LinkedStateMixin],

  newPost() {
    console.log('new');
  },

  unsave() {
    // used when changes are made that are
    // not reflected in the content string (saved version)
    if (this.state.content != this.state.contentString) {
      this.setState({
        saved: false
      });
    }
  },

  save() {
    this.setState({
      saved: true
    });
    console.log(this.state.contentString);
  },

  publish() {
    this.save();  // make sure it is saved
    console.log('published (not really)');
  },

  getInitialState() {
    return {
      title: "Title...",
      content: '',
      contentString: '',
      date: Date.now(),
      tags: [],
      saved: false
    };
  },


  render() {
    return (
      <div className="compose" onKeyPress={this.getCommands}> 

        <ComposeHeader
          title={this.linkState('title')}
          saved={this.state.saved}
          newPost={this.newPost}
          saveFunc={this.save}
          publishFunc={this.publish} />

        <ComposeBody 
          title={this.linkState('title')}
          date={this.state.date}
          contentString={this.linkState('contentString')}
          unsave={this.unsave} />

      </div>
    );
  }
});

module.exports = Compose;