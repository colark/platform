import React from 'react';
import PurpleWave from './BackgroundWave/PurpleWave/PurpleWave.js';
import BlueWave from './BackgroundWave/BlueWave/BlueWave.js';
import Iceberg from './BackgroundWave/Iceberg/index.js';

const Waves = (props) => {
  return (
    <div>
      <PurpleWave/>
      <BlueWave/>
      <Iceberg />
    </div>
  );
};

export default Waves;

