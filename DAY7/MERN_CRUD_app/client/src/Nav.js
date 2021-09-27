import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => (
    <nav>
        <div className="container-fluid">
            <ul className="navbar-nav nav nav-tabs">
                <li
                    className="nav-item pt-3 pr-3 pb-3">
                    <Link
                        className="nav-link-active"
                        to="/">
                        Home
                    </Link>
                </li>
                <li
                    className="nav-item pt-3 pr-3 pb-3">
                    <Link
                        className="nav-link-active"
                        to="/create">
                        Create
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
)

export default Nav