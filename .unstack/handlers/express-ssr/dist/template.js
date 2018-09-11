'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (app, state) {
    return '\n    <!DOCTYPE html>\n    <html>\n    <head>\n        <title>test app</title>\n        <meta charset="utf-8">\n        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" />\n        <link rel="stylesheet" type="text/css" href="http://localhost:8081/app/main.css" />\n        <script>\n          window.__isNew__ = true;\n          window.__APOLLO_STATE__=' + JSON.stringify(state).replace(/</g, '\\u003c') + ';\n        </script>\n    </head>\n    <body>\n        <div id="app">' + app + '</div>\n        <script src="http://localhost:8081/app/bundle.js"></script>\n    </body>\n    </html>\n';
};