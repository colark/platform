import React from 'react';
import Link from 'gatsby-link';
import "./ProjectInfo.css";

 export default function ProjectInfo(props) {
   const unstackContent = {
       title: "Unstack",
       photo: "https://res.cloudinary.com/colark/image/upload/v1534365346/Colark%20Marketing%20Site/Unstack.png",
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet libero efficitur, semper neque quis, viverra quam. Morbi euismod sagittis eros a venenatis. Nunc vel nulla malesuada sapien eleifend euismod ac id mauris. Mauris vel pulvinar lacus. Maecenas orci quam, aliquam at enim in, consectetur varius lorem. Quisque hendrerit eleifend lectus non suscipit. Vestibulum imperdiet lacus vitae urna faucibus, quis luctus arcu pulvinar. Sed vel nulla dictum, efficitur nunc at, volutpat sem. Suspendisse viverra finibus risus, quis facilisis sem viverra eu. In convallis vel nibh vitae hendrerit. Nullam sollicitudin eu nibh quis sodales. Aliquam ac purus et velit accumsan maximus ut vitae lectus. Phasellus varius est et elit sollicitudin venenatis. Aliquam aliquam odio ligula, id pretium ligula lobortis et. Nulla facilisi."
    };
   const phaseZeroContent = {
       title: "Phase Zero",
       photo: "https://res.cloudinary.com/colark/image/upload/v1534454636/Colark%20Marketing%20Site/Colark_Marketing_Site_PhaseZeroEdited.png",
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet libero efficitur, semper neque quis, viverra quam. Morbi euismod sagittis eros a venenatis. Nunc vel nulla malesuada sapien eleifend euismod ac id mauris. Mauris vel pulvinar lacus. Maecenas orci quam, aliquam at enim in, consectetur varius lorem. Quisque hendrerit eleifend lectus non suscipit. Vestibulum imperdiet lacus vitae urna faucibus, quis luctus arcu pulvinar. Sed vel nulla dictum, efficitur nunc at, volutpat sem. Suspendisse viverra finibus risus, quis facilisis sem viverra eu. In convallis vel nibh vitae hendrerit. Nullam sollicitudin eu nibh quis sodales. Aliquam ac purus et velit accumsan maximus ut vitae lectus. Phasellus varius est et elit sollicitudin venenatis. Aliquam aliquam odio ligula, id pretium ligula lobortis et. Nulla facilisi."
    };

    if (props.project === "unstack") {
      props = unstackContent;
    } else if (props.project === "phase0") {
      props = phaseZeroContent;
    }

    return(
        <div className="project-info-container">
            <h1 className="project-info_title">{props.title}</h1>
            <a href={props.website} target="__blank">
                <img src={props.photo} className="project-info-photo" />
            </a>
            <div className="project-info-description">
                {props.description}
            </div>
        </div>
    );
  }
