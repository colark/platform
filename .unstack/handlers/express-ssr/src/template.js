export default (app, state) => `
    <!DOCTYPE html>
    <html>
    <head>
        <title>test app</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" />
        <link rel="stylesheet" type="text/css" href="http://localhost:8081/app/main.css" />
        <script>
          window.__isNew__ = true;
          window.__APOLLO_STATE__=${JSON.stringify(state).replace(/</g, '\\u003c')};
        </script>
    </head>
    <body>
        <div id="app">${app}</div>
        <script src="http://localhost:8081/app/bundle.js"></script>
    </body>
    </html>
`
