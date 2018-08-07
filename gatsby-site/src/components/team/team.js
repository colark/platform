import React from 'react'
import TeamMember from '../team-member/team-member'
// import alinaphoto from '../../../static/alina-photo.png'
// import lianphoto from '../../../static/lian-photo.png'

function Team(props) {
  const teamMembers = [{
      name: "Ellie Day",
      position: "Software Engineer",
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/June_odd-eyed-cat.jpg/737px-June_odd-eyed-cat.jpg",
      email: "mailto:ellie@colark.com",
      linkedin: "https://www.linkedin.com/in/alina-lodahl/"
    },
    {
      name: "Alina Lodahl",
      position: "Software Engineer",
      photo: "../../../static/alina-photo.png",
      email: "mailto:alina@colark.com",
      linkedin: "https://www.linkedin.com/in/alina-lodahl/"
    },
    {
      name: "Lian Thompson",
      position: "Software Engineer",
      photo: "../../../static/lian-photo.png",
      email: "mailto:lian@colark.com",
      linkedin: "https://www.linkedin.com/in/alina-lodahl/"
    }
  ];
  let team = teamMembers.map( member => <TeamMember props={member}/>);
  return(
    <div>
      <h2>Colark Team</h2>
      { team }
    </div>
  );
}

export default Team
