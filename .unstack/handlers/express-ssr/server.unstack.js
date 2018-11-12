import server from './compiled-src/server';
import component from './compiled-component';
const fs = require('fs');

const HEADER_FRAGMENT = fs.readFileSync(process.env.HEADER_FRAGMENT_PATH, {
  encoding: 'utf-8'
});

server(component.app, {
  API_ENDPOINT: process.env.API_ENDPOINT,
  BUNDLE_PATH: process.env.BUNDLE_PATH,
  BUNDLE_DIRECTORY: process.env.BUNDLE_DIRECTORY,
  apolloLinks: component.options.apolloLinks,
  PUBLIC_DIRECTORY: process.env.PUBLIC_DIRECTORY,
  HEADER_FRAGMENT
});
