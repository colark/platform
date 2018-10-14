import React from 'react'
import TeamMember from '../team-member/team-member'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

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

  const TeamMembers = () => {
    return <Query query={TEAM}>
      {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;

          const teamMembers = data.team;
          return teamMembers.map((member, index) => {
            return(
              <div className="team-member-div" key={ index }>
                <TeamMember { ...member } />
              </div>);
          });
      }}
    </Query>
  }

  return(
    <div className="team-container">
      <h2 className="team__header section__header">Meet our team</h2>
      <div className="team" id="team">
            <TeamMembers/>
            <div className="team__accent-dot"></div>
      </div>
    </div>
  );
}

export default Team
