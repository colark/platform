import server from './server';

const wrapComponent = (component, context) => {
  return {
    start: () => {
      server(component.app, { API_URL: 'http://localhost:4000' });

    },
    deploy: () => {
      console.log('deploying express-ssr!!')
    }
  }
}


module.exports = {
  wrapComponent
}
