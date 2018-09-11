import * as React from 'react';
import BlogList from '../blog-list/BlogList'
import styles from "./BlogMenu.css"

export default function BlogMenu(props) {

  return (
      <div className="blog-menu">
          <h1>Colark Blog</h1>
          <p>
            Exploring the JAMstack, static sites, and the future of web.
            Subscribe to our newsletter to make sure you don&#39;t miss anything!
          </p>
          <BlogList onClick={props.onClick}/>
      </div>
    );

}
