import server from './compiled-src/server';
import component from './compiled-component';
const fs = require('fs');
const path = require('path');

const HEADER_FRAGMENT = fs.readFileSync(process.env.HEADER_FRAGMENT_PATH, {
  encoding: 'utf-8'
});

server(component.app, {
  API_ENDPOINT: process.env.API_ENDPOINT,
  BUNDLE_DIRECTORY: process.env.BUNDLE_DIRECTORY,
  apolloLinks: component.options.apolloLinks,
  serverRoutes: component.options.serverRoutes,
  PUBLIC_DIRECTORY: process.env.PUBLIC_DIRECTORY,
  HEADER_FRAGMENT,
  ENTRY: require(`${path.resolve(process.cwd(), `./compiled-component/src/isomorphic-entry`)}`)
    .default
});
