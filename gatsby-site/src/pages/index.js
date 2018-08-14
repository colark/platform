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
        <p className="lead">We start, buy, and invest in wonderful internet businesses.</p>
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
