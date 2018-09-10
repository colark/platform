import * as React from 'react';
import Slider from 'react-slick';
import BlogCard from '../blog-card/BlogCard'
import styles from './BlogSlider.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function MediaSlider() {

    const settings = {
      speed: 200,
      dots: true,
      infinite: true,
      slidesToShow: 4,
      rows: 1,
      multipleItems: true,
      focusOnSelect: true,
      focusOnChange: true,
      variableWidth: true,
      touchMove: true,
      mobileFirst: true,
      touchThreshold: 10,
    };

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

    return (
      <Slider className="blog-slider" {...settings}>
          {blogList}
      </Slider>
    );

}
