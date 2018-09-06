import React from 'react'
import TeamMember from '../team-member/team-member'
import styles from "./team.css"
const alina = "https://res.cloudinary.com/colark/image/upload/v1534305485/Colark%20Marketing%20Site/alina-photo.png"
const ellie = "https://res.cloudinary.com/colark/image/upload/v1534305486/Colark%20Marketing%20Site/ellie-photo.png"
const lian = "https://res.cloudinary.com/colark/image/upload/v1534305485/Colark%20Marketing%20Site/lian-photo.png"
const olga = "https://res.cloudinary.com/colark/image/upload/v1534305498/Colark%20Marketing%20Site/olga-photo.png"
const claire = "https://res.cloudinary.com/colark/image/upload/v1534456735/Colark%20Marketing%20Site/claire-photo.jpg"

function Team(props) {
  const teamMembers = [{
      name: "Ellie Day",
      className: "team-member__photo-div ellie-photo",
      position: "Founder, Software Engineer",
      photo: ellie,
      email: "ellie@colark.com",
      linkedin: "https://www.linkedin.com/in/ellie-day-a7761394/"
    },
    {
      name: "Olga Kuri",
      className: "team-member__photo-div olga-photo",
      position: "Visual Designer/ Illustrator",
      photo: olga,
      email: "olga@colark.com",
      linkedin: "https://www.linkedin.com/in/kuriolga/"
    },
    {
      name: "Alina Lodahl",
      className: "team-member__photo-div alina-photo",
      position: "Software Engineer",
      photo: alina,
      email: "alina@colark.com",
      linkedin: "https://www.linkedin.com/in/alina-lodahl/"
    },
    {
      name: "Lian Thompson",
      className: "team-member__photo-div lian-photo",
      position: "Software Engineer",
      photo: lian,
      email: "lian@colark.com",
      linkedin: "https://www.linkedin.com/in/lianthompson/"
    },
    {
      name: "Claire Gallant",
      className: "team-member__photo-div claire-photo",
      position: "Product Manager",
      photo: claire,
      email: "claire@colark.com",
      linkedin: "https://www.linkedin.com/in/claire-gallant-4494b683/"
    }
  ];
  let team = teamMembers.map((member, index) => {
    return(
    <div className="team-member-div" key={ index }>
      <TeamMember { ...member } />
    </div>);
  });

  return(
    <div className="team-container">
      <h2 className="team-header">Meet our team</h2>
      <div className="team" id="team">
            { team }
            <div className="team-accent-dot"></div>
      </div>
    </div>
  );
}

export default Team
