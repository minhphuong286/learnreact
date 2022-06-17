import React from "react";
import './Nav.scss';
import {
    // Link,
    NavLink
} from "react-router-dom";
  

class Nav extends React.Component{

    render() {
        return (
            <div className="topnav">
                {/* <Link to="/">Home</Link> */}
                <NavLink exact to="/" activeClassName="active">
                    Home
                </NavLink>
                <NavLink to="/todo" activeClassName="active">
                    Todos
                </NavLink>
                <NavLink to="/about" activeClassName="active">
                    About
                </NavLink>
                <NavLink to="/user" activeClassName="active">
                    User
                </NavLink>
                {/* <a className="active" href="/">Home</a>
                <a href="/todo">Todos</a>
                <a href="/about">About</a> */}
            </div>
        )
    }
}

export default Nav;