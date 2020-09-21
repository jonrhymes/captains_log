const React = require('react');
const Default = require('./Default.jsx')

class Show extends React.Component {
    render() {
        // const name = this.props.fruit.name;
        // const color = this.props.fruit.color;
        // const readyToEat = this.props.fruit.readyToEat;
        // destructuring
        const log = this.props.log
        return (
            <>
            <Default title="SHOW PAGE">
                <div className="children-container">
                <h1>Log Entry</h1>
                {log.title}: <br />
                <p className="show-entry">{log.entry} </p>
                <p>{log.shipIsBroken ? `Hull is damaged!` : ` Hull remains intact.`}</p>
                <br />
                {/* <p>Filed: {createdAt}</p> */}
                <a href={`/logs/edit/${log._id}`}className="edit">Edit Entry</a><br /><br />
                <a className="back" href="/logs">RETURN TO LOGS</a>
                </div>
            </Default>
            </>
        )
    }
}

module.exports = Show;