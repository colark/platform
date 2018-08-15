import React from 'react'
import Partner from '../team-member/team-member'
import styles from "./partners.css"

function Partners(props) {
  const partnerList = [{
      name: "Constellation Labs",
      logo: "",
      website: ""
    },
    {
      name: "Career Karma",
      logo: "",
      website: ""
    },
    {
      name: "Atlassian",
      logo: "",
      website: ""
    },
    {
      name: "8heroes",
      logo: "",
      website: ""
    },
    {
      name: "mRelief",
      logo: "",
      website: ""
    }
  ];

  let partners = partnerList.map((org, index) => {
    return(
    <li key={ index }>
      <Partner data={ org } />
    </li>);
  });

  return(
    <div className="partners">
      <h2>Partners</h2>
        <ul>
          { partners }
        </ul>
    </div>
  );
}

export default Partners
