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
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
