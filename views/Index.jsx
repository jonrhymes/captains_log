const React = require('react');
const Default = require('./Default.jsx')

class Index extends React.Component {
    render() {
        const { logs } = this.props;
        const logout = (<form action="/sessions/?_method=delete" method="post"><input type="submit" value="Logout"/></form>)
    const welcome = (<h3>Welcome {this.props.username}</h3>)
        return (
            <Default title="INDEX PAGE">
                <h1 class="communique"><span className="incoming">INCOMING TRANSMISSION ...</span> <span className="from">U.S.S. ENTERPRISE</span></h1>
                {/* <h3>{this.props.username ? welcome : ''}</h3> */}
                <nav className="add-div">
                    <a className="add" href='/logs/new'>Add a New Entry</a>
                </nav>
                {/* {this.props.username ? logout : ''}  */}
                <ul>
                    {this.props.logs.map((log, i) => {
                            return (
                                <li className="list">
                                    <a href={`/logs/${log._id}`} className="show-link">{log.title}</a>: 
                                    <p>{log.entry} 
                                    </p>{log.shipIsBroken ? `Hull is damaged!` : ` Hull remains intact.`}
                                    <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                                <input type="submit" value="DELETE" className="delete"/>
                                </form>
                                </li>
                            )
                        })

                    }
                </ul>

            </Default>
        )
    }
}

module.exports = Index;