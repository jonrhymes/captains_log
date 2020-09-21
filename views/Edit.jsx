const React = require('react');
const Default = require('./Default.jsx')

class Edit extends React.Component {
    render() {
    const { title, entry, shipIsBroken } = this.props.log;
      return (
          <Default title="EDIT PAGE">
              <a className="back" href='/logs'>Return to Logs</a>
              <nav className="add-div">
              <h1 className="edit-head">Edit Log Entry</h1>
              </nav>
              <form action={`/logs/${this.props.log._id}?_method=put`} method="POST">
                  Log: <input type="text" name="title" value={title}/><br/>
                  Description: <input type="text" name="entry" value={entry}/><br/>
                  Is Ship Broken? : {' ' }<input type="checkbox" name="shipIsBroken" checked={shipIsBroken ? `Hull is damaged!` : ` Hull remains intact.`}/><br/>
                  <input type="submit" name="" value="COMMIT CHANGES" className="submit-log" />
               </form>
          </Default>);
    }
  }
  
module.exports = Edit;