import * as React from 'react';
import BlogList from '../blog-list/BlogList'
import styles from "./BlogMenu.css"

export default function BlogMenu() {

  return (
      <div className="blog-menu">
          <BlogList/>
      </div>
    );

}
