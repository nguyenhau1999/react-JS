import React from "react";
import './Nav.scss';
import {
   
    Link
  } from "react-router-dom";
  


class Nav extends React.Component {
        render() {
            return (
                
                <div className="topnav">
                 <Link to='/'>Home</Link>
                 <Link to='/todo'>Todos</Link>
                 <Link to='/about'>About</Link>
                 <Link to='/user'>User</Link>
                </div>
                
            )
        }
}

export default Nav;
