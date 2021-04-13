/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Navbar = (props) => {
    // setTimeout(() => {
    //     props.history.push('./about')
    // }, 2000)
    return (
        <nav className="nav red darken-3">
            <div className="container">
                <a className="brand-logo">PosTGraD</a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )

}

export default (Navbar) 
