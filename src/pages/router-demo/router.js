import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Blank from './Blank';
import Child from './Child';
import Nomatch from './Nomatch';
class Router extends Component{
    render() {
        return <HashRouter>
                <Home>
                    <Switch>
                        <Route path="/about" component={About} />
                        <Route path="/blank" component={Blank} />
                        <Route path="/child" component={Child} />
                        <Route component={Nomatch} />
                    </Switch>
                </Home>
            </HashRouter>
    }
}

export default Router;
