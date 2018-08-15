import React from 'react'
import TeamMember from '../team-member/team-member'
import styles from "./team.css"
const alina = "https://res.cloudinary.com/colark/image/upload/v1534305485/alina-photo.png"
const ellie = "https://res.cloudinary.com/colark/image/upload/v1534305486/ellie-photo.png"
const lian = "https://res.cloudinary.com/colark/image/upload/v1534305485/lian-photo.png"
const olga = "https://res.cloudinary.com/colark/image/upload/v1534305498/olga-photo.png"

function Team(props) {
  const teamMembers = [{
      name: "Ellie Day",
      className: "ellie-photo team-member__photo-div",
      position: "Founder, Engineer",
      photo: ellie,
      email: "ellie@colark.com",
      linkedin: "https://www.linkedin.com/in/ellie-day-a7761394/"
    },
    {
      name: "Olga Kuri",
      className: "olga-photo team-member__photo-div",
      position: "Visual Designer/Illustrator",
      photo: olga,
      email: "olga@colark.com",
      linkedin: "https://www.linkedin.com/in/kuriolga/"
    },
    {
      name: "Alina Lodahl",
      className: "alina-photo team-member__photo-div",
      position: "Software Engineer",
      photo: alina,
      email: "alina@colark.com",
      linkedin: "https://www.linkedin.com/in/alina-lodahl/"
    },
    {
      name: "Lian Thompson",
      className: "lian-photo team-member__photo-div",
      position: "Software Engineer",
      photo: lian,
      email: "lian@colark.com",
      linkedin: "https://www.linkedin.com/in/lianthompson/"
    },
    {
      name: "Claire",
      className: "claire-photo team-member__photo-div",
      position: "Product Manager",
      photo: "",
      email: "claire@colark.com",
      linkedin: ""
    },
    {
      name: "Someone",
      className: "someone-photo team-member__photo-div",
      position: "Software Engineer",
      photo: "",
      email: "someone@colark.com",
      linkedin: ""
    }
  ];
  let team = teamMembers.map((member, index) => {
    return(
    <div className="team-member-div" key={ index }>
      <TeamMember data={ member } />
    </div>);
  });

  return(
    <div>
      <div className="team" id="team">
      <h2>Meet our team</h2>
        <div className="team-path">
            { team }
        </div>
      </div>
    </div>
  );
}

export default Team
