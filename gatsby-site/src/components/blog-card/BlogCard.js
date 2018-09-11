import * as React from 'react';
import styles from './BlogCard.css'

export default function BlogCard(props) {
  let data = JSON.stringify(props);
  return (
      <div className="blog-card" onClick={props.onClick} style={{backgroundImage: `url(${props.image})`}}>
          <h3 className="blog-card__title">{props.title}</h3>
          <h4 className="blog-card__author">by {props.author}</h4>
      </div>
    );

}
