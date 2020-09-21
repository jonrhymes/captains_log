const React = require('react');
const Default = require('../Default.jsx')

class NewUser extends React.Component {
    render() {
      return (
          <Default title="CREW PAGE">
              <h1>New Crew Member</h1>
              <form action="/users/" method="POST">
                  username: <input type="text" name="username" /><br/>
                  password: <input type="password" name="password" /><br/>
                  <input type="submit" value="Create Crew" className="create-btn"/>
               </form>
          </Default>
          );
    }
  }
  
  module.exports = NewUser;