import * as React from 'react';
import { Link } from 'react-router-dom'
import BlogCard from '../blog-card/BlogCard'
export const articles = [
  {
    image: "https://res.cloudinary.com/colark/image/upload/v1536183833/Colark%20Marketing%20Site/workplace-1246677_640.jpg",
    title: "Building a site with GatsbyJS",
    author: "Ellie Day",
    url:"/blog/building",
    id: "building",
    text: "Cat ipsum dolor sit amet, purrrrrr. Meow in empty rooms purrr purr littel cat, little cat purr purr or sleep on dog bed, force dog to sleep on floor, yet meow or eat owner's food pet me pet me don't pet me. If it smells like fish eat as much as you wish with tail in the air for climb leg, for lounge in doorway. Leave fur on owners clothes ptracy, yet nya nya nyan terrorize the hundred-and-twenty-pound rottweiler and steal his bed, not sorry eat an easter feather as if it were a bird then burp victoriously, but tender dream about hunting birds. Inspect anything brought into the house bleghbleghvomit my furball really tie the room together."
  },
  {
    image: "https://res.cloudinary.com/colark/image/upload/v1536183861/Colark%20Marketing%20Site/city-street-1246870_640.jpg",
    title: "Building a site with GatsbyJS",
    author: "Ellie Day",
    url:"/blog/a",
    id:"a",
    text: "Make muffins tuxedo cats always looking dapper yet Gate keepers of hell human give me attention meow. If it fits, i sits stare out the window drool jump around on couch, meow constantly until given food, and cats making all the muffins. Warm up laptop with butt lick butt fart rainbows until owner yells pee in litter box hiss at cats play time. Jump on human and sleep on her all night long be long in the bed, purr in the morning and then give a bite to every human around for not waking up request food, purr loud scratch the walls, the floor, the windows, the humans unwrap toilet paper or find something else more interesting, and eat the rubberband but sleep in the bathroom sink for jump off balcony, onto stranger's head, and milk the cow."
  },
  {
    image: "https://res.cloudinary.com/colark/image/upload/v1536183848/Colark%20Marketing%20Site/forest-1246869_640.jpg",
    title: "Building a site with GatsbyJS",
    author: "Ellie Day",
    url:"/blog/website",
    id:"/website",
    text: "Get video posted to internet for chasing red dot try to hold own back foot to clean it but foot reflexively kicks you in face, go into a rage and bite own foot, hard trip on catnip yet show belly scratch the box meow in empty rooms. Meowing chowing and wowing cereal boxes make for five star accommodation push your water glass on the floor eat too much then proceed to regurgitate all over living room carpet while humans eat dinner scratch the postman wake up lick paw wake up owner meow meow for meow soft kitty warm kitty little ball of furr."
  },
  {
    image: "https://res.cloudinary.com/colark/image/upload/v1536183870/Colark%20Marketing%20Site/feet-1246673_640.jpg",
    title: "Building a site with GatsbyJS",
    author: "Ellie Day",
    url:"/blog/with",
    id:"with",
    text: "Under the bed scratch the box. Asdflkjaertvlkjasntvkjn (sits on keyboard) i just saw other cats inside the house and nobody ask me before using my litter box throw down all the stuff in the kitchen. Damn that dog meow in empty rooms taco cat backwards spells taco cat for purr but meow. Plays league of legends. Kitty power put toy mouse in food bowl run out of litter box at full speed and instantly break out into full speed gallop across the house for no reason proudly present butt to human, or love and coo around boyfriend who purrs and makes the perfect moonlight eyes so i can purr and swat the glittery gleaming yarn to him (the yarn is from a $125 sweater) make plans to dominate world and then take a nap yet lick face hiss at owner, pee a lot, and meow repeatedly scratch at fence purrrrrr eat muffins and poutine until owner comes back."
  },
  {
    image: "https://res.cloudinary.com/colark/image/upload/v1536183870/Colark%20Marketing%20Site/feet-1246673_640.jpg",
    title: "Building a site with GatsbyJS",
    author: "Ellie Day",
    url:"/blog/gatsby-js",
    id:"gatsby-js",
    text: "Get video posted to internet for chasing red dot try to hold own back foot to clean it but foot reflexively kicks you in face, go into a rage and bite own foot, hard trip on catnip yet show belly scratch the box meow in empty rooms."
  },
];


export default class BlogList extends React.Component {
  constructor(props){
    super(props);
  }

  blogList = articles.map((article, index) => (
      <Link key={index} to={article.url}>
        <BlogCard {...article} onClick={this.props.onClick}/>
      </Link>
    )
)
  render() {
   return (
      <div>
        {this.blogList}
      </div>
   );
  }
}
