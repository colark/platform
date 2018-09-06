import * as React from 'react';
import { Link } from 'react-router-dom'
import styles from './BlogCard.css'

export default function BlogCard(props) {

  return (
    <Link to={props.url}>
      <div className="blog-card" style={{backgroundImage: `url(${props.blog.image})`}}>
          <h3>{props.blog.title}</h3>
          <h4>by {props.blog.author}</h4>
      </div>
    </Link>
    );

}
