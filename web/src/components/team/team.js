import React from 'react'
import TeamMember from '../team-member/team-member'
import gql from 'graphql-tag'
import { Apollo } from "react-apollo";


function Team(props) {

  const TEAM = gql`
  {
    team {
      name
      className
      position
      photo
      email
      linkedin
    }
  }`;

  let team = ({ Apollo }) => {
    return <Apollo.Query query={TEAM}>
      {({ loading, error, data }) => {
          if (loading) return (<div>Fetching</div>);
          if (error) return (<div>Error</div>);

          const teamMembers = data.team;
          console.log(teamMembers);
          return teamMembers.map((member, index) => {
            return(
              <div className="team-member-div" key={ index }>
                <TeamMember { ...member } />
              </div>);
          });
        }
      }
    </Apollo.Query>
  }

  return(
    <div className="team-container">
      <h2 className="team__header section__header">Meet our team</h2>
      <div className="team" id="team">
            { team }
            <div className="team__accent-dot"></div>
      </div>
    </div>
  );
}

export default Team
