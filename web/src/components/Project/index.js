import React from 'react'
import styled from 'styled-components'

export default function Project(props) {

  const Title = styled.h2`
    color: ${props.color};
  `;

  const Blurb = styled.p`
    color: ${props.color};
  `;

  return(
      <a>
          <img src={props.icon} alt={props.name+" icon"} className="project__icon" />
          <Title className="project__title">{props.name}</Title>
          <Blurb className="project__blurb">This project is very important.</Blurb>
      </a>
  );
}
