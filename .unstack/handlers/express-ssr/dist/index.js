'use strict';

var _server = require('./server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var wrapComponent = function wrapComponent(component, context) {
  return {
    start: function start() {
      (0, _server2.default)(component.app, { API_URL: 'http://localhost:4000' });
    },
    deploy: function deploy() {
      console.log('deploying express-ssr!!');
    }
  };
};

module.exports = {
  wrapComponent: wrapComponent
};