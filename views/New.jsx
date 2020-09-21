const React = require('react');
const Default = require('./Default.jsx')

class New extends React.Component {
    render() {
        return (
            <Default title="NEW PAGE">
                <a className="back" href='/logs'>Return to Logs</a>
                <div>
                <h1 className="new">New Entry</h1>
                <form action="/logs" method="POST">
                    Log: <input type="text" name="title" /><br />
                    Description: <input type="textarea" name="entry" /><br />
                    Is Ship Broken? : <input type="checkbox" name="shipIsBroken" /><br />
                    <input type="submit" name="" value="SUBMIT LOG" className="submit-log"/>
                </form>
                </div>
            </Default>
        )
    }
}

module.exports = New;