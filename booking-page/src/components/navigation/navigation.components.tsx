import './navigation.styles.scss';

import React from 'react';
import { FaBars, FaSearch } from 'react-icons/fa';

export const Navigation = () => {
    return (
        <nav className="nav">
            <article className="nav-menu">
                <article className="nav-menu-bars">
                    <FaBars />
                </article>
                <ul className="nav-menu-items">
                    <li className="nav-menu-item active">
                        HOMES
                    </li>
                    <li className="nav-menu-item">
                        HOSTS
                    </li>
                </ul>
            </article>
            <article className="nav-logo">
                PLUM GUIDE
            </article>
            <article className="nav-menu">
                <ul className="nav-menu-items">
                    <li className="nav-menu-item">
                        Need help?
                    </li>
                    <li className="nav-menu-item">
                        Login
                    </li>
                    <li className="nav-menu-search">
                        <FaSearch />
                    </li>
                </ul>
            </article>
        </nav>
    )
}