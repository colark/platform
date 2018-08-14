import React from 'react'
import { Jumbotron, Button } from 'reactstrap';
import Link from 'gatsby-link'
import './index.css';

const IndexPage = () => (
  <div>
      <Jumbotron>
        <h1 className="display-3">Building</h1>
        <h1 className="display-3">better software,</h1>
        <h1 className="display-3">together.</h1>
        <p className="lead">Teams that consistently perform at the highest levels are able to come together and be unified across the organization - staff, players, coaches, management, and ownership. When everyone is on the same page, trust develops and teams can grow and succeed together.</p>
        <div className="container">
        <div>
          <h3>Phase Zero</h3>
          <p id="description">Brings products and companies to market</p>
        </div>
        <div>
          <h3>Unstack</h3>
          <p id="description">The technology behind Phase Zero</p>
        </div>
        </div>
      </Jumbotron>
  </div>
)

export default IndexPage
