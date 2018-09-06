import * as React from 'react';
import blogList from '../blog-list/BlogList'
import styles from "./BlogMenu.css"

export default function BlogMenu() {

  return (
      <div className="blog-menu">
          {blogList}
      </div>
    );

}
