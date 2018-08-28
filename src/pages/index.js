import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Header from '../components/Header'
import Nav from '../components/Nav'
import pic01 from '../assets/images/logo.svg'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    }
  }

  _handleWaypointEnter= () => {
    this.setState(() => ({ stickyNav: false }));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }

  render() {

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">

          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>A Boost tecnologia</h2>
                </header>
                <p> É uma Empresa jr da Engenharia da Computação da Universidade do Estado de Minas Gerais(UEMG) da unidade de Divinópolis.
                    Ela tem o intuito de desenvolver atividades de consultoria e desenvolvimento tecnológico para empresas afins.
                </p>  
              </div>
              <span className="image"><img src={pic01} alt="" /></span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>Nossos Objetivos</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style1 fa-code"></span>
                <h3>Missão</h3>
                <p>Ensinar, Aprender e Produzir tecnologia com seguraça e qualidade.</p>
              </li>
              <li>
                <span className="icon major style3 fa-map"></span>
                <h3>Visão</h3>
                <p>Atuar no mercado de Divinópolis e Região com Desenvolvimento de Produtos relacionados a tecnologia.</p>
              </li>
              <li>
                <span className="icon major style5 fa-diamond"></span>
                <h3>Valor</h3>
                <p>Compartilhar o conhecimento traz o resultado e a sabedoria .</p>
              </li>
            </ul>
          </section>

        </div>

      </div>
    )
  }
}

Index.propTypes = {
  route: React.PropTypes.object,
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
