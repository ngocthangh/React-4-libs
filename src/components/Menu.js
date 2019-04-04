import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const menus = [
    {
        name: 'Home',
        to: '/',
        exact: true
    },
    {
        name: 'About',
        to: '/about',
        exact: false
    }
];

class Menu extends Component {
    render() {
        return (
            
            <div className="navbar navbar-default">
                <a className="navbar-brand">Title</a>
                <ul className="nav navbar-nav">
                    {this.showMenus()}
                </ul>
            </div>
        );
    }
    showMenus(){
        return menus.map((menu, index) => (
            <li key={index}>
                <Link  to={menu.to}>{menu.name}</Link>
            </li>
        ));
    }
}

export default Menu;