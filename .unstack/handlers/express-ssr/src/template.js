export default (app, state, styleTags, apiEndpoint, bundlePath, componentHeaderFragment) => `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

      ${componentHeaderFragment}

      ${styleTags}

      <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet">

      <script>
        window.__isNew__ = true;
        window.__API_ENDPOINT__ = "${apiEndpoint}";
        window.__APOLLO_STATE__=${JSON.stringify(state).replace(/</g, '\\u003c')};
      </script>
    </head>
    <body>
        <div id="app">${app}</div>
        <script src="/bundle/${bundlePath}"></script>
    </body>
    </html>
`;
