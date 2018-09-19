import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Home extends Component{
    render() {
        return <div>
            <ul>
                <li>
                    <Link to="/about">about</Link>
                </li>
                <li>
                    <Link to="/blank">blank</Link>
                </li>
                <li>
                    <Link to="/child">child</Link>
                </li>
                <li>
                    <Link to="/child12">hhhh</Link>
                </li>
            </ul>
            <hr/>
            {this.props.children}
        </div>;
    }
}

export default Home;
