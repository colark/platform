import resolvers from './resolvers';

export default {
  makeConfig: (context) => ({
    typeDefs: './backend/api/schema.graphql',
    resolvers,
    context: (req) => ({
      ...req
    })
  })
}
