const colarkLogo = "https://res.cloudinary.com/colark/image/upload/v1534549673/Colark%20Marketing%20Site/colark-logo.png";
const colarkIcon = "https://res.cloudinary.com/colark/image/upload/v1534806347/Colark%20Marketing%20Site/favicon.png?v2";

export default (app, state) => `
    <!DOCTYPE html>
    <html>
    <head>
        <title>test app</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" />

        <meta property="og:title" content="Colark Inc" />
        <meta property="og:url" content="colark.com" />
        <meta property="og:image" content=${colarkLogo} />
        <meta property="og:site_name" content="colark.com" />
        <meta property="og:description" content="scalable, distraction-free tech" />
        <meta property="og:email" content="ellie@colark.com" />

        <meta property="fb:page_id" content="544658099320008" />
        <meta property="fb:admins" content="@ColarkHQ" />

        <meta name="twitter:title" content="Colark Inc" />
        <meta name="twitter:description" content="scalable, distraction-free tech" />
        <meta name="twitter:image" content=${colarkLogo} />
        <meta name="twitter:image:alt" content="Colark Logo" />
        <meta name="twitter:card" content="@ColarkHQ" />
        <meta name="twitter:card" content="@ColarkHQ" />

        <meta itemprop="name" content="Colark Inc" />
        <meta itemprop="description" content="scalable, distraction-free tech" />
        <meta itemprop="image" content=${colarkLogo} />

        <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Mukta+Malar:400,600,700" />
        <link rel="stylesheet" type="text/css" href="http://localhost:3000/main.css" />
        <link rel="icon" type="image/png" href=${colarkIcon} />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script>
          window.__isNew__ = true;
          window.__APOLLO_STATE__=${JSON.stringify(state).replace(/</g, '\\u003c')};
        </script>
    </head>
    <body>
        <div id="app">${app}</div>
        <script src="http://localhost:3000/bundle/dist/entry.unstack.js"></script>
    </body>
    </html>
`
