import teamMembersList from '../data/teamMembersList';

const resolvers = {
  Query: {
    team: () => {
      return teamMembersList
    }
  },
};

export default resolvers;
