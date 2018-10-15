import navbarList from '../data/navbarList.js';
import partnerList from '../data/partnerList.js';
import projectList from "../data/projectList.js";
import teamMembersList from "../data/teamMembersList.js";

const resolvers = {
  Query: {
    team: () => teamMembersList,
    hello: (_, { name }) => `Hello ${name || 'World'}`,
    navbarList: () => navbarList,
    partnerList: () => partnerList,
    projectList: () => projectList
  },
};

export default resolvers;