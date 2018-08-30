import React from 'react'
import { Jumbotron, Button } from 'reactstrap';
import Link from 'gatsby-link'
import Team from '../components/team/team'
import View from '../components/View';
import Projects from '../components/Projects/index.js';
import Footer from '../components/footer/Footer.js';

const IndexPage = () => (
  <div>
    <div className="body-container-minus-footer">
      <View/>
      <Projects />
      <Team/>
    </div>
    <Footer/>
  </div>
)

export default IndexPage
