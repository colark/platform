import * as React from 'react';
import BlogCard from '../blog-card/BlogCard'


const articles = [
  {
    image: "https://res.cloudinary.com/colark/image/upload/v1536183833/Colark%20Marketing%20Site/workplace-1246677_640.jpg",
    title: "Building a site with GatsbyJS",
    author: "Ellie Day"
  },
  {
    image: "https://res.cloudinary.com/colark/image/upload/v1536183861/Colark%20Marketing%20Site/city-street-1246870_640.jpg",
    title: "Building a site with GatsbyJS",
    author: "Ellie Day"
  },
  {
    image: "https://res.cloudinary.com/colark/image/upload/v1536183848/Colark%20Marketing%20Site/forest-1246869_640.jpg",
    title: "Building a site with GatsbyJS",
    author: "Ellie Day"
  },
  {
    image: "https://res.cloudinary.com/colark/image/upload/v1536183870/Colark%20Marketing%20Site/feet-1246673_640.jpg",
    title: "Building a site with GatsbyJS",
    author: "Ellie Day"
  },
  {
    image: "https://res.cloudinary.com/colark/image/upload/v1536183870/Colark%20Marketing%20Site/feet-1246673_640.jpg",
    title: "Building a site with GatsbyJS",
    author: "Ellie Day"
  },
];

const blogList = articles.map((article, index) => {
        return (<BlogCard blog={article} key={index} />);
});

export default blogList;
