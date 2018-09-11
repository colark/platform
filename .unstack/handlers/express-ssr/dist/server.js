'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _httpProxy = require('http-proxy');

var _httpProxy2 = _interopRequireDefault(_httpProxy);

var _template = require('./template');

var _template2 = _interopRequireDefault(_template);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _apolloClient = require('apollo-client');

var _reactRouter = require('react-router');

var _apolloLinkHttp = require('apollo-link-http');

var _apolloCacheInmemory = require('apollo-cache-inmemory');

var _reactApollo = require('react-apollo');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('isomorphic-fetch');

exports.default = function (App, options) {
  var app = (0, _express2.default)();

  app.use('*', function (req, res) {
    var apolloClient = new _apolloClient.ApolloClient({
      ssrMode: true,
      link: (0, _apolloLinkHttp.createHttpLink)({
        uri: options.API_URL
      }),
      cache: new _apolloCacheInmemory.InMemoryCache()
    });

    var context = {};
    var RoutedApp = _react2.default.createElement(
      _reactRouter.StaticRouter,
      { location: req.originalUrl, context: context },
      _react2.default.createElement(_reactRouter.Route, {
        path: '/',
        render: function render(props) {
          return _react2.default.createElement(App, _extends({}, props, { client: apolloClient }));
        }
      })
    );

    (0, _reactApollo.renderToStringWithData)(RoutedApp).then(function (content) {
      var initialState = apolloClient.extract();

      res.status(200);
      res.send((0, _template2.default)(content, initialState));
      res.end();
    });

    var appString = _server2.default.renderToString(RoutedApp);
  });

  app.listen(3000, function (err) {
    console.log("Calling app.listen's callback function.");
    console.log(err);
  });
};