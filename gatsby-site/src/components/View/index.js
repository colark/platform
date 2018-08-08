import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const View = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Hi, we're Colark.</h1>
        <p className="lead">We start, buy, and invest in wonderful internet businesses.</p>
        <hr className="my-2" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default View;