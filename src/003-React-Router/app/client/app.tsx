/// <reference path="../interfaces/interfaces.d.ts" />

import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Link, Router, Route, browserHistory }  from 'react-router';

class App extends React.Component<any, any> {
    public render() {
        return (
            <div>
                <h1>app</h1>
                <div>
                    <Link to='/about'>about</Link>
                </div>
                <section>
                    {this.props.children}
                </section>
            </div>
        );
    }
}


class About extends React.Component<any, any> {
    public render() {
        return (
            <div>
                <h2>About</h2>
                <p>this an about</p>
            </div>
        );
    };
}

ReactDom.render((
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <Route path='about' component={About} />
            </Route>
        </Router>
), document.getElementById('app'));