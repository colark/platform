
import React from 'react'
import Page from '../Page/index.js';
import "./Phase0.css";

 function PhaseZero(props) {
    const pageContent = [{
        title: "Phase Zero",
        logo: "https://res.cloudinary.com/colark/image/upload/v1535134495/Colark%20Marketing%20Site/Screen_Shot_2018-08-24_at_11.20.46_AM.png",
        website: "https://constellationlabs.io/",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet libero efficitur, semper neque quis, viverra quam. Morbi euismod sagittis eros a venenatis. Nunc vel nulla malesuada sapien eleifend euismod ac id mauris. Mauris vel pulvinar lacus. Maecenas orci quam, aliquam at enim in, consectetur varius lorem. Quisque hendrerit eleifend lectus non suscipit. Vestibulum imperdiet lacus vitae urna faucibus, quis luctus arcu pulvinar. Sed vel nulla dictum, efficitur nunc at, volutpat sem. Suspendisse viverra finibus risus, quis facilisis sem viverra eu. In convallis vel nibh vitae hendrerit. Nullam sollicitudin eu nibh quis sodales. Aliquam ac purus et velit accumsan maximus ut vitae lectus. Phasellus varius est et elit sollicitudin venenatis. Aliquam aliquam odio ligula, id pretium ligula lobortis et. Nulla facilisi."
      }
    ];
     let page = pageContent.map((content, index) => {
      return(
      <div className="page" id="page" key={ index }>
        <Page { ...content } />
      </div>);
    });
     return(
      <div className="page-container">
              { page }
      </div>
    );
  }
 export default PhaseZero;