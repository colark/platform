import { GraphQLServer } from 'graphql-yoga';
import component from './compiled-component';

const wrapped = ({ makeConfig }, context) => {
  const server = new GraphQLServer(makeConfig(context));
  server.start(() => console.log('Server is running on localhost:4000'));
};

const context = {};

//const context JSON.parse("{{contextString}}")

wrapped(component, context);
