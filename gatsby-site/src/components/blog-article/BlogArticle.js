import * as React from 'react';
import { articles } from '../blog-list/BlogList.js';
import styles from './BlogArticle.css'

export default function BlogArticle(props) {
  const path = window.location.pathname;
  const article = getArticle();
  function getArticle(){
    for(let i=0; i < articles.length; i++){
      if(path === articles[i].url) {
        return articles[i];
      }
    }
  }

  return (
    <div className="blog-article">
        <img src={article.image}/>
        <h1>{article.title}</h1>
        <h2>by {article.author}</h2>
        <p>{article.text}</p>
    </div>);
}
