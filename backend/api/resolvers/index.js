import navbarList from '../data/navbarList.js';

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || 'World'}`,
    navbarList: () => navbarList,
  },
};

export default resolvers;
