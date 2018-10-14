import projectList from "../data/projectList.js";

const resolvers = {
  Query: {
    team: () => teamMembersList,
    hello: (_, { name }) => `Hello ${name || 'World'}`,
    projectList: () => projectList,
  },
};

export default resolvers;