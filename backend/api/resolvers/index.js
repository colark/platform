import projectList from "../data/projectList.js";
// import "../photos/phase_zero.jpeg";

const resolvers = {
  Query: {
    projectList: () =>
     projectList
  }
};

export default resolvers;