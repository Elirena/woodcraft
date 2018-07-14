import React, { Component } from 'react';
import logo from './header_logo.png';
import { Link } from 'react-router-dom';
import './TopMenu.css';

class TopMenu extends Component {

    render() {
        const activeLink = window.location.pathname;
        return (
            <div className="row menu_row">
                <div className="col-2">
                    <img src={logo} className="header-logo" alt="logo" width="" height="40px"/>
                </div>

                <div className="header_menu col-6">
                    <Link className={`header-link${activeLink === '/' ? ' header-active' : ''}`}  to="/">Наша мебель</Link>
                    <Link className={`header-link${activeLink === '/calculator' ? ' header-active' : ''}`} to="/calculator" >Модули</Link>
                    <Link className={`header-link${activeLink === '/about' ? ' header-active' : ''}`} to="/about">О фабрике</Link>
                    <a href="#f5" className='header-link'>Контакты</a>
                </div>
            </div>
        );
    }
}

export default TopMenu;