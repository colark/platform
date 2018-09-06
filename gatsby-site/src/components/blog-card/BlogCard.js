import * as React from 'react';
import styles from './BlogCard.css'

export default function BlogCard(props) {

  return (
      <div className="blog-card" style={{backgroundImage: `url(${props.blog.image})`}}>
          <h3>{props.blog.title}</h3>
          <h4>by {props.blog.author}</h4>
      </div>
    );

}
