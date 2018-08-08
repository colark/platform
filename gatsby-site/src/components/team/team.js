import React from 'react'
import TeamMember from '../team-member/team-member'
import styles from "./team.css"


function Team(props) {
  const teamMembers = [{
      name: "Ellie Day",
      position: "Software Engineer",
      photo: "./ellie-photo.png",
      email: "ellie@colark.com",
      linkedin: "https://www.linkedin.com/in/ellie-day-a7761394/"
    },
    {
      name: "Olga Kuri",
      position: "Visual Designer/Illustrator",
      photo: "./olga-photo.png",
      email: "alina@colark.com",
      linkedin: "https://www.linkedin.com/in/kuriolga/"
    },
    {
      name: "Alina Lodahl",
      position: "Software Engineer",
      photo: "./alina-photo.png",
      email: "alina@colark.com",
      linkedin: "https://www.linkedin.com/in/alina-lodahl/"
    },
    {
      name: "Lian Thompson",
      position: "Software Engineer",
      photo: "./lian-photo.png",
      email: "lian@colark.com",
      linkedin: "https://www.linkedin.com/in/lianthompson/"
    }
  ];
  let team = teamMembers.map((member, index) => {
    return(
    <li key={ index }>
      <TeamMember data={ member } />
    </li>);
  });
  return(
    <div className="team">
      <h2>Colark Team</h2>
      <ul>
        { team }
      </ul>
    </div>
  );
}

export default Team
