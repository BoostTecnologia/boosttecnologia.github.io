import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/images/logo.svg';

const Footer = (props) => (
    <footer id="footer">
        <section>
            <h2>UEMG - Divinópolis</h2>
            <dl className="alt">
                <dt>Endereço</dt>
                <dd>Av. Paraná, 3001 - Jardim Belvedere, Divinópolis - MG, 35501-170</dd>
            </dl>
        </section>
        <section>
            <h2>Contato </h2>
            <dl className="alt">
                <dt>Email</dt>
                <dd><a href="#">boosttecnologia@gmail.com</a></dd>
            </dl>
            <ul className="icons">
                <li><a href="https://www.facebook.com/boosttecnologia/" className="icon fa-facebook alt"><span className="label">Facebook</span></a></li>
                <li><a href="https://github.com/BoostTecnologia" className="icon fa-github alt"><span className="label">GitHub</span></a></li>
            </ul>
        </section>
        <p className="copyright">&copy; Untitled. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
    </footer>
)

export default Footer
