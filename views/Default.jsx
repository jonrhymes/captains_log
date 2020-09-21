const React = require('react');

class Default extends React.Component {
    render() {
        return (
            <html lang="en" dir="ltr">
            <head>
            <meta charSet="utf-8"/>
            <link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&display=swap" rel="stylesheet"/>
            <link href="/css/styles.css" rel="stylesheet"/>
            </head>
            <body>
            <nav className="title">
                <h1 className="title-text">CAPTAIN'S LOG: <span className="title-span">Good Morning, Captain</span></h1>
            </nav>
            <div className="children-container">
                {this.props.children}
            </div>
            </body>
            </html>                
        )
    }
}

module.exports = Default;