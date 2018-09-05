import * as React from 'react';
import BlogSlider from '../blog-slider/BlogSlider'
import styles from "./BlogSection.css"

export default function BlogSection() {

  return (
      <div id="blog" className="blog">
          <h2>Blog</h2>
          <p>description here</p>
          <BlogSlider/>
      </div>
    );

}
