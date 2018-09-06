import * as React from 'react';
import {
  Link,
  HashRouter,
  Route
} from 'react-router-dom'
import BlogCard from '../blog-card/BlogCard'

export default class BlogList extends React.Component {

  constructor(props){
    super(props);
  }

  articles = [
    {
      image: "https://res.cloudinary.com/colark/image/upload/v1536183833/Colark%20Marketing%20Site/workplace-1246677_640.jpg",
      title: "Building a site with GatsbyJS",
      author: "Ellie Day",
      url:"/blog/building"
    },
    {
      image: "https://res.cloudinary.com/colark/image/upload/v1536183861/Colark%20Marketing%20Site/city-street-1246870_640.jpg",
      title: "Building a site with GatsbyJS",
      author: "Ellie Day",
      url:"/blog/a"
    },
    {
      image: "https://res.cloudinary.com/colark/image/upload/v1536183848/Colark%20Marketing%20Site/forest-1246869_640.jpg",
      title: "Building a site with GatsbyJS",
      author: "Ellie Day",
      url:"/blog/website"
    },
    {
      image: "https://res.cloudinary.com/colark/image/upload/v1536183870/Colark%20Marketing%20Site/feet-1246673_640.jpg",
      title: "Building a site with GatsbyJS",
      author: "Ellie Day",
      url:"/blog/with"
    },
    {
      image: "https://res.cloudinary.com/colark/image/upload/v1536183870/Colark%20Marketing%20Site/feet-1246673_640.jpg",
      title: "Building a site with GatsbyJS",
      author: "Ellie Day",
      url:"/blog/gatsby-js"
    },
  ];

  blogList = this.articles.map((article, index) => (
    <Link to={article.url}>
      <BlogCard blog={article} key={index} />
    </Link>)
)
  render() {
   return (
     <HashRouter>
      <div>
        {this.blogList}
        <Route path="/:id"/>
      </div>
    </HashRouter>
   );
  }
}
