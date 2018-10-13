import partnerList from '../data/partnerList.js';

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || 'World'}`,
    partnerList: () => partnerList,
  },
};

export default resolvers;
