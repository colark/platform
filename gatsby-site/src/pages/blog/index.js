import React from 'react'
import BasicPage from '../../components/BasicPage'
import BlogMenu from '../../components/blog-menu/BlogMenu'
//these two files can become one once we have a global state

const BlogMenuPage = () => (
  <div>
    <BasicPage>
      <h1>Blog</h1>
      <p>
        Exploring the JAMstack, static sites, and the future of web.
        Subscribe to our newsletter to make sure you don&#39;t miss anything!
      </p>
    <BlogMenu/>
    </BasicPage>
  </div>
)

export default BlogMenuPage
