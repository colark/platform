import resolvers from './resolvers';
const { Prisma } = require('prisma-binding');



export default {
  makeConfig: (context) => ({
    typeDefs: './backend/api/schema.graphql',
    resolvers,
    context: (req) => ({
      ...req
    })
  })
}
