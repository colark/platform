import React from 'react'
import Partner from '../partner/Partner'
import Illustration2 from '../partner/Illustration2'
import styles from "./Partners.css"

function Partners(props) {
  const partnerList = [{
      name: "Constellation Labs",
      logo: "https://res.cloudinary.com/colark/image/upload/v1534977373/Colark%20Marketing%20Site/constellation-labs.svg",
      website: "https://constellationlabs.io/"
    },
    {
      name: "Career Karma",
      logo: "https://res.cloudinary.com/colark/image/upload/v1534977138/Colark%20Marketing%20Site/career-karma.png",
      website: "https://careerkarma.io/"
    },
    {
      name: "Atlassian",
      logo: "https://res.cloudinary.com/colark/image/upload/v1534977138/Colark%20Marketing%20Site/Atlassian.svg",
      website: "https://www.atlassian.com/"
    },
    {
      name: "8heroes",
      logo: "https://res.cloudinary.com/colark/image/upload/v1534977138/Colark%20Marketing%20Site/8heroes.png",
      website: "https://www.facebook.com/The8Heroes/"
    },
    {
      name: "mRelief",
      logo: "https://res.cloudinary.com/colark/image/upload/v1534977138/Colark%20Marketing%20Site/mRelief.png",
      website: "https://www.mrelief.com/"
    }
  ];

  let partners = partnerList.map((org, index) => {
    return(
    <div className="partner" key={ index }>
      <Partner { ...org } />
    </div>);
  });

  return(
    <div className="partners" id="partners">
      <Illustration2/>
      <div className="partner-right-container">
        <div className="partner-right-innerwrap">
          <h2 className="partners__header">Companies we collaborate with:</h2>
            { partners }
        </div>
      </div>
    </div>
  );
}

export default Partners
