import React from 'react'
import { Jumbotron, Button } from 'reactstrap';
import Link from 'gatsby-link'
import './index.css';

const IndexPage = () => (
  <div className="width">
      <Jumbotron>
        <h1 className="display-3">Hi, we're Colark.</h1>
        <p className="lead">We start, buy, and invest in wonderful internet businesses.</p>
        <hr className="my-2" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <div id="container">
        <div>
          <h3>Phase Zero</h3>
          <p>Brings products and companies to market</p>
        </div>
        <div>
          <h3>Unstack</h3>
          <p>The technology behind Phase Zero</p>
        </div>
        </div>
      </Jumbotron>
  </div>
)

export default IndexPage
