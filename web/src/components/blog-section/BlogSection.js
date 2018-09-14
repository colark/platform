import * as React from 'react';
import BlogSlider from '../blog-slider/BlogSlider'
// './BlogSection.css'

export default function BlogSection() {

  return (
      <div id="blog" className="blog">
        <div className="blog__text">
          <h2>Blog</h2>
          <p>description here</p>
        </div>
        <BlogSlider/>
      </div>
    );

}
