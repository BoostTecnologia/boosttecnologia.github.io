import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/images/logo.png';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img width="200px"src={logo} alt="" /></span>
        <h1>Boost Tecnologia</h1>
        <p>Acelere a tecnologia na sua empresa<br />
        </p>
    </header>
)

export default Header
