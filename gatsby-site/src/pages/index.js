import React from 'react'
import Link from 'gatsby-link'
import Team from '../components/team/team'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <p>Hello, I&#39;m new.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <Team/>
  </div>
)

export default IndexPage
