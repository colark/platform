import partnerList from '../data/partnerList.js';
import projectList from "../data/projectList.js";

const resolvers = {
  Query: {
    team: () => teamMembersList,
    hello: (_, { name }) => `Hello ${name || 'World'}`,
    partnerList: () => partnerList,
    projectList: () => projectList
  },
};

export default resolvers;