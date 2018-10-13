import teamMembersList from '../data/teamMembersList';

const resolvers = {
  Query: {
    team: () => teamMembersList,
    hello: (_, { name }) => `Hello ${name || 'World'}`,
  },
};

export default resolvers;
