const React = require('react');
const Default = require('../Default.jsx')

class LoginUser extends React.Component {
    render() {
      return (
          <Default title="LOGIN PAGE">
              <h1>Crew Login</h1>
              <form action="/sessions/" method="POST">
                  username: <input type="text" name="username" /><br/>
                  password: <input type="password" name="password" /><br/>
                  <input type="submit" name="" value="Login" className="submit-log"/>
               </form>
          </Default>
          );
    }
  }
  
  module.exports = LoginUser;