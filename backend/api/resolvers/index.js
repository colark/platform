import projectList from "../data/projectList.js";

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || 'World'}`,
    projectList: () => projectList,
  },
};

export default resolvers;