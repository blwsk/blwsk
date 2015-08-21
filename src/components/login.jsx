import React from 'react/addons';

const Login = module.exports = React.createClass({

  doLogin(e) {
    e.preventDefault();

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/login', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        this.setState({
          msg: xhr.responseText
        });
      }
    }.bind(this);

    let u = {
      username: this.state.username,
      password: this.state.password
    };

    xhr.send(JSON.stringify(u));
  },

  handleUserChange(e) {
    this.setState({
      username: e.target.value
    });
  },

  handlePassChange(e) {
    this.setState({
      password: e.target.value
    });
  },

  getInitialState() {
    return {
      msg: ''
    };
  },

  render() {

    return (
      <div className="container">
        <div className="col">
          <form className="login" action="/login" method="post">
            <label>Username:</label>
            <input type="text" name="username" placeholder="Username" onChange={this.handleUserChange} />

            <label>Password:</label>
            <input type="password" name="password" placeholder="Password" onChange={this.handlePassChange} />

            <input type="submit" value="Login" onClick={this.doLogin} />

            <div>{this.state.msg}</div>
          </form>
        </div>
      </div>
    );
  }
});
