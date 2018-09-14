import React from 'react';
import Route from 'react-router';


 export default function ProjectPage(props) {
     
    const routes = [
        {
          path: "/Phase0",
          component: "Phase0",
          pageContent: {
            title: "Phase Zero",
            logo: "https://res.cloudinary.com/colark/image/upload/v1535134495/Colark%20Marketing%20Site/Screen_Shot_2018-08-24_at_11.20.46_AM.png",
            website: "",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet libero efficitur, semper neque quis, viverra quam. Morbi euismod sagittis eros a venenatis. Nunc vel nulla malesuada sapien eleifend euismod ac id mauris. Mauris vel pulvinar lacus. Maecenas orci quam, aliquam at enim in, consectetur varius lorem. Quisque hendrerit eleifend lectus non suscipit. Vestibulum imperdiet lacus vitae urna faucibus, quis luctus arcu pulvinar. Sed vel nulla dictum, efficitur nunc at, volutpat sem. Suspendisse viverra finibus risus, quis facilisis sem viverra eu. In convallis vel nibh vitae hendrerit. Nullam sollicitudin eu nibh quis sodales. Aliquam ac purus et velit accumsan maximus ut vitae lectus. Phasellus varius est et elit sollicitudin venenatis. Aliquam aliquam odio ligula, id pretium ligula lobortis et. Nulla facilisi."
          }
        },
        {
          path: "/Unstack",
          component: "Unstack",
          pageContent: {
            title: "Unstack",
            logo: "https://res.cloudinary.com/colark/image/upload/v1535134495/Colark%20Marketing%20Site/Screen_Shot_2018-08-24_at_11.20.46_AM.png",
            website: "",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet libero efficitur, semper neque quis, viverra quam. Morbi euismod sagittis eros a venenatis. Nunc vel nulla malesuada sapien eleifend euismod ac id mauris. Mauris vel pulvinar lacus. Maecenas orci quam, aliquam at enim in, consectetur varius lorem. Quisque hendrerit eleifend lectus non suscipit. Vestibulum imperdiet lacus vitae urna faucibus, quis luctus arcu pulvinar. Sed vel nulla dictum, efficitur nunc at, volutpat sem. Suspendisse viverra finibus risus, quis facilisis sem viverra eu. In convallis vel nibh vitae hendrerit. Nullam sollicitudin eu nibh quis sodales. Aliquam ac purus et velit accumsan maximus ut vitae lectus. Phasellus varius est et elit sollicitudin venenatis. Aliquam aliquam odio ligula, id pretium ligula lobortis et. Nulla facilisi."
          }
        }
    ];

    const Projects = routes.map((route, i) => <RouteWithSubRoutes key={i} {...route.pageContent} />);

    const RouteWithSubRoutes = route => (
        <Route
            path={route.path}
            render={props => (
            // pass the sub-routes down to keep nesting
            <Page {...props} />
            )}
        />
        );

        return RouteWithSubRoutes;
}

// const Phase0 = () => <h3>Phase Zero</h3>;
// const Unstack = () => <h3>Unstack</h3>;

////////////////////////////////////////////////////////////
// // then our route config
// const routes = [
//     {
//       path: "/Projects",
//       component: Projects,
//       routes: [
//         {
//           path: "/Projects/Phase0",
//           component: Phase0
//         },
//         {
//           path: "/Projects/Unstack",
//           component: Unstack
//         }
//       ]
//     }
//   ];
  
  // wrap <Route> and use this everywhere instead, then when
  // sub routes are added to any route it'll work
  // const RouteWithSubRoutes = route => (
  //   <Route
  //     path={route.path}
  //     render={props => (
  //       // pass the sub-routes down to keep nesting
  //       <route.component {...props} routes={route.routes} />
  //     )}
  //   />
  
  
