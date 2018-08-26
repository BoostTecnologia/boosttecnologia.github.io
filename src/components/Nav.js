import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const Nav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        <Scrollspy items={ ['intro', 'first', 'second', 'cta'] } currentClassName="is-active" offset={-300}>
            <li>
                <Scroll type="id" element="intro">
                    <a href="#">Sobre nós</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="first">
                    <a href="#">Nosso Objetivo</a>
                </Scroll>
            </li>
            {/* <li>
                <Scroll type="id" element="second">
                    <a href="#">Second Section</a>
                </Scroll>
            </li> */}
            <li>
                <Scroll type="id" element="footer">
                    <a href="#">Entre em Contato</a>
                </Scroll>
            </li>
        </Scrollspy>
    </nav>
)

export default Nav
